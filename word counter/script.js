let textBox = document.getElementById('textbox');
textBox.addEventListener('input', (e) => {
    let text = e.target.value; 
    let char = text.length;
    document.getElementById('char').innerHTML = char;
    
    text = text.trim();

    let words = text.split(' ');
    let removeEmptyElements = words.filter((word) => {
        if (word !== "") return word;
    })
    console.log(removeEmptyElements)
    document.getElementById(`word`).innerHTML = removeEmptyElements.length;
})