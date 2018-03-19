/*
File Last Updated by
Name: Masato
Date: 22/02/18
Object:
  Fix "fileExtensions" to Object
  Add "extension" member to ShaderParam
*/

var fileExtensions = {};
//Object.freeze(fileExtensions);

var localParam = new LocalParam();
var shaderParam = new ShaderParametersData();

function LocalParam() {
  //camera default
  this.camera = {
    near: 5,
    far: 530,
    fovy: 40,
    rotate: [-0.3, 0, 0],
    translate: [0, 0, -280],
    eye: [0, 0, -64]
  };

  //LOD
  this.LODBias = 8.0;

  //time related
  this.millis = 0.0;
  this.elapsed = 1.0;
  this.timeNow = 0.0;
  this.currentTime = 0.0;
  this.lastTime = 0.0;

  //frame related
  this.fps = 60.0;
  this.fpsAverage = 60.0;

}

function ShaderParametersData(){

  this.extensions = {};

  this.program = {};
  this.vertexShader = {};
  this.fragmentShader = {};

  this.attributes = {};
  this.attributes.vertexPositions = {};
  this.attributes.vertexPositions.data = [];
  this.attributes.vertexPositions.location = {};

  this.attributes.textureCoordinates = {};
  this.attributes.textureCoordinates.data = [];
  this.attributes.textureCoordinates.location = {};

  this.attributes.index = [];

}
