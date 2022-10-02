
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
        var rawDat = text.split(" ");
        console.log(rawDat);
        var ingredients = []; // ingredients as string[]

        for (var i = 0; i < rawDat.length; i++) {
            if (onlyLetters(rawDat[i])) {
                ingredients.push(rawDat[i].toLowerCase());
                out += rawDat[i].toLowerCase() + ", ";
            }
        }

        document.getElementById('display-image').innerHTML = "Finished upload! Added " + out.substring(0, out.length - 2) + " to your profile!";

        var json_str = JSON.stringify(ingredients);
        setCookie('ingredients', json_str);
    })
});

function onlyLetters(str) {
    return /^[A-Z]+$/.test(str) && str.length >= 3;
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