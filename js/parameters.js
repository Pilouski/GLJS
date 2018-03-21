var localParam = new LocalParam();
var shaderParam = new ShaderParam();
var bufferParam = new BufferParam();

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

function ShaderParam() {
  this.extensions = ['.vert', '.frag', '.v', '.f', '.vertex', '.fragment'];
  this.shaders = {
    test0 : {
      vertex : 'test0.vert',
      fragment : 'test0.frag'
    }
  };
  this.programs = {};
  this.attributeslocations = {
    v_position : undefined
  };
}

function BufferParam() {
  this.vertexPositionsBuffers = {};
}
