$(function() {

	// JQ初始化css样式

	// 左侧图片切换开始
	$('.reds_l>li').not('li.crt').css('opacity', '0.5');

		var Tli=$('.reds_l>li');
		var Bli=$('.reds_r>li');

		Bli.hover(function() {
			$(this).addClass('current').siblings().removeClass('current');

			var i=$(this).index();
			Tli.eq(i).stop().animate({'opacity': 1}, 'normal').addClass('crt').siblings().stop().animate({'opacity':0.5}, 'normal').removeClass('crt');


		}, function() {
		

	});

	// 左侧图片切换结束



});


$(function() {
	

	// 右侧文案切换开始
	var hotLi=$('.rankHd li');
	var hotOl=$('.rankInfo');


	hotLi.mouseenter(function() {
		
		$(this).addClass('current').siblings('li').removeClass('current');

		var s=$(this).index();
		hotOl.eq(s).addClass('cur').siblings('ol').removeClass('cur');

	});

});