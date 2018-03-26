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
  bufferParam.vertexPositionsBuffers[name] = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, bufferParam.vertexPositionsBuffers[name]);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
  bufferParam.vertexPositionsBuffers[name].itemSize = 3;
  bufferParam.vertexPositionsBuffers[name].numItems = data.length / bufferParam.vertexPositionsBuffers[name].itemSize;

  gl.bindBuffer(gl.ARRAY_BUFFER, null); // unbind
}

// function initBuffers(){
//   var bufferName = 0;
//   var bufferData = {};
//   bufferData.vertexPositions = [0, 0, 0];
//   initBuffer(bufferName, bufferData);
// }

function drawBuffer(name) {
  if (bufferParam.vertexPositionsBuffers[name]) {
    gl.useProgram(shaderParam.programs[name]);

      aPositionLoc = shaderParam.attributeslocations.v_position;
      gl.bindBuffer(gl.ARRAY_BUFFER, bufferParam.vertexPositionsBuffers[name]);
        gl.enableVertexAttribArray(aPositionLoc)
        gl.vertexAttribPointer(aPositionLoc, bufferParam.vertexPositionsBuffers[name].itemSize, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);

<<<<<<< HEAD
        gl.drawArrays(gl.POINTS, 0, bufferParam.vertexPositionsBuffers[name].numItems);
=======
    gl.drawArrays(gl.TRIANGLES, 0, vertexPositionBuffers[name].numItems);
>>>>>>> draw triangle instead of points
    //gl.drawArrays(gl.TRIANGLES, vertexPositionBuffers[name].numItems, gl.UNSIGNED_SHORT, 0);
    gl.useProgram(null);
  }

}
