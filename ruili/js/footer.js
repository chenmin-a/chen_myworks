$(function() {
	
	var footerLi=$('#footerList li');

	var cooprationLi=$('.coopration ol');

	footerLi.click(function(event) {
		
		$(this).addClass('crt').siblings('li').removeClass('crt');

		var i=$(this).index();

		cooprationLi.eq(i).show().siblings('ol').hide();


	});


});