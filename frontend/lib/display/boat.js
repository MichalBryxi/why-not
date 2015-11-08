function initBoat () {
  var loader = new THREE.STLLoader();
  loader.load( './models/rowing_boat.stl', function ( geometry ) {

    var material = new THREE.MeshPhongMaterial( {
				color: 0x966F33,
				shininess: 10,
				specular: 0x111111,
				shading: THREE.SmoothShading
			} );
    var mesh = new THREE.Mesh( geometry, material );

    mesh.position.set( 0, -120, 0 );
    mesh.rotation.set( - Math.PI / 2, 0, 0 );
    mesh.scale.set( 20.1, 20.1, 20.1 );

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    scene.add( mesh );

  } );
}

function initPony () {
  var loader = new THREE.STLLoader();
  loader.load( './models/applejack.stl', function ( geometry ) {

    var material = new THREE.MeshPhongMaterial( {
				color: 0xFFC0CB,
				shininess: 10,
				specular: 0x111111,
				shading: THREE.SmoothShading
			} );
    var mesh = new THREE.Mesh( geometry, material );

    mesh.position.set( -1200, 0, 200 );
    mesh.rotation.set( - Math.PI / 2, 0, Math.PI/2 );
    mesh.scale.set( 20.1, 20.1, 20.1 );

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    scene.add( mesh );
  } );
}
