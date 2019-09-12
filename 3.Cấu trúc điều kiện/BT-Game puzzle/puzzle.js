let c1 = document.getElementById("dNuoc1")
let c2 = document.getElementById("dNuoc2")
let c3 = document.getElementById("dNuoc3")
let c4 = document.getElementById("dNuoc4")
let d1 = document.getElementById("bac1")
let d2 = document.getElementById("bac2")
let d3 = document.getElementById("bac3")
let d4 = document.getElementById("bac4")
function myFun(a) {
    switch (a) {
        case 1: document.getElementById("dNuoc1").style.display = 'none';
            document.getElementById("bac1").style.display = 'block';
            c1.value = "1"
            d1.value = 0;
            break;
        case 2: document.getElementById("dNuoc2").style.display = 'none';
            document.getElementById("bac2").style.display = 'block';
            c2.value = "2"
            d2.value = 0;
            break;
        case 3: document.getElementById("dNuoc3").style.display = 'none';
            document.getElementById("bac3").style.display = 'block';
            c3.value = "3"
            d3.value = 0;
            break;
        case 4: document.getElementById("dNuoc4").style.display = 'none';
            document.getElementById("bac4").style.display = 'block';
            c4.value = "4"
            d4.value = 0;
            break;
        case 5: document.getElementById("bac1").style.display = 'none';
            document.getElementById("dNuoc1").style.display = 'block';
            d1.value = "1"
            c1.value = 0;
            break;
        case 6: document.getElementById("bac2").style.display = 'none';
            document.getElementById("dNuoc2").style.display = 'block';
            d2.value = "2"
            c2.value = 1;
            break;
        case 7: document.getElementById("bac3").style.display = 'none';
            document.getElementById("dNuoc3").style.display = 'block';
            d3.value = "3"
            c3.value = 0;
            break;
        case 8: document.getElementById("bac4").style.display = 'none';
            document.getElementById("dNuoc4").style.display = 'block';
            d4.value = "4"
            c4.value = 0;
            break;
    }
    if ((c1.value + c2.value + c3.value + c4.value == "1234") || (d1.value + d2.value + d3.value + d4.value == "1234")) {
        document.getElementById("demo").innerHTML = "Chuc Mung Ban Anh Dep Khong"
    }

    else {
        document.getElementById("demo").innerHTML = ""
    }
}