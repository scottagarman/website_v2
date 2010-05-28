$(function (){
	//constants
	var selected = "new";

	//SCROLL SCREEN	
	$('#s2, #s3, #s4, #s5, #s6').css({opacity:0});
	
	function cFinder(page){
		alert("This is the link id: "+page);
		switch(page){
			case 'home':
				return $('#s1');
				break;
			case 'about':
				return $('#s2');
				break;
			case 'portfolio':
				return $('#s3');
				break;
			case 'resume':
				return $('#s4');
				break;
			case 'blog':
				return $('#s5');
				break;
			case 'contact':
				return $('#s6');
				break;
			default:
				return null;
		}
	}
	
	$('.navLink').click(function(){			
		//handle history
		alert("onClick");
        $.history.load($(this).attr('id'));
        return false;
	});
	
	//HISTORY
	function load(page) {
    	//$('#'+page).click();
		var clickee = page;
		var cPage = cFinder(page);
		
		alert("onLoad(): clickee= " + clickee + " cPage id:" + $(cPage).attr('id'));
		
		if(cPage === null){
			//don't do ne thing cuz this link is not local
		}else{
			if(selected == "new"){
				$(cPage).load(clickee+'.html', function(a, b, c) {
					alert('first time page load');
			 		$(cPage).show();
					$('#s1').stop().animate({
						opacity: 0,
					  }, 750, function() {
					    // Animation complete.
					    $('#s1').hide();
					});
					$(cPage).stop().animate({
						opacity: 1,
					  }, 750, function() {
					    // Animation complete.
					    $('#topText').html("<h1>"+clickee+"</h1>");
					    selected = $(this);
					});	 			
				});
			}else{
				if($(selected).attr('id') == $(cPage).attr('id')){
					//nothing
				}else{
					$(cPage).load(clickee+'.html', function(a, b, c) {
						alert('any other link click load');
				 		$(cPage).show();
						selected.stop().animate({
							opacity: 0,
						  }, 750, function() {
						    // Animation complete.
						    selected.hide();
						});
						$(cPage).stop().animate({
							opacity: 1,
						  }, 750, function() {
						    // Animation complete.
						    $('#topText').html("<h1>"+clickee+"</h1>");
						    selected = $(this);
						});	 			
					});
				}
			}		
		}
    }
    
	$.history.init(function(url) {
	alert('in history');
    	if(url == ""){
    		load('home');
    		//selected = $('#s1');
    	}else{
    		load(url);
    	}
    });
	
});//end onLoad