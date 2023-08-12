let charVal = document.getElementById("input-num");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let chars = `abcdefghijklmnopqrstuvwxyz`;
  let numbers = `0123456789`;
  let special = `!@#$%^&*()?`;
  let password = "";
  if (charVal.value < 8|| charVal.value>50) {
    alert(`password length should be less than 8 or greater than 50`);
  } else {
    let i = 0;
    while (i < charVal.value) {
      password += chars[Math.floor(Math.random() * chars.length)];
      password += numbers[Math.floor(Math.random() * numbers.length)];
      password += special[Math.floor(Math.random() * special.length)];
      i++;
    }
  }
  password = password.substring(0, charVal.value);
  document.getElementsByTagName("p")[0].innerText = password;
  navigator.clipboard.writeText(password);
});

