console.log("hello world")

var tl5 = new TimelineMax();
var tl6 = new TimelineMax();
var tl7 = new TimelineMax();
var tl8 = new TimelineMax();
var tl9 = new TimelineMax();


const controller = new ScrollMagic.Controller();

tl5.from("#kirsten_wright", 1, {opacity: 0});
tl6.from("#ahrens_parvis", 1, {opacity: 0});
tl7.from("#Ferdinand_clooney", 1, {opacity: 0});

tl8.from("#ORIG_Dorothy_Franks_1", 1, {opacity: 0});
tl8.from("#ORIG_Dorothy_Franks_2", 1, {opacity: 0});
tl8.from("#ORIG_Dorothy_Franks_3", 1, {opacity: 0});

tl9.from("#eco_muelsyse_1", 1, {opacity: 0});
tl9.from("#eco_muelsyse_2", 1, {opacity: 0});
tl9.from("#eco_muelsyse_3", 1, {opacity: 0});
tl9.from("#eco_muelsyse_4", 1, {opacity: 0});
tl9.from("#eco_muelsyse_5", 1, {opacity: 0});


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

