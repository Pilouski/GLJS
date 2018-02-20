#version 300 es

attribute vec3 v_position;
out vec3 v_color;

void main() {
   gl_Position = vec4(a_position, 1.0);
}
