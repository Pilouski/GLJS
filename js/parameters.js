var localParam = new LocalParam();

function LocalParam() {
  this.camera = {
    near: 5,
    far: 530,
    fov: 40,
    rotate: [-0.3, 0, 0],
    translate: [0, 0, -280],
    eye: [0, 0, -64]
  };

  this.LODBias = 8.0;
  this.millis = 0.0;
  this.elapsed = 1.0;
  this.timeNow = 0.0;
  this.currentTime = 0.0;
  this.lastTime = 0.0;
  this.fps = 60.0;
  this.fpsAverage = 60.0;
}
