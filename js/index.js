"use strict";window.onscroll=function(){var t=window.scrollY,n=document.getElementById("egu").getElementsByClassName("head")[0];150<t?n.classList.add("head_fixe"):n.className="head"},$(function(){$(".qbsp").click(function(){$(".nav_left").fadeToggle()}),$(".nav_left").on("mouseover","li",function(){$(".nav_right_01").css("display","none"),$(".nav_right_01").eq($(this).index()).css("display","block")}),$(".sort").on("mouseout","li",function(){$(".nav_right_01").css("display","none")})}),window.onload=function(){var t=new Swiper(".swiper-container",{autoplay:{delay:2e3,disableOnInteraction:!1},loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(t,n){return'<span class="'+n+'"></span>'}},mousewheel:!1}),n=document.getElementById("swiper-container");n.onmouseover=function(){t.autoplay.stop()},n.onmouseout=function(){t.autoplay.start()}},$(function(){var t=null,n=0,e=$(".solid_nav li").length;function i(){t=setInterval(function(){e<=++n&&(n=0),$(".show_ul li").eq(n).fadeIn(200).siblings("li").fadeOut(200),$(".solid_nav li ").eq(n).addClass("on").siblings().removeClass("on")},2e3)}if($(".content_box").hover(function(){clearInterval(t)},function(){i()}),$(".solid_nav li").click(function(){clearInterval(t),n=$(this).index(),$(this).addClass("on").siblings().removeClass("on"),$(".show_ul img").eq(n).fadeIn(200).siblings("img").fadeOut(200)}),i(),$(".goods_list_r").find("h5").click(function(){$(".mycart").remove(),$("body").prepend("<div class='mycart'>加入购物车成功！</div>"),$(".mycart").fadeIn(3e3).fadeOut(3e3)}),$.cookie("user")){var s=$.cookie("user").split("=");if(s[0]){$.ajax({type:"post",url:"src/api/egu-pd/cart.php",async:!0,data:{usname:s[0],page:1,qty:15},success:function(t){!function(t){var n=JSON.parse(t),e=n.list.map(function(t){return' <li class="clear">\n    \t\t\t\t<div class="sptp fl">\n    \t\t\t\t\t<img src="src'+t.image.split("..")[1]+'" alt="">\n    \t\t\t\t</div>\n    \t\t\t\t<div class="miaos fl">\n    \t\t\t\t\t<div class="xiangq">一级台湾释迦5kg\n    \t\t\t\t\t\t<p>￥'+t.price+"✖\n    \t\t\t\t\t\t\t<span>"+t.number+'</span>\n    \t\t\t\t\t\t</p>\n    \t\t\t\t\t</div>\n    \t\t\t\t\t<span class=" fr" style="color: black">删除</span>\n    \t\t\t\t</div>\n    \t\t\t</li>'}).join("");$(".spc").html(e);var i=n.total;$(".cetu").find("i").text(i),$(".cart_num").text(i),$(".text-red").text(i),$(".ggjs").text(i),$(".text-red").text(i);var s=i/n.qty;$(".page-total").text(s)}(t)}})}}$(".dlbtc").click(function(){$.cookie("user",null,{expires:-1,path:"/"}),$(".kegb").text("免费注册"),$(".dlbtc").text("登录"),$(".xzyhm").remove()})});