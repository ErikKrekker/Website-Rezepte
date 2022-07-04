
window.onload = function () {		
	var form = document.getElementsByTagName("form")[0];
	form.onsubmit = function () {
		testLogin();	
	}
}

function testLogin() {
	var email = document.getElementsByName("email")[0].value.trim();
	var passwort = document.getElementsByName("passwort")[0].value.trim();
	
	if(email == localStorage.getItem("email") && passwort == localStorage.getItem("passwort")) {
		document.write("");
		window.location.assign('Startseite.html');
	}
}

function goRegistrate() {
	window.location.assign('Registrierung.html');
}