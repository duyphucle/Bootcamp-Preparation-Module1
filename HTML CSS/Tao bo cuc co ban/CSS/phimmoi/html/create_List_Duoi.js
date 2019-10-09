let i;
let txt="<div class='list_phim_duoi'><ul>";
    
for (i=0;i<data.phim.length;i++){
    txt += "<a href='google.com'>";
    if (data.phim[i].style==="phim lẻ")
        txt +="<div class='list_phim_le'> <li>";
    else
        txt +="<div class='list_phim_bo'> <li>";
    txt += "<div class = 'list_phim_src'>"; 
    txt += "<img src='" + data.phim[i].src +  "'></div>";
    txt += "<div class = 'list_phim_content'>";
    txt += "<div class = 'list_phim_nameVn'>";
    txt += "<span>" +  data.phim[i].nameVN +  "</span></div>";
    txt += "<div class = 'list_phim_nameEng'>";
    txt += "<span>" +  data.phim[i].nameEng +  "</span></div>";
    if (data.phim[i].style==="phim lẻ"){
       txt += "<div class = 'list_phim_time'>";
        txt += "<span>" +  data.phim[i].time +  "</span></div>";
    }
    else{
        txt += "<div class = 'list_phim_part'>";
        txt += "<span>" +  data.phim[i].part +  "</span></div>";
    }
    txt += "</div>" ;
    txt += "</li>";
    txt += "</div>"
}
    txt += "</ul>";
    txt += "</div>"
    document.getElementById("phim").innerHTML =txt;
