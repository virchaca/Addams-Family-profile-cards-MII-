  const introSong = document.getElementById('introSong');

  introSong.volume = 0.1;

document.addEventListener('click', function () {
  
  function reproducir() {
    introSong.play();
  }

  function pausar() {
    introSong.pause();
  }

  function detener() {
    introSong.pause();
    introSong.currentTime = 0;
  }

  document.getElementById('playButton').addEventListener('click', reproducir);
  document.getElementById('pauseButton').addEventListener('click', pausar);
  document.getElementById('stopButton').addEventListener('click', detener);
});