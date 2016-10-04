// 左侧切换
$(function() {
	
	// JQ初始化css样式
	// $('.hotContent:first').css('display', 'block');

	var aLi=$('#actionHd li');
	var aDiv=$('.hotAction #Haction');

	aLi.mouseenter(function(event) {
		
		$(this).addClass('current').siblings('li').removeClass('current');

		var i=$(this).index();

		aDiv.eq(i).addClass('crrt').siblings('div').removeClass('crrt');

	});

});


// 中部列表切换

$(function() {

	$('.imgChtr .pgph:first').css('display', 'none');
	$('.imgChtr .subImgChtr:first').css('display', 'block');
	$('.imgChtr .pgph:last').css('display', 'none');
	$('.imgChtr .subImgChtr:last').css('display', 'block');

	var TaLi=$('.imgChtr li');

	TaLi.mouseenter(function(event) {
		
		$(this).children('.pgph').hide();
		$(this).siblings('li').children('.pgph').show();
		$(this).children('.subImgChtr').show();
		$(this).siblings('li').children('.subImgChtr').hide();
		

	});





});