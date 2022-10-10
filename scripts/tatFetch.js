var audio
async function fetchTat() {
    const response = await fetch('https://ssbpractice.click/tat');
    const data = await response.json();
    return data;
}

function handler() {
    fetchTat().then(data => {
        wordCount = 0;
        
        // for every word in data show the word in the div for 15 seconds
        for (let i = 0; i < data.length; i++) {
            //progress bar
            setTimeout(() => {
                
                wordCount++;
                if (wordCount == data.length) {
                    setTimeout(() => {
                        document.getElementById("test").style.display = "none";
                        document.getElementById("test-finish").style.display = "block";
                        document.getElementById("nav").style.display = "block";
                    }
                        , 5000);
                }
                document.getElementById("timer").style.display = "none";
                displayImage(data[i].image);
                playAudio();
                //display image for 30 seconds
                setTimeout(() => {
                    document.getElementById("tat-image").style.display = "none";
                    displayTimer();
                }, 30000);              
            },  270000* i);
        }
    })
} 

function displayTimer(){
    document.getElementById("timer").style.display = "block";
    playAudio();
    var time = 240;
    var interval = setInterval(function() {
        time--;
        if (time == 0) {
            // end the countdown
            clearInterval(interval);
            
            }
         // show the time in minutes and seconds
         document.getElementById("timer").innerText = `0${Math.floor(time/60)}` + ":" + secondCal(time);
        }
        , 1000);
}

function secondCal(time){
    if (time%60 < 10) {
        return `0${time%60}`;
    }
    else{
        return time%60;
    }
}

function displayImage(img) {
    document.getElementById("tat-image").src = img;
    document.getElementById("tat-image").style.display = "block";
    document.getElementById("msg").style.display="none";
}



function startTest() {
    document.getElementById("instruction").style.display = "none";
    document.getElementById("nav").style.display = "none";
    document.getElementById("test-finish").style.display = "none";
    document.getElementById("test").style.display = "block";
    audio = document.getElementById("audio");
    // execute handler function after 5 seconds
    // show coundown for 5 seconds before starting the test
    handler()
}

   

function playAudio() {
    audio.play();
}