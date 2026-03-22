//Бургер меню 

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!burger.contains(event.target) && !menu.contains(event.target)) {
    burger.classList.remove('active');
    menu.classList.remove('active');
  }
});

//Проверка телефона 

document.getElementById("phone").addEventListener("input", function(e) {

let x = e.target.value.replace(/\D/g, '').substring(0, 12);

let formatted = "+375";

if (x.length > 3) {
formatted += " (" + x.substring(3,5);
}

if (x.length >= 5) {
formatted += ") " + x.substring(5,8);
}

if (x.length >= 8) {
formatted += "-" + x.substring(8,10);
}

if (x.length >= 10) {
formatted += "-" + x.substring(10,12);
}

e.target.value = formatted;

});


// отправка формы

document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("formStatus").innerText =
    "Заявка отправлена. Мы свяжемся с вами.";

  this.reset();
});


//прокрутка вверх
const btn = document.getElementById("scrollTopBtn");
const footer = document.querySelector("footer")

// Показ/скрытие кнопки при скролле
window.addEventListener("scroll", () => {
  const footerPosition = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
	
	if (window.scrollY > 300 && footerPosition > windowHeight) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// Плавный скролл наверх
btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

