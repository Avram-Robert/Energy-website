let rotationDegrees = 0;

function rotateBlades() {
  rotationDegrees += 50;
  const windmill = document.querySelector(".windmill");
  windmill.style.transform = `rotate(${rotationDegrees}deg)`;
}
