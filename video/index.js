const video = document.querySelector("#video");
const playPauseBtn = document.querySelector(".btn-pauseplay");
const countVideos = document.querySelector("#vcounter");
const stickyBtn = document.querySelector(".btn-sticky");
const scrollable = document.querySelector(".child");
let count = 0;
let integer= 0;

/* --- Video loop and counter --- */
video.addEventListener("ended", function() {
    this.play();
    integer +=1;
    countVideos.innerHTML = integer;
})

/* --- play&pause - stop ---*/
function playPause(){
    if(count == 0) {
       count = 1;
       video.play();
       playPauseBtn.innerHTML = "Pause";
    }else{
       count=0;
       video.pause();
        playPauseBtn.innerHTML="Play";
    }
}

function stop() {
    playPause();
    video.pause();
    video.currentTime = 0;
}

/*----sticky----*/
function scrollVideo(){
    if (count==0){
        count =1;
        scrollable.classList.add("sticky")
    }else{
        count = 0;
        scrollable.classList.remove("sticky")
    }
}

stickyBtn.addEventListener("click", scrollVideo);

/*----GSAP----*/
gsap.from(".child", {duration:2, ease: "elastic.inOut(0.8, 0.7)", x: -550})
gsap.from(".btns",  {duration: 2, ease:"Bounce.easeOut", y:500});

