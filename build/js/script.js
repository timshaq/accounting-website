$(function(){console.log("loaded");var e=$("#blot__img1"),o=$("#blot__img2"),n=$("#blot__img3"),t=$("#blot__img4"),l=$("#blot__img5");function i(e){$(e).css({display:"block","z-index":"2000"})}function p(e){$(e).css({display:"none"})}e.hover(function(e){console.log(),window.popup1=e.target.offsetParent.offsetParent.children[1],i(popup1)},function(){p(popup1)}),o.hover(function(e){console.log(),window.popup2=e.target.offsetParent.offsetParent.children[1],i(popup2)},function(){p(popup2)}),n.hover(function(e){console.log(),window.popup3=e.target.offsetParent.offsetParent.children[1],i(popup3)},function(){p(popup3)}),t.hover(function(e){console.log(),window.popup4=e.target.offsetParent.offsetParent.children[1],i(popup4)},function(){p(popup4)}),l.hover(function(e){console.log(),window.popup5=e.target.offsetParent.offsetParent.children[1],i(popup5)},function(){p(popup5)})}),$(function(){$("#input--tel").mask("+7 (999) 999-99-99");var o=$("#input--tel"),n=$("#input--name");$("#send-form").on("click",function(e){e.preventDefault,18===o[0].value.length?n[0].validity.patternMismatch?(alert('Поле "Ваше Имя" должно содержать в себе только буквы (не меньше двух)'),n.addClass("error-input"),setTimeout(function(){n.removeClass("error-input")},2e3)):(console.log("send php"),$.post("send.php",{tel:o[0].value,name:n[0].value},function(e){"ok"===e?alert("Заявка отправлена, скоро мы вам перезвоним"):alert("Произошла ошибка отправки, попробуйте снова")})):(alert('Поле "Ваш телефон" должно быть заполнено'),o.addClass("error-input"),setTimeout(function(){o.removeClass("error-input")},2e3))})}),window.onload=function(){var o=document.querySelector(".video-controller--play"),n=document.querySelector(".video-controller--pause"),t=document.querySelector(".video-clip__mp4"),l=document.querySelector(".bar__line");document.querySelector(".video-clip__mp4").addEventListener("click",function(){}),o.addEventListener("click",function(){t.play(),o.style.display="none",n.style.display="block"}),n.addEventListener("click",function(){t.pause(),n.style.display="none",o.style.display="block"}),t.ontimeupdate=function(){var e=t.currentTime/t.duration*100;console.log(e),l.style.width=e+"%",100==e&&(n.style.display="none",o.style.display="block")}};