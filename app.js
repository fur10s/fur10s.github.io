
var productsCountEl = document.getElementById("products-count");
var addToCartButtons = document.querySelectorAll (".add-to-cart");

for(var i=0; i<addToCartButtons.length; i++) {
	addToCartButtons [i].addEventListener ("click", function (){
		console.log ("clicked")
		var prevProductsCount = +productsCountEl.textContent
		productsCountEl.textContent = prevProductsCount + 1

	});
}

var likeButtons = document.querySelectorAll('.like');

for (var i = 0; i<likeButtons.length; i++) {
	console.log (this)
	likeButtons[i].addEventListener('click', function() {
		if (this.classList.contains('liked')) {
			this.classList.remove('liked')
		} else {
			this.classList.add('liked')
		}
	})
}

//add slick 
  $('.slider-block').slick({
    dots: true,
  	autoplay: true,
  });