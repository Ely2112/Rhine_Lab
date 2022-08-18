document.getElementById("AP_button").addEventListener("click", show_manga_AP);
var button_on_off = 0;
function show_manga_AP(){
  if(button_on_off==0){
    document.getElementById("AP_saying").style.opacity = "1" ;
    for (i=1; i<11; i++){
      document.getElementById(`AP${i}`).style.opacity = "1" ;
      document.getElementById(`AP${i}`).style.height = "auto" ;
    }
    button_on_off=1;
  }
  else if(button_on_off==1){
    document.getElementById("AP_saying").style.opacity = "0" ;
    for (i=1; i<11; i++){
      document.getElementById(`AP${i}`).style.opacity = "0" ;
      document.getElementById(`AP${i}`).style.height = "0" ;
    }
    button_on_off=0;
  }
}