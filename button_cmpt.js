document.getElementById("KW_button").addEventListener("click", show_manga_KW);
function show_manga_KW(){
  document.getElementById("KW_saying").style.opacity = "1" ;
  for (i=1; i<10; i++){
    document.getElementById(`KW${i}`).style.opacity = "1" ;
    document.getElementById(`KW${i}`).style.height = "auto" ;
  }
}