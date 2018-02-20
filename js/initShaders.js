const SHADER_REGEX = (function (a){
  let reg = '([a-zA-Z0-9\s_\\.\-:])+(';
  for (let i=0;i<a.length;i++) {
    reg += a[i] + (i < a.length - 1 ? '|' : ')$');
  }
  return RegExp(reg, 'g');
  // /([a-zA-Z0-9\s_\\.\-:])+(.vert|.frag|...)$/g;
})(shaderParam.extensions);

function addShaderProg(vertex, fragment, name) {
  if (vertex == null || fragment == null)
    return null;
  if (!vertex.match(SHADER_REGEX) || !fragment.match(SHADER_REGEX))
    return undefined;

  loadShaders(vertex, fragment, name, onShadersLoadedCallback);
}

function loadShaders(vertex, fragment, name, callback) {
  $.ajax({
    dataType: 'text',
    url: 'shaders/' + vertex,
    type : 'POST',
    success: function(resV) {
      $.ajax({
        dataType: 'text',
        url: 'shaders/' + fragment,
        type : 'POST',
        success: function(resF) {
          if (callback)
            shaderParam.program[name] = callback(resV, resF);
        }
      });
    }
  });
}

function onShadersLoadedCallback(vertex, fragment) {

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertexShader, vertex);
    gl.shaderSource(fragmentShader, fragment);

    gl.compileShader(fragmentShader);
    gl.compileShader(fragmentShader);

    var error = false;

    // Compile vertex shader
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(vertexShader));
        error = true;
    }

    // Compile fragment shader
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(vertexShader));
        error = true;
    }

    // Create shader program consisting of shader pair
    program = gl.createProgram();

    // Attach shaders to the program; these methods do not have a return value
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    // Link the program - returns 0 if an error occurs
    if (gl.linkProgram(program) == 0) {
        console.log('gl.linkProgram(program) failed with error code 0.');
        error = true;
    }

    if (error)  {
        console.log('Failed to initialize shader.');
        return null;
    } else {
        console.log('Shader successfully created.');
        return program; // Return created program
    }
}
