console.log("Welcome to Spotify");
//initialise the Variables
let songIndex=0;
let audioElement=new Audio('5.mp3');
let masterPlay=document.getElementById('masterPlay');
// console.log(masterPlay);
let myProgressBar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songitem'));
// console.log(songItems);

let songs=[
  {songName: "Warriyo - Mortals ",filePath:"1.mp3",coverPath:"1.jpg"},
  {songName: "Cielo - Huma-Himu",filePath:"2.mp3",coverPath:"2.jpg"},
  {songName: "DEAF KEV - Invincible",filePath:"3.mp3",coverPath:"3.jpg"},
  {songName: "Different Heaven & EHIDE",filePath:"4.mp3",coverPath:"4.jpg"},
  {songName: "Janji-Heroes-Tonight",filePath:"5.mp3",coverPath:"5.jpg"},
]
songItems.forEach((element,i)=>{
  // console.log(element,i);
  // console.log(element.getElementsByTagName("img")[0].src);
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
// audioElement.play();
//Handle Play/Pause link
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-solid', 'fa-2x', 'fa-circle-play');
    masterPlay.classList.add('fa-solid','fa-2x', 'fa-circle-pause');
    gif.style.opacity=1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;

  }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
  // console.log('timeupdate');
  progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  // console.log(progress);
  myProgressBar.value=progress;
})
//For changing the duration
myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays= ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
     console.log("Hiiii",e.target);
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    console.log(songIndex);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src=`${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
})
