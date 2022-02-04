var transitioning = false;

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if (navigator.userAgent.indexOf("Firefox") > 0) {
    $(".menu-link").css("display","none");
  $(".search-bar").css("display","none");
  $(".left-side").css("display","none");
 $(".header-profile").css("display","none");
 $("#homeTab").css("display","none");
  $("#mobile").css("display","flex");
}
if(isMobile.any()){
 $(".menu-link").css("display","none");
  $(".search-bar").css("display","none");
  $(".left-side").css("display","none");
 $(".header-profile").css("display","none");
 $("#homeTab").css("display","none");
  $("#mobile").css("display","flex");
}
/*
$(function () {
 $(".menu-link").click(function () {
  $(".menu-link").removeClass("is-active");
  $(this).addClass("is-active");
 });
});
*/

$(function () {
 $(".main-header-link").click(function () {
  $(".main-header-link").removeClass("is-active");
  $(this).addClass("is-active");
 });
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
 dropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdowns.forEach((c) => c.classList.remove("is-active"));
  dropdown.classList.add("is-active");
 });
});

$(".search-bar input")
 .focus(function () {
  $(".header").addClass("wide");
 })
 .blur(function () {
  $(".header").removeClass("wide");
 });

$(document).click(function (e) {
 var container = $(".status-button");
 var dd = $(".dropdown");
 if (!container.is(e.target) && container.has(e.target).length === 0) {
  dd.removeClass("is-active");
 }
});

$(function () {
 $(".dropdown").on("click", function (e) {
  $(".content-wrapper").addClass("overlay");
  e.stopPropagation();
 });
 $(document).on("click", function (e) {
  if ($(e.target).is(".dropdown") === false) {
   $(".content-wrapper").removeClass("overlay");
  }
 });
});

$(function () {
 $(".status-button:not(.open)").on("click", function (e) {
  $(".overlay-app").addClass("is-active");
 });
 $(".pop-up .close").click(function () {
  $(".overlay-app").removeClass("is-active");
 });
});

$(".feedbutton").each(function () {
 $(this).on("click", function () {
  $(".pop-up").addClass("visible");
 });
});

$(".pop-up .close").click(function () {
 $(".pop-up").removeClass("visible");
});

$("#feedsend").on("click", function () {
 var option1 = $("#check1").is(":checked");
 var option2 = $("#check2").is(":checked");
 var feedtext = $("#feedtext").val();
 console.log(option1);
 console.log(option2);
 console.log(feedtext);
 $(".pop-up").removeClass("visible");
 $("#feedtext").val("");
 $("#check1").prop("checked", false);
 $("#check2").prop("checked", false);
});

$("#upd-menu").on("click", function () {
 if(transitioning==false){
  $("#upd-menu").addClass("is-active");
   $("#info-menu").removeClass("is-active");
   $("#cred-menu").removeClass("is-active");
   $("#home-menu").removeClass("is-active");
  transitioning=true;
  $("#homeTab").fadeOut();
  $("#infoTab").fadeOut();
  $("#creditsTab").fadeOut();
 setTimeout(function () {
  $("#updatesTab").fadeIn();
 }, 500);
  setTimeout(function () {
 transitioning=false;
 }, 750);
 }
});
$("#home-menu").on("click", function () {
 if(transitioning==false){
  $("#upd-menu").removeClass("is-active");
   $("#info-menu").removeClass("is-active");
   $("#cred-menu").removeClass("is-active");
   $("#home-menu").addClass("is-active");
  transitioning=true;
  $("#updatesTab").fadeOut();
  $("#infoTab").fadeOut();
  $("#creditsTab").fadeOut();
 setTimeout(function () {
  $("#homeTab").fadeIn();
 }, 500);
  setTimeout(function () {
 transitioning=false;
 }, 750);
 }
});
$("#info-menu").on("click", function () {
 if(transitioning==false){
  $("#upd-menu").removeClass("is-active");
   $("#info-menu").addClass("is-active");
   $("#cred-menu").removeClass("is-active");
   $("#home-menu").removeClass("is-active");
  transitioning=true;
  $("#updatesTab").fadeOut();
  $("#homeTab").fadeOut();
  $("#creditsTab").fadeOut();
 setTimeout(function () {
  $("#infoTab").fadeIn();
 }, 500);
  setTimeout(function () {
 transitioning=false;
 }, 750);
 }
});
$("#cred-menu").on("click", function () {
 if(transitioning==false){
  $("#upd-menu").removeClass("is-active");
   $("#info-menu").removeClass("is-active");
   $("#cred-menu").addClass("is-active");
   $("#home-menu").removeClass("is-active");
  transitioning=true;
  $("#updatesTab").fadeOut();
  $("#homeTab").fadeOut();
  $("#infoTab").fadeOut();
 setTimeout(function () {
  $("#creditsTab").fadeIn();
 }, 500);
  setTimeout(function () {
 transitioning=false;
 }, 750);
 }
});
