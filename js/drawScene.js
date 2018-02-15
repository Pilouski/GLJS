function drawScene() {
  gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
  gl.clear(gl.DEPTH_BUFFER_BIT);

  mat4.perspective(projectionMatrix, localParam.camera.fovy, gl.viewportWidth / gl.viewportHeight, localParam.camera.near, localParam.camera.far);

  //masato

  mat4.translate(viewMatrix, viewMatrix, vec3.clone(localParam.camera.translate));
  mat4.rotateX(viewMatrix, viewMatrix, localParam.camera.rotate[0]);
  mat4.rotateY(viewMatrix, viewMatrix, localParam.camera.rotate[1]);

  localParam.camera.eye = vec3.getTranslation();

  setMatrixUniforms();

  gl.flush();
}
