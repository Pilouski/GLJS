/*
File Last Updated by
Name: Masato
Date: 17/03/18
Object:
  Comment unnecessary part of code
  Did changes to display at least one red point without buffers.
  TO DO: Connect layer of buffers with global parameters
*/

var vertexPositionBuffers = {};
var vertexNormalBuffers = {};
var vertexColorBuffers = {};
var vertexTextureCoordBuffers = {};
var vertexIndexBuffers = {};

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

function initBuffer(name) {
  vertexPositionBuffers[name] = gl.createBuffer();
  //vertexNormalBuffers[name] = gl.createBuffer();
  //vertexColorBuffers[name] = gl.createBuffer();
  //vertexTextureCoordBuffers[name] = gl.createBuffer();
  //vertexIndexBuffers[name] = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[name]);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(shaderParam.attributes.vertexPositions.data), gl.STATIC_DRAW);
  vertexPositionBuffers[name].itemSize = 3;
  vertexPositionBuffers[name].numItems = shaderParam.attributes.vertexPositions.data.length / vertexPositionBuffers[name].itemSize;

  // gl.bindBuffer(gl.ARRAY_BUFFER, vertexNormalBuffers[name]);
  // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.vertexNormals), gl.STATIC_DRAW);
  // vertexNormalBuffers[name].itemSize = 3;
  // vertexNormalBuffers[name].numItems = data.vertexNormals.length / 3;

  //gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffers[name]);
  //gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.vertexColors), gl.STATIC_DRAW);
  //vertexColorBuffers[name].itemSize = 3;
  //vertexColorBuffers[name].numItems = data.vertexColors.length / 3;

  // gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[name]);
  // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.vertexTextureCoords), gl.STATIC_DRAW);
  // vertexTextureCoordBuffers[name].itemSize = 3;
  // vertexTextureCoordBuffers[name].numItems = data.vertexTextureCoords.length / 3;

  // gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertexIndexBuffers[name]);
  // gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(data.indices), gl.STREAM_DRAW);
  // vertexIndexBuffers[name].itemSize = 1;
  // vertexIndexBuffers[name].numItems = data.indices.length;

}

function initBuffers(name){
  shaderParam.attributes.vertexPositions.data = [-1.0, -1.0, 0.0, 1.0, -1.0, 0.0, 0.0, 1.0, 0.0];
  initBuffer(name);
}

function drawBuffer(name) {
  if (vertexPositionBuffers[name]) {
    gl.useProgram(shaderParam.program[name])
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[name]);

    //this must be placed elsewhere
    shaderParam.attributes.vertexPositions.location = gl.getAttribLocation(shaderParam.program[name], "v_position");

    gl.vertexAttribPointer(shaderParam.attributes.vertexPositions.location, vertexPositionBuffers[name].itemSize, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(shaderParam.attributes.vertexPositions.location);
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertexNormalBuffers[name]);
    // gl.vertexAttribPointer(currentProgram.vertexNormalAttribute, vertexNormalBuffers[name].itemSize, gl.FLOAT, false, 0, 0);

    //gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffers[name]);
    //gl.vertexAttribPointer(currentProgram.vertexColorAttribute, vertexColorBuffers[name].itemSize, gl.FLOAT, false, 0, 0);

    // gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[name]);
    // gl.vertexAttribPointer(currentProgram.textureCoordAttribute, vertexTextureCoordBuffers[name].itemSize, gl.FLOAT, false, 0, 0);

    // gl.bindBuffer(gl.ARRAY_BUFFER, skinWeightBuffer[name]);
    // gl.vertexAttribPointer(currentProgram.skinWeightAttribute, skinWeightBuffer[name].itemSize, gl.FLOAT, false, 0, 0);

    //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertexIndexBuffers[name]);

    gl.drawArrays(gl.TRIANGLES, 0, vertexPositionBuffers[name].numItems);
    //gl.drawArrays(gl.TRIANGLES, vertexPositionBuffers[name].numItems, gl.UNSIGNED_SHORT, 0);
  }

}
