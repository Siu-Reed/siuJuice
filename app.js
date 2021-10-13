//Movement Animation to happen
const card = document.querySelector(".card");
const cardContainer = document.querySelector(".cardContainer");
//Items
const title = document.querySelector(".title");
const carton = document.querySelector(".juice .carton");
const splash1 = document.querySelector(".juice .splash_back");
const splash2 = document.querySelector(".juice .splash_front");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving Animation Event
cardContainer.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    card.style.transform = `rotateY(${xAxis}deg)`;
});
//Animate In
cardContainer.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
  //Popout
    title.style.transform = "translateZ(150px)";
    splash1.style.transform = "translateZ(50px) rotateZ(-10deg)";
    splash2.style.transform = "translateZ(100px) rotateZ(10deg)";
    carton.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});
//Animate Out
cardContainer.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = "none";
  //Popback
    title.style.transform = "none";
    splash1.style.transform = "none";
    splash2.style.transform = "none";
    carton.style.transform = "none";
    description.style.transform = "none";
    sizes.style.transform = "none";
    purchase.style.transform = "none";
});

sizes.addEventListener('click', (e) => {
    const sizeBtn = e.target;
    if (sizeBtn.classList.value === 'sizeBtn') {
        sizeBtn.style.background = '#fcdb58';
    } else return
})
purchase.addEventListener('click', () => {alert("사실 이런 주스는 없어요 ㅎ; 마음만으로 감사합니당.")})