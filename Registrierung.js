
function checkForm() {
	var email1 = document.getElementsByName("email1")[0].value.trim();
	var email2 = document.getElementsByName("email2")[0].value.trim();
	var passwort1 = document.getElementsByName("passwort1")[0].value.trim();
	var passwort2 = document.getElementsByName("passwort2")[0].value.trim();
	var emailCorr = false;
	var passwortCorr = false;
	
	if(email1 != email2 && email1.length > 0 && email2.length > 0) {
		emailCorr = false;
	}
	else {
		emailCorr = true;
	}
	if(passwort1 != passwort2 && passwort1.length > 0 && passwort2.length > 0) {
		passwortCorr = false;
	}
	else {
		passwortCorr = true;
	}
	
	if(!emailCorr){
		document.getElementsByName("email1")[0].style="background-color: #ff7f7f;";
		document.getElementsByName("email2")[0].style="background-color: #ff7f7f;";
	}
	else {
		document.getElementsByName("email1")[0].style="background-color: #fff;";
		document.getElementsByName("email2")[0].style="background-color: #fff;";
	}
	if(!passwortCorr){
		document.getElementsByName("passwort1")[0].style="background-color: #ff7f7f;";
		document.getElementsByName("passwort2")[0].style="background-color: #ff7f7f;";
	}
	else {
		document.getElementsByName("passwort1")[0].style="background-color: #fff;";
		document.getElementsByName("passwort2")[0].style="background-color: #fff;";
	}
	
	if(emailCorr == true && passwortCorr == true){
		return true;
	}
	else {
		false;
	}
}

window.onload = function () {		
	var form = document.getElementsByTagName("form")[0];
	
	form.onsubmit = function () {
		if(checkForm()) {
			storeLocally();	
			newWindow();
		}			
	}	
}

function storeLocally(){
	var vorname = document.getElementsByName("vorname")[0].value.trim();
	var nachname = document.getElementsByName("nachname")[0].value.trim();
	var straße = document.getElementsByName("straße")[0].value.trim();
	var hausnummer = document.getElementsByName("hausnummer")[0].value.trim();
	var plz = document.getElementsByName("plz")[0].value.trim();
	var stadt = document.getElementsByName("stadt")[0].value.trim();
	var email = document.getElementsByName("email1")[0].value.trim();
	var passwort = document.getElementsByName("passwort1")[0].value.trim();
		
	localStorage.setItem("vorname", vorname);
	localStorage.setItem("nachname", nachname);
	localStorage.setItem("straße", straße);
	localStorage.setItem("hausnummer", hausnummer);
	localStorage.setItem("plz", plz);
	localStorage.setItem("stadt", stadt);
	localStorage.setItem("email", email);
	localStorage.setItem("passwort", passwort);
}

function newWindow() {
	document.write("");
	window.location.assign('Login.html');
}
