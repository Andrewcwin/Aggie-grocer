const tessform = document.getElementById('tessform');

tessform.addEventListener('submit', (event) => {
    // handle the form data
    var filepath = tessform.upload.value;

    document.getElementById('submitted').innerHTML = "<p>Hi</p>";

    Tesseract.recognize(
        filepath,
        'eng',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
    })
});

