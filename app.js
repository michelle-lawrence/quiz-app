$(document).ready(function(){

	$("#start-game").click(function(event){
		$(".start-screen").hide();
		$(".game").show();
	});

	$("#new-game").click(function(event){
		$(".start-screen").show();
		$(".game").hide();
		$(".end-game").hide();
	});

});