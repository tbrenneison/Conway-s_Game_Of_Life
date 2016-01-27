/*
Game is played on a 1000 pixel wide grid with cells of 10x10px each.  The grid is not infinite, although
it should be... I just wanted simple math.  The script is also jerky and slow.  I'm sure there's much better
ways to go about this, I just wanted to see if I could actually do it.
*/

$(document).ready(function(){
		for (var i = 5000; i > 0; i--) {
	   //insert new divs (fifty rows of one hundred cells each)
		$("<div id=" + "\"" + i + "\"" + " class=\"cell dead\"></div>").insertAfter("#empty"); 
		}
			$("#startbutton").one("click",function(){
			//randomly assign "live" cells
				for (var x = 1; x <= 800; x++) {
						var rando = Math.floor((Math.random() * 5000) + 1);
						$("#" + rando).removeClass("dead").addClass("live"); 
				}
				
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
								
				//determine state in next generation
				function findNextCellState()
				{
					for(var s = 1; s <=5000; s++)
					{
					  var thisCell = document.getElementById(s);
					  var cellNeighborCount = findLiveNeighbors(s); 
					  
						if($(thisCell).hasClass("live") == true)
						{
							if(cellNeighborCount < 2)
							{
								//if less than two living neighbors, cell dies
								$(thisCell).addClass("will_die");
							}
							else if(cellNeighborCount == 2 || cellNeighborCount == 3)
							{
								//if 2 or 3 living neighbors, cell lives
								$(thisCell).addClass("will_live");
							}
							else
							{
								//if more than three living neighbors, cell dies
								$(thisCell).addClass("will_die");
							}
						}
						else
						{
							if(cellNeighborCount == 3)
							{
								//dead cell with three living neighbors becomes alive 
								$(thisCell).addClass("will_live");
							}
						}
					}
				}
				
				function runNextGeneration()
				{
					for(var z = 1; z <= 5000; z++)
					{
						var thisCell = document.getElementById(z);
						if($(thisCell).hasClass("will_live") == true)
						{
							$(thisCell).removeClass("live dead will_live will_die").addClass("live");
						}
						else
						{
							$(thisCell).removeClass("live dead will_live will_die").addClass("dead");
						}
					}
				}
				
				//use setInterval to call functions every 10ms
				var refreshId = setInterval( function() 
		     	 	{
						findNextCellState();
						runNextGeneration();
		     	 	}, 10);
				
				//stop button fires clearInterval
				$("#stopbutton").click(function(){
					clearInterval(refreshId)
				});
		});
});

//EXTRA CODE I WAS MESSING WITH AT THE BEGINNING 


				//for any given cell, find its neighbors
				//a row of cells is n to n+99 with n = 1 to start then  n = (n + 100) to start a new row 
				//for example the first row
				//starts with cell 1 and ends with cell 100, row two starts with cell 101 and ends with cell 200

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