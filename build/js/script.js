"use strict";$(function(){console.log("loaded");var o=$("#blot__img1"),e=$("#blot__img2"),n=$("#blot__img3"),t=$("#blot__img4"),l=$("#blot__img5");function c(o){$(o).css({display:"block","z-index":"2000"})}function i(o){$(o).css({display:"none"})}o.hover(function(o){console.log(),window.popup1=o.target.offsetParent.offsetParent.children[1],c(popup1)},function(){i(popup1)}),e.hover(function(o){console.log(),window.popup2=o.target.offsetParent.offsetParent.children[1],c(popup2)},function(){i(popup2)}),n.hover(function(o){console.log(),window.popup3=o.target.offsetParent.offsetParent.children[1],c(popup3)},function(){i(popup3)}),t.hover(function(o){console.log(),window.popup4=o.target.offsetParent.offsetParent.children[1],c(popup4)},function(){i(popup4)}),l.hover(function(o){console.log(),window.popup5=o.target.offsetParent.offsetParent.children[1],c(popup5)},function(){i(popup5)})}),$(function(){$("#input--tel").mask("+7 (999) 999-99-99");var o=document.querySelectorAll("form");Array.prototype.slice.call(o).map(function(o){o.addEventListener("submit",function(o){console.log("SUBMIT"),o.preventDefault();var e=$(this).serialize();console.log("sendBody"),console.log(e),fetch("send.php",{method:"POST",body:e,headers:{"content-type":"application/x-www-form-urlencoded"}}).then(function(o){return o.text()}).then(function(o){var e;e=o,console.log(e),"ok"!=e?alert("Ошибка отправки, попробуйте еще раз!"):alert("Ваша заявка отправлена!")})})})}),window.onload=function(){var e=document.querySelector(".video-controller--play"),n=document.querySelector(".video-controller--pause"),t=document.querySelector(".video-clip__mp4"),l=document.querySelector(".bar__line");document.querySelector(".video-clip__mp4").addEventListener("click",function(){}),e.addEventListener("click",function(){t.play(),e.style.display="none",n.style.display="block"}),n.addEventListener("click",function(){t.pause(),n.style.display="none",e.style.display="block"}),t.ontimeupdate=function(){var o=t.currentTime/t.duration*100;console.log(o),l.style.width=o+"%",100==o&&(n.style.display="none",e.style.display="block")}};