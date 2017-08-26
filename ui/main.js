console.log('Loaded!');
$(function(){ //Thedropdown. $("#options").click(function(){ slideAway(".more","options"); 
$("#events").css("opacity","0.35"); $("#news").css("opacity","0.35"); });
 //Theslidingmenu $("#menu").click(function(){ slideAway("#menub","menu");
 $(".nav").toggleClass("nav2"); $("#events").css("opacity","0.35");
 $("#news").css("opacity","0.35");
 });
/*Thehiddenprofilebar*/ 
//Opening&closingthebar
 $("footer,.name3,.img3").click(function(){ $("#menub").fadeIn();
 $("#menu").removeClass("menu2") .addClass("menu1");
 $("#nav").removeClass("nav2") .addClass("nav1");
 $("#options").removeClass("options2") .addClass("options1");
 $(".more").slideUp(); slideAway("#profile#picture","profile"); 
$("#topic").toggleClass("topic2"); $("#events").css("opacity","0.35"); 
$("#news").css("opacity","0.35"); clearInterval(shake); });
 $("#cancel").click(function(){ slideAway("#profile#picture","profile"); 
$("#topic").toggleClass("topic2"); $("#events").css("opacity","0.35"); 
$("#news").css("opacity","0.35"); clearInterval(shake); }); 
//Closingthebaronmouseleave
 $("#profile").mouseleave(function(){ $("#profile").removeClass("profile2"); $("#profile").addClass("profile1"); $("#topic").removeClass("topic2");
$("#topic").addClass("topic"); $("#profile#picture").slideUp(700);
}) /*Profilebarend*/
//FunctionhandlingalltheSlideOuts functionslideAway(item,classes){ $(item).slideToggle(700);
 $("#"+classes).toggleClass(classes+"2"); }
//focusonthe'events'textonTouchStart. $("#events,#news").on('touchstart',function(){ $("#events").css("opacity","1");
 $("#news").css("opacity","1"); });
//Swappingbetweentabs //tonews $(".name2,.img2").click(function(){ $("#menu").trigger('click'); $("#options").removeClass("options2") .addClass("options1"); setTimeout(function(){ $("#events").hide(1200); $("#news").show(1200); },500); })
 //tohome $(".name1,.img1").click(function(){ $("#menu").trigger('click'); 
$("#options").removeClass("options2") .addClass("options1"); 
setTimeout(function(){ $("#news").hide(1200); $("#events").show(1200); },500); })
//FunctioncontrollingthescrollToTop $(window).scroll(function(){ if($(this).scrollTop()>100){ $('.scrollToTop').fadeIn(); }
else{
$('.scrollToTop').fadeOut();
}
}); 
//Scrolltotoponclick $('.scrollToTop').click(function(){ $('html,body').animate({scrollTop:0},800,function(){ $("#events").css("opacity","1");
 $("#news").css("opacity","1"); }); returnfalse; });
//TemporaryBottombaranimation 
varshake=setInterval(function(){ var$foot=$("footer"); var$footext=$('footer').text(); 
$('footer').text("ClickMe!"); 
$($foot).animate({"padding-bottom":"10vh"},350,function(){ $($foot).animate({"padding-bottom":"0px"},270,function(){ $($foot).animate({"padding-bottom":"5vh"},190,function(){ $($foot).animate({"padding-bottom":"0px"},130); 
$('footer').text($footext);
 });
 });
 }); 
},4000)
});