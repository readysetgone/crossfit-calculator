  $(function() {
	  	$("#weight_input").buttonset();
  		});
  		
  var main = function() {
    	$('.icon-menu').click(function(){
        $('.menu').animate({
    	     left: '0px'
			 }, 200);
		 $('body').animate({
		 	left: '285px'
 	       }, 200);
    	});
    
    $('.icon-close').click(function() {
	        $('.menu').animate({
	          left: '-285px'
	        }, 200);
	        $('body').animate({
	            left: '0px'
	        }, 200);
    	});    
	};



	var percentage_one = document.getElementById("radio1");
	var percentage_two = document.getElementById("radio2");
	var percentage_three = document.getElementById("radio3");
	
	var set_one = [65, 70, 75];
	var set_two = [70, 75, 80];
	var set_three = [75, 80, 85];

	
	var submit_button = document.getElementById('submit');
	
	submit_button.addEventListener("click", function(e){
	
	    e.preventDefault();
		
		var weight = document.getElementById("weight").value;
		
		if(!weight || weight === "" || isNaN(weight)){
			alert("Please enter a weight!");
			return;	
		} else if (weight.length === 4) {
			alert("You can't lift that much.");
			return;
		}

		if(percentage_one.checked == true){
			calculatePercentage(weight, set_one);
		} else if(percentage_two.checked == true){
			calculatePercentage(weight, set_two);
		} else {
			calculatePercentage(weight, set_three);
		}
		
		//$('#results').goTo();
	});
	
	
	function calculatePercentage(weight, set_array) {
		
	   	var calculatedWeighted = [];
	   	var roundedWeights = [];
	    
	    for(var i = 0; i < set_array.length; i++) {
	    	
	    	calculatedWeighted[i] = (weight * (set_array[i] / 100));
	
			roundedWeights[i] = Math.ceil(calculatedWeighted[i] / 5.0) * 5;
		}
				var finalWeight = "Weights: " + roundedWeights.join(', ');
				
				//document.getElementById("results").innerHTML = finalWeight;
				$("#results").fadeIn(2000).html(finalWeight);
	}
	 
$(document).ready(main);	
