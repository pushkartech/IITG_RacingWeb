$(document).ready(function() {
    $("#hamburger").click(function() {
        $(this).toggleClass('is-active');
        $("#navmenu").toggle("slide");
        if($(this).hasClass('is-active')) {
            $("html").css("overflow-y", "hidden");
        }
        if(!$(this).hasClass('is-active')) {
            $("html").css("overflow-y", "auto");
        }
        if(!$("#carsmenu").hasClass('hidden')) {
            $("#backToMainFromCars").click();
        }
        if(!$("#competitionsmenu").hasClass('hidden')) {
            $("#backToMainFromComp").click();
        }
        if(!$("#teamsmenu").hasClass('hidden')) {
            $("#backToMainFromTeam").click();
        }
        $("#hiddenarea").toggleClass('hidden');
        $("#head-title").toggleClass('hidden');
        $("#head-down").toggleClass('hidden');
        $("#head-back").toggleClass('hidden');
        $("#actual-text").toggleClass('hidden');
    });

    $("#carsBtn, #backToMainFromCars").click(function() {
        $("#navmenu").toggle("slide");
        $("#carsmenu").toggleClass('hidden');
        if(!$("#effiAccoDiv").hasClass('hidden')) {
            $("#effiAccoDiv").toggleClass('hidden');
        }
        if(!$("#bajaAccoDiv").hasClass('hidden')) {
            $("#bajaAccoDiv").toggleClass('hidden');
        }
        if(!$("#conceptAccoDiv").hasClass('hidden')) {
            $("#conceptAccoDiv").toggleClass('hidden');
        }
        if(!$("#studentAccoDiv").hasClass('hidden')) {
            $("#studentAccoDiv").toggleClass('hidden');
        }
        if(!$("#effiAccoDiv").hasClass('hid')) {
            $("#btn2").removeAttr("disabled");
            $("#btn2").click();
            $("#btn2").attr("disabled", "disabled");
            $("#effiAccoDiv").toggleClass('hid');
            $("#effiAccoDiv").slideToggle();
        }
        if(!$("#bajaAccoDiv").hasClass('hid')) {
            $("#btn3").removeAttr("disabled");
            $("#btn3").click();
            $("#btn3").attr("disabled", "disabled");
            $("#bajaAccoDiv").toggleClass('hid');
            $("#bajaAccoDiv").slideToggle();
        }
        if(!$("#conceptAccoDiv").hasClass('hid')) {
            $("#btn4").removeAttr("disabled");
            $("#btn4").click();
            $("#btn4").attr("disabled", "disabled");
            $("#conceptAccoDiv").toggleClass('hid');
            $("#conceptAccoDiv").slideToggle();
        }
        if(!$("#studentAccoDiv").hasClass('hid')) {
            $("#btn1").removeAttr("disabled");
            $("#btn1").click();
            $("#btn1").attr("disabled", "disabled");
            $("#studentAccoDiv").toggleClass('hid');
            $("#studentAccoDiv").slideToggle();
        }
    });

    $("#competitionsBtn, #backToMainFromComp").click(function() {
        $("#navmenu").toggle("slide");
        $("#competitionsmenu").toggleClass('hidden');
    });

    $("#teamsBtn, #backToMainFromTeam").click(function() {
        $("#navmenu").toggle("slide");
        $("#teamsmenu").toggleClass('hidden');
    });

    $("#studentAccoBtn").click(function() {
        if(!$("#effiAccoDiv").hasClass('hid')) {
            $("#btn2").removeAttr("disabled");
            $("#btn2").click();
            $("#btn2").attr("disabled", "disabled");
            $("#effiAccoDiv").toggleClass('hid');
            $("#effiAccoDiv").slideToggle();
        }
        if(!$("#bajaAccoDiv").hasClass('hid')) {
            $("#btn3").removeAttr("disabled");
            $("#btn3").click();
            $("#btn3").attr("disabled", "disabled");
            $("#bajaAccoDiv").toggleClass('hid');
            $("#bajaAccoDiv").slideToggle();
        }
        if(!$("#conceptAccoDiv").hasClass('hid')) {
            $("#btn4").removeAttr("disabled");
            $("#btn4").click();
            $("#btn4").attr("disabled", "disabled");
            $("#conceptAccoDiv").toggleClass('hid');
            $("#conceptAccoDiv").slideToggle();
        }
        $("#studentAccoDiv").toggleClass('hid');
        $("#studentAccoDiv").slideToggle();
        $("#btn1").removeAttr("disabled");
        $("#btn1").click();
        $("#btn1").attr("disabled", "disabled");
    });
    $("#effiAccoBtn").click(function() {
        if(!$("#studentAccoDiv").hasClass('hid')) {
            $("#btn1").removeAttr("disabled");
            $("#btn1").click();
            $("#btn1").attr("disabled", "disabled");
            $("#studentAccoDiv").toggleClass('hid');
            $("#studentAccoDiv").slideToggle();
        }
        if(!$("#bajaAccoDiv").hasClass('hid')) {
            $("#btn3").removeAttr("disabled");
            $("#btn3").click();
            $("#btn3").attr("disabled", "disabled");
            $("#bajaAccoDiv").toggleClass('hid');
            $("#bajaAccoDiv").slideToggle();
        }
        if(!$("#conceptAccoDiv").hasClass('hid')) {
            $("#btn4").removeAttr("disabled");
            $("#btn4").click();
            $("#btn4").attr("disabled", "disabled");
            $("#conceptAccoDiv").toggleClass('hid');
            $("#conceptAccoDiv").slideToggle();
        }
        $("#effiAccoDiv").toggleClass('hid');
        $("#effiAccoDiv").slideToggle();    
        $("#btn2").removeAttr("disabled");
        $("#btn2").click();
        $("#btn2").attr("disabled", "disabled");
    });
    $("#bajaAccoBtn").click(function() {
        if(!$("#studentAccoDiv").hasClass('hid')) {
            $("#btn1").removeAttr("disabled");
            $("#btn1").click();
            $("#btn1").attr("disabled", "disabled");
            $("#studentAccoDiv").toggleClass('hid');
            $("#studentAccoDiv").slideToggle();
        } 
        if(!$("#effiAccoDiv").hasClass('hid')) {
            $("#btn2").removeAttr("disabled");
            $("#btn2").click();
            $("#btn2").attr("disabled", "disabled");
            $("#effiAccoDiv").toggleClass('hid');
            $("#effiAccoDiv").slideToggle();
        }
        if(!$("#conceptAccoDiv").hasClass('hid')) {
            $("#btn4").removeAttr("disabled");
            $("#btn4").click();
            $("#btn4").attr("disabled", "disabled");
            $("#conceptAccoDiv").toggleClass('hid');
            $("#conceptAccoDiv").slideToggle();
        }
        $("#bajaAccoDiv").toggleClass('hid');
        $("#bajaAccoDiv").slideToggle();
        $("#btn3").removeAttr("disabled");
        $("#btn3").click();
        $("#btn3").attr("disabled", "disabled");
    });
    $("#conceptAccoBtn").click(function() {
        if(!$("#studentAccoDiv").hasClass('hid')) {
            $("#btn1").removeAttr("disabled");
            $("#btn1").click();
            $("#btn1").attr("disabled", "disabled");
            $("#studentAccoDiv").toggleClass('hid');
            $("#studentAccoDiv").slideToggle();
        } 
        if(!$("#effiAccoDiv").hasClass('hid')) {
            $("#btn2").removeAttr("disabled");
            $("#btn2").click();
            $("#btn2").attr("disabled", "disabled");
            $("#effiAccoDiv").toggleClass('hid');
            $("#effiAccoDiv").slideToggle();
        }
        if(!$("#bajaAccoDiv").hasClass('hid')) {
            $("#btn3").removeAttr("disabled");
            $("#btn3").click();
            $("#btn3").attr("disabled", "disabled");
            $("#bajaAccoDiv").toggleClass('hid');
            $("#bajaAccoDiv").slideToggle();
        }
        $("#conceptAccoDiv").toggleClass('hid');
        $("#conceptAccoDiv").slideToggle();
        $("#btn4").removeAttr("disabled");
        $("#btn4").click(); 
        $("#btn4").attr("disabled", "disabled");
    });
})