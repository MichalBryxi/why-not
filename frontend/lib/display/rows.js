var particleSystem;
var clock = new THREE.Clock(true);
var pointLightR;
var pointLightL;
var sphere;

// particlesL passed during each spawned
var particlesL = {
  position: new THREE.Vector3(),
  positionRandomness: 0,
  velocity: new THREE.Vector3(),
  velocityRandomness: 0,
  color: 0xff99ff,
  colorRandomness: .5,
  turbulence: 0,
  lifetime: 15,
  size: 2,
  sizeRandomness: 2
};
var particlesR = {
  position: new THREE.Vector3(),
  positionRandomness: 0,
  velocity: new THREE.Vector3(),
  velocityRandomness: 0,
  color: 0xff99ff,
  colorRandomness: .5,
  turbulence: 0,
  lifetime: 15,
  size: 2,
  sizeRandomness: 2
};

var spawnerparticlesL = {
  spawnRate: 1,
  horizontalSpeed: 0,
  verticalSpeed: 0,
  timeScale: 1
}

function initFireflies () {
  function createLight( color ) {
    var newLight = new THREE.PointLight( color, 1, 30 );
    newLight.castShadow = true;
    newLight.shadowCameraNear = 1;
    newLight.shadowCameraFar = 300000;
    // newLight.shadowCameraVisible = true;
    newLight.shadowMapWidth = 204;
    newLight.shadowMapHeight = 102;
    newLight.shadowBias = 0.1;
    newLight.shadowDarkness = 0.2;

    var geometry = new THREE.SphereGeometry( 20, 16, 16 );
    var material = new THREE.MeshBasicMaterial( { color: color } );
    var sphere = new THREE.Mesh( geometry, material );
    newLight.add( sphere );

    return newLight
  }
  pointLightL = createLight( 0xaa0000 );
  scene.add( pointLightL );

  pointLightR = createLight( 0x0000aa );
  scene.add( pointLightR );
}

function initParticles () {
  particleSystem = new THREE.GPUParticleSystem({
    maxParticles: 2500
  });
  scene.add( particleSystem);


}
