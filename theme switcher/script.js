
function changeBg(color) {

    if (color == "#0000ff" || color == "#000000" || color == "#A52A2A") {
      document.body.style.backgroundColor = color;
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = color;
      document.body.style.color = "black";
    }
}