console.log("hello world")

var ORIG_orginium_bar_box_1 = document.getElementById('ORIG_orginium_bar_box_1');
var ORIG_orginium_bar_box_2 = document.getElementById('ORIG_orginium_bar_box_2');
var ORIG_orginium_bar_box_3 = document.getElementById('ORIG_orginium_bar_box_3');
var ORIG_orginium_bar_box_4 = document.getElementById('ORIG_orginium_bar_box_4');
var ORIG_orginium_bar_box_5 = document.getElementById('ORIG_orginium_bar_box_5');
var ORIG_orginium_bar_box_6 = document.getElementById('ORIG_orginium_bar_box_6');
var ORIG_orginium_bar_box_7 = document.getElementById('ORIG_orginium_bar_box_7');
var ORIG_orginium_bar_box_8 = document.getElementById('ORIG_orginium_bar_box_8');


changeOpacity(ORIG_orginium_bar_box_1);
changeOpacity(ORIG_orginium_bar_box_2);
changeOpacity(ORIG_orginium_bar_box_3);
changeOpacity(ORIG_orginium_bar_box_4);
changeOpacity(ORIG_orginium_bar_box_5);
changeOpacity(ORIG_orginium_bar_box_6);
changeOpacity(ORIG_orginium_bar_box_7);
changeOpacity(ORIG_orginium_bar_box_8);

async function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function changeOpacity(id){
  id.style.opacity = Math.random();
  await sleep(3000);
  changeOpacity(id);
}