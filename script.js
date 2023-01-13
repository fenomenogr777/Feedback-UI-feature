"use strict";
const ratingboxEL = document.getElementById("ratings");
const ratingsEL = document.querySelectorAll(".rating");
const btn= document.getElementById("btn")
const container= document.getElementById("container")

let selected = "";

const chooseRating = function (e) {
  const clicked = e.target;
  const clickedFix = clicked.closest(".rating");
  if (!clickedFix.classList.contains("rating")) return;
  ratingsEL.forEach(function (rating) {
    rating.classList.remove("active");
  });
  clickedFix.classList.add("active");
selected = clickedFix.innerText;
};

const sendReview = function () {
container.innerHTML=`
<strong class="submit-heading">Thanks you!</strong>
<br>
<br>

<p class="submit-main">Submited Feedback: ${selected}</p>
`

};

ratingboxEL.addEventListener("click", chooseRating);
btn.addEventListener("click",sendReview)

