$(document).ready(function() {
    // All of that is terrible and needs to be rewritten
    // Temporary fix

    // School part
    var schoolsCounter = 0;
    $(".b-addclasses-form__school").focus();
    $(".b-addclasses-form__btn--next").on("click", function(){
        var $this = $(this),
            currentStep = $this.parent().parent().parent(),
            nextStep = $this.parent().parent().parent().next(),
            animating;
        if($this.hasClass('b-addclasses-form__btn--active')){
            if(animating) return false;
            animating = true;
            $(".b-addclasses-form__progress-item").eq($(".b-addclasses-form__fieldset").index(nextStep)).addClass("b-addclasses-form__progress-item--active");
            currentStep.hide();
            nextStep.show();
            $(".b-addclasses-form__major").focus();
        }    
        return false;
    });
                $(".b-addclasses-form__btn--prev").on("click", function(){
                    var $this = $(this),
                        currentStep = $this.parent().parent().parent(),
                        prevStep = $this.parent().parent().parent().prev(),
                        animating;
                    if(animating) return false;
                    animating = true;    
                    $(".b-addclasses-form__progress-item").eq($(".b-addclasses-form__fieldset").index(currentStep)).removeClass("b-addclasses-form__progress-item--active");
                    currentStep.hide();
                    prevStep.show();
                    return false;
                });
    $("ul.b-school-list").on("click", ".b-school-list__item-btn", function(){
        var $this = $(this),
            parent = $this.parent(),
            schoolName = parent.children("h3.b-school-list__item-title").html();
        parent.remove();
        $('.b-addclasses-form__ur-school-title').after('<div class="b-urschool-item"><p class="b-urschool-item__name">' + schoolName + "</p>" + '<a href="#" class="b-urschool-item__rmv-link"><img class="b-urschool-item__rmv-img" src="assets/images/ico/x-mark-icon.svg" alt="remove school image"></a></div>');
        $('.b-addclasses-form__fieldset--add-schools').find('.b-addclasses-form__btn--next').addClass('b-addclasses-form__btn--active');
        schoolsCounter++;
        return false;
    });
                
    $(".b-addclasses-form__input-group").on("click", ".b-urschool-item__rmv-link", function(){
        var $this = $(this),
            parent = $this.parent(),
            schoolName = parent.children("p.b-urschool-item__name").html(),
            nextButton = $('.b-addclasses-form__fieldset--add-schools').find('button.b-addclasses-form__btn--next');
        parent.remove();
        $("ul.b-school-list").append('<li class="b-school-list__item"><img class="b-school-list__item-img" src="http://placehold.it/50x50" alt=""><!-- --><h3 class="b-school-list__item-title">' + schoolName + '</h3><button type="submit" class="b-school-list__item-btn">Add</button></li>');
        schoolsCounter--;
        if(schoolsCounter === 0){
            if(nextButton.hasClass('b-addclasses-form__btn--active')){
                nextButton.removeClass('b-addclasses-form__btn--active');
            }
        }    
        return false;
    });

    // Majors part
    var majorsCounter = 0;
    $("ul.b-major-list").on("click", ".b-major-list__item-btn", function(){
        var $this = $(this),
            parent = $this.parent(),
            majorName = parent.children("h3.b-major-list__item-title").html();
        parent.remove();
        $('.b-addclasses-form__major-title').after('<div class="b-urmajor-item"><p class="b-urmajor-item__name">' + majorName + "</p>" + '<a href="#" class="b-urmajor-item__rmv-link"><img class="b-urmajor-item__rmv-img" src="assets/images/ico/x-mark-icon.svg" alt="remove school image"></a></div>');
        $('.b-addclasses-form__fieldset--add-major').find('.b-addclasses-form__btn--next')
            .addClass('b-addclasses-form__btn--active');
        majorsCounter++;
        return false;
    });
                
    $(".b-addclasses-form__input-group").on("click", ".b-urmajor-item__rmv-link", function(){
        var $this = $(this),
            parent = $this.parent(),
            schoolName = parent.children("p.b-urmajor-item__name").html(),
            nextButton = $('.b-addclasses-form__fieldset--add-major').find('button.b-addclasses-form__btn--next');
        parent.remove();
        $("ul.b-major-list").append('<li class="b-major-list__item"><h3 class="b-major-list__item-title">' + schoolName + '</h3> <button type="submit" class="b-major-list__item-btn">Add</button></li>');
        majorsCounter--;
        if(majorsCounter === 0){
            if(nextButton.hasClass('b-addclasses-form__btn--active')){
                nextButton.removeClass('b-addclasses-form__btn--active');
            }
        }    
        return false;
    });

});   