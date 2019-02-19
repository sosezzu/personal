$(document).ready(function () {
    //allows user click of button rather than just link text
    $(".link").click(function () {
        window.location = $(this).find("a").attr("href");
        return false;
    });
    //toggles hidden on click
    $(".spoiler").click(function () {
        $(this).find("> .hidden").toggle();
        $(this).find("> .hidden1").toggle();
    });
});