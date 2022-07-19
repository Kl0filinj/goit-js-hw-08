import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const playbackTimeVar = localStorage.getItem('videoplayer-current-time');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

let playbackTime = 0;

const timeupdateFunc = () => {
  const currentTime = player.getCurrentTime();

  const currentTimeInSeconds = currentTime.then(function (seconds) {
    playbackTime = seconds;
    localStorage.setItem('videoplayer-current-time', seconds);
  });
  console.log(playbackTime);
};

player.on('timeupdate', throttle(timeupdateFunc, 1000));

if (typeof playbackTimeVar !== 'undefined' && playbackTimeVar !== null) {
  player.setCurrentTime(playbackTimeVar);
} else {
  player.setCurrentTime(0);
}
