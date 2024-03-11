// STEPS
const step__one = document.getElementById("one");
const step__two = document.getElementById("two");
const step__three = document.getElementById("three");
const step__four = document.getElementById("four");

// PAGES
const page__one = document.getElementById("step__one");
const page__two = document.getElementById("step__two");
const page__three = document.getElementById("step__three");
const page__four = document.getElementById("step__four");
const page__five = document.getElementById("step__five");

// BUTTONS
const back__two = document.getElementById("back__two");
const back__three = document.getElementById("back__three");
const back__four = document.getElementById("back__four");

// Go from step one to step two
page__one.addEventListener("submit", (e) => {
  e.preventDefault();
  step__one.classList.remove("active");
  step__two.classList.add("active");
  page__one.classList.add("hidden");
  page__two.classList.remove("hidden");
});

// Go back from step two to step one
back__two.addEventListener("click", (e) => {
  e.preventDefault();
  step__two.classList.remove("active");
  step__one.classList.add("active");
  page__two.classList.add("hidden");
  page__one.classList.remove("hidden");
});

// Go from step two to step three
page__two.addEventListener("submit", (e) => {
  e.preventDefault();
  step__two.classList.remove("active");
  step__three.classList.add("active");
  page__two.classList.add("hidden");
  page__three.classList.remove("hidden");
});

// Go back from step three to step two
back__three.addEventListener("click", (e) => {
  e.preventDefault();
  step__three.classList.remove("active");
  step__two.classList.add("active");
  page__three.classList.add("hidden");
  page__two.classList.remove("hidden");
});

// Go from step three to step four
page__three.addEventListener("submit", (e) => {
  e.preventDefault();
  step__three.classList.remove("active");
  step__four.classList.add("active");
  page__three.classList.add("hidden");
  page__four.classList.remove("hidden");
});

// Go back from step four to step three
back__four.addEventListener("click", (e) => {
  e.preventDefault();
  step__four.classList.remove("active");
  step__three.classList.add("active");
  page__four.classList.add("hidden");
  page__three.classList.remove("hidden");
});

// Go from step four to thank you page
page__four.addEventListener("submit", (e) => {
  e.preventDefault();
  page__four.classList.add("hidden");
  page__five.classList.remove("hidden");
});
