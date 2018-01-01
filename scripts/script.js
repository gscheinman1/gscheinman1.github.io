$(document).ready(function(){
	$("#mobile-menu-btn").click(function() {
		$("#mobile-menu-dropdown").toggle();
	});
	$(window).on('resize', function(){
		$("#mobile-menu-dropdown").hide();
	});
});
