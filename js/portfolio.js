$(document).ready(
    function () {
        //hides hidden text unless hovered over
        $('.hoverArea').hover(
            function () {
                $(this).find('> .hidden').fadeIn(function () {
                    $(this).children(".clickArea").children(".hidden").css("display", "none");
                });
            },
            function () {
                $(this).find('> .hidden').fadeOut();
            }
        );
        //hides hidden text unless clicked on
        $('.spoiler').click(
            function () {
                if ($(this).parent().find('> .hidden')[0].style.display === "none") {
                    $(this).parent().find('> .hidden').fadeIn();
                } else {
                    $(this).parent().find('> .hidden').fadeOut();
                }
            });
        //triggers popout
        $('.entry').click(
            function () {
                $(this).find('>.popout').fadeIn(function () {
                    $(document).click(function (event) {
                        if (!$(event.target).closest(".popoutBox,.preview").length) {
                            $("body").find(".popout").fadeOut();
                        }
                    });
                });
            }
        );
    }
);