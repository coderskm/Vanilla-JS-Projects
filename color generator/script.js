let colorBtn = document.getElementById('color-btn');
let colorCodeDisplay = document.getElementsByTagName("h2");
function colorGenerator() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const colorCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = colorCode;
    colorCodeDisplay[0].innerHTML = colorCode; 

    navigator.clipboard.writeText(colorCode);
} 

colorBtn.addEventListener('click', colorGenerator);

colorGenerator();