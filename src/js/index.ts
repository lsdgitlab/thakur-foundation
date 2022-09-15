// import style from '../sass/main.scss';
// import $ from "jquery";
// var $ = require( "jquery" );
import 'normalize.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import  '../css/sass/index.scss';
import lozad from 'lozad'

import main from "./main";

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
// import style1 from '../css/main.css';
// import component from './component.js';


// Progress
// import progrssStep from "../js/progress-steps.js";

console.log("in app");
console.log(main())


if ($('#bannerCarousel').length) {
  let bannerCarousel = $("#bannerCarousel").owlCarousel({
    margin:20,
    items: 1,
    dots:false,
    nav:true,
    // navText: ["", $('.newsright')],
    // autoHeight:true,
    // autoplay: true,
    autoplayTimeout: 5000,
    loop:true,
    smartSpeed: 2000,
    // responsive:{
    //   0:{
    //       items:1,
    //       // nav:true
    //   },
    //   992:{
    //     items:3,
    //     // nav:true
    //   },
    // }
  })
};
if ($('#articlesCarousel').length) {
  let articlesCarousel = $("#articlesCarousel").owlCarousel({
    margin:20,
    items: 4,
    dots:false,
    nav:true,
    // navText: ["", $('.newsright')],
    // autoHeight:true,
    // autoplay: true,
    autoplayTimeout: 5000,
    loop:true,
    smartSpeed: 2000,
    // responsive:{
    //   0:{
    //       items:1,
    //       // nav:true
    //   },
    //   992:{
    //     items:3,
    //     // nav:true
    //   },
    // }
  })
};
// let gotoId = (id)=>{
//   let heightOfNav = 0;
//   if($('.acc-header').length){
//     heightOfNav = $('.acc-header').outerHeight(true);
//   }
//   console.log(heightOfNav)
//   if($("#"+id).length === 1)
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#"+id).offset().top - heightOfNav,
//     }, 1000);
// };

// function gotoId(id:string) {
//   var heightOfNav:number = 0;
//   if($('.acc-header').length){
//     heightOfNav = $('.acc-header').outerHeight(true);
//   }
//   console.log(heightOfNav)
//   if($("#"+id).length === 1)
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#"+id).offset().top - heightOfNav,
//     }, 1000);
// }
