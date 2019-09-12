function myCong(a, b) {
    let x1,x2,x3;
    x1 = parseInt(a);
    x2 = parseInt(b);
    x3 = x1 + x2
    document.getElementById("demo").innerHTML = "Result Division:" + x3;
}
function myTru(a, b) {
    x = a - b;
    document.getElementById("demo").innerHTML = "Result Division:" + x;
}
function myNhan(a, b) {
    document.getElementById("demo").innerHTML = "Result Division:" + a * b;
}
function myChia(a, b) {
    document.getElementById("demo").innerHTML = "Result Division:" + a / b;
}