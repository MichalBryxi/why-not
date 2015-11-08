var socket = io();

socket.on("server2display", function(msg) {
  var x = msg.message.x * 90 - 2400,
      y = msg.message.z * 20 + 150,
      z = 0;
      id = msg.message.id,
      row = rows[id];

  console.log(rows);
  // row.l.light.x = x;
  // row.l.light.y = y;
  // row.l.light.z = z;
  // row.r.light.x = x;
  // row.r.light.y = y;
  // row.r.light.z = z - 1500;

  row.l.position.x = x;
  row.l.position.y = y;
  row.l.position.z = z;
  row.r.position.x = x;
  row.r.position.y = y;
  row.r.position.z = z - 1500;

  // pointLightL.position.x = x;
  // pointLightL.position.y = y;
  // pointLightL.position.z = z;
  //
  // pointLightR.position.x = x;
  // pointLightR.position.y = y;
  // pointLightR.position.z = z-1500;
  //
  // particlesL.position.x = x;
  // particlesL.position.y = y;
  // particlesL.position.z = z;
  //
  // particlesR.position.x = x;
  // particlesR.position.y = y;
  // particlesR.position.z = z-1500;
});
