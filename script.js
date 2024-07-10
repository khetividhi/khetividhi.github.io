// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
  const divElem = document.querySelector("div");
  const htmlElem = document.querySelector(":root");

  htmlElem.addEventListener("mouseenter", showHide);
  htmlElem.addEventListener("mouseleave", showHide);

  function showHide() {
      if (divElem.classList.contains("fade-in")) {
          divElem.classList.remove("fade-in");
          divElem.classList.add("fade-out");
          divElem.addEventListener('animationend', () => {
              if (divElem.classList.contains("fade-out")) {
                  divElem.style.display = 'none';
              }
          }, { once: true });
      } else {
          divElem.style.display = 'block';
          divElem.classList.remove("fade-out");
          divElem.classList.add("fade-in");
      }
  }

  const animatedElements = document.querySelectorAll(' #home-img, #inappimg, #detectimg, #wetherimg, #leaseimg, #pestimg, #demandimg');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const animatedElement = entry.target;
              // Trigger the animation
              animatedElement.classList.add('animate');

              // Remove the 'animate' class after the animation ends to allow replay
              animatedElement.addEventListener('animationend', () => {
                  animatedElement.classList.remove('animate');
              }, { once: true });
          }
      });
  }, { threshold: 0.10 }); // Adjust threshold as needed

  animatedElements.forEach(element => {
      observer.observe(element);
  });
});
