$(document).ready(function(){
    $("div").click(function(){
        val color = this.background;
        $("p").css("color", color);
    });
});
