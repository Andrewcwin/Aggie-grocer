
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

        // get usable text

        var arr = ['foo', 'bar', 'baz']; // ingredients as string[]
        var json_str = JSON.stringify(arr);
        setCookie('ingredients', json_str);
    })
});

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}