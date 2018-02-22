//#version 330

attribute vec3 v_position;
//varying vec3 v_color;

void main() {
   gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
   gl_PointSize = 10.0;
}
