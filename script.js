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
<div>
<strong class="submit-heading">Thanks you!</strong>
<br>
<br>

<strong class="submit-main">Submited Feedback: <span>${selected}</span></strong>
<p>We'll use your feedback to improve our customer support</p>
</div>
`

};

ratingboxEL.addEventListener("click", chooseRating);
btn.addEventListener("click",sendReview)

