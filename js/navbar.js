
$(function () {
    //allows user click of button rather than just link text
    $(".nav").click(function () {
        window.location = $(this).find("a").attr("href");
        return false;
    });
});

