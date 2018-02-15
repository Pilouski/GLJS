function getCurrentTime() {
  localParam.millis = new Date().getTime();
  localParam.timeNow = new Date().getTime();
  if (localParam.lastTime != 0) {
    localParam.elapsed = localParam.timeNow - localParam.lastTime;
    localParam.currentTime = localParam.millis % 100000000 / 1000;
  }
  localParam.lastTime = localParam.timeNow;

  localParam.fps = 1000.0 / localParam.elapsed;
  localParam.fpsAverage = (localParam.fpsAverage * 9 + localParam.fps) / 10;
}

function animate() {
  requestAnimFrame(animate);
  getCurrentTime();
  drawScene();
}

window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame
})();
