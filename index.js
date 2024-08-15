let songs = [
    {
        name: "Bien Aime",
        genre: "Sol Music",
        image: "Assets/bensol.jpg",
        featuring: "Bensoul",
        Path: "Assets/Bensoul ft Bien Extra Pressure.mp3",
    },
    {
        name: "Bensoul",
        genre: "",
        image: "Assets/wahala.jpg",
        featuring: "Adekunle Gold",
        Path: "Assets/Bien Ft Adekunle Gold Wahala.mp3",
    },
    {
        name: "Bensoul Music",
        genre: "",
        image: "Assets/70563249_350_350.jpg",
        featuring: "Colors Studio",
        Path: "Assets/Bien True Love.mp3",
    },
    {
        name: "Bien Aime",
        genre: "",
        image: "Assets/bien1.jpg",
        featuring: "Scar Mkadinali",
        Path: "Assets/Bien Ft Scar Mkadinali LIfestyle.mp3",
    },
];

let currentsongindex = 0;
let SongNameElement = document.querySelector(".song1");
let PrevButton = document.querySelector(".rewindbutton");
let NextButton = document.querySelector(".nextbutton");
let pauseMusic = document.querySelector(".pausebutton");
let songImage = document.querySelector(".facts-banner");

let audio = new Audio();
let isPaused = false;
let songs_container = document.querySelector(".recommendations");

let rangeStart = 1;
let rangeEnd = 3;

function displaySongs() {
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].name && songs[i].Path) {
            songs_container.innerHTML += `<div class="recommendation-card">
                    <img src="${songs[i].image}" alt="Rec 3">
                    <div class="recommendation-info" onclick="play(${i})">
                        <p>${songs[i].name}</p>
                        <p>${songs[i].featuring}</p>
                        <p>3:58 min</p>
                        <button class="play-button"><img src="Assets/play.png" alt="Play" class="play-icon"></button>
                    </div>
                </div>`;
        }
    }
}
displaySongs();

function play(index) {
    currentsongindex = index;

    audio.src = songs[index].Path;
    SongNameElement.innerHTML = songs[index].name;
    songImage.src = songs[index].image;
    audio.playbackRate = 1;

    audio.onloadedmetadata = function () {
        let duration = audio.duration;
        // audio.currentTime = duration;
        audio.play();
        updateSlider();
    };
}

audio.addEventListener("timeupdate", function () {
    updateSlider();
});

pauseMusic.addEventListener('click', function () {
    playPause();
});

audio.addEventListener("ended", function () {
    next();
    shownotifications(songs[currentsongindex].name,songs[currentsongindex].name,songs[currentsongindex].image)
});

function playPause() {
    if (isPaused) {
        audio.play();
        isPaused = false;
    } else {
        audio.pause();
        isPaused = true;
    }
}

function next() {
    currentsongindex++;
    if (currentsongindex >= rangeEnd) {
        currentsongindex = rangeEnd - 1;
    }
    play(currentsongindex);
}

function rewind() {
    currentsongindex--;
    if (currentsongindex < rangeStart - 1) {
        currentsongindex = rangeStart - 1;
    }
    play(currentsongindex);
}

NextButton.addEventListener("click", function () {
    next();

});

PrevButton.addEventListener("click", function () {
    rewind();
});


let audioSlider = document.getElementById('audio-slider');

audioSlider.addEventListener('input', function () {
    audio.currentTime = audioSlider.value;
});

function updateSlider() {
    audioSlider.max = audio.duration;
    audioSlider.value = audio.currentTime;
}

audio.onloadedmetadata = function () {
    audioSlider.max = audio.duration;
    updateSlider();
};
function shownotifications(title,body,icon) {
    if ("Notification" in window) {
        console.log(Notification.permission)
        if (Notification.permission == "granted") {
            let notification = new Notification(title, {
                body: body,
                icon: icon
            })
        } else {
            Notification.requestPermission()
                .then(function (permission) {
                    if (permission == "granted") {
                        let notification = new Notification(title, {
                            body: body,
                            icon: icon
                        })
                    }

                })
        }

    } else {
        alert("Browser does not support notifications")
    }
}

