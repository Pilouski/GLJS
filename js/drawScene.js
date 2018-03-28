/*
File Last Updated by
Name: Masato
Date: 28/03/18
Object:
  Comment unnecessary part of code
  Connected interaction to modelMatrix
  TO DO: Precise movement in interaction
*/
function drawScene() {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.clearDepth(1);
  gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  /*mat4.perspective(projectionMatrix, localParam.camera.fovy, gl.viewportWidth / gl.viewportHeight, localParam.camera.near, localParam.camera.far);

  mat4.translate(viewMatrix, viewMatrix, vec3.clone(localParam.camera.translate));
  mat4.rotateX(viewMatrix, viewMatrix, localParam.camera.rotate[0]);
  mat4.rotateY(viewMatrix, viewMatrix, localParam.camera.rotate[1]);

  mat4.getTranslation(localParam.camera.eye, viewMatrix);

  setMatrixUniforms();
*/
  setMatrixUniforms('test0');
  drawBuffer('test0');
  //gl.flush();
}
