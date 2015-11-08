var camera, scene, renderer;

function initCamera (isometric) {
  if (settings.isometricCamera) {
    var m = 2;
    camera = new THREE.OrthographicCamera( -window.innerWidth*m, window.innerWidth*m, window.innerHeight*m, -window.innerHeight*m, 1, 1000000 );
    camera.position.set( -2300, 100, 2000 );
  } else {
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.5, 3000000 );
    camera.position.set( 1000, 750, 1000 );
  }
}
