/*
File Last Updated by
Name: Masato
Date: 17/03/18
Object:
  Comment unnecessary part of code
  Did changes to at least display one red point on the center of the screen.
  TO DO: Connect layer of buffers with global parameters
*/

//#version 330

//attribute vec3 v_position;
//varying vec3 v_color;

void main() {
   gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
   gl_PointSize = 10.0;
}
