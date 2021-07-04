$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Children's", "Families", "You"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Journey", "History", "Path"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

 var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds

}
      
  var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
var form = document.querySelector('.light-form');
var btn = document.querySelector('.light-form__btn');
var requiredInputs = Array.prototype.slice.call(form.querySelectorAll('.light-form__control[required]'));

form.addEventListener('input', function(e) {
  var thisInput = e.target;
  var parent = thisInput.nextElementSibling;
  
  if(thisInput.value.trim() !== '') {
    thisInput.classList.add('light-form__control--active');
    parent.classList.add('light-form__label--active');
  }
  else {
    thisInput.classList.remove('light-form__control--active');
    parent.classList.remove('light-form__label--active');
  }
});

btn.addEventListener('click', function(e) {
    
  requiredInputs.forEach(function(ear){    
    if(ear.value.trim() === '') {
      e.preventDefault();
      ear.classList.add('light-form__control--error');
    }
    else {
      ear.classList.remove('light-form__control--error');
    }
  })
});

function sendMail(params) {
     var tempParams = {
	     from_name: document.getElementById("fromName").value,
		 to_name: document.getElementById("toName").value,
		 message: document.getElementById("msg").value,
	 };
	 
	 emailjs.send("gmail","template_iib40nd",tempParams)
	    .then(function(res){
		      console.log("success", res.status);
			  })
	 }
	 
	