var gl;
var canvas, width, height;

function initWindow() {
  width = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  height = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  canvas.width = width;
  canvas.height = height;
  try {
    gl = htmlCanvas.getContext('webgl2') || htmlCanvas.getContext('webgl');
    if (!gl) {
      let msg = "Error creating WebGL Context : Browser does not support WebGL";
      alert(msg);
      throw Error(msg);
    }
    gl.viewportWidth = width;
    gl.viewportHeight = height;
  } catch (e) {
    let msg = "Error creating WebGL Context : " + e.toString();
    alert(msg);
    throw Error(msg);
  }
}

function initGL() {
  canvas = document.getElementById("c1");

  initWindow();
  // Register an event listener to call the resizeCanvas() function
  // each time the window is resized.
  window.addEventListener('resize', initWindow, false);

  initBuffers();
  initShaders();
  initTextures();

  setDebugParam();

  gl.clearColor(0., 0., 0., 0.);
  gl.clearDepth(1.);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.enable(gl.BLEND);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);

  interact();
  animate();
}
