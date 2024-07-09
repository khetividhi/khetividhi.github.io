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

document.addEventListener("DOMContentLoaded", function() {
    const animatedElement = document.querySelector('#inappimg','#detectimg ','#wetherimg', '#leaseimg',  '#pestimg', '#demandimg' );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger the animation
          animatedElement.classList.add('animate');

          // Remove the 'animate' class after the animation ends to allow replay
          animatedElement.addEventListener('animationend', () => {
            animatedElement.classList.remove('animate');
          }, { once: true });
        }
      });
    }, { threshold: 0.10 }); // Adjust threshold as needed

    observer.observe(animatedElement);
  });
