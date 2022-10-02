
const fileSelector = document.getElementById('upload');
fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList[0].name);

    Tesseract.recognize(
        fileList[0],
        'eng',
        { logger: m => document.getElementById('display-image').innerHTML = m.status }
    ).then(({ data: { text } }) => {
        document.getElementById('display-image').innerHTML = text;
    })
});
