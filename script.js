const sections = document.querySelectorAll('[data-scroll]');

if(sections.length){
const windowMetade = window.innerHeight * 0.45;

function animaScroll(){
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - windowMetade;
    const isSectionVisible = (sectionTop - windowMetade) < 0;
    if(isSectionVisible){
      section.classList.add('ativo')
    } else if(  section.classList.contains('ativo')) {
      section.classList.remove('ativo')
      
    }
  })
}

window.addEventListener('scroll', animaScroll);
}

const titulos = document.querySelectorAll("h1");

function animaTitulo(){
    const windowMetade = window.innerHeight * 0.45;
    titulos.forEach((titulo) => {
        const tituloTop = titulo.getBoundingClientRect().top -windowMetade;
        const isTituloVisivel = (tituloTop - windowMetade) < 0;
        if(isTituloVisivel){
            titulo.classList.add('ativo')
          } else if( titulo.classList.contains('ativo')) {
            titulo.classList.remove('ativo')
            
          }
    })
}
window.addEventListener("scroll", animaTitulo);


const imgComidas = document.querySelectorAll('.img-food');

if(imgComidas.length){
const windowMetade = window.innerHeight * 0.45;

function animaFood(){
  imgComidas.forEach((comida) => {
    const comidaTop = comida.getBoundingClientRect().top - windowMetade;
    const isComidaVisible = (comidaTop - windowMetade) < 0;
    if(isComidaVisible){
      comida.classList.add('ativo')
    } else if( comida.classList.contains('ativo')) {
      comida.classList.remove('ativo')
      
    }
  })
}

window.addEventListener('scroll', animaFood);
}

const cards = document.querySelectorAll('#card');

if(cards.length){
const windowMetade = window.innerHeight * 0.45;

function animaCards(){
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top - windowMetade;
    const isCardVisible = (cardTop - windowMetade) < 0;
    if(isCardVisible){
      card.classList.add('ativo')
    } else if( card.classList.contains('ativo')) {
      card.classList.remove('ativo')
      
    }
  })
}

window.addEventListener('scroll', animaCards);
}