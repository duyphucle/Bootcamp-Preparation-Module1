
        class TaoKhoi {
            //Hoi lai anh khanh ve constructor
            constructor(width, height, color) {
                this.width = width;
                this.height = height;
                this.color = color;
                this.fontFamily=fontFamily;
                this.fontColor=fontColor;
            }
            drawDiv(div) {
                this.x = document.getElementById(div);
                if (document.getElementById("fixed1").checked == true)
                    document.getElementById(div).style.position = "fixed";
                this.x.style.backgroundColor = this.color;
                this.x.style.fontFamily = this.fontFamily;
                this.x.style.width = this.width;
                this.x.style.height = this.height;
                this.x.style.fontColor=this.fontColor;

            }
            drawDivPhu(div) {
                //Tao khoi phu khong xuong hang
                this.drawDiv(div);
                this.x.innerText = div + " Width : " + this.width + " Height: " + this.height;
                this.x.style.cssFloat = "left"
            }
            drawDivPhu1(div) {
                //Tao khoi phu khong xuong hang
                this.drawDiv(div);
                this.x.style.cssFloat = "left"
            }
            drawDivPhu2(div) {
                //Tao khoi phu khong xuong hang
                this.drawDiv(div);
                this.x.style.cssFloat = "right"
            }
            drawDivChinh(div) {
                //Tao khoi phu dau tien dau
                this.drawDiv(div);
                //this.x.innerText = div + " Width : " + this.width + " Height: " + this.height;
                this.x.style.clear = "both";
            }
           
        }
        let a = document.getElementById("main");
        a.style.border = "1px solid green"
        a.style.width = "100%"
        a.style.height = "5000px"