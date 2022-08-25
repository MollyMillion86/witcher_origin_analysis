

/**
* fadeTitle
* 
* Mostra titolo e subito dopo menu e bordo menu
*/
function fadeTitle() {
	$("#home-title").fadeIn(1000, function() { 
		fadeAndBorderMenu();
	});
}

/**
* fadeTitle
* 
* Mostra menu e bordo menu
*/
function fadeAndBorderMenu() {
	$("#main-menu").fadeIn(2000, function() {
		$("#menu-list > li").css("border-bottom", "1px solid red");
	});
}





$(document).ready(function() {
	
	
	// mostra nell'ordine MEDAGLIONE, TITOLO e MENU
	$("#medallion-img").delay(1000).fadeIn(3000, function() { 
		fadeTitle();
	});
	
	
	
	$("#home-title").fadeIn(2000, function() {
		$("#menu-list").fadeIn(1000);
	});
	
});