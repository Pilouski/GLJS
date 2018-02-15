function drawScene() {
  gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
  gl.clear(gl.DEPTH_BUFFER_BIT);

  mat4.perspective(projectionMatrix, localParam.camera.fovy, gl.viewportWidth / gl.viewportHeight, localParam.camera.near, localParam.camera.far);

  mat4.identity(worldMatrix);
  mat4.identity(viewMatrix);

  mat4.translate(viewMatrix, vec3.clone(localParam.camera.translate));
  viewMatrix = M4x4.rotate(localParam.camera.rotate[0], V3.$(1, 0, 0), viewMatrix);
  viewMatrix = M4x4.rotate(localParam.camera.rotate[1], V3.$(0, 1, 0), viewMatrix);

  localParam.camera.eye = V3.$(-invertedViewMatrix[12], -invertedViewMatrix[13], -invertedViewMatrix[14]);

  setMatrixUniforms();

  gl.flush();
}
