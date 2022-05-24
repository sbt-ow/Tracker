<script>
    window.onload = function() {
  clock();  
    function clock() {

//     // Local
//         // Local Clock Stuff
        var now = new Date();
        var TwentyFourHour = now.getHours();
        var hour = now.getHours();
        var min = now.getMinutes();
        var mid = ' PM';
        if (min < 10) {
        min = "0" + min;
        }
        if (hour > 12) {
        hour = hour - 12;
        }    
        if(hour==0){ 
        hour=12;
        }
        if(TwentyFourHour < 12) {
        mid = ' AM';
        }
        var localTime = hour+':'+min+mid ;
    

    // UTC -> EST
        // declaring UTC time
        var UTC = now.getUTCHours();
        var UTCtwelve = now.getUTCHours();
        // This should offset by 5 hours
            // We are in EDT btw so -4
        var ESThr = (UTC - 4);
        var ESTtwelve = (UTCtwelve - 4);
        var ESTmid = ' PM'
        // Building the Thing
            //  Checking the Time
                if (ESThr > 12) {
                    ESThr = ESThr - 12;
                }

                if (ESThr < 0) {
                    ESThr = ESThr + 12
                }

                if(ESThr==0){ 
                    ESThr=12;
                }

                if(ESTtwelve < 12) {
                    ESTmid = ' AM';
                }

                if (ESTtwelve < 0) {
                    ESTtwelve = ESTtwelve + 12
                    ESTmid = ' PM'
                }

        var ESTtime = ESThr+':'+min+ESTmid ;

    // Build the whole id
        // Like this
        document.getElementById('currentTime').innerHTML = 
            localTime + "  |  " + ESTtime ;
            setTimeout(clock,1000);
        }
}
</script>

<div class="clock-background clock">
    <div id="currentTime" class="clock-background clock is-center"/>
</div>


