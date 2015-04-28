$(document).ready(function() {
	garage.init();
	valet.init();
});

var garage = {
	size: parseInt(prompt("Garage Size?")),
	spaces: [ ],
	getEmptySpaces: function() {
		var emptySpaces = [ ];
		for (i in garage.spaces) {
			if (garage.spaces[i] === null) {
				emptySpaces.push(i);
			}
		}
		return emptySpaces;
	},
	
	init: function() {
		for (var i = 0; i < garage.size; i++) {
			garage.spaces[i] = null;
		}
		window.setInterval(function() {
			$(".freeSpaces").html(garage.getEmptySpaces().length);
		}, 500);
	}
};

var valet = {
	receiveCar: function(car) {
		var spaceID = garage.getEmptySpaces()[0];
		if (spaceID) {
			garage.spaces[spaceID] = car;
			return spaceID;
		}
		return false;
	},
	retrieveCar: function(spaceID) {
		spaceID = parseInt(spaceID);
		var car = garage.spaces[spaceID];
		if (car) {
			garage.spaces[spaceID] = null;
			return car;
		}
		return false;
	},
	
	init: function() {
		$(".dropOff form").submit(function(e) {
			e.preventDefault();
			
			var car = $(this).find("input[type=text]").val().trim();
			if (!car) {
				return;
			}
			var	ticketID = valet.receiveCar(car);
			if (!ticketID) {
				alert("Garage is full!");
				return;
			}
			
			$(this).find("input[type=text]").val("");
			$(".tickets ul").append("<li data-id='" + ticketID + "'/>").find("li[data-id=" + ticketID + "]")
				.html(car + ": <span class='ticketID'>" + ticketID + "</span>").fadeIn(200);
		});
		$(".pickUp form").submit(function(e) {
			e.preventDefault();
			
			var ticketID = $(this).find("input[type=text]").val();
			if (!ticketID) {
				return;
			}
			var car = valet.retrieveCar(ticketID);
			if (!car) {
				alert("Car not found.");
				return;
			}
			
			$(this).find("input[type=text]").val("");
			$(".tickets ul li[data-id=" + ticketID + "]").remove();
			$(".returns ul").append("<li/>").find("li").last().html(car).fadeIn(200);
		});
	}
};