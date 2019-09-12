function proMath(a, b, c) {
    if (c == 1) {
        let x1, x2, x3;
        x1 = parseInt(a);
        x2 = parseInt(b);
        x3 = x1 + x2;
        document.getElementById("demo").innerHTML = "Result Division:" + x3;
    }
    else if (c == 2) {
        x = a - b;
        document.getElementById("demo").innerHTML = "Result Division:" + x;
    }
    else if (c == 3) {
        document.getElementById("demo").innerHTML = "Result Division:" + a * b;
    }
    else {
        document.getElementById("demo").innerHTML = "Result Division:" + a / b;
    }

}  