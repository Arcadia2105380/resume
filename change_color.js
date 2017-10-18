$(document).ready(function(){
    $("div").click(function(){
        val color = this.background;
        $("h1").css("color", color);
    });
    $("p").click(function(){
        $(this).hide();
    });
});
