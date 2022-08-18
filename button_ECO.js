document.getElementById("M_button").addEventListener("click", show_manga_M);
var button_on_off = 0;
function show_manga_M(){
  if(button_on_off==0){
    document.getElementById("M_saying").style.opacity = "1" ;
    document.getElementById(`M_saying`).style.padding = "5vh 0";
    document.getElementById(`M_saying`).style.height = "auto";
    for (i=1; i<13; i++){
      document.getElementById(`M${i}`).style.padding = "2vh 0";
      document.getElementById(`M${i}`).style.opacity = "1" ;
      document.getElementById(`M${i}`).style.height = "auto" ;
    }
    button_on_off=1;
  }
  else if(button_on_off==1){
    document.getElementById("M_saying").style.opacity = "0" ;
    document.getElementById(`M_saying`).style.padding = "0";
    document.getElementById(`M_saying`).style.height = "0" ;
    for (i=1; i<13; i++){
      document.getElementById(`M${i}`).style.padding = "0";
      document.getElementById(`M${i}`).style.opacity = "0" ;
      document.getElementById(`M${i}`).style.height = "0" ;
    }
    button_on_off=0;
  }
}