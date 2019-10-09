
        //Nguyen tắc đặt tên:
        // Biến = fsize
        // id= f_Family 
        //Hàm: fontFamily()
        var fsize = document.getElementById("font_Size")
        var check = true;

        function fontFamily() {
            let fontFamily = document.getElementById("font_Family").value
            document.getElementById("head_11").style.fontFamily = fontFamily;
        }
        function fontSize() {

            document.getElementById("head_11").style.fontSize = fsize.value + "px";
        }
        function fontSizeup() {
            //Can parseInt vì hàm này .value  không trả về giá trị số
            fsize.value = parseInt(fsize.value) + 2;
            document.getElementById("head_11").style.fontSize = fsize.value + "px";
        }
        function fontSizedown() {
            fsize.value = parseInt(fsize.value) - 2;
            document.getElementById("head_11").style.fontSize = fsize.value + "px";
        }
        function listCircle() {
            //Link DOM list :https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_liststyletype2 
            document.getElementById("head_11").style.listStyleType = "circle"
        }
        function listNumbering() {

            document.getElementById("head_11").style.listStyleType = "decimal"
        }
        function listNone() {
            document.getElementById("head_11").style.listStyleType = "none"
        }
        function fontBold() {
            //Cần phá triển thêm khi nhấn B thì thường. Hoặc chọn khu vực
            //txt la biến toàn cục nên nó sẽ nhận giá trị của fbold
            fbold = document.getElementById("head_11");
            let txt = document.getElementById("head_11").innerHTML
            if (check) {
                fbold.innerHTML = "<b>" + txt + "</b>";
                check = false
            }
            else {
                txt = txt.replace("<b>", "")
                txt = txt.replace("</b>", "")
                fbold.innerHTML = txt
                check = true;
            }
        }
        function fontItalic() {
            fbold = document.getElementById("head_11");
            let txt = document.getElementById("head_11").innerHTML
            if (check) {
                fbold.innerHTML = "<i>" + txt + "</i>";
                check = false
            }
            else {
                txt = txt.replace("<i>", "")
                txt = txt.replace("</i>", "")
                fbold.innerHTML = txt
                check = true;
            }
        }
        function fontUnderline() {
            fbold = document.getElementById("head_11");
            let txt = document.getElementById("head_11").innerHTML
            if (check) {
                fbold.innerHTML = "<u>" + txt + "</u>";
                check = false
            }
            else {
                txt = txt.replace("<u>", "")
                txt = txt.replace("</u>", "")
                fbold.innerHTML = txt
                check = true;
            }
        }
        function fontColor() {
            let fontColor = document.getElementById("font_Color").value
            document.getElementById("head_11").style.color = fontColor;
        }
        function alignTextleft() {
            document.getElementById("head_11").style.textAlign = "left";
        }
        function alignTextcenter() {
            document.getElementById("head_11").style.textAlign = "center";
        }
        function alignTextright() {
            document.getElementById("head_11").style.textAlign = "right";
        }
        function alignTextjustify() {
            document.getElementById("head_11").style.textAlign = "justify";
        }
        //Đổi css
        function switchStyle(f) {
            var linkElement = document.createElement('link');
            linkElement.setAttribute('rel', 'stylesheet');
            linkElement.setAttribute('href', f);
            document.getElementsByTagName('head')[0].innerHTML = "";
            document.getElementsByTagName('head')[0].appendChild(linkElement);
        }
        let arr = []


        function menuNgang(value) {
            let txt = "<nav>"
            arr[0] = document.getElementById("menu1").value
            arr[1] = document.getElementById("menu2").value
            arr[2] = document.getElementById("menu3").value
            arr[3] = document.getElementById("menu4").value
            arr[4] = document.getElementById("menu5").value
            switch (value) {
                case 1:

                    for (let i = 0; i < arr.length; i++) {
                        txt += "<a href='1'>" + arr[i] + "</a>"
                    }

                    txt += "<div class='animation start-home'></div>"
                    txt += "</nav>"
                    document.getElementById("head_11").innerHTML = txt;
                    switchStyle('menu_ngang_1.css');
                    break;
                case 2:
                    txt = '<nav class="skew-menu">'
                    txt += "   <ul>"
                    for (let i = 0; i < arr.length; i++) {
                        txt += " <li><a href='1'>" + arr[i] + "</a></li>";
                    }
                    txt += "<ul>"
                    txt += "</nav>"

                    document.getElementById("head_11").innerHTML = txt;
                    switchStyle('menu_ngang_2.css');
                    break;
                case 3:
                    txt = ' <nav class="stroke">'
                    txt += ' <ul> '
                    for (let i = 0; i < arr.length; i++) {
                        txt += " <li><a href='1'>" + arr[i] + "</a></li>";
                    }
                    txt += "<ul>"
                    txt += "</nav'>"
                    document.getElementById("head_11").innerHTML = txt;
                    switchStyle('menu_ngang_3.css');
                    break;
                case 4:
                    txt = '<nav class="skew-menu">'
                    txt += "   <ul>"
                    for (let i = 0; i < arr.length; i++) {
                        txt += " <li><a href='1'>" + arr[i] + "</a></li>";
                    }

                    txt += "<ul>"
                    txt += "</nav>"

                    document.getElementById("head_11").innerHTML = txt;
                    switchStyle('menu_ngang_4.css');
                    break;
            }
        }

        function deleteAll(value) {
            let info= document.getElementsByClassName("maininfo");
            switch (value) {
                case 2:
                    document.getElementById("pain").style.visibility = "hidden";
                    document.getElementById("main").style.position = "absolute";
                break;
                case 1:
                    
             
               for (let i=0;i<info.length;i++)
                   info[i].innerHTML="";               
                    break;
                
            }
        }