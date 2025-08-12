let count = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}

const icones = document.querySelectorAll(".icones");

icones.forEach((icone) => {
  icone.addEventListener("click", () => {
    const nome = icone.getAttribute("name");
    let url = "";
    if (nome === "logo-linkedin") {
      url = "https://www.linkedin.com/in/gabriel-reis-9aab63239/";
      window.open(url, "_blank");
    } else if (nome === "logo-github") {
      url = "https://github.com/Gabriel-Reis021";
      window.open(url, "_blank");
    } else if (nome === "logo-instagram") {
      url = "https://www.instagram.com/gabrielsantzs_/";
      window.open(url, "_blank");
    } else if (nome === "logo-whatsapp") {
      url = "https://wa.me/21974214951";
      window.open(url, "_blank");
    }
  });
});
