let cel = document.getElementById('cel');
let fah = document.getElementById('fah');

cel.addEventListener('input', (e) => {
    let c = e.target.value;
    let f = (c * 9 / 5) + 32;
    if (!Number.isInteger(f)) {
        f = f.toFixed(4);
    }
    fah.value = f;
})

fah.addEventListener('input', (e) => {
    let f = e.target.value;
    let c = (f - 32) * 5 / 9;
    if (!Number.isInteger(c)) {
        c = c.toFixed(4);
    }
    cel.value = c;
})