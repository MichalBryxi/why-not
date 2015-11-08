if ( ! Detector.webgl ) {
  Detector.addGetWebGLMessage();
  document.getElementById( 'container' ).innerHTML = "";
}

var container;
var tick = 0;
init();
animate();

function init() {
  initCamera();
  initScene();
  initControls();
  initWater();
  initSkyBox();
  initBoat();
  initFireflies();
  initParticles();
}

function animate() {
  requestAnimationFrame( animate );
  render();
}

function render() {
  var time = performance.now() * 0.001;

  var delta = clock.getDelta() * spawnerparticlesL.timeScale;
  tick += delta;

  if (tick < 0) tick = 0;

  if (delta > 0) {
    particleSystem.spawnParticle(particlesL);
    particleSystem.spawnParticle(particlesR);
  }

  particleSystem.update(tick);


  water.material.uniforms.time.value += 1.0 / 60.0;
  controls.update();
  water.render();
  renderer.render( scene, camera );

}
