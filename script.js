const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.querySelector("#submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        submitButton.addEventListener("click", () => {
            thanksContainer.classList.remove("hidden")
            mainContainer.classList.add("hidden")
        })
        rating.innerHTML = rate.innerHTML
    })
});