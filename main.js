$(document).ready(function () {
    var time = 10;
    var score = 0;
     rnumber = String.fromCharCode(97+Math.floor(Math.random()*26));
     $("#area").html("<h1>" + rnumber + "<h1>");


     $(document).keypress(function (e) { 
        value = $("h1").html();
        if (e.key == value) {
            score= score+1;
            $("#score").html(score);
            rnumber = String.fromCharCode(97+Math.floor(Math.random()*26));
            $("#area").html("<h1>" + rnumber + "<h1>");
        }
     });
     var interval = setInterval(function()  {
        time=time-1;
        $("#time").html(time);
        if (time == 0) {
            clearInterval(interval);
            $("#area").hide();
            $("#game").html("Game Over");
        }

        
     }, 1000);






});