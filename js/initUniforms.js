var viewMatrix = mat4.create();
var projectionMatrix = mat4.create();
var worldMatrix = mat4.create();
var invertedViewMatrix = mat4.create();
var worldViewMatrix = mat4.create();
var worldViewProjectionMatrix = mat4.create();
var tempMatrix = mat4.create();


// function setTimeUniform(time){
//   gl.uniform1f(.currentTime, time);
// }
// function setjTimeUniform(time){
//   gl.uniform1f(.currentJellyfishTime, time);
// }

function setMatrixUniforms(){
  // Set necessary matrices
  mat4.mul(worldViewMatrix,viewMatrix,worldMatrix);
  mat4.mul(worldViewProjectionMatrix,projectionMatrix,worldViewMatrix);
  mat4.invert(invertedViewMatrix,viewMatrix);

  // Set Uniforms
  gl.uniformMatrix4fv(.world, gl.FALSE, new Float32Array(worldMatrix));
  gl.uniformMatrix4fv(.worldView, gl.FALSE, new Float32Array(worldViewMatrix));
  gl.uniformMatrix4fv(.worldViewProj, gl.FALSE, new Float32Array(worldViewProjectionMatrix));
  gl.uniformMatrix4fv(.viewInv, gl.FALSE, new Float32Array(invertedViewMatrix));
}
