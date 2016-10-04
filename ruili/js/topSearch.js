$(function() {
	
	// JQ初始化样式
	// $('.topBar input').css('display', 'none');

	var btn=$('.login .find');
	var searchArea=$('.big input');
	var myBig=$('.big');
	var X=$('.topBar input').val();
	$('.topBar input').css('opacity', 0.8);

	
	$('.login .find,.big input').click(function(event) {
				
		event.stopPropagation();
		btn.hide();
		myBig.css({
			'width': 225,
			'height': 32
		});

		searchArea.stop().animate({'right': 1, 'opacity': 1}, 1000,function(){
			searchArea.focus(function(event) {
				if($(this).val()==X){
					$(this).val('');
					$(this).css('color', '#4b4b4b');
				}

			}).blur(function(event) {
				if($(this).val()==0){
					$(this).val(X);
					$(this).css('color', '#AEAEAE');
				}

			})
		});
		
		
	});

	$(document).click(function(event) {
			
		searchArea.stop().animate({'right': -220, 'opacity': 0}, 1000,function(){
			myBig.css('width', 17);
			btn.show();
		});	

	});

});