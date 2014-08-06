//Ian Tramble
//HCAT

var numCareers = 8;
var numQuestions = 10; 
var numDisplay = 6; //how many numbers are displayed on careerList.html

//TO BE MEANINGFUL, EVERYONE'S TOTAL HAS TO BE THE SAME
var careers = [
	["pharaoh.html", "Egyptian Pharaoh", 0, 1, 5, 5, 1, 0, 0, 2, 5, 0],
	["philosopher.html", "Philosopher", 0, 1, 3, 1, 5, 0, 3, 5, 5, 0],
	["stoneMason.html", "Stone Mason", 4, 5, 0, 2, 4, 2, 1, 3, 0, 3],
	["romanCenturion.html", "Roman Centurion", 4.5, 4, 5, 5, 0, 4, 4, 3, 3, 5],
	["legionary.html", "Roman Legionary", 5, 2, 2, 2, 0, 5, 5, 0, 1, 5],
	["gladiator.html", "Roman Gladiator", 5, 2, 5, 1, 1, 5, 5, 0, 0, 3],
	["senator.html", "Roman Senator", 0, 4, 5, 5, 3, 0, 3, 3, 5, 3],
	["farmer.html", "Egyptian Farmer", 5, 2, 1, 3, 3, 3, 1, 0, 0, 1]
];

$(document).ready(function(){
	setResults();
	landmine();
});

function setResults() {
		var weights = JSON.parse(sessionStorage.weights); //PARSE CHANGES '[1,2,3,4,5]'->[1,2,3,4,5]
		
		//GET WEIGHTED SUM AND STORE AS PART OF ARRAY
		for (var k = 0; k < numCareers; k++) {
			var total = 0;
			for (var i = 0; i < numQuestions; i++) {
				total += weights[i] * careers[k][i+2];
			}
			careers[k].push(total);
		}
		
		//USE INSERTION SORT TO ORDER ARRAY FROM **HIGHEST TOTAL TO LOWEST TOTAL**
		for (var i = 0; i < numCareers; i++) {
			for (x = i; x > 0; x--) {
				if (careers[x][2 + numQuestions] > careers[x-1][2 + numQuestions]) {
					var temp = careers[x];
					careers[x] = careers[x-1];
					careers[x-1] = temp;
				}
			}
		}
		
		//CHANGE THE LINKS AND TITLE BASED ON THE SORTED ARRAY
		for (var c = 1; c <= numDisplay; c++) {
			$("#rank" + c + " a").attr("href", "careers/" + careers[c-1][0]); //set url
			$("#rank" + c + " a").text(careers[c-1][1]); //set inner text
			$("#rank" + c + " p").load("careers/" + careers[c-1][0] + " #jobDescription");
		}
}

//WHAT HAPPENS WHEN THE USER CLICKS ON A LINK
function landmine() {
	$("a").click(function(e) {
		e.preventDefault();
		sessionStorage.url = e.target.href; //STORE THE URL FOR USE IN AJAX CALLS
		sessionStorage.title = $(e.target).text(); //NOT e.target.text, BECAUSE HTML DOES NOT HAVE THE TEXT METHOD DEFINED, JQUERY DOES!
		document.location = "template.html";
	});
}