function mainApp() {

  //Retrieve Canvas Element
  var canvas = document.getElementById('webCanvas');

  //Get WebGL Context
  var gl = getWebGLContext(canvas);
  if(!gl) {
    console.log("Unable to get WebGL Context");
    return;
  }

  //Clear Canvas Color
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  //Clear Canvas Element
  gl.clear(gl.COLOR_BUFFER_BIT);
}
