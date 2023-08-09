const textArr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies mauris ut eros sodales, id lobortis augue commodo. Morbi posuere venenatis mi, a tincidunt est commodo varius. Aliquam viverra ligula quis scelerisque pretium. Duis porttitor euismod purus vitae venenatis. Pellentesque commodo finibus elit, in molestie sapien efficitur sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus malesuada nec tortor ac imperdiet. Praesent porta risus ex, ac condimentum justo sodales ac. Aenean sed ante libero. Sed laoreet sit amet enim ac auctor.Duis varius, ex et lacinia cursus, orci diam posuere lorem, et facilisis eros dolor in quam. Phasellus vulputate quam eu convallis laoreet. Nulla nec mi efficitur, pharetra lectus in, porttitor quam. Integer dignissim ex libero, vel ultrices urna tincidunt vitae. Pellentesque auctor massa ac mauris laoreet, sit amet pretium purus blandit. Quisque eu orci eget turpis pharetra consectetur eget sit amet magna. Nunc dictum turpis urna, pretium gravida quam dapibus in.Duis malesuada imperdiet aliquam. Duis eget ligula leo. Sed quis ullamcorper sapien, nec molestie nibh. Nunc suscipit rutrum facilisis. Donec pharetra porttitor egestas. Aenean euismod varius metus non egestas. Morbi non mattis diam. Duis mauris nisi, tincidunt sit amet sodales eu, lacinia ac risus. In sed quam arcu. Aenean ligula diam, placerat eget luctus sit amet, hendrerit at sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis maximus vel risus eget hendrerit.";

let generateBtn = document.getElementById('generate-button');
let charCount = document.getElementById('char-count');
let generatedTextArea = document.getElementById('textbox');

generateBtn.addEventListener('click', () => {
    if (charCount.value > 1500 || charCount.value<=0) {
        alert('please enter characters between 1 and 1500');
    } else {
        let generatedText = textArr.slice(0, charCount.value);
        console.log(generatedText);
        generatedTextArea.value = generatedText;
    }
})