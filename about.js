document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('click', function() {
            alert(`Hello, I am ${this.querySelector('h2').innerText}, the ${this.querySelector('p').innerText}`);
        });
    });
});
