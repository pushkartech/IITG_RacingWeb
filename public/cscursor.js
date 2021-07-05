
$("a, #carshover, #formulaHover, #effiHover, #bajaHover, #conceptHover, #knowhref, #competitionshover, #teamhover").mouseover(function() {
    $(".cursor-follower").css("width", "50px");
    $(".cursor-follower").css("height", "50px");
    $(".cursor-follower").css("transform", "translate(-6px, -6px)");
    $(".cursor-follower").css("border-width", "2.5px");
});
$("a, #carshover, #formulaHover, #effiHover, #bajaHover, #conceptHover, #knowhref, #competitionshover, #teamhover").mouseout(function() {
    $(".cursor-follower").css("width", "30px");
    $(".cursor-follower").css("height", "30px");
    $(".cursor-follower").css("transform", "translate(2px, 2px)");
    $(".cursor-follower").css("border-width", "2.5px");
});
