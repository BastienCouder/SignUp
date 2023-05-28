// Déclarations des variables
const login = document.querySelector("#login");
const signUp = document.querySelector("#sign-up");
const overlayLogin = document.querySelector(".overlay-log");
const overlaySignUp = document.querySelector(".overlay-sign");
const containerSignUp = document.querySelector(".container-sign-up");
const containerLogin = document.querySelector(".container-login");
const Inputs = document.querySelectorAll("input:not([type='checkbox'])");

// Fonction pour afficher les inputs saisies
function handleInputChange() {
  if (this.value !== "") {
    this.nextElementSibling.classList.add("active");
  } else {
    this.nextElementSibling.classList.remove("active");
  }
}

Inputs.forEach((input) => {
  input.addEventListener("focus", handleInputChange);
  if (input.type !== "checkbox") {
    input.addEventListener("change", handleInputChange);
  }
});

// Fonction pour afficher le formulaire de connexion
function showLoginForm() {
  overlaySignUp.style.transform = "translateX(-100%)";
  containerLogin.style.transform = "translateX(100%)";
  overlayLogin.style.transform = "translateX(-100%)";
  containerSignUp.style.transform = "translateX(100%)";

  overlayLogin.classList.add("activeShow");
  containerSignUp.classList.add("activeShow2");

  containerLogin.style.opacity = "1";
  containerLogin.style.visibility = "visible";
  containerSignUp.style.opacity = "0";
  containerSignUp.style.visibility = "hidden";

  overlayLogin.style.visibility = "hidden";
  overlaySignUp.style.visibility = "visible";
  overlayLogin.style.opacity = "0";

  setTimeout(() => {
    overlayLogin.style.opacity = "1";
    Inputs.forEach((input) => {
      if (input.value !== "") {
        input.value = "";
        input.nextElementSibling.classList.remove("active");
      }
    });
  }, 800);
}

// Fonction pour afficher le formulaire d'inscription
function showSignUpForm() {
  overlaySignUp.style.transform = "translateX(0)";
  containerLogin.style.transform = "translateX(0)";
  overlayLogin.style.transform = "translateX(0)";
  containerSignUp.style.transform = "translateX(0)";

  overlayLogin.classList.remove("activeShow");
  containerSignUp.classList.remove("activeShow2");

  containerLogin.style.opacity = "0";
  containerLogin.style.visibility = "hidden";
  containerLogin.style.zIndex = "3";
  containerSignUp.style.opacity = "1";
  containerSignUp.style.visibility = "visible";

  overlayLogin.style.visibility = "visible";
  overlaySignUp.style.visibility = "hidden";
  overlaySignUp.style.opacity = "0";

  setTimeout(() => {
    overlaySignUp.style.opacity = "1";
    Inputs.forEach((input) => {
      if (input.value !== "") {
        input.value = "";
        input.nextElementSibling.classList.remove("active");
      }
    });
  }, 800);
}

// Ajout de l'événement click sur le bouton de connexion
login.addEventListener("click", () => {
  showLoginForm();
});

// Ajout de l'événement click sur le bouton d'inscription
signUp.addEventListener("click", () => {
  showSignUpForm();
});

// Fonction pour activer ou désactiver la visibilité du mot de passe
function togglePasswordVisibility() {
  const passwordInputs = document.querySelectorAll(".passwordInput");
  const passwordLabels = document.querySelectorAll(".passwordLabel");

  passwordInputs.forEach((passwordInput, index) => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordLabels[index].innerHTML = '<i class="fas fa-eye"></i>';
    } else {
      passwordInput.type = "password";
      passwordLabels[index].innerHTML = '<i class="fas fa-eye-slash"></i>';
    }
  });
}

const passwordLabels = document.querySelectorAll(".passwordLabel");
passwordLabels.forEach((passwordLabel) => {
  passwordLabel.addEventListener("click", togglePasswordVisibility);
});
