const switchBtn = document.getElementById("billingSwitch");
const prices = document.querySelectorAll(".price");

switchBtn.addEventListener("change", () => {
  prices.forEach(price => {
    if (switchBtn.checked) {
      price.textContent = "$" + price.dataset.year;
    } else {
      price.textContent = "$" + price.dataset.month;
    }
  });
});
// Mobile Toggle
const toggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll Shadow Effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

