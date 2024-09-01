$(document).ready(function () {

    $("#input-submit").click(function (e) { 
        e.preventDefault();
        if($("#input-text").html() === "") {
            // $("#input-submit").css("opacity", "50%");
        }
    });

    let theme = localStorage.getItem("theme") || "light-body";

    if(theme === "dark-body"){
        $("body").addClass("dark-body");
        $(".switch-name").html("Light");
    } else {
        $("body").removeClass("dark-body");
        $(".switch-name").html("Dark");
    }

    $(".header-switch").click(function (e) { 
        e.preventDefault();

        $("body").toggleClass("dark-body");

        if($("body").hasClass("dark-body")) {
            theme = "dark-body";
            $(".switch-name").html("Light");
        } else {
            theme = "light-body";
            $(".switch-name").html("Dark");
        }

        localStorage.setItem("theme", theme);
    });

});