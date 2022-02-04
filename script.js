var transitioning = false;
window.mobileC = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
if(mobileC){
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

const toggleButton = document.querySelector(".dark-light");

toggleButton.addEventListener("click", () => {
 document.body.classList.toggle("light-mode");
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