let lastClickedId = null;
let number;

function toggleRating(rated) {
  number = rated;
  const rate = document.getElementById(`${rated}`);

  const computedStyle = getComputedStyle(document.documentElement);
  const orange = computedStyle.getPropertyValue("--orange");
  const white = computedStyle.getPropertyValue("--white");
  const lightGrey = computedStyle.getPropertyValue("--lightGrey");

  if (lastClickedId !== null) {
    const lastClickedElement = document.getElementById(lastClickedId);
    lastClickedElement.style.backgroundColor = "hsla(216, 12%, 54%, 0.5)";
    lastClickedElement.style.color = lightGrey;
  }

  rate.style.backgroundColor = orange;
  rate.style.color = white;

  lastClickedId = rated;
}

function submitRating() {
  const rating = document.querySelector(".rating");
  const ratingState = document.querySelector(".rating-state");
  const thankYouState = document.querySelector(".thankyou-state");

  rating.innerHTML = number;
  ratingState.style.display = "none";
  thankYouState.style.display = "flex";
}
