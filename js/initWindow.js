/*
File Last Updated by
Name: Masato
Date: 28/03/18
Object:
  Connected interaction to modelMatrix
  TO DO: Precise movement in interaction
*/

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
      let msg = 'Error creating GLJS Context : Troubleshooting' +
        '\nMore info here : https://get.webgl.org/troubleshooting/';
      alert(msg);
      throw Error(msg);
    }
    gl = WebGLDebugUtils.makeDebugContext(gl); //debug purpose
    gl.viewportWidth = width;
    gl.viewportHeight = height;
  } catch (e) {
    // some unexpected err
    let msg = 'Error creating GLJS Context : ' + e.toString();
    alert(msg);
    throw Error(msg);
  }

  try {
    //te be upgraded
    $('#gljs-canvas').one('GLJSProgramLoaded_test0', function(ev, program) {
      initGL(program);
    })

    addShaderProg('test0.vert', 'test0.frag', 'test0');
  } catch (e) {
    // some unexpected err
    let msg = 'Error initialising GLJS graphics context : ' + e.toString();
    alert(msg);
    throw Error(msg);
  }
}

function initGL(program) {

  $('#gljs-canvas').one('GLJSProgramLoaded_test0', function(ev, program) {
    insideEvent();
  })
  addShaderProg('test0.vert', 'test0.frag', 'test0');
  //initTextures();
}

function insideEvent() {
  //gl.depthFunc(gl.LEQUAL);
  //gl.enable(gl.BLEND);
  //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  interact(drawScene);
  //animate();

  /* get attributes &  loc */
  gl.useProgram(program);
    shaderParam.attributesLocations["v_position"] = gl.getAttribLocation(program, "v_position");
    shaderParam.uniformsLocations["projectionMatrix"] = gl.getUniformLocation(program, "projectionMatrix");
    shaderParam.uniformsLocations["viewMatrix"] = gl.getUniformLocation(program, "viewMatrix");
    shaderParam.uniformsLocations["modelMatrix"] = gl.getUniformLocation(program, "modelMatrix");

    initBuffer('test0', [-1.,-1, 0, 1, -1, 0, 0, 1, 0]);
    initUniforms();
  gl.useProgram(null);
  drawScene();
  //draw();
}
