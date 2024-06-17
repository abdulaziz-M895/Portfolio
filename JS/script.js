const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Call validateInputs and only submit the form if it returns true
  if (validateInputs()) {
    form.submit();
  }
});

const allLinks = document.querySelectorAll(".nav-link");
allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    allLinks.forEach((link) => link.classList.remove("active"));
    const likeLinks = document.querySelectorAll(`.${link.classList.item(1)}`);
    likeLinks.forEach(likeLink => likeLink.classList.add("active"))
  });
});

function validateInputs() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  let isValid = true;

  if (nameValue === "" || nameValue === null) {
    nameInput.nextElementSibling.classList.add("opacity-1");
    isValid = false;
  } else {
    nameInput.nextElementSibling.classList.remove("opacity-1");
  }

  if (emailValue === "" || emailValue === null) {
    emailInput.nextElementSibling.classList.add("opacity-1");
    isValid = false;
  } else {
    emailInput.nextElementSibling.classList.remove("opacity-1");
  }

  if (messageValue === "" || messageValue === null) {
    messageInput.nextElementSibling.classList.add("opacity-1");
    isValid = false;
  } else {
    messageInput.nextElementSibling.classList.remove("opacity-1");
  }

  return isValid;
}
