const form = document.getElementById('signup');

form.addEventListener('submit', (event) => {
    // handle the form data
    event.preventDefault();
    var name = form.name.value;
    var email = form.email.value;
    var password = form.password.value;

    // save user info
    // for demo sign in as testuser
    setCookie('user', email, 10);
    setCookie('name', name, 10);

    if (form.checkbox.checked) {
        form.submit();
    }
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