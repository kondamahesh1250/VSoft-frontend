const toggle = document.getElementById('navbar-toggle');
const links = document.getElementById('navbar-links');
toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});
// Optional: Close menu when clicking a link (on mobile)
document.querySelectorAll('.navbar-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      links.classList.remove('open');
    }
  });
});
// Dropdown toggle for mobile
document.querySelectorAll('.dropdown .dropbtn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      const dropdown = this.parentElement;
      const content = dropdown.querySelector('.dropdown-content');
      content.style.display = content.style.display === 'flex' ? 'none' : 'flex';
    }
  });
});
// Submenu toggle for mobile
document.querySelectorAll('.submenu-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      const submenu = this.parentElement;
      submenu.classList.toggle('open');
    }
  });
});
// Register modal logic
// const registerBtn = document.getElementById('registerBtn');
// const registerModal = document.getElementById('registerModal');
// const closeModal = document.getElementById('closeModal');
// const registerForm = document.getElementById('registerForm');
// const registerSuccess = document.getElementById('registerSuccess');
// registerBtn.addEventListener('click', function (e) {
//   e.preventDefault();
//   registerModal.style.display = 'flex';
// });
// closeModal.addEventListener('click', function () {
//   registerModal.style.display = 'none';
//   registerForm.style.display = 'flex';
//   registerSuccess.style.display = 'none';
//   registerForm.reset();
// });
// window.onclick = function (event) {
//   if (event.target == registerModal) {
//     registerModal.style.display = 'none';
//     registerForm.style.display = 'flex';
//     registerSuccess.style.display = 'none';
//     registerForm.reset();
//   }
// }
// registerForm.addEventListener('submit', function (e) {
//   e.preventDefault();
//   registerForm.style.display = 'none';
//   registerSuccess.style.display = 'block';
// });

// function loadImage(imgSrc) {
//   document.getElementById('imageFrame').src = imgSrc;
// }

function loadImage(newSrc) {
  const img = document.getElementById("imageFrame");

  // Fade out
  img.classList.remove("fade-in");
  img.classList.add("fade-out");

  // After fade out, change image source and fade back in
  setTimeout(() => {
    img.src = newSrc;
    img.classList.remove("fade-out");
    img.classList.add("fade-in");
  }, 800); // Should match transition time
}


// const modal = document.getElementById("registerModal");
// const btn = document.getElementById("registerBtn");
// const span = document.getElementById("closeModal");

// btn.onclick = function () {
//   modal.style.display = "flex";
// }

// span.onclick = function () {
//   modal.style.display = "none";
// }

// window.onclick = function (event) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// }