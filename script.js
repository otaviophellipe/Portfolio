function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
   
    item.forEach((eLement) => {
        if (windowTop > eLement.offsetTop){
            eLement.classList.add("animate");
        } else {
            eLement.classList.remove("animate");
        }
    });
};

animeScroll()

window.addEventListener("scroll", ()=>{
    animeScroll();
})