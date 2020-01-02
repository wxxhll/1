$(function () {
	//导航下拉菜单制作
	$(".nav li").mouseenter(function () {
		var winW = $(window).width(); //获取屏幕宽度
		var liW = $(this).offset().left;
		if(winW - liW < 240){
			$('.nav dl dl').css({left:'-238px'});
		}else{
			$('.nav dl dl').css({left:'238px'});
		}
		$(this).find('a:first').addClass('nav-dlcur');
	    $(this).find("dl:first").show();
	});
	$(".nav li").mouseleave(function () {
		$(this).find('a:first').removeClass('nav-dlcur');
	    $(this).find("dl:first").hide();
	});
	$(".nav dd").mouseenter(function () {
		$(this).find('a:first').addClass('nav-dlcur');
	    $(this).find("dl:first").show();
	});
	$(".nav dd").mouseleave(function () {
		$(this).find('a:first').removeClass('nav-dlcur');
	    $(this).find("dl:first").hide();
	});
	//轮播图
	/*左右箭头*/
	$('.flash').mouseenter(function(){
		$('.flash-left,.flash-right').fadeIn(200);
		window.clearInterval(flashAuto);/*停止自动播放*/
	});
	$('.flash').mouseleave(function(){
		$('.flash-left,.flash-right').fadeOut(200);
		flashAuto = window.setInterval(function(){
			$('.flash-right').click();
		},4000);/*自动播放*/
	});
	$('.flash-left').click(function(){
		var oldnum = $('.flash-btncur').index('.flash-btn span');
		var last = $('.flash-btn span:last').index('.flash-btn span');
		var newnum;
		if(oldnum != 0){
			newnum = oldnum - 1;
		}else{
			newnum = last;
		}
		$('.flash-img li').eq(oldnum).fadeOut(500);
		$('.flash-img li').eq(newnum).fadeIn(500);
		$('.flash-btn span').eq(newnum).addClass('flash-btncur').siblings('span').removeClass('flash-btncur');
	});
	$('.flash-right').click(function(){
		var oldnum = $('.flash-btncur').index('.flash-btn span');
		var last = $('.flash-btn span:last').index('.flash-btn span');
		var newnum;
		if(oldnum != last){
			newnum = oldnum + 1;
		}else{
			newnum = 0;
		}
		$('.flash-img li').eq(oldnum).fadeOut(500);
		$('.flash-img li').eq(newnum).fadeIn(500);
		$('.flash-btn span').eq(newnum).addClass('flash-btncur').siblings('span').removeClass('flash-btncur');
	});
	/*下方span*/
	$('.flash-btn span').mouseenter(function(){
		var oldnum = $('.flash-btncur').index('.flash-btn span');/*找到类的位置*/
		var newnum = $(this).index('.flash-btn span');/*当前span位置*/
		if(oldnum == newnum){
			return;
		}
		$('.flash-img li').eq(oldnum).fadeOut(500);
		$('.flash-img li').eq(newnum).fadeIn(500);
		$(this).addClass('flash-btncur').siblings('span').removeClass('flash-btncur');
	});	
	/*自动播放*/
	var flashAuto = window.setInterval(function(){
		$('.flash-right').click();
	},4000);
	
	/*内容1 ball*/
	$('.ball li').mouseenter(function(){
		var newnum = $(this).index('.ball li');/*当前li的位置*/
		var oldnum;
		$('.ball li').each(function(){//each循环
			var num = $(this).index('.ball li');//循环到当前li的位置
			if($(this).hasClass('ball-li' + num + '-cur')){
				oldnum = num;
				return false;//跳出each循环
			}
		});
		if(newnum != oldnum){
			$(this).addClass('ball-li' + newnum + '-cur');
			$('.ball li').eq(oldnum).removeClass('ball-li' + oldnum + '-cur');
			$(this).stop();
			$('.ball li').stop();
			$(this).animate({width:'502px'},500);
			$('.ball li').eq(oldnum).animate({width:'167px'},500);
		}
	});
	
	// 关于我们
	// 左
	$('.about-left').mouseenter(function(){
		$(this).find('p').stop();
		$(this).find('img').stop();
		$(this).find('p').animate({bottom:'0'},200);
		$(this).find('img').animate({width:'540px',marginLeft:'-10px',marginTop:'-10px'},200)
	});
	$('.about-left').mouseleave(function(){
		$(this).find('p').stop();
		$(this).find('img').stop();
		$(this).find('p').animate({bottom:'-241px'},200);
		$(this).find('img').animate({width:'491px',marginLeft:'0px',marginTop:'0px'},200)
	});
	// 右
	$('.about .about-btn-r a').click(function(){
		var last = $('.about-right li:last').index('.about-right li');
		var num = $('.about-right li:not(:hidden)').index('.about-right li');
		if(num != last){
			$('.about-right li:not(:hidden)').hide().next().show();
		}else{
			$('.about-right li:not(:hidden)').hide();
			$('.about-right li:first').show();	
		}	
	});
	$('.about .about-btn-l a').click(function(){
		var num = $('.about-right li:not(:hidden)').index('.about-right li');
		if(num != 0){
			$('.about-right li:not(:hidden)').hide().prev().show();
		}else{
			$('.about-right li:not(:hidden)').hide();
			$('.about-right li:last').show();	
		}
	});
	
	//合作伙伴
	$('.friend-main .about-btn-l a').click(function(){
		$('.friend-main-ul li:first').animate({marginLeft:'-201px'},300,function(){
			$(this).appendTo('.friend-main-ul');
			$(this).css({marginLeft:'0px'});
		});
	});
	$('.friend-main .about-btn-r a').click(function(){
		$('.friend-main-ul li:last').css({marginLeft:'-201px'});
		$('.friend-main-ul li:last').prependTo('.friend-main-ul');
		$('.friend-main-ul li:first').animate({marginLeft:'0px'},300);
	});
	
	// 回到顶部
	$(window).scroll(function(){
		var winh = $(window).height();/*获取可视窗口宽度*/
		var scrh = $('body').scrollTop() + $('html').scrollTop();/*获取整个网页滚动高度,兼容各种浏览器(body支持Chrome/Opera/Safari;HTML支持火狐/IE)*/
		if(scrh >= winh){
			$('.to-top').fadeIn(200);
		}else{
			$('.to-top').fadeOut(200);
		}
	});
	$('.to-top,.kefu-to-top').click(function(){
		$('body,html').animate({scrollTop:0},200);
	});
	


	//关于我们
	$('.detail-left li').click(function(){
		var numtop = $(this).index('.detail-left li');
		var attrstr = $(this).text();
		// var emstr = $('.detail-position em').text();
		$(this).addClass('detail-navcur').siblings('li').removeClass('detail-navcur');
		$('.detail-right li').hide();
		$('.detail-right li').eq(numtop).show();
		$(".detail-position em").html(attrstr);//替换em文字
	});
	
	
	
	
	// list页面筛选
	$('.list-top ul').isotope({
		itemSelector: ".list-top ul li",
		layoutMode: "fitRows"
	});
	$('.list-top ul li[datafilter]').each(function(){
		$(this).click(function(){
			var attrfilter = $(this).attr('datafilter');
			$(this).addClass('list-top-navcur').siblings('li').removeClass('list-top-navcur');
			$('.list-main ul').isotope({filter:attrfilter});
		});
	});
});