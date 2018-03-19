//#version 330

attribute vec3 v_position;
//varying vec3 v_color;

void main() {
   gl_Position = vec4(v_position, 1.0);
}
