function setCalAsc() {
    var ul = $("#mylist:first");
    var arr = $.makeArray(ul.children("div"));

    arr.sort(function (a, b) {
        var textA = +$(a).data("calories");
        var textB = +$(b).data("calories");

        if (textA < textB) return -1;
        if (textA > textB) return 1;

        return 0;
    });

    ul.empty();

    $.each(arr, function () {
        ul.append(this);
    });
}

function setCostAsc() {
    var ul = $("#mylist:first");
    var arr = $.makeArray(ul.children("div"));

    arr.sort(function (a, b) {
        var textA = +$(a).data("cost");
        var textB = +$(b).data("cost");

        if (textA < textB) return -1;
        if (textA > textB) return 1;

        return 0;
    });

    ul.empty();

    $.each(arr, function () {
        ul.append(this);
    });
}

function setNameAsc() {
    var ul = $("#mylist:first");
    var arr = $.makeArray(ul.children("div"));

    arr.sort(function (a, b) {
        var textA = +$(a).data("name");
        var textB = +$(b).data("name");

        if (textA < textB) return -1;
        if (textA > textB) return 1;

        return 0;
    });

    ul.empty();

    $.each(arr, function () {
        ul.append(this);
    });
}

function setNumAsc() {
    var ul = $("#mylist:first");
    var arr = $.makeArray(ul.children("div"));

    arr.sort(function (a, b) {
        var textA = +$(a).data("numing");
        var textB = +$(b).data("numing");

        if (textA < textB) return -1;
        if (textA > textB) return 1;

        return 0;
    });

    ul.empty();

    $.each(arr, function () {
        ul.append(this);
    });
}

function setTimeAsc() {
    var ul = $("#mylist:first");
    var arr = $.makeArray(ul.children("div"));

    arr.sort(function (a, b) {
        var textA = +$(a).data("time");
        var textB = +$(b).data("time");

        if (textA < textB) return -1;
        if (textA > textB) return 1;

        return 0;
    });

    ul.empty();

    $.each(arr, function () {
        ul.append(this);
    });
}

function setCalDesc() {
    var ul = $("#mylist:first");
    var arr = $.makeArray(ul.children("div"));

    arr.sort(function (a, b) {
        var textA = +$(a).data("calories");
        var textB = +$(b).data("calories");

        if (textA < textB) return 1;
        if (textA > textB) return -1;

        return 0;
    });

    ul.empty();

    $.each(arr, function () {
        ul.append(this);
    });
}

function setCostDesc() {
    var ul = $("#mylist:first");
    var arr = $.makeArray(ul.children("div"));

    arr.sort(function (a, b) {
        var textA = +$(a).data("cost");
        var textB = +$(b).data("cost");

        if (textA < textB) return 1;
        if (textA > textB) return -1;

        return 0;
    });

    ul.empty();

    $.each(arr, function () {
        ul.append(this);
    });
}

function setNameDesc() {
    var ul = $("#mylist:first");
    var arr = $.makeArray(ul.children("div"));

    arr.sort(function (a, b) {
        var textA = +$(a).data("name");
        var textB = +$(b).data("name");

        if (textA < textB) return 1;
        if (textA > textB) return -1;

        return 0;
    });

    ul.empty();

    $.each(arr, function () {
        ul.append(this);
    });
}

function setNumDesc() {
    var ul = $("#mylist:first");
    var arr = $.makeArray(ul.children("div"));

    arr.sort(function (a, b) {
        var textA = +$(a).data("numing");
        var textB = +$(b).data("numing");

        if (textA < textB) return 1;
        if (textA > textB) return -1;

        return 0;
    });

    ul.empty();

    $.each(arr, function () {
        ul.append(this);
    });
}

function setTimeDesc() {
    var ul = $("#mylist:first");
    var arr = $.makeArray(ul.children("div"));

    arr.sort(function (a, b) {
        var textA = +$(a).data("time");
        var textB = +$(b).data("time");

        if (textA < textB) return 1;
        if (textA > textB) return -1;

        return 0;
    });

    ul.empty();

    $.each(arr, function () {
        ul.append(this);
    });
}
