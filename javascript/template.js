//Ian Tramble
//HCAT

$(document).ready(function(){
	document.getElementById("title").innerHTML = sessionStorage.title;
	$("#jobDescription").load(sessionStorage.url + " #jobDescription");
	$("#salaryExpectations").load(sessionStorage.url + " #salaryExpectations");
	$("#education").load(sessionStorage.url + " #education");
	$("#benefits").load(sessionStorage.url + " #benefits");
	$("#keySkills").load(sessionStorage.url + " #keySkills");
});
/*LOCALSTORAGE VS. SESSION STORAGE
PERSISTENCE: localStorage is used for long-term storage. Its data persists even after the window is closed. The data stored in sessionStorage is lost when the browser window closes.
SCOPE: localStorage data is accessible across all browser windows while sessionStorage data is confined to the browser window that it was created in.
*/