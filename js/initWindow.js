var gl;
var canvas, width, height;

function GLJSstart() {
  if (!!window.WebGLRenderingContext == true) {
    // Register an event listener to call the resizeCanvas() function
    // each time the window is resized.
    window.addEventListener('resize', initWindow, false);
    initWindow();
  } else {
    // jquery ui
    // $('<div/>').html('<a href='https://superuser.com/questions/836832/how-can-i-enable-webgl-in-my-browser#answer-836833'>Click</a>').dialog();
    let msg = 'Error : Browser might not support WebGL' +
      '\nYou can verify here : https://get.webgl.org/' +
      '\n' +
      '\nIf it does support WebGL then it might just be deactivated' +
      '\nMore info here : https://superuser.com/questions/836832/how-can-i-enable-webgl-in-my-browser#answer-836833';
    alert(msg);
    throw Error(msg);
  }
}

function initWindow() {
  width = Math.ceil($(document.body).innerWidth() - 2);
  height = Math.ceil($(document.body).innerHeight() - 2);
  $('#gljs-canvas').width(width);
  $('#gljs-canvas').height(height);

  try {
    canvas = document.getElementById('gljs-canvas');
    canvas.width = width;
    canvas.height = height;

    gl = canvas.getContext('webgl2');
    let gl2 = !!gl;
    if (!gl2) { //try to fallback to webgl
      gl = canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl') ||
        canvas.getContext('moz-webgl') ||
        canvas.getContext('webkit-3d');
    }
    if (!gl) {
      let msg = 'Error creating WebGL Context : Troubleshooting' +
        '\nMore info here : https://get.webgl.org/troubleshooting/';
      alert(msg);
      throw Error(msg);
    }
    gl.viewportWidth = width;
    gl.viewportHeight = height;
  } catch (e) {
    // some unexpected err
    let msg = 'Error creating WebGL Context : ' + e.toString();
    alert(msg);
    throw Error(msg);
  }

  try {
    initGL()
  } catch (e) {
    // some unexpected err
    let msg = 'Error initialising WebGL graphics context : ' + e.toString();
    alert(msg);
    throw Error(msg);
  }
}

function initGL() {
  addShaderProg('test0.vert', 'test0.frag');
  //initTextures();
  //initBuffers();

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.clearDepth(1);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  //interact();
  //animate();
  drawScene();
}
