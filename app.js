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

// INPUTS
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

// PLANS and ADD-ONS
const yearly = document.getElementById("switch__toggle");
const addon1 = document.getElementById("addon1");
const addon2 = document.getElementById("addon2");
const addon3 = document.getElementById("addon3");

// SUMMARY
const summary = document.getElementById("summary");
const plan = document.createElement("p");
const addons = document.createElement("ul");
let total = 0;

// Go from step one to step two
page__one.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameError = document.querySelector(".error__name");
  const emailError = document.querySelector(".error__email");
  const phoneError = document.querySelector(".error__phone");

  if (nameInput.value === "") {
    nameInput.style.outline = "1px solid red";
    nameError.textContent = "Name is required";
    return;
  }

  if (emailInput.value === "") {
    nameError.textContent = "";
    nameInput.style.outline = "1px solid  var(--light-gray)";
    emailError.textContent = "Email is required";
    emailInput.style.outline = "1px solid red";
    return;
  }

  if (phoneInput.value === "") {
    nameError.textContent = "";
    nameInput.style.outline = "1px solid  var(--light-gray)";
    emailError.textContent = "";
    emailInput.style.outline = "1px solid  var(--light-gray)";
    phoneError.textContent = "Phone is required";
    phoneInput.style.outline = "1px solid red";
    return;
  }

  // Reset errors
  nameError.textContent = "";
  nameInput.style.outline = "1px solid  var(--light-gray)";
  emailError.textContent = "";
  emailInput.style.outline = "1px solid  var(--light-gray)";
  phoneError.textContent = "";
  phoneInput.style.outline = "1px solid  var(--light-gray)";

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

  generateSummary();
});

// Go back from step four to step three
back__four.addEventListener("click", (e) => {
  e.preventDefault();
  step__four.classList.remove("active");
  step__three.classList.add("active");
  page__four.classList.add("hidden");
  page__three.classList.remove("hidden");

  // Remove summary
  summary.innerHTML = "";
  addons.innerHTML = "";
  plan.innerHTML = "";
  total = 0;
});

// Go from step four to thank you page
page__four.addEventListener("submit", (e) => {
  e.preventDefault();
  page__four.classList.add("hidden");
  page__five.classList.remove("hidden");
});

// Calculate total for each plan and add-on
const generateSummary = () => {
  if (yearly.checked) {
    if (addon1.checked) {
      addons.innerHTML += `<li class="addon"><span>Online Service</span> <span class="addon__price">+$10/yr</span></li>`;
      total += 10;
    }

    if (addon2.checked) {
      addons.innerHTML += `<li class="addon"><span>Larger Storage</span> <span class="addon__price">+$20/yr</span></li>`;
      total += 20;
    }

    if (addon3.checked) {
      addons.innerHTML += `<li class="addon"><span>Customizable Profile</span> <span class="addon__price">+$20/yr</span></li>`;
      total += 20;
    }

    switch (page__two.elements["plan"].value) {
      case "arcade":
        plan.innerHTML = `<span>Arcade (Yearly)</span> <span class="plan__price">$90/yr</span>`;
        total += 90;
        break;
      case "advanced":
        plan.innerHTML = `<span>Advanced (Yearly)</span> <span class="plan__price">$120/yr</span>`;
        total += 120;
        break;
      case "pro":
        plan.innerHTML = `<span>Pro (Yearly)</span> <span class="plan__price">$150/yr</span>`;
        total += 150;
        break;
      default:
        total;
    }

    document.getElementById(
      "total"
    ).innerHTML = `<p><span>Total (per year)</span> <span class="total__price">$${total}/yr</span></p>`;
  } else {
    if (addon1.checked) {
      addons.innerHTML += `<li class="addon"><span>Online Service</span> <span class="addon__price">+$1/mo</span></li>`;
      total += 1;
    }

    if (addon2.checked) {
      addons.innerHTML += `<li class="addon"><span>Larger Storage</span> <span class="addon__price">+$2/mo</span></li>`;
      total += 2;
    }

    if (addon3.checked) {
      addons.innerHTML += `<li class="addon"><span>Customizable Profile</span> <span class="addon__price">+$2/mo</span></li>`;
      total += 2;
    }

    switch (page__two.elements["plan"].value) {
      case "arcade":
        plan.innerHTML = `<span>Arcade (Monthly)</span> <span class="plan__price">$9/mo</span>`;
        total += 9;
        break;
      case "advanced":
        plan.innerHTML = `<span>Advanced (Monthly)</span> <span class="plan__price">$12/mo</span>`;
        total += 12;
        break;
      case "pro":
        plan.innerHTML = `<span>Pro (Monthly)</span> <span class="plan__price">$15/mo</span>`;
        total += 15;
        break;
      default:
        total;
    }

    document.getElementById(
      "total"
    ).innerHTML = `<p><span>Total (per month)</span> <span class="total__price">+$${total}/mo</span></p>`;
  }

  summary.appendChild(plan);
  summary.appendChild(addons);
};
