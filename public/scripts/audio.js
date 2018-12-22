function $(id) { return document.getElementById(id); };
const media = document.getElementById('audio');

let ui = {
    play: 'playAudio',
    audio: 'audio',
    percentage: 'percentage',
    seekObj: 'seekObj',
    currentTime: 'currentTime'
};

let playAudios = document.querySelectorAll(".playAudio");

function togglePlay(e) {
    if (media.paused === false) {
        media.pause();
        for (let playAudio of playAudios) {
            playAudio.classList.remove('pause');
        }
    } else {
        let i = 0;
        for (let playAudio of playAudios) {
            
            switch (e.target.id) {
                case 0:
                    (document.querySelector("audio")).src = musicPath[0];
                    break;
                case 1:
                    (document.querySelector("audio")).src = musicPath[1];
                    break;
                case 2:
                    (document.querySelector("audio")).src = musicPath[2];
                    break;
                case 3:
                    (document.querySelector("audio")).src = musicPath[3];
                    break;
                case 4:
                    (document.querySelector("audio")).src = musicPath[4];
                    break;
                case 5:
                    (document.querySelector("audio")).src = musicPath[5];
                    break;
                case 6:
                    (document.querySelector("audio")).src = musicPath[6];
                    break;
                case 7:
                    (document.querySelector("audio")).src = musicPath[7];
                    break;
                case 8:
                    (document.querySelector("audio")).src = musicPath[8];
                    break;
                case 9:
                    (document.querySelector("audio")).src = musicPath[9];
                    break;
                case 10:
                    (document.querySelector("audio")).src = musicPath[10];
                    break;
                case 11:
                    (document.querySelector("audio")).src = musicPath[11];
                    break;
            }

            // if (e.target.id == "1") {
            //     (document.querySelector("audio")).src = "../public/music/1opthe-dayop.mp3";
            // } else if (e.target.id == "2") {
            //     (document.querySelector("audio")).src = "../public/music/21opop.mp3";
            // } else if (e.target.id == "3") {
            //     (document.querySelector("audio")).src = "../public/music/mvlemon.mp3";
            // } else if (e.target.id == "4") {
            //     (document.querySelector("audio")).src = "../public/music/little-glee-monster-sekai-ha-anatani-waraikaketeiru.mp3";
            // } else {
            //     (document.querySelector("audio")).src = "../public/music/mr-twin-sister-lady-daydream.mp3";
            // }
            media.play();
            playAudio.classList.add('pause');
        }
    }
}

function calculatePercentPlayed() {
    let percentage = (media.currentTime / media.duration).toFixed(2) * 100;
    $(ui.percentage).style.width = `${percentage}%`;
}

function calculateCurrentValue(currentTime) {
    const currentMinute = parseInt(currentTime / 60) % 60;
    const currentSecondsLong = currentTime % 60;
    const currentSeconds = currentSecondsLong.toFixed();
    const currentTimeFormatted = `${currentMinute < 10 ? `0${currentMinute}` : currentMinute}:${
        currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds
    }`;

    return currentTimeFormatted;
}

function initProgressBar() {
    const currentTime = calculateCurrentValue(media.currentTime);
    $(ui.currentTime).innerHTML = currentTime;
    $(ui.seekObj).addEventListener('click', seek);

    media.onended = () => {
        for (let playAudio of playAudios) {
            playAudio.classList.remove('pause');
            $(ui.percentage).style.width = 0;
            $(ui.currentTime).innerHTML = '00:00';
        }
    };

    function seek(e) {
        const percent = e.offsetX / this.offsetWidth;
        media.currentTime = percent * media.duration;
    }

    calculatePercentPlayed();
}

let plays = document.querySelectorAll(".playAudio");
for (let play of plays) {
    play.addEventListener('click', togglePlay)
    $(ui.audio).addEventListener('timeupdate', initProgressBar);
}