async function srtfetch(){
    const response = await fetch('https://43.205.43.214/srt');
    const data = await response.json();
    
    return data;
}

function startTest(){
    document.getElementById("instruction").style.display = "none";
    document.getElementById("nav").style.display = "none";
    document.getElementById("test-finish").style.display = "none";
    document.getElementById("word").style.display = "block";
    document.getElementById("timeLeft").style.display = "block";
    srtfetch().then(data => {
        for (let i = 0; i < data.length; i++) {
            document.getElementById("situation").innerHTML += `<h5 style="margin-top:5vh;">${i+1}. ${data[i].situation}</h5>`;
        }
        
    })
    // run the 30 minutes timer
    var time = 1800;
    var interval = setInterval(function() {
        time--;
        if (time == 0) {
            // end the countdown
            clearInterval(interval);
            document.getElementById("word").style.display = "none";
            document.getElementById("test-finish").style.display = "block";
            document.getElementById("nav").style.display = "block";
            document.getElementById("timeLeft").style.display = "none";
            
            }
         // show the time in minutes and seconds
         document.getElementById("time").innerText = Math.floor(time/60) + ":" + time%60;
        }, 1000);
}