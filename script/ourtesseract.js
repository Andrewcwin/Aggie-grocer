
const fileSelector = document.getElementById('upload');
fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList[0].name);

    Tesseract.recognize(
        fileList[0],
        'eng',
        { logger: m => document.getElementById('display-image').innerHTML = "Upload Status: " + m.status }
    ).then(({ data: { text } }) => {
        var out = "";

        // get usable text
        var rawDat = text.split();
        var ingredients = []; // ingredients as string[]

        for (var i = 0; i < rawDat.length; i++) {
            if (onlyLetters(rawDat[i])) {
                ingredients.push(rawDat[i]);
                out += rawDat[i] + ", ";
            }
        }

        document.getElementById('display-image').innerHTML = "Finished upload! Added " + out + "!";

        var json_str = JSON.stringify(ingredients);
        setCookie('ingredients', json_str);
    })
});

function onlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}