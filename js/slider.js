

/*

$(document).ready(function() {
	var leftUIEl = $('.carousel-arrow-left');
	var rightUIEl = $('.carousel-arrow-right');
	var elementsList = $('.carousel-list');

	var pixelsOffset = 125;
	var currentLeftValue = 0;

	leftUIEl.click(function() {
		currentLeftValue += 125;
		elementsList.animate({ left : currentLeftValue + "px"}, 500);
	});

	rightUIEl.click(function() {
		currentLeftValue -= 125;
		elementsList.animate({ left : currentLeftValue + "px"}, 500);
	});

});

*/
$(document).ready(function() {
	var leftUIEl = $('.carousel-arrow-left');
	var rightUIEl = $('.carousel-arrow-right');
	var elementsList = $('.carousel-list');

	var pixelsOffset = 125;
	var currentLeftValue = 0;

	leftUIEl.click(function() {
		if (currentLeftValue<600)
		{
		currentLeftValue += 125;
		elementsList.animate({ left : currentLeftValue + "px"}, 500);
	}
	});

	rightUIEl.click(function() {
		if (currentLeftValue>-550)
		{
		currentLeftValue -= 125;
		elementsList.animate({ left : currentLeftValue + "px"}, 500);
	}
	});

});


