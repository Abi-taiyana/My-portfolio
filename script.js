const readBtn = document.getElementById("readBtn");
const moreText = document.getElementById("more-text");

readBtn.addEventListener("click", () => {

    moreText.classList.toggle("show");

    if(moreText.classList.contains("show")){
        readBtn.textContent = "Read Less";
    }else{
        readBtn.textContent = "Read More";
    }

});

const skillCards = document.querySelectorAll(".skill-card");
skillCards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});