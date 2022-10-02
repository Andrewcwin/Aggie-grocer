function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

window.onload = () => {
    if (getCookie('name') && document.getElementById('welcome-message')) {
        document.getElementById('welcome-message').innerText = "Welcome, " + getCookie('name') + "!";
    }
    if (getCookie('recentsearch') && document.getElementById('search-term')) {
        document.getElementById('search-term').innerText = "Show results for: " + getCookie('recentsearch');
    }
    if (document.getElementById('upload') && !getCookie('user')) {
        document.getElementById('upload').disabled = true;
    } else if (document.getElementById('upload')) {
        document.getElementById('upload').disabled = false;
    }
};
