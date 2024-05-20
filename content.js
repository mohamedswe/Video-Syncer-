const videos = document.getElementsByTagName('video');
let mainVideo = videos[0]; // Assuming the first video is the target

// Function to play video
function playVideo() {
    mainVideo.play();
}

// Function to pause video
function pauseVideo() {
    mainVideo.pause();
}

// Function to seek video
function seekVideo(time) {
    mainVideo.currentTime = time;
}
