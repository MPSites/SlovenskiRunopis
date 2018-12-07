window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("upBtn").style.display = "block";
		} else {
			document.getElementById("upBtn").style.display = "none";
		}
	}
	
	var toTop = document.getElementById("upBtn");
  
	  toTop.addEventListener("click", function(){
	  scrollToTop(1500);
		});
		function scrollToTop(scrollDuration) {
			var scrollStep = -window.scrollY / (scrollDuration / 15),
				scrollInterval = setInterval(function(){
				if ( window.scrollY != 0 ) {
					window.scrollBy( 0, scrollStep );
				}
				else clearInterval(scrollInterval); 
			},15);}