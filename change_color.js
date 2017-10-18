$(document).ready(function(){
    $("div").click(function(){
        $("p").css("color", "blue");
        $("p").hide();
    });
    $("p").click(function(){
        $(this).hide();
    });
});
