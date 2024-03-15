let nr = 0;

function rotesteImagine() {
  const imagine = document.getElementById("elice");
  let unghiRotație = (parseInt(imagine.dataset.unghiRotație) || 0) + 540;
  imagine.style.transform = `rotate(${unghiRotație}deg)`;
  imagine.dataset.unghiRotație = unghiRotație;
}
