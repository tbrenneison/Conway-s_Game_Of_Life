$(document).ready(function(){
		for (var i = 5000; i > 0; i--) {
	   //insert new divs (fifty rows of one hundred cells each)
		$("<div id=" + "\"" + i + "\"" + " class=\"cell dead\"></div>").insertAfter("#empty"); 
		}
			$("#startbutton").one("click",function(){
			//randomly assign "live" cells
				for (var x = 1; x <= 1000; x++) {
						var rando = Math.floor((Math.random() * 5000) + 1);
						$("#" + rando).removeClass("dead").addClass("live"); 
				}
			//for any given cell, find its neighbors
				//a row of cells is n to n+99 with n = 1 to start then  n = (n + 100) to start a new row 
				//for example the first row
				//starts with cell 1 and ends with cell 100, row two starts with cell 101 and ends with cell 200
				var randotwo = Math.floor((Math.random() * 5000) +1); 
					$("#" + randotwo).removeClass("live dead").addClass("green"); 
				var above = randotwo - 100; 
					$("#" + above).removeClass("live dead").addClass("blue"); 
				var below = randotwo + 100; 
					$("#" + below).removeClass("live dead").addClass("blue"); 
				if((randotwo - 1) % 100 != 0)
					{
						var left = randotwo - 1; 
							$("#" + left).removeClass("live dead").addClass("blue"); 
						var belowleft = below - 1; 
							$("#" + belowleft).removeClass("live dead").addClass("blue"); 
						var aboveleft = above - 1; 
							$("#" + aboveleft).removeClass("live dead").addClass("blue"); 
					}
				if(randotwo % 100 != 0)
					{
						var right = randotwo + 1; 
							$("#" + right).removeClass("live dead").addClass("blue");
						var aboveright = above + 1; 
							$("#" + aboveright).removeClass("live dead").addClass("blue"); 
						var belowright = below + 1; 
							$("#" + belowright).removeClass("live dead").addClass("blue"); 
					}

			});
});