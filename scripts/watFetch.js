var audio;
async function fetchwat() {
    const response = await fetch('http://13.233.212.35/wat');
    const data = await response.json();
    return data;

}
function handler() {
    fetchwat().then(data => {
        wordCount = 0;
        // for every word in data show the word in the div for 15 seconds
        for (let i = 0; i < data.length; i++) {
            //progress bar
            setTimeout(() => {
                var time = 0;
                var interval = setInterval(function () {
                    time++;
                    if (time == 240) {
                        // end the countdown
                        document.getElementById("progressbar").style.width = "0%";
                        clearInterval(interval);

                    }
                    document.getElementById("progressbar").style.width = (time / 224) * 100 + "%";
                }, 62.5);
                //WordTrack
                wordCount++;    
                if (wordCount == data.length) {
                    setTimeout(() => {
                        document.getElementById("word").style.display = "none";
                        document.getElementById("test-finish").style.display = "block";
                        document.getElementById("nav").style.display = "block";
                    }
                        , 16000);
                }
                // word update
                document.getElementById("h5").innerText = data[i].word;
               playAudio();

            }, 15000 * i);
        }
    })

}


function startTest() {
    document.getElementById("instruction").style.display = "none";
    document.getElementById("nav").style.display = "none";
    document.getElementById("test-finish").style.display = "none";
    document.getElementById("word").style.display = "block";
    audio = document.getElementById("audio");
    // execute handler function after 5 seconds
    // show coundown for 5 seconds before starting the test
    setTimeout(function () {
        var time = 5
        var interval = setInterval(function () {
            document.getElementById("h5").innerText = time;
            time--;
            if (time < 0) {
                // end the countdown
                clearInterval(interval);
            }
        }, 1000);
    }, 0);
    setTimeout(function () {
        handler();
    }, 6500)
}





function playAudio() {
    audio.play();
}

