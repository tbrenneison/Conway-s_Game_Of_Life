$(document).ready(function(){
		for (var i = 5000; i > 0; i--) {
	   //insert new divs (fifty rows of one hundred cells each)
		$("<div id=" + "\"" + i + "\"" + " class=\"cell\"></div>").insertAfter("#empty"); 
		}
			$("#startbutton").one("click",function(){
			//randomly assign "live" cells
				for (var x = 1; x <= 1000; x++) {
						var rando = Math.floor((Math.random() * 5000) + 1);
						$("#" + rando).addClass("live"); 
				}
			//figure out if cells have living neighbors
			
			});
});