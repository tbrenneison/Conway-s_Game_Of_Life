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
				
				//function to find a cell's number of living neighbors 
				function findLiveNeighbors(cellId)
				{
					var liveNeighborCounter = 0; 
					var aboveCell = cellId - 100; 
					var belowCell = cellId + 100; 
					if((cellId - 1) % 100 != 0)
						{
							var leftCell = cellId - 1; 
							var belowleftCell = belowCell - 1; 
							var aboveleftCell = aboveCell - 1; 
						}
					if(cellId % 100 != 0)
						{
							var rightCell = cellId + 1; 
							var aboverightCell = aboveCell + 1; 		
							var belowrightCell = belowCell + 1; 
							}
					var allNeighbors = [aboveCell, belowCell, leftCell, belowleftCell, aboveleftCell, 
						rightCell, aboverightCell, belowrightCell];
					for (var p = 0; p < allNeighbors.length; p++)
						{
							if($("#" + allNeighbors[p]).hasClass("live") == true)
							{
								liveNeighborCounter++; 
							}
						}
					return liveNeighborCounter; 
				}
				
					
					var counter = 1;
					//setInterval repeats a function at given intervals in ms 
					var v = setInterval(function(){
						var cell = document.getElementById(counter);
						//see if the cell is alive
						if($(cell).hasClass("live") == true)
							{
								//check to see how many of the cell's neighbors are alive 
								var numberOfLivingNeighbors = findLiveNeighbors(counter); 
								//do something about it 
								if(numberOfLivingNeighbors < 2)
									{
										//cell dies with less than 2 living neighbors
										$(cell).removeClass("live").addClass("dead"); 
									} 
								else if(numberOfLivingNeighbors == 2 || numberOfLivingNeighbors == 3)
									{
										//cell lives on but does not reproduce
										//do nothing
									}
								else if(numberOfLivingNeighbors > 3)
									{
										$(cell).removeClass("live").addClass("dead"); 
									}
							}
						else //cell is dead... but...
							{
								if(numberOfLivingNeighbors == 3)
								{
									//dead cell with exactly three living neighbros becomes alive
									$(cell).removeClass("dead").addClass("live"); 
								}
							}
						counter++;
					}, 1);
					
					//stop button
					$("#stopbutton").click(function(){
					clearInterval(v);
					});
					//ends the interval after 5000 cells if button isn't pressed
					/*
					if(counter == 5000)
						{
						clearInterval(v); 
						}
					*/

			});
});

//EXTRA CODE I WAS MESSING WITH AT THE BEGINNING 

/*
				//gets a random cell
				var randotwo = Math.floor((Math.random() * 5000) +1); 
					$("#" + randotwo).removeClass("live dead").addClass("green"); 
					//don't worry above above and below going off grid because the cells don't exist 
				var above = randotwo - 100; 
					$("#" + above).removeClass("live dead").addClass("blue"); 
				var below = randotwo + 100; 
					$("#" + below).removeClass("live dead").addClass("blue");
					//find cells to the left 
				if((randotwo - 1) % 100 != 0)
					{
						var left = randotwo - 1; 
							$("#" + left).removeClass("live dead").addClass("blue"); 
						var belowleft = below - 1; 
							$("#" + belowleft).removeClass("live dead").addClass("blue"); 
						var aboveleft = above - 1; 
							$("#" + aboveleft).removeClass("live dead").addClass("blue"); 
					}
					//find cells to the right
				if(randotwo % 100 != 0)
					{
						var right = randotwo + 1; 
							$("#" + right).removeClass("live dead").addClass("blue");
						var aboveright = above + 1; 
							$("#" + aboveright).removeClass("live dead").addClass("blue"); 
						var belowright = below + 1; 
							$("#" + belowright).removeClass("live dead").addClass("blue"); 
					}
*/