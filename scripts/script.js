//var md-width = 992;
$(document).ready(function(){
	$("#mobile-menu-btn").click(function() {
		$("#mobile-menu-dropdown").toggle();
	});
	$(window).on('resize load', function(){
		$("#mobile-menu-dropdown").hide();
		var height = $("#reason-area").height();
		var newVal = (height + 150).toString() + "px";
		var transformVal = "translate(0, " + newVal + ")";
		$("#reason-bg-middle").css("height", newVal);
		$("#reason-bg-bottom").css("transform", transformVal);
	});
});
