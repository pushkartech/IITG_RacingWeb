$(document).ready(function() {
    // -----------------lvl 1 hover-------------------
    $("#teamhover, #teamsMenu").mouseover(function() {
        $("#compMenu").mouseout();
        $("#carsMenu").mouseout();
        if($("#teamsMenu").hasClass('hidden')) {
            $("#teamsMenu").toggleClass('hidden');
        }
        if(!$("#formulaOptions").hasClass('hidden')) {
            $("#formulaOptions").toggleClass('hidden');
        }
        if(!$("#effiOptions").hasClass('hidden')) {
            $("#effiOptions").toggleClass('hidden');
        }
        if(!$("#bajaOptions").hasClass('hidden')) {
            $("#bajaOptions").toggleClass('hidden');
        }
        if(!$("#conceptOptions").hasClass('hidden')) {
            $("#conceptOptions").toggleClass('hidden');
        }
        if(!$("#conceptACar").hasClass('hidden')) {
            $("#conceptACar").toggleClass('hidden');
        }
        if(!$("#visionfCar").hasClass('hidden')) {
            $("#visionfCar").toggleClass('hidden');
        }
        if(!$("#srijanCar").hasClass('hidden')) {
            $("#srijanCar").toggleClass('hidden');
        }
        if(!$("#effi1Car").hasClass('hidden')) {
            $("#effi1Car").toggleClass('hidden');
        }
        if(!$("#effi2Car").hasClass('hidden')) {
            $("#effi2Car").toggleClass('hidden');
        }
        if(!$("#effi3Car").hasClass('hidden')) {
            $("#effi3Car").toggleClass('hidden');
        }
        if(!$("#effi4Car").hasClass('hidden')) {
            $("#effi4Car").toggleClass('hidden');
        }
        if(!$("#tachyon1Car").hasClass('hidden')) {
            $("#tachyon1Car").toggleClass('hidden');
        }
        if(!$("#tachyon2Car").hasClass('hidden')) {
            $("#tachyon2Car").toggleClass('hidden');
        }
        if(!$("#tachyon3Car").hasClass('hidden')) {
            $("#tachyon3Car").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if(!$("#originCar").hasClass('hidden')) {
            $("#originCar").toggleClass('hidden');
        }
    });
    $("#teamsMenu").mouseout(function() {
    if(!$("#teamsMenu").hasClass('hidden')) {
        $("#teamsMenu").toggleClass('hidden');
    }
    });
    $("#competitionshover, #compMenu").mouseover(function() {
        $("#teamsMenu").mouseout();
        $("#carsMenu").mouseout();
        if($("#compMenu").hasClass('hidden')) {
            $("#compMenu").toggleClass('hidden');
        }
        if(!$("#formulaOptions").hasClass('hidden')) {
            $("#formulaOptions").toggleClass('hidden');
        }
        if(!$("#effiOptions").hasClass('hidden')) {
            $("#effiOptions").toggleClass('hidden');
        }
        if(!$("#bajaOptions").hasClass('hidden')) {
            $("#bajaOptions").toggleClass('hidden');
        }
        if(!$("#conceptOptions").hasClass('hidden')) {
            $("#conceptOptions").toggleClass('hidden');
        }
        if(!$("#conceptACar").hasClass('hidden')) {
            $("#conceptACar").toggleClass('hidden');
        }
        if(!$("#visionfCar").hasClass('hidden')) {
            $("#visionfCar").toggleClass('hidden');
        }
        if(!$("#srijanCar").hasClass('hidden')) {
            $("#srijanCar").toggleClass('hidden');
        }
        if(!$("#effi1Car").hasClass('hidden')) {
            $("#effi1Car").toggleClass('hidden');
        }
        if(!$("#effi2Car").hasClass('hidden')) {
            $("#effi2Car").toggleClass('hidden');
        }
        if(!$("#effi3Car").hasClass('hidden')) {
            $("#effi3Car").toggleClass('hidden');
        }
        if(!$("#effi4Car").hasClass('hidden')) {
            $("#effi4Car").toggleClass('hidden');
        }
        if(!$("#tachyon1Car").hasClass('hidden')) {
            $("#tachyon1Car").toggleClass('hidden');
        }
        if(!$("#tachyon2Car").hasClass('hidden')) {
            $("#tachyon2Car").toggleClass('hidden');
        }
        if(!$("#tachyon3Car").hasClass('hidden')) {
            $("#tachyon3Car").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if(!$("#originCar").hasClass('hidden')) {
            $("#originCar").toggleClass('hidden');
        }
    });
    $("#compMenu").mouseout(function() {
        if(!$("#compMenu").hasClass('hidden')) {
            $("#compMenu").toggleClass('hidden');
        }
    });
    $("#carshover, #carsMenu").mouseover(function() {
        $("#teamsMenu").mouseout();
        $("#compMenu").mouseout();
        if($("#carsMenu").hasClass('hidden')) {
            $("#carsMenu").toggleClass('hidden');
        }
    });
    $("#carsMenu").mouseout(function() {
        if(!$("#carsMenu").hasClass('hidden')) {
            $("#carsMenu").toggleClass('hidden');
        }
    });
    $("#newshover, #contacthover, #sponsorshover, #logo").mouseover(function() {
        $("#compMenu").mouseout();
        $("#carsMenu").mouseout();
        $("#teamsMenu").mouseout();
        if(!$("#formulaOptions").hasClass('hidden')) {
            $("#formulaOptions").toggleClass('hidden');
        }
        if(!$("#effiOptions").hasClass('hidden')) {
            $("#effiOptions").toggleClass('hidden');
        }
        if(!$("#bajaOptions").hasClass('hidden')) {
            $("#bajaOptions").toggleClass('hidden');
        }
        if(!$("#conceptOptions").hasClass('hidden')) {
            $("#conceptOptions").toggleClass('hidden');
        }
        if(!$("#conceptACar").hasClass('hidden')) {
            $("#conceptACar").toggleClass('hidden');
        }
        if(!$("#visionfCar").hasClass('hidden')) {
            $("#visionfCar").toggleClass('hidden');
        }
        if(!$("#srijanCar").hasClass('hidden')) {
            $("#srijanCar").toggleClass('hidden');
        }
        if(!$("#effi1Car").hasClass('hidden')) {
            $("#effi1Car").toggleClass('hidden');
        }
        if(!$("#effi2Car").hasClass('hidden')) {
            $("#effi2Car").toggleClass('hidden');
        }
        if(!$("#effi3Car").hasClass('hidden')) {
            $("#effi3Car").toggleClass('hidden');
        }
        if(!$("#effi4Car").hasClass('hidden')) {
            $("#effi4Car").toggleClass('hidden');
        }
        if(!$("#tachyon1Car").hasClass('hidden')) {
            $("#tachyon1Car").toggleClass('hidden');
        }
        if(!$("#tachyon2Car").hasClass('hidden')) {
            $("#tachyon2Car").toggleClass('hidden');
        }
        if(!$("#tachyon3Car").hasClass('hidden')) {
            $("#tachyon3Car").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if(!$("#originCar").hasClass('hidden')) {
            $("#originCar").toggleClass('hidden');
        }
    });

    // -----------------lvl 2 hover-------------------
    $("#formulaHover").mouseover(function() {
        if($("#formulaOptions").hasClass('hidden')) {
            $("#formulaOptions").toggleClass('hidden');
        }
        if(!$("#effiOptions").hasClass('hidden')) {
            $("#effiOptions").toggleClass('hidden');
        }
        if(!$("#bajaOptions").hasClass('hidden')) {
            $("#bajaOptions").toggleClass('hidden');
        }
        if(!$("#conceptOptions").hasClass('hidden')) {
            $("#conceptOptions").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if(!$("#conceptACar").hasClass('hidden')) {
            $("#conceptACar").toggleClass('hidden');
        }
        if(!$("#visionfCar").hasClass('hidden')) {
            $("#visionfCar").toggleClass('hidden');
        }
        if(!$("#srijanCar").hasClass('hidden')) {
            $("#srijanCar").toggleClass('hidden');
        }
        if(!$("#effi1Car").hasClass('hidden')) {
            $("#effi1Car").toggleClass('hidden');
        }
        if(!$("#effi2Car").hasClass('hidden')) {
            $("#effi2Car").toggleClass('hidden');
        }
        if(!$("#effi3Car").hasClass('hidden')) {
            $("#effi3Car").toggleClass('hidden');
        }
        if(!$("#effi4Car").hasClass('hidden')) {
            $("#effi4Car").toggleClass('hidden');
        }
        if(!$("#tachyon1Car").hasClass('hidden')) {
            $("#tachyon1Car").toggleClass('hidden');
        }
        if(!$("#tachyon2Car").hasClass('hidden')) {
            $("#tachyon2Car").toggleClass('hidden');
        }
        if(!$("#tachyon3Car").hasClass('hidden')) {
            $("#tachyon3Car").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if(!$("#originCar").hasClass('hidden')) {
            $("#originCar").toggleClass('hidden');
        }
    });
    $("#effiHover").mouseover(function() {
        if(!$("#formulaOptions").hasClass('hidden')) {
            $("#formulaOptions").toggleClass('hidden');
        }
        if($("#effiOptions").hasClass('hidden')) {
            $("#effiOptions").toggleClass('hidden');
        }
        if(!$("#bajaOptions").hasClass('hidden')) {
            $("#bajaOptions").toggleClass('hidden');
        }
        if(!$("#conceptOptions").hasClass('hidden')) {
            $("#conceptOptions").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if(!$("#conceptACar").hasClass('hidden')) {
            $("#conceptACar").toggleClass('hidden');
        }
        if(!$("#visionfCar").hasClass('hidden')) {
            $("#visionfCar").toggleClass('hidden');
        }
        if(!$("#srijanCar").hasClass('hidden')) {
            $("#srijanCar").toggleClass('hidden');
        }
        if(!$("#effi1Car").hasClass('hidden')) {
            $("#effi1Car").toggleClass('hidden');
        }
        if(!$("#effi2Car").hasClass('hidden')) {
            $("#effi2Car").toggleClass('hidden');
        }
        if(!$("#effi3Car").hasClass('hidden')) {
            $("#effi3Car").toggleClass('hidden');
        }
        if(!$("#effi4Car").hasClass('hidden')) {
            $("#effi4Car").toggleClass('hidden');
        }
        if(!$("#tachyon1Car").hasClass('hidden')) {
            $("#tachyon1Car").toggleClass('hidden');
        }
        if(!$("#tachyon2Car").hasClass('hidden')) {
            $("#tachyon2Car").toggleClass('hidden');
        }
        if(!$("#tachyon3Car").hasClass('hidden')) {
            $("#tachyon3Car").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if(!$("#originCar").hasClass('hidden')) {
            $("#originCar").toggleClass('hidden');
        }
    });
    $("#bajaHover").mouseover(function() {
        if(!$("#formulaOptions").hasClass('hidden')) {
            $("#formulaOptions").toggleClass('hidden');
        }
        if(!$("#effiOptions").hasClass('hidden')) {
            $("#effiOptions").toggleClass('hidden');
        }
        if($("#bajaOptions").hasClass('hidden')) {
            $("#bajaOptions").toggleClass('hidden');
        }
        if(!$("#conceptOptions").hasClass('hidden')) {
            $("#conceptOptions").toggleClass('hidden');
        }    
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if(!$("#conceptACar").hasClass('hidden')) {
            $("#conceptACar").toggleClass('hidden');
        }
        if(!$("#visionfCar").hasClass('hidden')) {
            $("#visionfCar").toggleClass('hidden');
        }
        if(!$("#srijanCar").hasClass('hidden')) {
            $("#srijanCar").toggleClass('hidden');
        }
        if(!$("#effi1Car").hasClass('hidden')) {
            $("#effi1Car").toggleClass('hidden');
        }
        if(!$("#effi2Car").hasClass('hidden')) {
            $("#effi2Car").toggleClass('hidden');
        }
        if(!$("#effi3Car").hasClass('hidden')) {
            $("#effi3Car").toggleClass('hidden');
        }
        if(!$("#effi4Car").hasClass('hidden')) {
            $("#effi4Car").toggleClass('hidden');
        }
        if(!$("#tachyon1Car").hasClass('hidden')) {
            $("#tachyon1Car").toggleClass('hidden');
        }
        if(!$("#tachyon2Car").hasClass('hidden')) {
            $("#tachyon2Car").toggleClass('hidden');
        }
        if(!$("#tachyon3Car").hasClass('hidden')) {
            $("#tachyon3Car").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if(!$("#originCar").hasClass('hidden')) {
            $("#originCar").toggleClass('hidden');
        }            
    });
    $("#conceptHover").mouseover(function() {
        if(!$("#formulaOptions").hasClass('hidden')) {
            $("#formulaOptions").toggleClass('hidden');
        }
        if(!$("#effiOptions").hasClass('hidden')) {
            $("#effiOptions").toggleClass('hidden');
        }
        if(!$("#bajaOptions").hasClass('hidden')) {
            $("#bajaOptions").toggleClass('hidden');
        }
        if($("#conceptOptions").hasClass('hidden')) {
            $("#conceptOptions").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if(!$("#conceptACar").hasClass('hidden')) {
            $("#conceptACar").toggleClass('hidden');
        }
        if(!$("#visionfCar").hasClass('hidden')) {
            $("#visionfCar").toggleClass('hidden');
        }
        if(!$("#srijanCar").hasClass('hidden')) {
            $("#srijanCar").toggleClass('hidden');
        }
        if(!$("#effi1Car").hasClass('hidden')) {
            $("#effi1Car").toggleClass('hidden');
        }
        if(!$("#effi2Car").hasClass('hidden')) {
            $("#effi2Car").toggleClass('hidden');
        }
        if(!$("#effi3Car").hasClass('hidden')) {
            $("#effi3Car").toggleClass('hidden');
        }
        if(!$("#effi4Car").hasClass('hidden')) {
            $("#effi4Car").toggleClass('hidden');
        }
        if(!$("#tachyon1Car").hasClass('hidden')) {
            $("#tachyon1Car").toggleClass('hidden');
        }
        if(!$("#tachyon2Car").hasClass('hidden')) {
            $("#tachyon2Car").toggleClass('hidden');
        }
        if(!$("#tachyon3Car").hasClass('hidden')) {
            $("#tachyon3Car").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if(!$("#originCar").hasClass('hidden')) {
            $("#originCar").toggleClass('hidden');
        }
    });
    // -----------------lvl 3 hover-------------------
    $("#visionfHover").mouseover(function() {
        if(!$("#conceptACar").hasClass('hidden')) {
            $("#conceptACar").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if($("#visionfCar").hasClass('hidden')) {
            $("#visionfCar").toggleClass('hidden');
        }
        
        $("#detailsMenu").toggleClass('hidden');
        $("#f11").text("TOP SPEED");
        $("#f22").text("MAX POWER");
        $("#f33").text("MAX TORQUE");
        $("#f1").text("175kmph");
        $("#f2").text("45kW");
        $("#f3").text("100Nm");
        $("#f4").text("VISION F");
        $("#knowhref").wrap('<a href="visionf.html" />');
    });
    $("#conceptAHover").mouseover(function() {
        if(!$("#visionfCar").hasClass('hidden')) {
            $("#visionfCar").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }

        $("#conceptACar").toggleClass('hidden');
        $("#detailsMenu").toggleClass('hidden');
        $("#f11").text("TOP SPEED");
        $("#f22").text("MAX POWER");
        $("#f33").text("MAX TORQUE");
        $("#f1").text("110kmph");
        $("#f2").text("32kW");
        $("#f3").text("36Nm");
        $("#f4").text("CONCEPT A");
        $("#knowhref").wrap('<a href="conceptA.html" />');
    });
    $("#srijanHover").mouseover(function() {
        if($("#srijanCar").hasClass('hidden')) {
            $("#srijanCar").toggleClass('hidden');
        }
        if($("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        $("#f11").text("TOP SPEED");
        $("#f22").text("MAX POWER");
        $("#f33").text("MAX TORQUE");
        $("#f1").text("56.25kmph");
        $("#f2").text("8kW");
        $("#f3").text("23.5Nm");
        $("#f4").text("BAJA");
        $("#knowhref").wrap('<a href="baja.html" />');
    });
    $("#effi4Hover").mouseover(function() {
        if(!$("#effi1Car").hasClass('hidden')) {
            $("#effi1Car").toggleClass('hidden');
        }
        if(!$("#effi2Car").hasClass('hidden')) {
            $("#effi2Car").toggleClass('hidden');
        }
        if(!$("#effi3Car").hasClass('hidden')) {
            $("#effi3Car").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if($("#effi4Car").hasClass('hidden')) {
            $("#effi4Car").toggleClass('hidden');
        }
        if($("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        $("#f11").text("TOTAL WEIGHT");
        $("#f22").text("MAX TORQUE");
        $("#f33").text("BATTERY VOLTAGE");
        $("#f1").text("120kg");
        $("#f2").text("22.9Nm");
        $("#f3").text("48V");
        $("#f4").text("EFFICYCLE 4.0");
        $("#knowhref").wrap('<a href="effi4.html" />');
    });
    $("#effi3Hover").mouseover(function() {
        if(!$("#effi1Car").hasClass('hidden')) {
            $("#effi1Car").toggleClass('hidden');
        }
        if(!$("#effi2Car").hasClass('hidden')) {
            $("#effi2Car").toggleClass('hidden');
        }
        if(!$("#effi4Car").hasClass('hidden')) {
            $("#effi4Car").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if($("#effi3Car").hasClass('hidden')) {
            $("#effi3Car").toggleClass('hidden');
        }
        if($("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        $("#f11").text("TOTAL WEIGHT");
        $("#f22").text("MAX TORQUE");
        $("#f33").text("BATTERY VOLTAGE");
        $("#f1").text("220kg");
        $("#f2").text("4.6Nm");
        $("#f3").text("24V");
        $("#f4").text("EFFICYCLE 3.0");
        $("#knowhref").wrap('<a href="effi3.html" />');
    });
    $("#effi2Hover").mouseover(function() {
        if(!$("#effi1Car").hasClass('hidden')) {
            $("#effi1Car").toggleClass('hidden');
        }
        if(!$("#effi4Car").hasClass('hidden')) {
            $("#effi4Car").toggleClass('hidden');
        }
        if(!$("#effi3Car").hasClass('hidden')) {
            $("#effi3Car").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if($("#effi2Car").hasClass('hidden')) {
            $("#effi2Car").toggleClass('hidden');
        }
        if($("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        $("#f11").text("TOTAL WEIGHT");
        $("#f22").text("MAX TORQUE");
        $("#f33").text("BATTERY VOLTAGE");
        $("#f1").text("314kg");
        $("#f2").text("4.6Nm");
        $("#f3").text("12V");
        $("#f4").text("EFFICYCLE 2.0");
        $("#knowhref").wrap('<a href="effi2.html" />');
    });
    $("#effi1Hover").mouseover(function() {
        if(!$("#effi4Car").hasClass('hidden')) {
            $("#effi4Car").toggleClass('hidden');
        }
        if(!$("#effi2Car").hasClass('hidden')) {
            $("#effi2Car").toggleClass('hidden');
        }
        if(!$("#effi3Car").hasClass('hidden')) {
            $("#effi3Car").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if($("#effi1Car").hasClass('hidden')) {
            $("#effi1Car").toggleClass('hidden');
        }
        if($("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        $("#f11").text("TOTAL WEIGHT");
        $("#f22").text("MAX TORQUE");
        $("#f33").text("BATTERY VOLTAGE");
        $("#f1").text("314kg");
        $("#f2").text("4.6Nm");
        $("#f3").text("12V");
        $("#f4").text("EFFICYCLE 1.0");
        $("#knowhref").wrap('<a href="effi1.html" />');
    });
    $("#originHover").mouseover(function() {
        if(!$("#tachyon1Car").hasClass('hidden')) {
            $("#tachyon1Car").toggleClass('hidden');
        }
        if(!$("#tachyon2Car").hasClass('hidden')) {
            $("#tachyon2Car").toggleClass('hidden');
        }
        if(!$("#tachyon3Car").hasClass('hidden')) {
            $("#tachyon3Car").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if($("#originCar").hasClass('hidden')) {
            $("#originCar").toggleClass('hidden');
        }   
        if($("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        $("#f11").text("TOP SPEED");
        $("#f22").text("MAX POWER");
        $("#f33").text("MAX TORQUE");
        $("#f1").text("115kmph");
        $("#f2").text("88kW");
        $("#f3").text("66Nm");
        $("#f4").text("ORIGIN");
        $("#knowhref").wrap('<a href="origin.html" />');
    });
    $("#tachyon1Hover").mouseover(function() {
        if(!$("#originCar").hasClass('hidden')) {
            $("#originCar").toggleClass('hidden');
        }   
        if(!$("#tachyon2Car").hasClass('hidden')) {
            $("#tachyon2Car").toggleClass('hidden');
        }
        if(!$("#tachyon3Car").hasClass('hidden')) {
            $("#tachyon3Car").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if($("#tachyon1Car").hasClass('hidden')) {
            $("#tachyon1Car").toggleClass('hidden');
        }
        if($("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        $("#f11").text("TOP SPEED");
        $("#f22").text("MAX POWER");
        $("#f33").text("MAX TORQUE");
        $("#f1").text("94.5kmph");
        $("#f2").text("82kW");
        $("#f3").text("65Nm");
        $("#f4").text("TACHYON 1.0");
        $("#knowhref").wrap('<a href="tachyon1.html" />');
    });
    $("#tachyon2Hover").mouseover(function() {
        if(!$("#originCar").hasClass('hidden')) {
            $("#originCar").toggleClass('hidden');
        }   
        if(!$("#tachyon1Car").hasClass('hidden')) {
            $("#tachyon1Car").toggleClass('hidden');
        }
        if(!$("#tachyon3Car").hasClass('hidden')) {
            $("#tachyon3Car").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if($("#tachyon2Car").hasClass('hidden')) {
            $("#tachyon2Car").toggleClass('hidden');
        }
        if($("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        $("#f11").text("TOP SPEED");
        $("#f22").text("MAX POWER");
        $("#f33").text("MAX TORQUE");
        $("#f1").text("80kmph");
        $("#f2").text("30kW");
        $("#f3").text("33Nm");
        $("#f4").text("TACHYON 2.0");
        $("#knowhref").wrap('<a href="tachyon2.html" />');
    });
    $("#tachyon3Hover").mouseover(function() {
        if(!$("#originCar").hasClass('hidden')) {
            $("#originCar").toggleClass('hidden');
        }   
        if(!$("#tachyon1Car").hasClass('hidden')) {
            $("#tachyon1Car").toggleClass('hidden');
        }
        if(!$("#tachyon2Car").hasClass('hidden')) {
            $("#tachyon2Car").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if($("#tachyon3Car").hasClass('hidden')) {
            $("#tachyon3Car").toggleClass('hidden');
        }
        if($("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        $("#f11").text("TOP SPEED");
        $("#f22").text("MAX POWER");
        $("#f33").text("MAX TORQUE");
        $("#f1").text("TBD");
        $("#f2").text("TBD");
        $("#f3").text("TBD");
        $("#f4").text("TACHYON 3.0");
        $("#knowhref").wrap('<a href="#" />');
    });
    // -------------hover out jquery-------------
    $("#hideDon").mouseover(function() {
        if(!$("#formulaOptions").hasClass('hidden')) {
            $("#formulaOptions").toggleClass('hidden');
        }
        if(!$("#effiOptions").hasClass('hidden')) {
            $("#effiOptions").toggleClass('hidden');
        }
        if(!$("#bajaOptions").hasClass('hidden')) {
            $("#bajaOptions").toggleClass('hidden');
        }
        if(!$("#conceptOptions").hasClass('hidden')) {
            $("#conceptOptions").toggleClass('hidden');
        }
        if(!$("#conceptACar").hasClass('hidden')) {
            $("#conceptACar").toggleClass('hidden');
        }
        if(!$("#visionfCar").hasClass('hidden')) {
            $("#visionfCar").toggleClass('hidden');
        }
        if(!$("#srijanCar").hasClass('hidden')) {
            $("#srijanCar").toggleClass('hidden');
        }
        if(!$("#effi1Car").hasClass('hidden')) {
            $("#effi1Car").toggleClass('hidden');
        }
        if(!$("#effi2Car").hasClass('hidden')) {
            $("#effi2Car").toggleClass('hidden');
        }
        if(!$("#effi3Car").hasClass('hidden')) {
            $("#effi3Car").toggleClass('hidden');
        }
        if(!$("#effi4Car").hasClass('hidden')) {
            $("#effi4Car").toggleClass('hidden');
        }
        if(!$("#tachyon1Car").hasClass('hidden')) {
            $("#tachyon1Car").toggleClass('hidden');
        }
        if(!$("#tachyon2Car").hasClass('hidden')) {
            $("#tachyon2Car").toggleClass('hidden');
        }
        if(!$("#tachyon3Car").hasClass('hidden')) {
            $("#tachyon3Car").toggleClass('hidden');
        }
        if(!$("#detailsMenu").hasClass('hidden')) {
            $("#detailsMenu").toggleClass('hidden');
        }
        if(!$("#originCar").hasClass('hidden')) {
            $("#originCar").toggleClass('hidden');
        }
    })
});