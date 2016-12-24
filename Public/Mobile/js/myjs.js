$(function(){
    //弹窗
    $('.tcdiv1').css('height',$(window).height()-100);
    window.tanchuang = function(id, str){
            						 $.ajax({
            	 								 type:'post',
            	 								 url:'/Mobile/Index/ajax.html',
            	 		             data:'id='+str,
            	 		             dataType:'json',
            	 		             success:function(data){
          										
            										 $('#img').attr('src','/Uploads/'+data.thumb4);
            	 									 $('#title').html(data.title);
            	 									 $('#content').html(data.content);

                                 $('.zx1').fadeIn();
                                 $('.tcdiv1').fadeIn();
                                 $.fn.fullpage.setAllowScrolling(false);
            	 		            }
            	 					});
    }

    $('.gb,.zx1').click(function(){
        $('.zx1').hide();
        $('.tcdiv1').hide();
        $.fn.fullpage.setAllowScrolling(true);
    })
})
