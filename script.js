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
const form = document.querySelector(".contact-form");
form.addEventListener("submit", async function(e){
    e.preventDefault();
    const button = document.querySelector(".gradient-btn");
    button.textContent = "Sending...";
    const data = new FormData(form);
    const response = await fetch(form.action,{
        method:"POST",
        body:data,
        headers:{
            "Accept":"application/json"
        }
    });
    if(response.ok){
        button.textContent = "✓ Message Sent";
        form.reset();
    }else{
        button.textContent = "Try Again";
    }
});