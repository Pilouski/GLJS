/*
File Last Updated by
Name: Masato
Date: 17/03/18
Object:
  Comment unnecessary part of code
  TO DO: Connect layer of buffers with global parameters
*/
function drawScene() {
  gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  /*mat4.perspective(projectionMatrix, localParam.camera.fovy, gl.viewportWidth / gl.viewportHeight, localParam.camera.near, localParam.camera.far);

  mat4.translate(viewMatrix, viewMatrix, vec3.clone(localParam.camera.translate));
  mat4.rotateX(viewMatrix, viewMatrix, localParam.camera.rotate[0]);
  mat4.rotateY(viewMatrix, viewMatrix, localParam.camera.rotate[1]);

  mat4.getTranslation(localParam.camera.eye, viewMatrix);

  setMatrixUniforms();
*/
  drawBuffer('test0');
  //gl.flush();
}
