var num = 1;
var weights = [];
var numQuestions = 10;

$(document).ready(function(){
	$("#nextButton").click(function(e) {
		e.preventDefault();
		if (num == numQuestions + 1) {
			weights.pop();
			num = numQuestions;
		}
		weights.push(document.getElementById("questionRating").value); 
		loadPage(++num);
	});
	$("#backButton").click(function(e) {
		e.preventDefault();
		weights.pop();
		if (num == numQuestions + 1) { //NEED THIS CHECK OR ELSE IT RELOADS 5 ON TOP OF PAGE 5
			num = numQuestions;
			weights.pop();
		}
		loadPage(--num);
	});
	loadPage(num);
});

function loadPage(num) {
	if (num == 0) {document.location = 'index.html';}
	else if (num >= numQuestions + 1) {
		document.location = 'careerList.html';
		sessionStorage.setItem("weights", JSON.stringify(weights)); //STRINGIFY CHANGES [1,2,3,4,5]->'[1,2,3,4,5]' ***BECAUSE d SEESSIONSTORAGE ONLY TAKES STRINGS***
	}
	else {
		$("#container").load("questionlist.html #question" + num);
		document.getElementById("questionNumber").innerHTML = "Question: " + num + "/" + numQuestions; //replaceWith doesn't take parameter that changes
	}
}

/*JSON
-Stands for JavaScript Object Notation
-JSON is a syntax for passing around objects that contain name/value pairs, arrays and other objects.
-Language independent (available in C, PHP, etc.)
-Easy to read and convert into data structures/objects in whatever language you're using
-Leaner than XML
-Subset of JS notation, therefore syntax can be used in JS programs
*/
