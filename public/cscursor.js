
$("a").mouseover(function() {
    $(".cursor-follower").css("width", "50px");
    $(".cursor-follower").css("height", "50px");
    $(".cursor-follower").css("transform", "translate(-6px, -6px)");
    $(".cursor-follower").css("border-width", "5px");
});
$("a").mouseout(function() {
    $(".cursor-follower").css("width", "30px");
    $(".cursor-follower").css("height", "30px");
    $(".cursor-follower").css("transform", "translate(2px, 2px)");
    $(".cursor-follower").css("border-width", "2.5px");
});