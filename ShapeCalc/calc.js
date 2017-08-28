function hideSnackBar() {
    document.querySelector(".snackbar").classList.remove("active");
}

function showSnackBar() {
    document.querySelector(".snackbar").classList.add("active");
}

function snackBarSetMessage(message) {
    document.querySelector(".snackbar > span").innerHTML = message;
}

function Hello() {
    var one = prompt("Input 1");
    var two = prompt("Input 2");
    var sum = +one + +two;
    showSnackBar();
    snackBarSetMessage(sum);
    setTimeout(hideSnackBar, 2000);
}