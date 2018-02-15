var gl;
var canvas, width, height;

function initWindow() {
  width = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  height = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  try {
    canvas = document.getElementById("c1");
    canvas.width = width;
    canvas.height = height;

    gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) {
      let msg = "Error creating WebGL Context : Browser does not support neither WebGL2 nor WebGL";
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

  try {
    initGL()
  } catch (e) {
    let msg = "Error initializing WebGL graphics context : " + e.toString();
    alert(msg);
    throw Error(msg);
  }
}

function initGL() {
  // Register an event listener to call the resizeCanvas() function
  // each time the window is resized.
  window.addEventListener('resize', initWindow, false);

  initBuffers();
  initShaders();
  initTextures();

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.clearDepth(1);
  gl.clearColor(0, 0, 0, 1);

  interact();
  animate();
}
