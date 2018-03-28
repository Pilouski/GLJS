//#version 330

attribute vec3 v_position;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
varying vec3 v_color;

void main(void) {
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(v_position, 1.0) ;
  gl_PointSize = 10.0;
  v_color =  (0.5 * (v_position + 1.0));
}
