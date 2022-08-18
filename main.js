console.log("hello world")

var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl5 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl2.from("#fileimg", 1, {y:-200,opacity: 0});
tl2.from("#file_heading_box1", 1, {x:-200,y:-200,opacity: 0},"=-1");
tl2.from("#file_heading_box2", 1, {x:200,y:-200,opacity: 0},"=-1");
tl2.from("#file_heading_box3", 1, {x:-200,y:200,opacity: 0},"=-1");
tl2.from("#file_heading_box4", 1, {x:200,y:200,opacity: 0},"=-1");

tl3.from(".slider1", 1, {y:200,opacity: 0});
tl3.from("#centre_description", 1, {y:200,opacity: 0});

tl4.from("#searching", 0.3, {opacity: 0});
tl4.to("#searching", 0.3, {opacity: 1});
tl4.from("#CMPT_CTRL", 1, {opacity: 0});
tl4.from("#STRU", 0.7, {opacity: 0},"=-0.7");
tl4.from("#NRG", 0.7, {opacity: 0},"=-0.8");
tl4.from("#ORIG", 0.7, {opacity: 0},"=-0.9");
tl4.from("#BSN", 0.7, {opacity: 0},"=-1");
tl4.from("#SCIEN", 0.7, {opacity: 0},"=-1.2");
tl4.from("#ENG", 0.7, {opacity: 0},"=-0.8");
tl4.from("#ECO", 0.7, {opacity: 0},"=-1");
tl4.from("#HRI", 0.7, {opacity: 0},"=-1.1");
tl4.from("#DEF", 0.7, {opacity: 0},"=-1.2");

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".file"
})
  .setTween(tl2)
  .addTo(controller);
          
const scene3 = new ScrollMagic.Scene({
  triggerElement: "#centre"
  })
  .setTween(tl3)
  .addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: "#total_section"
  })
  .setTween(tl4)
  .addTo(controller);
const scene5 = new ScrollMagic.Scene({
    triggerElement: "#CMPT_CTRL_section_main"
    })
    .setTween(tl5)
    .addTo(controller);  

let counter1 = 1;
let state1 = 0; //0 means can move, other means cannot move

if (state1 == 0){
  document.getElementById("radio-btn1_" + counter1).checked = true;
  counter1++;
  if(counter1 > 9){
    counter1=1;
  }
}

setInterval(function(){
  if (state1 == 0){
    document.getElementById("radio-btn1_" + counter1).checked = true;
    counter1++;
    if(counter1 > 9){
      counter1=1;
    }
  }
}, 5000);

function setstate1(checker){
  if (checker == state1){
    state1 = 0;
    console.log("continue");
  }
  else{
    console.log("pressed others");
  }
}

document.getElementById("radio-btn1_1").onclick = function(){state1 = 1;counter1 = 1;setstate1(1);};
document.getElementById("radio-btn1_2").onclick = function(){state1 = 2;counter1 = 2;setstate1(2);};
document.getElementById("radio-btn1_3").onclick = function(){state1 = 3;counter1 = 3;setstate1(3);};
document.getElementById("radio-btn1_4").onclick = function(){state1 = 4;counter1 = 4;setstate1(4);};
document.getElementById("radio-btn1_5").onclick = function(){state1 = 5;counter1 = 5;setstate1(5);};
document.getElementById("radio-btn1_6").onclick = function(){state1 = 6;counter1 = 6;setstate1(6);};
document.getElementById("radio-btn1_7").onclick = function(){state1 = 7;counter1 = 7;setstate1(7);};
document.getElementById("radio-btn1_8").onclick = function(){state1 = 8;counter1 = 8;setstate1(8);};
document.getElementById("radio-btn1_9").onclick = function(){state1 = 9;counter1 = 9;setstate1(9);};


setInterval(function(){
  for (var i = 1; i < 10; i++){
    if(document.getElementById("radio-btn1_" + i).checked == true){
      document.getElementById("manual1-btn" + i).style.backgroundColor = "#FC902D";
    }
    else{
      document.getElementById("manual1-btn" + i).style.backgroundColor = "transparent";
    }
  }
}, 100);