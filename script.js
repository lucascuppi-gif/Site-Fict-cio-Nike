const next = document.querySelector(".btn-nav.next");
const back = document.querySelector(".btn-nav.back");
const slides = document.querySelectorAll(".slide");
const bolinhas = document.querySelectorAll(".bolinha");
const links = document.querySelectorAll('a[href="#"]');

let contador = 0;

function desativarLinksVazios() {
  links.forEach((link) =>
    link.addEventListener("click", (e) => e.preventDefault()),
  );
}

desativarLinksVazios();

function passarSlide() {
  const slideAtivo = document.querySelector(".slide.ativo");
  const bolinhasAtivas = document.querySelectorAll(".bolinha.active");
  slideAtivo.classList.remove("ativo");
  bolinhasAtivas.forEach((bolinha) => {
    bolinha.classList.remove("active");
  });
  if (contador == 2) {
    contador = 0;
  } else {
    contador = contador + 1;
  }
  slides[contador].classList.add("ativo");
  bolinhas[contador].classList.add("active");
}

function voltarSlide() {
  const slideAtivo = document.querySelector(".slide.ativo");
  const bolinhasAtivas = document.querySelectorAll(".bolinha.active");
  slideAtivo.classList.remove("ativo");
  bolinhasAtivas.forEach((bolinha) => {
    bolinha.classList.remove("active");
  });
  if (contador == 0) {
    contador = 2;
  } else {
    contador = contador - 1;
  }
  slides[contador].classList.add("ativo");
  bolinhas[contador].classList.add("active");
}

back.addEventListener("click", voltarSlide);
next.addEventListener("click", passarSlide);

const vitrine = document.querySelector(".rolagem-cards");
const btnDir = document.querySelector("#right");
const btnEsq = document.querySelector("#left");

const passo = 480;

function rolarDireita() {
  vitrine.scrollLeft += passo;
}

function rolarEsquerda() {
  vitrine.scrollLeft -= passo;
}

btnDir.addEventListener("click", rolarDireita);
btnEsq.addEventListener("click", rolarEsquerda);
