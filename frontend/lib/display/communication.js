var socket = io();

socket.on("server2display", function(msg) {
  var x = msg.message.x * 90 - 2400,
      y = msg.message.z * 20 + 150,
      z = 0;

  pointLightL.position.x = x;
  pointLightL.position.y = y;
  pointLightL.position.z = z;

  pointLightR.position.x = x;
  pointLightR.position.y = y;
  pointLightR.position.z = z-1500;

  particlesL.position.x = x;
  particlesL.position.y = y;
  particlesL.position.z = z;

  particlesR.position.x = x;
  particlesR.position.y = y;
  particlesR.position.z = z-1500;
});
