// Loader
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1500);
};

// Open site
function openSite() {
  document.querySelector(".envelope").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("music").play();
}

// Cursor glow
document.addEventListener("mousemove", e => {
  const c = document.querySelector(".cursor");
  c.style.top = e.clientY + "px";
  c.style.left = e.clientX + "px";
});

// Scroll reveal
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 120) {
      sec.classList.add("active");
    }
  });
});

// Confetti
function confetti() {
  for (let i = 0; i < 200; i++) {
    let c = document.createElement("div");
    c.style.position = "fixed";
    c.style.width = "6px";
    c.style.height = "6px";
    c.style.background = "#ffb6c1";
    c.style.top = Math.random()*window.innerHeight+"px";
    c.style.left = Math.random()*window.innerWidth+"px";

    document.body.appendChild(c);
    setTimeout(()=>c.remove(),3000);
  }
}