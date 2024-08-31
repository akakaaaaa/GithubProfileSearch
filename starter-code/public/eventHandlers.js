$(document).ready(function () {
    $(".header-switch").click(function (e) { 
        e.preventDefault();
        $("body").toggleClass("dark-body");
        if(!($("body").hasClass("dark-body"))) {
            $(".switch-name").html("Dark");
            // $(".search-bar-img").attr("src ", "../public/assets/icon-moon.svg");
        } else {
            $(".switch-name").html("Light");
            // $(".search-bar-img").attr("src ", "../public/assets/icon-sun.svg");
        }
    });
});