/*! jQuery replaceText by "Cowboy" Ben Alman | v1.1.0 - http://benalman.com/projects/jquery-replacetext-plugin/ */
$("img").each(function(){var a=$(this).attr("data-src");$(this).attr("src",a);$(this).removeAttr("data-src")});$(".lazy-load").each(function(){var a=$(this).attr("data-src");$(this).attr("style",'background-image:url("'+a+'");');$(this).removeAttr("data-src");$(this).removeClass("lazy-load")});$(document).on("keypress",".js-chat input, .js-chat textarea",function(){if(event.keyCode===13){$(this).parents(".wwc-chat").find(".submit").trigger("click")}});$(document).on("click",".js-chat .submit",function(){whatsApp($(this).parents(".buka").attr("id"));return false});function whatsApp(l){var b=true;$("#"+l+" .wajib").each(function(){if($.trim($(this).val())==""||$.trim($(this).val())=="default"){$(this).addClass("focus")}});$("#"+l+" .wajib").each(function(){if($.trim($(this).val())==""){b=false;$(this).parents("label").find(".validasi").addClass("show");$(this).focus();return false}else{if($.trim($(this).val())=="default"){b=false;$(this).parents("label").find(".validasi").addClass("show");return false}}});if(b===true){var d="";var t="https://web.whatsapp.com/send";if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){t="whatsapp://send"}if(l=="mulai_chat"){var e=nameSeller,o=textMessage,q=62,g=nomorWhatsapp,j=$("#"+l+" .pesan").val();var d=t+"?phone="+q+g+"&text="+o+" "+e+".. "+j+"%0A%0ADikirim dari "+location.href}else{if(l=="pembelian_whatsapp"){var e=nameSeller,o=textMessage,q=62,g=nomorWhatsapp,n=$(".name_detail").text(),p=$("#"+l+" .harga").text(),a=$("#"+l+" .nama").val(),m=$("#"+l+" .email").val(),v=$("#"+l+" .jumlah").val(),r=$("#"+l+" .alamat").val(),u=$("#"+l+" .catatan").val();var d=t+"?phone="+q+g+"&text="+o+" "+e+", saya mau pesan *"+n+".*%0A%0A*Harga* : "+p+"%0A_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A%0A*Nama* : "+a+"%0A*Email*: "+m+"%0A*Alamat* : "+r+"%0A%0A*Catatan* : "+u+"%0A%0ADikirim dari "+location.href}else{alert("id tidak ditemukan")}}$(this).attr("href",d);var k=960,s=540,c=Number((screen.width/2)-(k/2)),i=Number((screen.height/2)-(s/2)),f=window.open(this.href,"","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width="+k+", height="+s+", top="+i+", left="+c);f.focus();return false}}$(document).on("click",".popWin",function(){var c=$(this).attr("href"),a=$(this).attr("data-popWidth"),b=$(this).attr("data-popHeight");if(a==null){a=960}if(b==null){b=540}left=Number((screen.width/2)-(a/2)),tops=Number((screen.height/2)-(b/2)),popupWindow=window.open(c,"","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width="+a+", height="+b+", top="+tops+", left="+left);popupWindow.focus();return false});
function resizeHeaderOnScroll(){const b=window.pageYOffset||document.documentElement.scrollTop,a=100,c=document.getElementById("newbar");if(b>a){c.classList.add("sticky")}else{c.classList.remove("sticky")}}window.addEventListener("scroll",resizeHeaderOnScroll);$(".buka-btn, .wwc-chat, .add-chat").on("click",function(){$("body").addClass("hideScroll");var e=$(this).attr("data-title");var d=$(this).attr("href");$(d).addClass("open");$(d).find(".title-content").html(e);if($(this).attr("data-img")!=null){var a=$(this).attr("data-img");$(d).find(".content img").show();$(d).find(".content img").attr("src",a)}if($(this).attr("data-width")!=null){var b=$(this).attr("data-width");$(d).find(".wrap").attr("style","max-width:"+b+"px!important;")}if($(this).attr("data-tooltip")!=null){var c=$(this).attr("data-tooltip");$(d).find(".buka-wrap").show();$(d).find(".buka-wrap").html(c)}});$(".buka .tutup").on("click",function(){$("body").removeClass("hideScroll");$(this).parents(".buka").removeClass("open")});$(document).keyup(function(a){if(a.key==="Escape"){$(".buka .tutup").trigger("click")}});$(".menu-desktop, .closeLabel, .label-button, .label-dropdown .utama").click(function(){$(".label-dropdown .Label").toggle()});$(".menu-notif").click(function(){$(".user-notif #user_menu_notif").toggle();$(".close-menu").fadeToggle()});$(".menu-link").click(function(){$(".menu-dropdown .LinkList").toggle();$(".label-dropdown .Label").hide();$(".menu-link").find("svg.menu-mobile").toggleClass("pro.menu-mobile");$(".menu-link").find("svg.menu-mobile-close").toggleClass(".menu-mobile-close");$(".close-menu").fadeToggle()});$(".close-menu").click(function(){$(".label-dropdown .Label").hide();$(".menu-link").find("svg.menu-mobile-close").removeClass(".menu-mobile-close");$(".menu-link").find("svg.menu-mobile").addClass("pro.menu-mobile");$(".close-menu").fadeOut()});$(".search-button").click(function(){$(".header-search").show();$(".header-search form .text").focus()});$(".header-search form svg.back").click(function(){$(".header-search").hide();$(".header-search form .text").blur()});$(".search-form").click(function(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Nokia|IEMobile|Opera Mini/i.test(navigator.userAgent)){$(".header-search form svg.back").trigger("click")}$(".header-search form svg.delete-icon").trigger("click")});$(document).on("keyup",".header-search form .text",function(){if(event.keyCode===13){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Nokia|IEMobile|Opera Mini/i.test(navigator.userAgent)){$(".header-search form svg.back").trigger("click")}else{$(".search-form").hide()}}});$(".header-search form .text").keyup(function(){if($(this).val()!=""){$(".search-form").show();$(".header-search form svg.delete-icon").show()}else{$(".search-form").hide();$(".header-search form svg.delete-icon").hide()}});$(".header-search form svg.delete-icon").click(function(){$(".search-form").hide();$(".header-search form svg.delete-icon").hide();$(".header-search form .text").val("")});if(sessionStorage.getItem("ss_notif")==null){$(".menu-notif span").fadeIn()}$(".menu-notif").click(function(){$(".menu-notif span").hide();sessionStorage.setItem("ss_notif",false)});if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Nokia|IEMobile|Opera Mini/i.test(navigator.userAgent)){$("a").each(function(){var a=$(this).attr("href")+"?m=1";var b=$(this).attr("href")+"&m=1";if(a==window.location||b==window.location){$(this).addClass("active")}})}else{$("a").each(function(){var a=$(this).attr("href");if(a==window.location){$(this).addClass("active")}})}$("textarea.code").each(function(){var b=$(this).val(),a=b.replace(/<br\s?\/?>/g,"");$(this).val(a);$(this).on("click",function(){$(this).select()});$(this).attr("readonly","readonly")});
(function(a){a.fn.replaceText=function(d,e,f){return this.each(function(){var c=this.firstChild,b,h,i=[];if(c){do{if(c.nodeType===3){b=c.nodeValue;h=b.replace(d,e);if(h!==b){if(!f&&/</.test(h)){a(c).before(h);i.push(c)}else{c.nodeValue=h}}}}while(c=c.nextSibling)}i.length&&a(i).remove()})}})(jQuery);function createCookie(j,i,h){if(h){var f=new Date();f.setTime(f.getTime()+(h*24*60*60*1000));var g="; expires="+f.toGMTString()}else{var g=""}document.cookie=j+"="+i+g+"; path=/"}function readCookie(c){var i=c+"=";var g=document.cookie.split(";");for(var j=0;j<g.length;j++){var h=g[j];while(h.charAt(0)==" "){h=h.substring(1,h.length)}if(h.indexOf(i)==0){return h.substring(i.length,h.length)}}return null}function eraseCookie(b){createCookie(b,"",-1)}$(function(){$("").click(function(){$("html, body").animate({scrollTop:0},"slow");return false})});$(document).ready(function(a){a("a.cart-btn").click(function(){a(".cart-box").slideToggle("fast");a(this).toggleClass("active");return false});a(".menu").superfish({speed:"fast",speedOut:"fast",})});jQuery('<div class="quantity-nav"><div class="quantity-button quantity-down">-</div><div class="quantity-button quantity-up">+</div></div>').insertAfter(".quantity input"),jQuery(".quantity").each(function(){var f=jQuery(this),c=f.find('input[type="number"]'),b=f.find(".quantity-up"),j=f.find(".quantity-down"),h=c.attr("min"),g=c.attr("max");b.click(function(){var d=parseFloat(c.val());if(d>=g){var e=d}else{var e=d+1}f.find("input").val(e),f.find("input").trigger("change")}),j.click(function(){var d=parseFloat(c.val());if(h>=d){var e=d}else{var e=d-1}f.find("input").val(e),f.find("input").trigger("change")})});$(function(){$(".separator:first").remove(),$(".post-body > img:first").remove()});