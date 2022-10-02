var json_str = getCookie('ingredients');
var arr = JSON.parse(json_str);

var output = "<ul>";

arr.forEach(function (ingr) {
    output += "<li>" + ingr + "</li>";
});

output += "</ul>";

document.getElementById('ingr-list').innerHTML = output;