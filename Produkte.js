window.onload = function () {	

	var produkt = localStorage.getItem("produkt");
	
	if(produkt == 1){
		nimmProdukt1();
	}
	else if(produkt == 2){
		nimmProdukt2();
	}
}
	
function nimmProdukt1() {
	
	document.getElementById("Produkttitel").textContent = "Zuckerfreie Kekse";
	
	document.getElementById("produktImg").setAttribute("src", "Bilder/cookies1.jpg")
	
	document.getElementById("Zahl").textContent = "4,99";
	
	document.getElementById("Beschreibung").textContent = "Die Zuckerfreien Kekse von Fresh N Juicy schmecken herrlich voll, sind vegan und mit Honig gesüßt. Die leckeren Kekse passen perfekt in ein Nachmittags-Kaffee und sind zudem ein gut überlegtes Geschenk für alle Naschkatzen die auf ihre Figur achten wollen. Die verwendeten Zutaten für unseren Keks sind sorgfältig ausgewählt und stammen aus biologischer Landwirtschaft. Damit die zuckerfrien Kekse von Fresh N Juicy auch perfekt für dich und deine Freunde sind bieten wir die Kekse in einer umweltfreundlichen Großpackung an, perfekt zum teilen. So sündhaft lecker aber dennoch gesund - Dies ist das Motto auf das wir unsere zuckerfreien Kekse produzieren. Dabei versuchen wir von Fresh N Juicy Unternehmen stetig unsere Produktpalette nach ihren wünschen zu gestalten.";
}

function nimmProdukt2() {
	
	document.getElementById("Produkttitel").textContent = "Vitamin Spicy Pulver";
	
	document.getElementById("produktImg").setAttribute("src", "Bilder/puder1.jpg")
	
	document.getElementById("Zahl").textContent = "2,45";
	
	document.getElementById("Beschreibung").textContent = "Mit dem Kauf von Fairtrade-Produken leisten Sie einen wertvollen Beitrag zur Verbesserung der Lebens- und Arbeitsbedingungen in Südasien und tragen zur Förderung des Umweltschutzes bei. Ohne Zusatzstofee, Geschmacksverstärker und Farbstoffe. Der Geschmack ist einzigartig: Würzig, scharf und im Nachgang süß.";
}