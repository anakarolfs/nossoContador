    /* ------------ Contador ------------ */

var targetDate = new Date("2023/07/21 20:00:00");

    var year;
    var month;

    var days;
    var hrs;
    var min;
    var sec;

    $(function() {

        timeToLaunch();

        numberTransition('#year .number', year, 1000, 'easeOutQuad');
        numberTransition('#month .number', month, 1000, 'easeOutQuad');

        numberTransition('#days .number', days, 1000, 'easeOutQuad');
        numberTransition('#hours .number', hrs, 1000, 'easeOutQuad');
        numberTransition('#minutes .number', min, 1000, 'easeOutQuad');
        numberTransition('#seconds .number', sec, 1000, 'easeOutQuad');

        setTimeout(countDownTimer,1001);
    });


    function timeToLaunch(){

        var currentDate = new Date();

        // Datas
        var diff = (currentDate - targetDate)/1000;
        var diff = Math.abs(Math.floor(diff));

        // Ano
        year = Math.floor(diff/(365*24*60*60));
        diff = diff - year * 365*24*60*60;

        // Meses
        month = Math.floor(diff/(30*24*60*60));
        diff = diff - month * 30*24*60*60;

        // Dias
        days = Math.floor(diff/(24*60*60));
        sec = diff - days * 24*60*60;

        // Horas
        hrs = Math.floor(sec/(60*60));
        sec = sec - hrs * 60*60;

        // Minutos
        min = Math.floor(sec/(60));
        sec = sec - min * 60;
    }

    function countDownTimer(){

        timeToLaunch();

        $( "#year .number" ).text(year);
        $( "#month .number" ).text(month);

        $( "#days .number" ).text(days);
        $( "#hours .number" ).text(hrs);
        $( "#minutes .number" ).text(min);
        $( "#seconds .number" ).text(sec);

        setTimeout(countDownTimer,1000);
    }

    function numberTransition(id, endPoint, transitionDuration, transitionEase){

        $({numberCount: $(id).text()}).animate({numberCount: endPoint}, {
            duration: transitionDuration,
            easing:transitionEase,
            step: function() {
                $(id).text(Math.floor(this.numberCount));
            },
            complete: function() {
                $(id).text(this.numberCount);
            }
        });
    };

