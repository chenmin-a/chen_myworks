$(function() {
	// 返回

	$(".head-back").on("click", function() {
		window.history.back();
	});

	// 公司信息侧边栏滑动
	var msgBtn = $('#msgbtn'),

		sideBar = $('#side-bar');

	var sidebg = $('.bg-a');

	msgBtn.on("click",function() {

		sidebg.css('display', 'block');

		$('.wrap').css({
			"overflow": "hidden"
		});

		sideBar.stop().animate({

			left: '0'

		}, 600);

	});

	sidebg.on("click",function(){
		sideBar.stop().animate({

			left: '-2.9rem'

		}, 300);

		$(this).css('display', 'none');
	})

	// 设置——消息提醒

	var onOff = $('#onoff'),

		onOffBtn = $('.onoff-btn');

	onOff.on("click",function(){
    
    if (onOff.hasClass('cur')) {

			onOff.removeClass('cur');

			onOffBtn.stop().animate({
				'right': '0'
			});

		} else {

			onOff.addClass('cur');

			onOffBtn.stop().animate({
				'right': '0.22rem'
			});
		}
});


});