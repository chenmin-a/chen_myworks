
$(function() {
	
	var aHairLi=$('#hairTopHd li');
	var hairDivs=$('.hairR>div.hairCon');

	aHairLi.mouseenter(function(event) {

		var i=$(this).index();
		$(this).addClass('current').siblings('li').removeClass('current');
		hairDivs.eq(i).stop().fadeIn().siblings('div').hide();

	});















});