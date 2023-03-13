$(".contact-div").on({
    mouseenter: function(){
        $(".contact-icons__link").addClass("contactHover");
    },
    mouseleave: function(){
        $(".contact-icons__link").removeClass("contactHover");
    }
});
