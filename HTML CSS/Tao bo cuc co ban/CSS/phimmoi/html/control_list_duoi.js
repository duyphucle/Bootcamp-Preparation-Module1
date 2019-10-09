
x = document.getElementsByClassName("list_phim_le");
y = document.getElementsByClassName("list_phim_bo")
function contro_list(value){
    switch (value) {
        case 1:
          
         for(let i=0;i<30;i++){
          x[i].style.display="block";
          y[i].style.display="none";
    }    
            break;
        case 2:
                for(let i=0;i<30;i++){
                    x[i].style.display="none";
                    y[i].style.display="block";
              }    
            break;
    }
 
}