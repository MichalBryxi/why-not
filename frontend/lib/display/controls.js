var settings = {
  isometricCamera: false,
  morePonnies: false
};

function initControls () {
  var gui = new dat.GUI();
  gui.add(settings, 'isometricCamera').onChange(function (newValue) {
    initCamera();
  });
  gui.add(settings, 'morePonnies').onChange(function (newValue) {
    initPony();
  });
}
