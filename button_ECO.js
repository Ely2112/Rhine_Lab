document.getElementById("M_button").addEventListener("click", show_manga_M);
function show_manga_M(){
  document.getElementById("M_saying").style.opacity = "1" ;
  for (i=1; i<13; i++){
    document.getElementById(`M${i}`).style.opacity = "1" ;
    document.getElementById(`M${i}`).style.height = "auto" ;
  }
}