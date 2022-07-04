const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryRecipe = document.querySelectorAll('.alles');


for (let i = 0; i < categoryTitle.length; i++){
	categoryTitle[i].addEventListener('click', filterRecipe.bind(this, categoryTitle[i]))
	
}

function filterRecipe(item){
	changeActivePosition(item)
	for(let i = 0; i < allCategoryRecipe.length; i++){
		if(allCategoryRecipe[i].classList.contains(item.attributes.id.value)){

			allCategoryRecipe[i].style.display = "flex";
			allCategoryRecipe[i].style.marginTop = "20px";
		}else{
			allCategoryRecipe[i].style.display = "none";
		}
	}
}

function changeActivePosition(activeItem){
	for(let i = 0; i < categoryTitle.length; i++){
		categoryTitle[i].classList.remove('active');
	}
	activeItem.classList.add('active');
	
}

function geheRezept1() {
	localStorage.setItem("rezept", "1");
	window.location.assign("Rezept.html");
}

function geheRezept2() {
	localStorage.setItem("rezept", "2");
	window.location.assign("Rezept.html");
}

function geheProdukt1() {
	localStorage.setItem("produkt", "1");
	window.location.assign("Produkte.html");
}

function geheProdukt2() {
	localStorage.setItem("produkt", "2");
	window.location.assign("Produkte.html");
}