document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scroll for Navigation Links
  const navLinksSmoothScroll = document.querySelectorAll("nav ul li a");

  navLinksSmoothScroll.forEach(link => {
      link.addEventListener("click", event => {
          event.preventDefault();
          const targetId = event.target.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop - 50,
                  behavior: "smooth"
              });
          }
      });
  });

  // Image Slideshow for Projects
  const projects = document.querySelectorAll(".project");

  projects.forEach(project => {
      const images = project.querySelectorAll("img");
      if (images.length > 1) {
          let currentIndex = 0;

          setInterval(() => {
              images[currentIndex].classList.remove("active");
              currentIndex = (currentIndex + 1) % images.length;
              images[currentIndex].classList.add("active");
          }, 3000); // Change image every 3 seconds
      }
  });

  // Mobile Menu Toggle
  const menuIcon = document.getElementById('menu-icon');
  const navLinksMenuToggle = document.getElementById('nav-links');

  // Toggle the "show" class on the nav links when menu icon is clicked
  menuIcon.addEventListener('click', () => {
      navLinksMenuToggle.classList.toggle('show');
  });
});
