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
				return $('#s1');
		}
	}
	
	
	$('.navLink').click(function(){
		alert("onClick");
		var clickee = $(this).attr('id');
		var cPage = cFinder($(this).attr('id'));
		
		alert("onClick(): clickee= " + clickee + " cPage id:" + $(cPage).attr('id'));
		
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
			
			//handle history
			var url = "#" + clickee;
	        url = url.replace(/^.*#/, '');
	        $.history.load(url);
	        return false;
		}
	});
	/*
	//correct version!
	$('#home').click(function(){
		if(selected == "new"){
			$('#s1').load('home.html', function(a, b, c) {
				// Animation complete.
				$('#topText').html("<h1>home</h1>");
				selected = $(this);
			}); 
		}else{
			if($(selected).attr('id') == 's1'){
				//nothing
			}else{
				$('#s1').load('home.html', function(a, b, c) {
			 		$('#s1').show();
					selected.stop().animate({
						opacity: 0,
					  }, 750, function() {
					    // Animation complete.
					    selected.hide();
					});
					$('#s1').stop().animate({
						opacity: 1,
					  }, 750, function() {
					    // Animation complete.
					    $('#topText').html("<h1>home</h1>");
					    selected = $(this);
					});	 			
				});
			}
		
		}
		//handle history
		var url = "#home";
        url = url.replace(/^.*#/, '');
        $.history.load(url);
        return false;
	});
	
	$('#about').click(function(){
		if(selected == "new"){
			$('#s2').load('about.html', function(a, b, c) {
		 		$('#s2').show();
				$('#s1').stop().animate({
					opacity: 0,
				  }, 750, function() {
				    // Animation complete.
				    $('#s1').hide();
				});
				$('#s2').stop().animate({
					opacity: 1,
				  }, 750, function() {
				    // Animation complete.
				    $('#topText').html("<h1>about me</h1>");
				    selected = $(this);
				});	 			
			});
		}else{
			if($(selected).attr('id') == 's2'){
				//nothing
			}else{
				$('#s2').load('about.html', function(a, b, c) {
			 		$('#s2').show();
					selected.stop().animate({
						opacity: 0,
					  }, 750, function() {
					    // Animation complete.
					    selected.hide();
					});
					$('#s2').stop().animate({
						opacity: 1,
					  }, 750, function() {
					    // Animation complete.
					    $('#topText').html("<h1>about me</h1>");
					    selected = $(this);
					});	 			
				});
			}
		
		}
		//handle history
		var url = "#about";
        url = url.replace(/^.*#/, '');
        $.history.load(url);
        return false;
	});
	$('#portfolio').click(function(){
		if(selected == "new"){
			$('#s3').load('portfolio.html', function(a, b, c) {
		 		$('#s3').show();
				$('#s1').stop().animate({
					opacity: 0,
				  }, 750, function() {
				    // Animation complete.
				    $('#s1').hide();
				});
				$('#s3').stop().animate({
					opacity: 1,
				  }, 750, function() {
				    // Animation complete.
				    $('#topText').html("<h1>portfolio</h1>");
				    selected = $(this);
				});	 			
			});
		}else{
			if($(selected).attr('id') == 's3'){
				//nothing
			}else{
				$('#s3').load('portfolio.html', function(a, b, c) {
			 		$('#s3').show();
					selected.stop().animate({
						opacity: 0,
					  }, 750, function() {
					    // Animation complete.
					    selected.hide();
					});
					$('#s3').stop().animate({
						opacity: 1,
					  }, 750, function() {
					    // Animation complete.
					    $('#topText').html("<h1>portfolio</h1>");
					    selected = $(this);
					});	 			
				});
			}
		
		}
		//handle history
		var url = "#portfolio";
        url = url.replace(/^.*#/, '');
        $.history.load(url);
        return false;
	});
	$('#resume').click(function(){
		if(selected == "new"){
			$('#s4').load('resume.html', function(a, b, c) {
		 		$('#s4').show();
				$('#s1').stop().animate({
					opacity: 0,
				  }, 750, function() {
				    // Animation complete.
				    $('#s1').hide();
				});
				$('#s4').stop().animate({
					opacity: 1,
				  }, 750, function() {
				    // Animation complete.
				    $('#topText').html("<h1>resume</h1>");
				    selected = $(this);
				});	 			
			});
		}else{
			if($(selected).attr('id') == 's4'){
				//nothing
			}else{
				$('#s4').load('resume.html', function(a, b, c) {
			 		$('#s4').show();
					selected.stop().animate({
						opacity: 0,
					  }, 750, function() {
					    // Animation complete.
					    selected.hide();
					});
					$('#s4').stop().animate({
						opacity: 1,
					  }, 750, function() {
					    // Animation complete.
					    $('#topText').html("<h1>resume</h1>");
					    selected = $(this);
					});	 			
				});
			}
		
		}
		//handle history
		var url = "#resume";
        url = url.replace(/^.*#/, '');
        $.history.load(url);
        return false;
	});	
	$('#blog').click(function(){
		if(selected == "new"){
			$('#s5').load('blog.html', function(a, b, c) {
		 		$('#s5').show();
				$('#s1').stop().animate({
					opacity: 0,
				  }, 750, function() {
				    // Animation complete.
				    $('#s1').hide();
				});
				$('#s5').stop().animate({
					opacity: 1,
				  }, 750, function() {
				    // Animation complete.
				    $('#topText').html("<h1>blog</h1>");
				    selected = $(this);
				});	 			
			});
		}else{
			if($(selected).attr('id') == 's5'){
				//nothing
			}else{
				$('#s5').load('blog.html', function(a, b, c) {
			 		$('#s5').show();
					selected.stop().animate({
						opacity: 0,
					  }, 750, function() {
					    // Animation complete.
					    selected.hide();
					});
					$('#s5').stop().animate({
						opacity: 1,
					  }, 750, function() {
					    // Animation complete.
					    $('#topText').html("<h1>blog</h1>");
					    selected = $(this);
					});	 			
				});
			}
		
		}
		//handle history
		var url = "#blog";
        url = url.replace(/^.*#/, '');
        $.history.load(url);
        return false;
	});
	$('#contact').click(function(){
		if(selected == "new"){
			$('#s6').load('contact.html', function(a, b, c) {
		 		$('#s6').show();
				$('#s1').stop().animate({
					opacity: 0,
				  }, 750, function() {
				    // Animation complete.
				    $('#s1').hide();
				});
				$('#s6').stop().animate({
					opacity: 1,
				  }, 750, function() {
				    // Animation complete.
				    $('#topText').html("<h1>contact</h1>");
				    selected = $(this);
				});	 			
			});
		}else{
			if($(selected).attr('id') == 's6'){
				//nothing
			}else{
				$('#s6').load('contact.html', function(a, b, c) {
			 		$('#s6').show();
					selected.stop().animate({
						opacity: 0,
					  }, 750, function() {
					    // Animation complete.
					    selected.hide();
					});
					$('#s6').stop().animate({
						opacity: 1,
					  }, 750, function() {
					    // Animation complete.
					    $('#topText').html("<h1>contact</h1>");
					    selected = $(this);
					});	 			
				});
			}
		
		}
		//handle history
		var url = "#contact";
        url = url.replace(/^.*#/, '');
        $.history.load(url);
        return false;
	});		
	
	
	*/
	
	//old
	/*
	$('#about').click(function(){
		if($(selected).attr('id') == 's2'){
			//nothing
		}else{
			$('#s2').load('about.html', function(a, b, c) {
		 		$('#s2').show();
				selected.stop().animate({
					opacity: 0,
				  }, 750, function() {
				    // Animation complete.
				    selected.hide();
				});
				$('#s2').stop().animate({
					opacity: 1,
				  }, 750, function() {
				    // Animation complete.
				    $('#topText').html("<h1>about me</h1>");
				    selected = $(this);
				});	 			
			});
		}
		//handle history
		var url = $(this).attr('href');
        url = url.replace(/^.*#/, '');
        $.history.load(url);
        return false;
	});
	$('#portfolio').click(function(){
		if($(selected).attr('id') == 's3'){
			//nothing
		}else{
			$('#s3').load('portfolio.html', function(a, b, c) {
		 		$('#s3').show();
				selected.stop().animate({
					opacity: 0,
				  }, 750, function() {
				    // Animation complete.
				    selected.hide();
				});
				$('#s3').stop().animate({
					opacity: 1,
				  }, 750, function() {
				    // Animation complete.
				    $('#topText').html("<h1>portfolio</h1>");
				    selected = $(this);
				});	 			
			});
		}
		//handle history
		var url = $(this).attr('href');
        url = url.replace(/^.*#/, '');
        $.history.load(url);
        return false;
	});
	$('#resume').click(function(){
		if($(selected).attr('id') == 's4'){
			//nothing
		}else{
			$('#s4').load('resume.html', function(a, b, c) {
		 		$('#s4').show();
				selected.stop().animate({
					opacity: 0,
				  }, 750, function() {
				    // Animation complete.
				    selected.hide();
				});
				$('#s4').stop().animate({
					opacity: 1,
				  }, 750, function() {
				    // Animation complete.
				    $('#topText').html("<h1>resume</h1>");
				    selected = $(this);
				});	 			
			});
		}
		//handle history
		var url = $(this).attr('href');
        url = url.replace(/^.*#/, '');
        $.history.load(url);
        return false;
	});
	$('#blog').click(function(){
		if($(selected).attr('id') == 's5'){
			//nothing
		}else{
			$('#s5').load('blog.html', function(a, b, c) {
		 		$('#s5').show();
				selected.stop().animate({
					opacity: 0,
				  }, 750, function() {
				    // Animation complete.
				    selected.hide();
				});
				$('#s5').stop().animate({
					opacity: 1,
				  }, 750, function() {
				    // Animation complete.
				    $('#topText').html("<h1>blog</h1>");
				    selected = $(this);
				});	 			
			});
		}
		//handle history
		var url = $(this).attr('href');
        url = url.replace(/^.*#/, '');
        $.history.load(url);
        return false;
	});
	$('#contact').click(function(){
		if($(selected).attr('id') == 's6'){
			//nothing
		}else{
			$('#s6').load('contact.html', function(a, b, c) {
		 		$('#s6').show();
				selected.stop().animate({
					opacity: 0,
				  }, 750, function() {
				    // Animation complete.
				    selected.hide();
				});
				$('#s6').stop().animate({
					opacity: 1,
				  }, 750, function() {
				    // Animation complete.
				    $('#topText').html("<h1>contact</h1>");
				    selected = $(this);
				});	 			
			});
		}
		//handle history
		var url = $(this).attr('href');
        url = url.replace(/^.*#/, '');
        $.history.load(url);
        return false;
	});
	*/	
	
	//HISTORY
	function load(page) {
    	$('#'+page).click();
    }
    
	$.history.init(function(url) {
	alert('in history');
    	if(url == ""){
    		$('#home').click();
    		//selected = $('#s1');
    	}else{
    		load(url);
    	}
    });
	
});//end onLoad