document.addEventListener("DOMContentLoaded", () => {
  initBurger();
  initPhoneMask();
  initScrollTop();
  initAccordion();
});


function  initBurger() {
	//Бургер меню
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
if (!burger || !menu) return;

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});

// document.addEventListener("click", (event) => {
//   if (!burger.contains(event.target) && !menu.contains(event.target)) {
//     burger.classList.remove("active");
//     menu.classList.remove("active");
//   }
// });
}

function initPhoneMask() {
//Проверка телефона
const phoneInput = document.getElementById("phone");
if (!phoneInput) return;

phoneInput.addEventListener("input", function (e) {
    let x = e.target.value.replace(/\D/g, "").substring(0, 12);

    let formatted = "+375";

    if (x.length > 3) formatted += " (" + x.substring(3, 5);
    if (x.length >= 5) formatted += ") " + x.substring(5, 8);
    if (x.length >= 8) formatted += "-" + x.substring(8, 10);
    if (x.length >= 10) formatted += "-" + x.substring(10, 12);

    e.target.value = formatted;
  });
}
function initScrollTop() {
  const btn = document.getElementById("scrollTopBtn");
  const footer = document.querySelector("footer");
  if (!btn || !footer) return;

  window.addEventListener("scroll", () => {
    const footerPosition = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    btn.style.display =
      window.scrollY > 300 && footerPosition > windowHeight
        ? "block"
        : "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


// отправка формы
document.getElementById("contactForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("formStatus").innerText =
      "Заявка отправлена. Мы свяжемся с вами.";

    this.reset();
  });



//Аккордеон
function initAccordion() {
document.addEventListener("click", (e) => {
  const header = e.target.closest(".accordion-header");
  if (!header) return;

  const item = header.closest(".accordion-item");
  const body = item.querySelector(".accordion-body");

  const isOpen = item.classList.contains("active");

  // закрыть все
  document.querySelectorAll(".accordion-item").forEach((i) => {
    i.classList.remove("active");
    const b = i.querySelector(".accordion-body");
    b.style.height = b.scrollHeight + "px"; // фиксируем
    requestAnimationFrame(() => {
      b.style.height = "0px";
    });
  });

  // открыть текущий
  if (!isOpen) {
    item.classList.add("active");

    body.style.height = "auto";
    const height = body.scrollHeight + "px";
    body.style.height = "0px";

    requestAnimationFrame(() => {
      body.style.height = height;
    });
  }
});
}