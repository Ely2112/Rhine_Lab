console.log("hello world")

var tl5 = new TimelineMax();
var tl6 = new TimelineMax();
var tl7 = new TimelineMax();
var tl8 = new TimelineMax();
var tl9 = new TimelineMax();


const controller = new ScrollMagic.Controller();

tl5.from(".cmpt_left", 2, {x:-400, opacity: 0},"=0.4");
tl5.from(".cmpt_right", 2, {x:600, opacity: 0},"=-2");
tl5.from(".cmpt_special", 0.5, {opacity:0});
tl5.from(".cmpt_special_2", 0.5, {display:"none"},"=-0.5");
tl5.from("#kirsten_wright", 0.5, {opacity: 0},"=-0.5");

tl6.from(".stru_left", 2, {x:-400, opacity: 0},"=0.4");
tl6.from(".stru_right", 2, {x:600, opacity: 0},"=-2");
tl6.from(".stru_special", 0.5, {opacity:0});
tl6.from(".stru_special_2", 0.5, {display:"none"},"=-0.5");
tl6.from("#ahrens_parvis", 0.5, {opacity: 0},"=-0.5");

tl7.from(".nrg_left", 2, {x:-400, opacity: 0},"=0.4");
tl7.from(".nrg_right", 2, {x:600, opacity: 0},"=-2");
tl7.from(".nrg_special", 0.5, {opacity:0});
tl7.from(".nrg_special_2", 0.5, {display:"none"},"=-0.5");
tl7.from("#Ferdinand_clooney", 0.5, {opacity: 0},"=-0.5");

tl8.from(".orig_left", 2, {x:-400, opacity: 0},"=0.4");
tl8.from(".orig_right", 2, {x:600, opacity: 0},"=-2");
tl8.from(".orig_special", 0.5, {opacity:0});
tl8.from(".orig_special_2", 0.5, {display:"none"},"=-0.5");
tl8.from("#ORIG_Dorothy_Franks_1", 0.5, {display:"none"},"=-0.5");
tl8.from("#ORIG_Dorothy_Franks_2", 0.5, {display:"none"},"=-0.5");
tl8.from("#ORIG_Dorothy_Franks_3", 0.5, {display:"none"},"=-0.5");

tl9.from("#eco_muelsyse_1", 1, {opacity: 0});


const scene5 = new ScrollMagic.Scene({
  triggerElement: "#CMPT_CTRL_section_main"
  })
  .setTween(tl5)
  .addTo(controller);  
const scene6 = new ScrollMagic.Scene({
  triggerElement: "#STRU_section_main_ahrens_parvis"
  })
  .setTween(tl6)
  .addTo(controller);  
const scene7 = new ScrollMagic.Scene({
  triggerElement: "#NRG_section_main_FERDINAND_CLOONEY"
  })
  .setTween(tl7)
  .addTo(controller);  
const scene8 = new ScrollMagic.Scene({
  triggerElement: "#ORIG_section_main_Dorothy_Franks"
  })
  .setTween(tl8)
  .addTo(controller); 
const scene9 = new ScrollMagic.Scene({
  triggerElement: "#ECO_Muelsyse_profile"
  })
  .setTween(tl9)
  .addTo(controller);




