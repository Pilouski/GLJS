/*
File Last Updated by
Name: Masato
Date: 28/03/18
Object:
  Comment unnecessary part of code
  Connected interaction to modelMatrix
  TO DO: Precise movement in interaction
*/
var viewMatrix = mat4.create();
var projectionMatrix = mat4.create();
var modelMatrix = mat4.create();
//var worldMatrix = mat4.create();
//var invertedViewMatrix = mat4.create();
//var worldViewMatrix = mat4.create();
//var worldViewProjectionMatrix = mat4.create();
//var tempMatrix = mat4.create();

// function setTimeUniform(time){
//   gl.uniform1f(.currentTime, time);
// }
// function setjTimeUniform(time){
//   gl.uniform1f(.currentJellyfishTime, time);
// }

function initUniforms(){
  //init projection, view and model matrix
  mat4.perspective(projectionMatrix, localParam.camera.fovy, 16./9., localParam.camera.near, localParam.camera.far);
  mat4.fromTranslation(modelMatrix, localParam.camera.translate);
  mat4.fromXRotation(viewMatrix, localParam.camera.rotate[0]);
  mat4.fromYRotation(viewMatrix, localParam.camera.rotate[1]);
  //mat4.fromZRotation(viewMatrix, localParam.camera.rotate[2]);

  //specify uniform data to webgl context
  gl.uniformMatrix4fv(shaderParam.uniformsLocations["projectionMatrix"], false, new Float32Array(projectionMatrix));
  gl.uniformMatrix4fv(shaderParam.uniformsLocations["viewMatrix"], false, new Float32Array(viewMatrix));
  gl.uniformMatrix4fv(shaderParam.uniformsLocations["modelMatrix"], false, new Float32Array(modelMatrix));
}

function setMatrixUniforms(name){

  if(shaderParam.programs[name]){
    gl.useProgram(shaderParam.programs[name])

    mat4.perspective(projectionMatrix, localParam.camera.fovy, 16./9., localParam.camera.near, localParam.camera.far);
    mat4.fromTranslation(modelMatrix, localParam.camera.translate);
    mat4.fromXRotation(viewMatrix, localParam.camera.rotate[0]);
    mat4.fromYRotation(viewMatrix, localParam.camera.rotate[1]);
    //mat4.fromZRotation(viewMatrix, localParam.camera.rotate[2]);

    gl.uniformMatrix4fv(shaderParam.uniformsLocations["projectionMatrix"], false, new Float32Array(projectionMatrix));
    gl.uniformMatrix4fv(shaderParam.uniformsLocations["viewMatrix"], false, new Float32Array(viewMatrix));
    gl.uniformMatrix4fv(shaderParam.uniformsLocations["modelMatrix"], false, new Float32Array(modelMatrix));

  }
  // Set necessary matrices
  //mat4.mul(worldViewMatrix,viewMatrix,worldMatrix);
  //mat4.mul(worldViewProjectionMatrix,projectionMatrix,worldViewMatrix);
  //mat4.invert(invertedViewMatrix,viewMatrix);

  // Set Uniforms
  // gl.uniformMatrix4fv(currentProgram.world, gl.FALSE, new Float32Array(worldMatrix));
  // gl.uniformMatrix4fv(currentProgram.worldView, gl.FALSE, new Float32Array(worldViewMatrix));
  // gl.uniformMatrix4fv(currentProgram.worldViewProj, gl.FALSE, new Float32Array(worldViewProjectionMatrix));
  // gl.uniformMatrix4fv(currentProgram.viewInv, gl.FALSE, new Float32Array(invertedViewMatrix));
}
