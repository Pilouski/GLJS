// Original code by Evgeny Demidov
// http://www.ibiblio.org/e-notes/webgl/gpu/n-toy.html

/*
File Last Updated by
Name: Masato
Date: 28/03/18
Object:
  Comment unnecessary part of code
  Connected interaction to modelMatrix
  Added drawScene callback in mousedrag event
  TO DO: Precise movement in interaction
*/

var drag = 0;
var rxOffs = 0;
var ryOffs = 0;
var txOffs = 0;
var tyOffs = 0;
var tzOffs = 0;

var mouseXY = vec3.create();

function interact(callback) {
  canvas.onmousedown = function(ev) {
    drag = 1;
    rxOffs = ev.clientX / 100 - localParam.camera.rotate[1];
    ryOffs = ev.clientY / 100 - localParam.camera.rotate[0];
    txOffs = +ev.clientX / 10 - localParam.camera.translate[0];
    tyOffs = +ev.clientY / 10 - localParam.camera.translate[1];
    tzOffs = +ev.clientY / 10 + ev.clientX / 10 - localParam.camera.translate[2];
  }
  canvas.onmouseup = function(ev) {
    drag = 0;
    rxOffs = ev.clientX / 100;
    ryOffs = ev.clientY / 100;
    txOffs = +ev.clientX / 10;
    tyOffs = +ev.clientY / 10;
    tzOffs = +ev.clientY / 10 + ev.clientX / 10;
  }
  canvas.onmousemove = function(ev) {
    if (drag == 0) return;
    if (ev.altKey) {
      localParam.camera.translate[2] = +ev.clientY / 10 + ev.clientX / 10 - tzOffs;
    } else if (ev.shiftKey) {
      localParam.camera.translate[0] = (ev.clientX / 10 - txOffs);
      localParam.camera.translate[1] = (ev.clientY / 10 - tyOffs);
    } else {
      localParam.camera.rotate[1] = (ev.clientX / 100 - rxOffs);
      localParam.camera.rotate[0] = -(ev.clientY / 100 - ryOffs);
    }
    if(callback){
      callback();
    }
  }
}
