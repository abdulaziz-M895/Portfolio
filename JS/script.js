document.addEventListener("DOMContentLoaded", () => {
  // Get form elements
  const form = document.getElementById("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Add submit event listener to the form
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting

    // Call validateInputs and only submit the form if it returns true
    if (validateInputs()) {
      form.submit();
    }
  });

  // Add click event listeners to navigation links
  const allLinks = document.querySelectorAll(".nav-link");
  allLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Remove 'active' class from all links
      allLinks.forEach((link) => link.classList.remove("active"));
      // Add 'active' class to the clicked link and its similar links
      const likeLinks = document.querySelectorAll(`.${link.classList.item(1)}`);
      likeLinks.forEach((likeLink) => likeLink.classList.add("active"));
    });
  });

  // Trigger the typewriter effect on the first element immediately
  typeWriterEffect(
    document.querySelector(".front-end--h1"),
    "_front-end developer",
    true
  );

  // Set up Intersection Observer to observe when the second element comes into view
  const secondElement = document.querySelector(".front-end--h2");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Trigger the typewriter effect when the second element is visible
        typeWriterEffect(secondElement, "_front-end development", false);
        observer.unobserve(secondElement); // Stop observing after the effect has started
      }
    });
  });

  // Start observing the second element
  observer.observe(secondElement);

  // Function to validate form inputs
  function validateInputs() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    let isValid = true;

    // Validate name input
    if (!nameValue) {
      nameInput.nextElementSibling.classList.add("opacity-1");
      isValid = false;
    } else {
      nameInput.nextElementSibling.classList.remove("opacity-1");
    }

    // Validate email input
    if (!emailValue || !isValidEmail(emailValue)) {
      emailInput.nextElementSibling.classList.add("opacity-1");
      isValid = false;
    } else {
      emailInput.nextElementSibling.classList.remove("opacity-1");
    }

    // Validate message input
    if (!messageValue) {
      messageInput.nextElementSibling.classList.add("opacity-1");
      isValid = false;
    } else {
      messageInput.nextElementSibling.classList.remove("opacity-1");
    }

    return isValid;
  }

  // Function to check if an email is valid
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Function to create a typewriter effect
  function typeWriterEffect(element, message, loop) {
    const time = 150; // Typing speed
    let i = 0;

    // Function to type each character
    function type() {
      if (i < message.length) {
        element.textContent += message[i];
        i++;
        setTimeout(type, time);
      } else if (loop) {
        setTimeout(() => {
          let j = message.length;
          // Function to remove each character
          function remove() {
            if (j >= 0) {
              element.textContent = message.slice(0, j);
              j--;
              setTimeout(remove, time);
            } else {
              i = 0;
              type();
            }
          }
          remove();
        }, 500);
      }
    }

    type();
  }
});
