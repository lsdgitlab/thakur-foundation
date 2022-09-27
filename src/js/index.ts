import $ from "jquery";
import 'normalize.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import "jquery-popup-overlay";
import  '../css/sass/index.scss';
import lozad from 'lozad'
import {gotoId, submitData} from "./main";

const observer = lozad();
observer.observe();

$('.gotoSection').on( "click", function(){
  let id = $(this).data("to-section");
  gotoId(id)
})
$('.formSumit').on( "click", function(){
  let id = $(this).data("form-id");
  submitData(id)
})
$(function () {
  $(".info-box p").slice(0, 2).show();
  $(".readMore").on('click', function (e) {
      e.preventDefault();
      $(".info-box p:hidden").slice(0, 4).slideDown();
      if ($(".info-box p:hidden").length == 0) {
        // $("#load").fadeOut('slow');
        $(this).hide()
      }
      // console.log($(this))
      // $(this).hide()
      // $('html,body').animate({
      //     scrollTop: $(this).offset().top
      // }, 1500);
  });
});

$('#scrollToTop').on('click', function () {
  $('body,html').animate({
      scrollTop: 0,
      duration:10000,
  }, 600);
  return false;
});

$(window).on('scroll',function () {
  if ($(this).scrollTop() > 400) {
    $('#scrollToTop').fadeIn();
  } else {
    $('#scrollToTop').fadeOut();
  }
});
$('#thankpop').popup();
// if ($('#bannerCarousel').length) {
//   let bannerCarousel = $("#bannerCarousel").owlCarousel({
//     margin:20,
//     items: 1,
//     dots:false,
//     nav:true,
//     navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
//     autoplayTimeout: 5000,
//     loop:true,
//     smartSpeed: 2000,
//   })
// };
if ($('#articlesCarousel').length) {
  let articlesCarousel = $("#articlesCarousel").owlCarousel({
    margin:20,
    // items: 4,
    dots:false,
    nav:true,
    navText: ["<img src='./img/arrow.svg'>","<img src='./img/arrow.svg'>"],
    autoplayTimeout: 5000,
    loop:true,
    smartSpeed: 2000,
    responsive:{
      0:{
          items:1,
          // nav:true
      },
      992:{
        items:4,
        // nav:true
      },
    }
  })
};
$(".toggle_icon").click(function(){
  $('.mobile-menu').addClass('open animate__fadeInLeft')
})
// $('.mobile-menu').click((e)=>{
//   console.log("click");
//   console.log($(e.target).closest('.link-cotainer'));
  
//   if (!$(e.target).closest('.link-cotainer').length){
//     $(".mobile-menu").toggleClass('open')
//   }
// });
$(".close-menu, .back-drop").click(function(){
  console.log("clis")
  $('.mobile-menu').addClass('animate__fadeOutLeft')
  setTimeout(() => {
    $('.mobile-menu').removeClass('open animate__fadeOutLeft animate__fadeInLeft')
  }, 900);
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

$(".form-control").on("keyup change", function (event) {
  if($(this).parent().siblings('.invalid').length){
    $(this).parent().siblings('.invalid').hide()
    $(this).removeClass('error')
  }
});




