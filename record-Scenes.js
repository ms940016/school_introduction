$(function() 
{
   $("#tabs-nav a").click(function() {
      $("#tabs-nav a").removeClass("tabs-active");
      $(this).addClass("tabs-active");
      $(".tabs-panel").hide();
      var tab_id = $(this).attr("href");
      $(tab_id).fadeIn();
      return false;
    });
});
