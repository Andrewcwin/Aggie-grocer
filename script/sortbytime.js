var ul = $("#mylist:first");
var arr = $.makeArray(ul.children("div"));

arr.sort(function (a, b) {
    var textA = +$(a).data("sort");
    var textB = +$(b).data("sort");

    if (textA < textB) return -1;
    if (textA > textB) return 1;

    return 0;
});

ul.empty();

$.each(arr, function () {
    ul.append(this);
});