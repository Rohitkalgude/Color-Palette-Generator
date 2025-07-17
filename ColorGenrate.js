const Generatebtn = document.getElementById("generate-btn");
const Palettecontainer = document.getElementsByClassName("palette-container");
const Colorbox = document.querySelectorAll(".color-box");

Generatebtn.addEventListener("click", generatepalette);

function generatepalette() {
  const colors = [];

  for (let i = 0; i < Colorbox.length; i++) {
    colors.push(generaterandomcolor());
  }

  updatepalettedisplay(colors);
}

function generaterandomcolor() {
  const letter = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }

  return color;
}

function updatepalettedisplay(colors) {
  Colorbox.forEach((box, index) => {
    const color = colors[index];
    const colorDiv = box.querySelector(".color");
    const hexvalue = box.querySelector(".hex-value");
    const Copybtn = document.querySelector(".copy-btn");

    colorDiv.style.backgroundColor = color;
    hexvalue.textContent = color;

    Copybtn.onclick = () => {
      navigator.clipboard.writeText(color).then(() => {
        Copybtn.title = "copied!";

        setTimeout(() => {
          Copybtn.title = "copy to clipboard";
        }, 1000);
      });
    };
  });
}

generatepalette();
