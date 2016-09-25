var App = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('btnReset').addEventListener('click', function () { IntervalTimer.stop(); });
        document.getElementById('btnPrevious').addEventListener('click', function () { Intervals.previous(); });
        document.getElementById('btnPause').addEventListener('click', function () { IntervalTimer.pauseresume(); });
        document.getElementById('btnNext').addEventListener('click', function () { Intervals.next(); });
    },
    onDeviceReady: function() {
        App.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {

        document.getElementById("divApp").style = "display:block;";

        console.log('Received Event: ' + id);
    }
    
};

 