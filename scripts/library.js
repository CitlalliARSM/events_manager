
/*HEADER CHANGE STATE*/
function headerState(toAddStateScroll,varPixels) {
    varPixels = varPixels || 80;
    if (toAddStateScroll.length > 0) {
        if ($(window).scrollTop() > varPixels) {
            toAddStateScroll.addClass("navi_scrolled");
            if ($('.jsBody').length > 0) {
                $('.jsBody').addClass("navi_scrolled");
            }
        }
        else {
            toAddStateScroll.removeClass("navi_scrolled");
            if ($('.jsBody').length > 0 ) {
                $('.jsBody').removeClass("navi_scrolled");
            }
        }
    }
}
/*add an active class to given element*/
function openRelatedContainer(elemTrigger, toActive, activeClass) {
    activeClass = activeClass || "is_active";
    if (!elemTrigger.hasClass(activeClass)) {
        elemTrigger.addClass(activeClass);
        if (toActive.length > 0) {
            toActive.addClass(activeClass);
        }
    } else {
        elemTrigger.removeClass(activeClass);
        if (toActive.length > 0) {
            toActive.removeClass(activeClass);
        }
    }
}

/*tb Accordion: addAccordeonFunctionality */
function addAccordeonFunctionality(sSelector) {
    $(sSelector).click(function () {
        var bIsOpen = $(this).hasClass('acc_open');
        if (bIsOpen) {
            //schliessen
            $(this).removeClass('acc_open').siblings('.jsAccContent').stop().animate({
                height: 0
            }, 350);
        } else {
            //oeffnen
            //zuerst Hoehe ermitteln
            var Contentcontainer = $(this).siblings('.jsAccContent');
            var iAktHeight = $(Contentcontainer).height();
            var iHeightOfElement = $(Contentcontainer).css({ 'height': 'auto' }).height();
            $(Contentcontainer).height(iAktHeight);

            $(this).addClass('acc_open').siblings('.jsAccContent').stop().animate({
                height: iHeightOfElement
            }, 350, function () {
                $(this).height('auto');
            });

        }
    });
}

/* freeze body position to avoid scrolling on light box layouts */
function freezeBody() {
    var actualBodyPos;
    if (!$(".jsBody").hasClass("scrollfixed")) {
        actualBodyPos = $(document).scrollTop();
        $(".jsBody").addClass("scrollfixed");
        $(".jsBody").css("top", -actualBodyPos + "px");
    } else {
        actualBodyPos = -1 * ($(".jsBody").position().top);
        setTimeout(function () {
            $(".jsBody").removeClass("scrollfixed");
            $(".jsBody").css("top", "auto");
            $(document).scrollTop(actualBodyPos);
        }, 401);
    }
}

/*  Scroll to given section */
function scrollToSection(targetScroll) {
    $('body,html').animate({
        scrollTop: targetScroll.offset().top
    }, 300);
}
