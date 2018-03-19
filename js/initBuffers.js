/*
File Last Updated by
Name: Masato
Date: 17/03/18
Object:
  Comment unnecessary part of code
  Did changes to display at least one red point without buffers.
  TO DO: Connect layer of buffers with global parameters
*/
// var vertexNormalBuffers = {};
// var vertexColorBuffers = {};
// var vertexTextureCoordBuffers = {};
// var vertexIndexBuffers = {};
//var buffersOK = {};

//load JSON object
//{
//  vertexPositions : []
//  vertexNormals : []
//  vertexColors :  []
//  vertexTextureCoords : []
//  indices : []
//}
// function loadObject(name, file) {
//   var request = new XMLHttpRequest();
//   request.open('GET', file);
//   request.onreadystatechange = function() {
//     if (request.readyState == 4) {
//       initBuffer(name, JSON.parse(request.responseText));
//       buffersOK[name] = 1;
//     }
//   };
//   request.send();
// }

function initBuffer(name, data) {
  var vertexPositionsBuffer = bufferParam.vertexPositionsBuffers[name];
  vertexPositionsBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionsBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
  vertexPositionBuffers[name].itemSize = 3;
  vertexPositionBuffers[name].numItems = data.vertexPositions.length / 3;

  gl.bindBuffer(gl.ARRAY_BUFFER, null); // unbind
}

// function initBuffers(){
//   var bufferName = 0;
//   var bufferData = {};
//   bufferData.vertexPositions = [0, 0, 0];
//   initBuffer(bufferName, bufferData);
// }

function drawBuffer(name, currentProgram) {
  var vertexPositionsBuffer = bufferParam.vertexPositionsBuffers[name];
  if (vertexPositionsBuffer) {
    gl.useProgram(currentProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionsBuffer);
    gl.vertexAttribPointer(vertexPositionsBuffer, vertexPositionsBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.POINTS, 0, 1);
    //gl.drawArrays(gl.TRIANGLES, vertexPositionBuffers[name].numItems, gl.UNSIGNED_SHORT, 0);
    gl.useProgram(null);
  }

}
