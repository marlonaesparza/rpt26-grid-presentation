function initiateVideos () {
  let videoContainer = document.getElementById('latest-videos');
  let video = document.getElementsByClassName('video')[0];

  for (let i = 0; i < 100; i++) {
    let videoClone = video.cloneNode(true);
    videoContainer.appendChild(videoClone);
  }
}

// initiateVideos();