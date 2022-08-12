document.getElementById("AP_button").addEventListener("click", show_manga_AP);
function show_manga_AP(){
  document.getElementById("AP_saying").style.opacity = "1" ;
  for (i=1; i<17; i++){
    document.getElementById(`AP${i}`).style.opacity = "1" ;
    document.getElementById(`AP${i}`).style.height = "auto" ;
  }
}