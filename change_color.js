$(document).ready(function(){
    $("blue").click(function(){
          $("h1").css("color", "blue");
     });
    $("green").click(function(){
          $("h1").css("color", "lime");
     });
    $("red").click(function(){
         $("h1").animate({"color", "red"}, 1000);
    });
});
