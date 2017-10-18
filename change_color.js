$(document).ready(function(){
    $("div").click(function(){
        val color = this.background;
        $("h1").css("color", color);
    });
    $("green").click(function(){
          $("p").css("color", "green");
     });
     $("red").click(function(){
         $("p").css("color", "red");
     });
    $("p").click(function(){
        $(this).hide();
    });
});
