document.getElementById("KW_button").addEventListener("click", show_manga_KW);
var button_on_off = 0;
function show_manga_KW(){
  if(button_on_off==0){
    document.getElementById("KW_saying").style.opacity = "1" ;
    document.getElementById(`KW_saying`).style.padding = "5vh 0";
    document.getElementById(`KW_saying`).style.height = "auto";
    for (i=1; i<11; i++){
      document.getElementById(`KW${i}`).style.padding = "2vh 0";
      document.getElementById(`KW${i}`).style.opacity = "1" ;
      document.getElementById(`KW${i}`).style.height = "auto" ;
    }
    button_on_off=1;
  }
  else if(button_on_off==1){
    document.getElementById("KW_saying").style.opacity = "0" ;
    document.getElementById(`KW_saying`).style.padding = "0";
    document.getElementById(`KW_saying`).style.height = "0" ;
    for (i=1; i<11; i++){
      document.getElementById(`KW${i}`).style.padding = "0";
      document.getElementById(`KW${i}`).style.opacity = "0" ;
      document.getElementById(`KW${i}`).style.height = "0" ;
    }
    button_on_off=0;
  }
}