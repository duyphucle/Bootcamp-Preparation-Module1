let x = document.getElementsByClassName("list_phim_le1");
let temp = 3;
for (i = 4; i < x.length; i++)

    x[i].style.display = "none";

function contro_list(value) {
    switch (value) {
        case 4:
            for (i = 0; i < x.length; i++)
              x[i].style.display = "none";
            x[temp].style.display = "block";
            x[temp + 1].style.display = "block";
            x[temp + 2].style.display = "block";
            x[temp + 3].style.display = "block";
            temp += 3;

            if (temp > 18)
                temp = 0;
            break;
        case 3:
            temp-=3;
            if(temp<=0)
                temp=21;
            for (i = 0; i < x.length; i++)
              x[i].style.display = "none";
            x[temp].style.display = "block";
            x[temp - 1].style.display = "block";
            x[temp - 2].style.display = "block";
            x[temp - 3].style.display = "block";
            break;

    }
}


