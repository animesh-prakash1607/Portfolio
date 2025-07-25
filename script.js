document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed('#element2', {
    strings: [
      "<b>Web Developer.</b>",
      "<b>Programmer.</b>",
    ],
    typeSpeed: 80,
    backSpeed: 100,
    backDelay: 1300,
    startDelay: 400,
    loop: true,
  });

  document.querySelector(".elements li a").style.color = "#ec4899";
  document.querySelector(".elements li a").style.fontWeight = "600";

  nav();

  // Cursor shadow effect
  const cursorShadow = document.createElement("div");
  cursorShadow.classList.add("cursor-shadow");
  document.body.appendChild(cursorShadow);

  document.addEventListener("mousemove", function (e) {
    cursorShadow.style.top = `${e.clientY}px`;
    cursorShadow.style.left = `${e.clientX}px`;
  });
});

function nav() {
  let nav_lists = document.querySelectorAll(".elements li");
  
  nav_lists[0].addEventListener("click", () => {
    let list = document.querySelectorAll(".elements li a");
    list.forEach((li) => {
      li.style.color = "white";
      li.style.fontWeight = "400";
    });
    list[0].style.color = "#ec4899";
    list[0].style.fontWeight = "600";
  });

  nav_lists[1].addEventListener("click", () => {
    let list = document.querySelectorAll(".elements li a");
    list.forEach((li) => {
      li.style.color = "white";
      li.style.fontWeight = "400";
    });
    list[1].style.color = "#ec4899";
        list[1].style.fontWeight = "600";
  });

  nav_lists[2].addEventListener("click", () => {
    let list = document.querySelectorAll(".elements li a");
    list.forEach((li) => {
      li.style.color = "white";
      li.style.fontWeight = "400";
    });
    list[2].style.color = "#ec4899";
        list[2].style.fontWeight = "600";

  });

  nav_lists[3].addEventListener("click", () => {
    let list = document.querySelectorAll(".elements li a");
    list.forEach((li) => {
      li.style.color = "white";
      li.style.fontWeight = "400";
    });
    list[3].style.color = "#ec4899";
        list[3].style.fontWeight = "600";

  });

  nav_lists[4].addEventListener("click", () => {
    let list = document.querySelectorAll(".elements li a");
    list.forEach((li) => {
      li.style.color = "white";
      li.style.fontWeight = "400";
    });
    list[4].style.color = "#ec4899";
        list[4].style.fontWeight = "600";
  }); 

  let scroll = document.querySelectorAll(".elements li a");
  scroll.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      let pages = document.querySelector(this.getAttribute('href'));
      pages.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}


function hamburger() {
  let menu = document.querySelector(".ham");
  menu.addEventListener("click", () => {
    document.querySelector(".left").style.display = "block";
    document.querySelector(".left").style.left = "0px";
    document.querySelector(".nav").style.display = "none";
  });

  let close = document.querySelector("#close");
  close.addEventListener("click", () => {
    document.querySelector(".left").style.left = "-100%";
    document.querySelector(".nav").style.display = "flex";
  });

  let scroll2 = document.querySelectorAll(".nav-remove");
  scroll2.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector(".nav").style.display = "flex";
      document.querySelector(".left").style.left = "-100%";
      let pages = document.querySelector(this.getAttribute('href'));
      pages.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

document.getElementById('download_btn').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'assets/resume.pdf';
  link.download = 'Animesh Prakash';
  link.click();
});

nav();
hamburger();

const container = document.getElementById("bubble-container");
const numBubbles = 15;

const bubbles = [];

for (let i = 0; i < numBubbles; i++) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  const size = Math.random() * 100 + 100;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  container.appendChild(bubble);

  bubbles.push({
    el: bubble,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    dx: (Math.random() - 0.5) * 0.7,
    dy: (Math.random() - 0.5) * 0.7
  });
}

function animate() {
  for (let bubble of bubbles) {
    bubble.x += bubble.dx;
    bubble.y += bubble.dy;

    // Bounce off edges
    if (bubble.x < 0 || bubble.x > window.innerWidth) bubble.dx *= -1;
    if (bubble.y < 0 || bubble.y > window.innerHeight) bubble.dy *= -1;

    bubble.el.style.transform = `translate(${bubble.x}px, ${bubble.y}px)`;
  }

  requestAnimationFrame(animate);
}

animate();

function nav2() {
  const navLinks = document.querySelectorAll(".nav-link");

  // Mark the first item active on page load
  window.addEventListener("DOMContentLoaded", () => {
    if (navLinks.length > 0) {
      navLinks[0].classList.add("active");
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove 'active' from all
      navLinks.forEach((l) => l.classList.remove("active"));

      // Add 'active' to clicked link
      this.classList.add("active");

      // Scroll to section
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

nav2();

function setupCustomCursor() { 
  const outer = document.querySelector('.cursor-outer');
  const inner = document.querySelector('.cursor-inner');

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;
  const delay = 0.1;  // increase delay for smoother, slower follow

  function toggleCursor() {
    if (window.innerWidth < 500) {
      outer.style.display = 'none';
      inner.style.display = 'none';
      document.body.style.cursor = 'default';
    } else {
      outer.style.display = 'block';
      inner.style.display = 'block';
      document.body.style.cursor = 'none';
    }
  }

  toggleCursor();
  window.addEventListener('resize', toggleCursor);

 document.addEventListener('mousemove', (e) => {
  if (window.innerWidth >= 500) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    inner.style.left = `${mouseX}px`;
    inner.style.top = `${mouseY}px`;

    const element = document.elementFromPoint(mouseX, mouseY);

    if (element) {
      if (element.classList.contains('hovver')) {
        outer.classList.add('active');
        console.log('hovver');
      }
      else if(element.classList.contains('hovver2')) {
        outer.classList.add('active2');
      }
      else {
        outer.classList.remove('active');
        outer.classList.remove('active2');
      }
    }
  }
});


  function animateOuter() {
    if (window.innerWidth >= 500) {
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;

      const angle = Math.atan2(dy, dx) * (180 / Math.PI); // in degrees
      const velocity = Math.sqrt(dx * dx + dy * dy);

      currentX += dx * delay;
      currentY += dy * delay;

      // Scale more when moving faster, but reduce vertical stretch
      const scale = Math.min(1 + velocity / 100, 1.5);
      const verticalScale = 1; // no vertical stretch

      outer.style.left = `${currentX}px`;
      outer.style.top = `${currentY}px`;

      outer.style.transform = `translate(-50%, -50%) rotate(${angle}deg) scale(${scale}, ${verticalScale})`;
    }

    requestAnimationFrame(animateOuter);
  }

  animateOuter();
}

// Add this script at the end of your HTML or in your JS bundle

const funFacts = [
  "Did you know? The first computer bug was an actual moth!",
  "Octopuses have three hearts.",
  "Bananas are berries, but strawberries aren’t.",
  "The unicorn is the national animal of Scotland.",
  "A group of flamingos is called a 'flamboyance'."
];

function showRandomFact() {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  document.getElementById('fun-fact-text').textContent = funFacts[randomIndex];
}

window.addEventListener('DOMContentLoaded', setupCustomCursor);
