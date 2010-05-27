$(function (){
	//Test Link
	$('#s1').load('home.html', function(a, b, c) {
	});

	//SCROLL SCREEN
	
	
		
	$('#s2, #s3, #s4, #s5, #s6').css({opacity:0});
	var selected = $('#s1');
	//correct version!
	$('#home').click(function(){
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
	});
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
	});	
	
	/*
	//SCROLL SCREEN	
	$('#s2, #s3, #s4, #s5, #s6').css({opacity:0});
	var selected = $('#s1');
	//correct version!
	$('#home').click(function(){
		if($(selected).attr('id') == 's1'){
			//nothing
		}else{
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
		    $('#topText').html("<h1>welcome</h1>");
		    selected = $(this);
		});
		}
	});
	$('#about').click(function(){
		if($(selected).attr('id') == 's2'){
			//nothing
		}else{
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
		}
	});
	$('#portfolio').click(function(){
		if($(selected).attr('id') == 's3'){
			//nothing
		}else{
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
		}
	});
	$('#resume').click(function(){
		if($(selected).attr('id') == 's4'){
			//nothing
		}else{
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
		}
	});
	$('#blog').click(function(){
		if($(selected).attr('id') == 's5'){
			//nothing
		}else{
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
		}
	});
	$('#contact').click(function(){
		if($(selected).attr('id') == 's6'){
			//nothing
		}else{
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
		}
	});	
	*/
});//end onLoad