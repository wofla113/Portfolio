$(".side-bar").on({
    mouseenter: function(){
        $(this).addClass("sideBarOpen");
        $(".side-bar__btn span").removeClass("hidden");
        $(".side-bar__btn").addClass("btnRow");
        $(".side-bar__btn span").addClass("btnMargin");
        $(".side-bar__btn img").addClass("borderNone");
    },
    mouseleave: function(){
        $(this).removeClass("sideBarOpen");
        $(".side-bar__btn span").addClass("hidden");
        $(".side-bar__btn").removeClass("btnRow");
        $(".side-bar__btn img").removeClass("borderNone");
    }
});