var light;

function initScene () {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.BasicShadowMap;
  container.appendChild( renderer.domElement );

  scene = new THREE.Scene();

  controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.enablePan = false;
  controls.minDistance = 1000.0;
  controls.maxDistance = 5000.0;
  controls.maxPolarAngle = Math.PI * 0.495;
  controls.center.set( 0, 500, 0 );

  scene.add( new THREE.AmbientLight( 0x444444 ) );

  light = new THREE.DirectionalLight( 0xffffbb, 1 );
  light.position.set( 1000, 1000, - 1000 );
  scene.add( light );
}
