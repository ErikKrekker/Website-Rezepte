
window.onload = function () {	

	var rezept = localStorage.getItem("rezept");
	
	if(rezept == 1){
		nimmRezept1();
	}
	else if(rezept == 2){
		nimmRezept2();
	}
}

function nimmRezept1(){
	document.getElementById("Rezepttitel").textContent = "Gemüseauflauf";
	
	document.getElementById("rezeptImg").setAttribute("src", "Bilder/herzhaft1.jpg")
	
	var row = document.createElement("tr");
	row.innerHTML = "<th>2 Zehen</th><th>Knoblauch</th>";
	document.querySelector("table").appendChild(row);
	
	var row = document.createElement("tr");
	row.innerHTML = "<th>300g</th><th>rote Paprika</th>";
	document.querySelector("table").appendChild(row);
	
	var row = document.createElement("tr");
	row.innerHTML = "<th>600g</th><th>Zucchini</th>";
	document.querySelector("table").appendChild(row);
	
	var row = document.createElement("tr");
	row.innerHTML = "<th>500g</th><th>Brokkoli</th>";
	document.querySelector("table").appendChild(row);
	
	var row = document.createElement("tr");
	row.innerHTML = "<th>125ml</th><th>Wasser</th>";
	document.querySelector("table").appendChild(row);
	
	var row = document.createElement("tr");
	row.innerHTML = "<th>1EL</th><th>Gemüsebrühe</th>";
	document.querySelector("table").appendChild(row);
	
	var row = document.createElement("tr");
	row.innerHTML = "<th>250g</th><th>Creme fraiche</th>";
	document.querySelector("table").appendChild(row);
	
	document.getElementById("s1").textContent = "Paprikaschoten waschen, Kerne und weiße Innenhäute entfernen und in Streifen schneiden. Zucchini putzen, waschen, und in Scheiben schneiden. Brokkoli putzen, waschen und in Röschen teilen. Möhren putzen, waschen, schälen und raspeln.";
	document.getElementById("s2").textContent = "Gemüse in eine flache Auflaufform geben. Möhren über dem Gemüse verteilen. In einem Topf Wasser zum Kochen bringen und MAGGI Gemüse Brühe auflösen. Topf von der Kochstelle nehmen und Crème fraîche unterrühren.";
	document.getElementById("s3").textContent = "Die Soße über den Auflauf gießen. Im Backofen bei 180 Grad ca. 20 Min. garen. Gouda darüber verteilen und weitere 20 Min. überbacken. Auf Tellern anrichten und servieren. Dazu passen Schweinemedaillons und Salzkartoffeln oder Reis.";
}

function nimmRezept2(){
	document.getElementById("Rezepttitel").textContent = "Grüner Smoothie";
	
	document.getElementById("rezeptImg").setAttribute("src", "Bilder/smoothie2.jpg")
	
	var row = document.createElement("tr");
	row.innerHTML = "<th>1 Handvoll</th><th>Spinat</th>";
	document.querySelector("table").appendChild(row);
	
	var row = document.createElement("tr");
	row.innerHTML = "<th>1</th><th>Apfel</th>";
	document.querySelector("table").appendChild(row);
	
	var row = document.createElement("tr");
	row.innerHTML = "<th>1</th><th>Banane</th>";
	document.querySelector("table").appendChild(row);
	
	var row = document.createElement("tr");
	row.innerHTML = "<th>1/4</th><th>Avocado</th>";
	document.querySelector("table").appendChild(row);
	
	var row = document.createElement("tr");
	row.innerHTML = "<th>1</th><th>Orange</th>";
	document.querySelector("table").appendChild(row);
	
	var row = document.createElement("tr");
	row.innerHTML = "<th>1TL</th><th>Ingwer</th>";
	document.querySelector("table").appendChild(row);
	
	var row = document.createElement("tr");
	row.innerHTML = "<th>200ml</th><th>Wasser</th>";
	document.querySelector("table").appendChild(row);
	
	document.getElementById("s1").textContent = "Zutaten waschen, ggf. schälen und klein schneiden. Die Orange wird gepresst.";
	document.getElementById("s2").textContent = "Zuerst die weichen Zutaten wie Banane, Avocado oder Mango in den Mixbehälter geben. Anschließend die restlichen Zutaten hinzufügen.";
	document.getElementById("s3").textContent = "Mit einem leistungsstarken Mixer etwa 1 Minute mixen, bis Dein Smoothie eine einheitliche, cremige Konsistenz hat.";
}
