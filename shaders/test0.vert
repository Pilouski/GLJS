//#version 330

attribute vec3 v_position;
//varying vec3 v_color;

void main(void) {
   gl_Position = vec4(v_position, 1.0);
   gl_PointSize = 10.0;
}
