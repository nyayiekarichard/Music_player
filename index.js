let songs = [
    {
        name:"Bien Aime",
        genre:"Sol Music",
        image:"Assets/bensol.jpg",
        featuring:"Bensoul",
        Path:"Assets/Bensoul ft Bien Extra Pressure.mp3",
    },
    {
        name:"Bien Aime",
        genre:"",
        image:"",
        featuring:"Adekunle Gold",
        Path:"Assets/Bien Ft Adekunle Gold Wahala.mp3",
    },
    {
        name:"Bien Aime",
        genre:"",
        image:"Assets/70563249_350_350.jpg",
        featuring:"Colors Studio",
        Path:"",
    },
    {
        name:"",
        genre:"",
        image:"",
        featuring:"",
        Path:"",
    },
    {
        name:"Bien Aime",
        genre:"",
        image:"Assets/bien1.jpg",
        featuring:"Scar Mkadinali",
        Path:"Assets/Bien Ft Scar Mkadinali LIfestyle.mp3",
    },



    
]
let song = {
    name:"Bien Aime",
    genre:"Sol Music",
    image:"",
    featuring:"",
    Path:"Assets/Bensoul ft Bien Extra Pressure",
}
console.log(song.name);
let audio = new Audio();
// audio.src="Assets/Bien Ft Adekunle Gold Wahala.mp3";
audio.src=songs[4].Path
// audio.play();
// audio.pause();
console.log(songs[4]);
document.addEventListener(`click`,function(){
    audio.play()
})
let songs_container=
document.querySelector(".recommendations");

function displaySongs(){
    for (let i=0; i<songs.length;i++){
        songs_container.innerHTML += `<div class="recommendation-card">
                    <img src="${songs[i].image}" alt="Rec 3">
                    <div class="recommendation-info" onclick="play(${i})">
                        <p>${songs[i].name}</p>
                        <p>${songs[i].featuring}</p>
                        <p>3:58 min</p>
                        <button class="play-button"><img src="Assets/play.png" alt="Play" class="play-icon"></button>

                    </div>`
    }
}
displaySongs();
function play(index){
    audio.src= songs[index].Path;
    audio.play();
}



