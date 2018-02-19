const SHADER_TYPE_FRAGMENT = "x-shader/x-fragment";
const SHADER_TYPE_VERTEX = "x-shader/x-vertex";
var shaders = {};

function addShaderProg(gl, vertex, fragment) {

  loadShader(vertex, SHADER_TYPE_VERTEX);
  loadShader(fragment, SHADER_TYPE_FRAGMENT);

  var vertexShader = getShader(gl, vertex);
  var fragmentShader = getShader(gl, fragment);

  var prog = gl.createProgram();
  gl.attachShader(prog, vertexShader);
  gl.attachShader(prog, fragmentShader);
  gl.linkProgram(prog);

  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    alert("Could not initialise main shaders");
  }

  return prog;
}

function loadShader(file, type) {
  var cache, shader;

  $.ajax({
    async: false, // need to wait... todo: deferred?
    url: "/shaders/" + file, //todo: use global config for shaders folder?
    success: function(result) {
      cache = {
        script: result,
        type: type
      };
    }
  });

  // store in global cache
  shaders[file] = cache;
}

function getShader(gl, id) {

  //get the shader object from our main.shaders repository
  var shaderObj = shaders[id];
  var shaderScript = shaderObj.script;
  var shaderType = shaderObj.type;

  //create the right shader
  var shader;
  if (shaderType == "x-shader/x-fragment") {
    shader = gl.createShader(gl.FRAGMENT_SHADER);
  } else if (shaderType == "x-shader/x-vertex") {
    shader = gl.createShader(gl.VERTEX_SHADER);
  } else {
    return null;
  }

  //wire up the shader and compile
  gl.shaderSource(shader, shaderScript);
  gl.compileShader(shader);

  //if things didn't go so well alert
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(gl.getShaderInfoLog(shader));
    return null;
  }

  //return the shader reference
  return shader;
}
