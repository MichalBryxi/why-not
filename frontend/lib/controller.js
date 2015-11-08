var socket = io();
var decimals = 2;
var multiplier = 10;
var speed = 3;
var cnt = 0;
var controllerId = 0;
var cidButtons = Array.prototype.slice.apply(document.getElementById('controller-id-selector').querySelectorAll('button'));

function cidButtonHandler() {
  var buttonIndex = cidButtons.indexOf(this);
  cidButtons[controllerId].classList.remove('btn-primary');
  cidButtons[controllerId].classList.add('btn-default');
  this.classList.remove('btn-default');
  this.classList.add('btn-primary');
  controllerId = buttonIndex;
}

cidButtons.forEach(function(button) {
  button.addEventListener('click', cidButtonHandler.bind(button), false);
});

var sendEvent = _.throttle(function (e) {
  var newData = {
    x: e.rotationRate.alpha,
    y: e.rotationRate.beta,
    z: e.rotationRate.gamma,
    id: controllerId
  };

  document.getElementById("accelerationX").innerHTML = _.round(e.accelerationIncludingGravity.x, decimals);
  document.getElementById("accelerationY").innerHTML = _.round(e.accelerationIncludingGravity.y, decimals);
  document.getElementById("accelerationZ").innerHTML = _.round(e.accelerationIncludingGravity.z, decimals);
  document.getElementById("rotationAlpha").innerHTML = _.round(e.rotationRate.alpha, decimals);
  document.getElementById("rotationBeta").innerHTML = _.round(e.rotationRate.beta, decimals);
  document.getElementById("rotationGamma").innerHTML = _.round(e.rotationRate.gamma, decimals);

  socket.emit("controller2server", newData);
}, 50);

window.addEventListener("devicemotion", sendEvent, false);

// DEMO mode

function sin(x) {
  return Math.sin(x * (Math.PI / 180)) * multiplier;
}
function cos(x) {
  return Math.cos(x * (Math.PI / 180)) * multiplier;
}

document.getElementById("demoOn").addEventListener("click", function(){
  setInterval(function () {
    cnt += speed;

    sendEvent({
      rotationRate: {
        alpha: sin(cnt),
        beta: cos(cnt),
        gamma: cos(cnt)
      },
      accelerationIncludingGravity: {
        x: sin(cnt),
        y: cos(cnt),
        z: cos(cnt)
      }
    });
  }, 200);
});
