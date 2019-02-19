$(document).ready(function () {
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
        $(this).parent().find('> .hidden').fadeIn(function () {
          $(this).children(".clickArea").children(".hidden").css("display", "none");
        });
      } else {
        $(this).parent().find('> .hidden').fadeOut();
      }
    });
  //allows user click of button rather than just link text
  $(".button").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
  });
});