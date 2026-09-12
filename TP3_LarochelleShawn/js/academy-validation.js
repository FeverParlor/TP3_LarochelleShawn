const academyForm = document.querySelector("#academy-form");

if (academyForm) {
  const successMessage = document.querySelector("#academy-form-success");

  function showError(field, message) {
    const fieldContainer = field.closest(".academy-form__field");
    const errorMessage = fieldContainer.querySelector(".academy-form__error");

    fieldContainer.classList.add("academy-form__field--error");
    errorMessage.textContent = message;
  }

  function clearError(field) {
    const fieldContainer = field.closest(".academy-form__field");
    const errorMessage = fieldContainer.querySelector(".academy-form__error");

    fieldContainer.classList.remove("academy-form__field--error");
    errorMessage.textContent = "";
  }

  academyForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let formIsValid = true;

    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const age = document.querySelector("#age");
    const city = document.querySelector("#city");
    const experience = document.querySelector("#experience");
    const fitness = document.querySelector("#fitness");
    const goal = document.querySelector("#goal");
    const informationAgreement = document.querySelector(
      "#information-agreement",
    );
    const physicalAgreement = document.querySelector("#physical-agreement");

    const fields = [
      firstName,
      lastName,
      email,
      phone,
      age,
      city,
      experience,
      fitness,
      goal,
      informationAgreement,
      physicalAgreement,
    ];

    fields.forEach(function (field) {
      clearError(field);
    });

    successMessage.textContent = "";

    if (firstName.value.trim() === "") {
      showError(firstName, "Please enter your first name.");
      formIsValid = false;
    }

    if (lastName.value.trim() === "") {
      showError(lastName, "Please enter your last name.");
      formIsValid = false;
    }

    if (email.value.trim() === "") {
      showError(email, "Please enter your email address.");
      formIsValid = false;
    } else if (!email.value.includes("@")) {
      showError(email, "Please enter a valid email address.");
      formIsValid = false;
    }

    if (phone.value.trim() === "") {
      showError(phone, "Please enter your phone number.");
      formIsValid = false;
    }

    if (age.value.trim() === "") {
      showError(age, "Please enter your age.");
      formIsValid = false;
    } else if (Number(age.value) < 18) {
      showError(age, "Applicants must be at least 18 years old.");
      formIsValid = false;
    }

    if (city.value.trim() === "") {
      showError(city, "Please enter your city.");
      formIsValid = false;
    }

    if (experience.value === "") {
      showError(experience, "Please select your wrestling experience.");
      formIsValid = false;
    }

    if (fitness.value === "") {
      showError(fitness, "Please select your current fitness level.");
      formIsValid = false;
    }

    if (goal.value.trim() === "") {
      showError(goal, "Please tell us what you want to learn.");
      formIsValid = false;
    }

    if (!informationAgreement.checked) {
      showError(
        informationAgreement,
        "Please confirm that you have read the information on this page.",
      );
      formIsValid = false;
    }

    if (!physicalAgreement.checked) {
      showError(
        physicalAgreement,
        "Please confirm that you understand the physical demands of training.",
      );
      formIsValid = false;
    }

    if (formIsValid) {
      successMessage.textContent =
        "Application submitted successfully. BPW Academy will contact you soon.";

      academyForm.reset();
    }
  });
}
