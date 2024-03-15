// Așteaptă ca documentul să se încarce complet
document.addEventListener("DOMContentLoaded", function () {
    // Încarcă conținutul din "loading-screen.html" în div-ul "loading-screen"
    var loadingScreen = document.getElementById("loading-screen");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "loading-screen.html", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        loadingScreen.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  });

  setTimeout(function () {
    var header = document.querySelector("header");
    var loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "none";
    header.style.display = "block";
  }, 2000);
