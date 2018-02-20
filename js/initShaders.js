const SHADER_TYPE_FRAGMENT = "x-shader/x-fragment";
const SHADER_TYPE_VERTEX = "x-shader/x-vertex";
const SHADER_REGEX = /([a-zA-Z0-9\s_\\.\-:])+(.vert|.frag)$/g;
var shadersCache = {};

function addShaderProg(vertex, fragment) {
  if (vertex == null || fragment == null)
    return null;
  if (!vertex.match(SHADER_REGEX) || !fragment.match(SHADER_REGEX))
    return undefined;

  loadShaders(vertex, fragment, onShadersLoadedCallback.bind(null, vertex, fragment));
}

function loadShaders(vertex, fragment, callback) {
  loadShader(vertex, SHADER_TYPE_VERTEX,
    loadShader.bind(null, fragment, SHADER_TYPE_FRAGMENT,
      callback
    )
  );
}

function loadShader(file, type, callback) {
  $.ajax({
    dataType: "text",
    url: "shaders/" + file,
    success: function(result) {
      // store in global cache
      shadersCache[file] = {
        script: result,
        type: type
      };
      if (callback)
        callback();
    }
  });
}

function onShadersLoadedCallback(vertex, fragment) {
  var vertexShader = getShader(vertex);
  var fragmentShader = getShader(fragment);

  var prog = gl.createProgram();
  gl.attachShader(prog, vertexShader);
  gl.attachShader(prog, fragmentShader);
  gl.linkProgram(prog);

  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    alert("Could not initialise main shaders");
  }

  return prog;
}

function getShader(id) {

  //get the shader object from our main.shaders repository
  var shaderObj = shadersCache[id];
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
    alert("Error in "+id);
    return null;
  }

  //return the shader reference
  return shader;
}
