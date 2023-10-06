const submitBtn = document.querySelector("button");
const rates = document.querySelector(".rates");
const card = document.querySelector(".rating-card");
let rating;

rates.addEventListener("click", selectRate);
submitBtn.addEventListener("click", handleSubmit);

function selectRate(e) {
  if (e.target.classList.contains("circle")) {
    rates
      .querySelectorAll("span")
      .forEach((rate) => rate.classList.remove("selected"));
    e.target.classList.add("selected");
    rating = e.target.textContent;
  }
}

function handleSubmit(e) {
  if (!rating) {
    alert("Please select a rating");
  } else {
    if (confirm(`Are you sure you want to select ${rating} rating?`)) {
      card.classList.add("second-state");
      card.innerHTML = createCard(rating);
    }
  }
}

function createCard(rate) {
  return `<div class="rating-card second-state">
    <img src="images/illustration-thank-you.svg" class="thanks-img">
    <span class="statement">You selected ${rate} out of 5</span>
    <div class="header-paragraph">
      <h2>Thank you!</h2>
  
    <p>We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!</p>
    </div>
  </div>`;
}
