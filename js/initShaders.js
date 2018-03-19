/*
File Last Updated by
Name: Masato
Date: 17/03/18
Object:
  Comment unnecessary part of code
  Fix: Did not compile vertex shader.
  TO DO: Connect layer of buffers with global parameters
*/


/*const SHADER_REGEX = (function (){
  let reg = '([a-zA-Z0-9\s_\\.\-:])+(';
  for (let i=0;i<shaderParam.extensions.length;i++) {
    reg += shaderParam.extensions[i] + (i < shaderParam.extensions.length - 1 ? '|' : ')$');
  }
  return RegExp(reg, 'g');
  // /([a-zA-Z0-9\s_\\.\-:])+(.vert|.frag|...)$/g;
})();
*/
function addShaderProg(vertex, fragment, name) {
/*  if (vertex == null || fragment == null)
    return null;
  if (!vertex.match(SHADER_REGEX) || !fragment.match(SHADER_REGEX))
    return undefined;
*/
  loadShaders(vertex, fragment, name, onShadersLoadedCallback);
}

function loadShaders(vertex, fragment, name, callback) {
  $.ajax({
    dataType: 'text',
    url: 'shaders/' + vertex,
    //type : 'POST', //(python3) html.server does not support 'POST'
    success: function(resV) {
      $.ajax({
        dataType: 'text',
        url: 'shaders/' + fragment,
        //type : 'POST', //(python3) html.server does not support 'POST'
        success: function(resF) {
          if (callback) {
            shaderParam.programs[name] = callback(resV, resF);
            $('#gljs-canvas').trigger('GLJSProgramLoaded_'+name, shaderParam.programs[name]);
          }
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

    gl.compileShader(vertexShader);
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
