let x,y;
x = document.getElementById("tienGoc")
y = document.getElementById("tienSau")
function myFun() {
    z = document.getElementById("money").value
    switch (x.value) {
        case "VND":
            switch (y.value) {
                case "VND1":
                    document.getElementById("demo").innerHTML = "Result:" + z + " VND"
                    break;
                case "USD1":
                    document.getElementById("demo").innerHTML = "Result:" + z / 23000 + " USD"
                    break;
            }
            break;
        //Tai sao khong co dong nay thi sai
        case "USD": {
            switch (y.value) {
                case "USD1":
                    document.getElementById("demo").innerHTML = "Result:" + z + " USD"
                    break;
                case "VND1":
                    document.getElementById("demo").innerHTML = "Result:" + z * 23000 + " USD"
                    break;
            }
        }
    }
}