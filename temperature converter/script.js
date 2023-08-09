let cel_1 = document.getElementById("cel-1");
let fah_1 = document.getElementById("fah-1");
cel_1.addEventListener("input", (e) => {
  let c = e.target.value;
  let f = (c * 9) / 5 + 32;
  if (!Number.isInteger(f)) {
    f = f.toFixed(4);
  }
  fah_1.value = f;
});

fah_1.addEventListener("input", (e) => {
  let f = e.target.value;
  let c = ((f - 32) * 5) / 9;
  if (!Number.isInteger(c)) {
    c = c.toFixed(4);
  }
  cel_1.value = c;
});

let cel_2 = document.getElementById("cel-2");
let kel_1 = document.getElementById("kel-1");
cel_2.addEventListener("input", (e) => {
  let c = e.target.value;
  let k = +c + 273.15;
  if (!Number.isInteger(k)) {
    k = k.toFixed(2);
  }
  kel_1.value = k;
});

kel_1.addEventListener("input", (e) => {
  let k = e.target.value;
  let c = k - 273.15;
  if (!Number.isInteger(c)) {
    c = c.toFixed(2);
  }
  cel_2.value = c;
});

let kel_2 = document.getElementById("kel-2");
let fah_2 = document.getElementById("fah-2");
kel_2.addEventListener("input", (e) => {
  let k = e.target.value;
  let f = (k - 273.15) * 9 / 5 + 32;
  if (!Number.isInteger(f)) {
    f = f.toFixed(2);
  }
  fah_2.value = f;
});

fah_2.addEventListener("input", (e) => {
  let f = e.target.value;
  let k = (f - 32) * 5 / 9 + 273.15;
  if (!Number.isInteger(k)) {
    k = k.toFixed(3);
  }
  kel_2.value = k;
});
