$(function(){
	var size = $('#menu li').size();
	var liHeight = $('#menu li').height()+15;
	var menuHeight = size*liHeight-15;
	$('#menu').css('left',100);
	$('#menu').css('margin-top',-(menuHeight/2));
	// $('.chakanxq').css('left',($(window).width()-1000)/2+1000);


	

    $('.gb,.zx1').click(function(){
        $('.zx1').hide();
        $('.tcdiv1').css('z-index',-99999);
         $.fn.fullpage.setAllowScrolling(true);
    })

})
