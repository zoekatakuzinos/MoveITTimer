var Timer;
var TimerDelay;
var TimerRemaining;

var IntervalArray = [];
var CurrentInterval;
var Pause;
var Start;

var IntervalTimer =
{
    initialize: function ()
    {
        clearInterval(Timer);
        Pause = true;
        Start = false;
        TimerDelay = 15;
        TimerRemaining = 15;
        document.getElementById("btnPause").innerHTML = "Play";

        CurrentInterval = 0;
        IntervalTimer.formatTimer();
        Intervals.formatInterval();
        CurrentInterval = -1;

    },
    stop: function () {
        IntervalTimer.initialize();
        CurrentInterval = 0;
        IntervalTimer.formatTimer();
        Intervals.formatInterval();
        CurrentInterval = -1;
    },
    reset: function () {
        TimerDelay = 15;
        TimerRemaining = 15;
        if (Pause == false) {
            clearInterval(Timer);
            Timer = setInterval(this.tick, 1000);            
        };
    },
    pauseresume: function () {
        if (Pause == false) {
            document.getElementById("btnPause").innerHTML = "Play";
            Pause = true;
            IntervalTimer.pause();
        }
        else {
            document.getElementById("btnPause").innerHTML = "Pause";
            Pause = false;
            if (Start == false) {
                Start = true;
                Intervals.next();
            }
            else {
                IntervalTimer.resume();
            }
        }
    },
    pause: function () {
        TimerRemaining = TimerDelay;
        clearInterval(Timer);
    },
    resume: function () {
        TimerDelay = TimerRemaining;
        clearInterval(Timer);
        Timer = setInterval(this.tick, 1000);
    },
    formatTimer: function () {
        var seconds = TimerDelay;
        if (seconds <= 9) {
            seconds = "0" + seconds;
            document.getElementById("lblSecond").innerHTML = seconds;
            document.getElementById("lblSecond").setAttribute('style', 'color:red;');
            document.getElementById("lblColon").setAttribute('style', 'color:red;');
            document.getElementById("lblMinute").setAttribute('style', 'color:red;');
        }
        else {
            document.getElementById("lblSecond").innerHTML = seconds;
            document.getElementById("lblSecond").setAttribute('style', 'color:white;');
            document.getElementById("lblColon").setAttribute('style', 'color:white;');
            document.getElementById("lblMinute").setAttribute('style', 'color:white;');
        }
        
    },
    tick: function () {
        TimerDelay--;
        IntervalTimer.formatTimer();
        if (TimerDelay == 0)
        {
            Intervals.next();
        }
    }
}

var Intervals =
{
    initialize: function () {

        CurrentInterval = -1;

        IntervalArray.push("Closed Stance");
        IntervalArray.push("Open Stance");
        IntervalArray.push("A-Stance");
        IntervalArray.push("Sumo Stance");
        IntervalArray.push("Bow Stance");
        IntervalArray.push("Cat Stance");

        IntervalArray.push("Rock Around the Clock");
        IntervalArray.push("Duck Walk");
        IntervalArray.push("Squish Walk");
        IntervalArray.push("Heel Lead");
        IntervalArray.push("Whole Foot");
        IntervalArray.push("Ball of Foot");
        IntervalArray.push("Releve");
        IntervalArray.push("Toes In, Out, Parallel");
        IntervalArray.push("Stepping Back Onto Ball of Foot");
        IntervalArray.push("Sink and Pivot Table Wipe");
        IntervalArray.push("Cross Font");
        IntervalArray.push("Cross Behind");
        IntervalArray.push("Travelling in Directions");
        IntervalArray.push("Lateral Travel");
        IntervalArray.push("Cha-Cha-Cha");
        IntervalArray.push("Slow Clock");
        IntervalArray.push("Fast Clock");

        IntervalArray.push("Front Kick");
        IntervalArray.push("Side Kick");
        IntervalArray.push("Back Kick");
        IntervalArray.push("Knee Sweep");

        IntervalArray.push("Pelvic Circles");
        IntervalArray.push("Hip Bumps");

        IntervalArray.push("Upward Block");
        IntervalArray.push("Outward Block");
        IntervalArray.push("Inward Block");
        IntervalArray.push("Downward Block");

        IntervalArray.push("Upward Punch");
        IntervalArray.push("Outward Punch");
        IntervalArray.push("Across Punch");
        IntervalArray.push("Downward Punch");

        IntervalArray.push("Elbow Strike Down");
        IntervalArray.push("Elbow Strike Out");
        IntervalArray.push("Elbow Strike Back");

        IntervalArray.push("Chest Isolations");
        IntervalArray.push("Shimmy");
        IntervalArray.push("Undulations");
        IntervalArray.push("Spinal Roll");
        IntervalArray.push("Head and Eye Movements");

        IntervalArray.push("Chop Cut");
        IntervalArray.push("Strikes");
        IntervalArray.push("Pumps");
        IntervalArray.push("Finger Flicks");
        IntervalArray.push("Creep Crawlers");
        IntervalArray.push("Catching Flies");
        IntervalArray.push("Claw Hand");
        IntervalArray.push("Spear Finger");
        IntervalArray.push("Finger Extensions");
        IntervalArray.push("Fist");
        IntervalArray.push("Webbed Spaces");
        IntervalArray.push("Palm Directions");
        IntervalArray.push("Power Finger Cross-Over");
        IntervalArray.push("Balance Finger");
        IntervalArray.push("Touching");

    },

    next: function () {

        if (Start == false) return;

        if (CurrentInterval == IntervalArray.length - 1) {
            IntervalTimer.stop();
            return;
        }

        CurrentInterval++;

        Intervals.formatInterval();

        /*if (manual) SyncMusic();*/

        IntervalTimer.reset();

    },

    previous: function () {

        if (Start == false) return;

        if (CurrentInterval == 0) {
            return;
        }

        CurrentInterval--;

        Intervals.formatInterval();

        /*if (manual) SyncMusic();*/

        IntervalTimer.reset();

    },

    formatInterval: function () {

        document.getElementById("lblCurrentMove").innerHTML = IntervalArray[CurrentInterval].toString();

        if (CurrentInterval < IntervalArray.length - 1)
            document.getElementById("lblNextMove").innerHTML = "(" + IntervalArray[CurrentInterval + 1].toString() + ")";
        else
            document.getElementById("lblNextMove").innerHTML = "(End)";

        document.getElementById("lblCurrentMoveCount").innerHTML = (CurrentInterval + 1).toString() + "/" + IntervalArray.length.toString();
    }
    
}



