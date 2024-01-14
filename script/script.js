// Desaparecimento do botão para subir
function arrowLeft(){
  const upArrow = document.querySelector(".setaCima");

  window.addEventListener("scroll", () => {
    if(scrollY === 0){
      upArrow.style.display = "none";
    } else{
      upArrow.style.display = "flex";
    }
  });
}

arrowLeft();


// Funcionalidade do carrossel
const controls = document.querySelectorAll('.control');

let currentItem = 0;

const items = document.querySelectorAll('.item');

const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');
        
        if(isLeft){
            currentItem -= 1;
        } else{
            currentItem += 1;
        }

        if(currentItem >= maxItems){
            currentItem = 0;
        }

        if(currentItem < 0){
            currentItem = maxItems - 1;
        }

        // console.log("control", isLeft, currentItem);

        items.forEach(item => item.classList.remove('current-item'));

        const scrollLeft = items[currentItem].offsetLeft - (window.innerWidth / 2 - items[currentItem].offsetWidth / 2);

        // Ajusta a posição de rolagem do carrossel
        document.querySelector('.gallery-wrapper').scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });

        // items[currentItem].scrollIntoView({
        //     inline: "center",
        //     behavior: "smooth"
        // })
    })
});


// Abrir e fechar o menu
function menuWorking(){
  const btnMenu = document.querySelector("#menu")
  const menu = document.querySelector("#navBarMenu")
  const btnCloseMenu = document.querySelector("#btnClose");
  const links = menu.querySelectorAll("a");

  btnMenu.addEventListener("click", () =>{
    menu.style.right = "0";
  })

  btnCloseMenu.addEventListener("click", () =>{
    menu.style.right = "-70%"
  })

  for(let link of links){
    link.addEventListener("click", () =>{
      menu.style.right = "-70%";
    })
  }

}

menuWorking();
