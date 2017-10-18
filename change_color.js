$(document).ready(function(){
    $("div").click(function(){
        $("p").css("color", "blue");
    });
    $("p").click(function(){
        $(this).hide();
    });
});
