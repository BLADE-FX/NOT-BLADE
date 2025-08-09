
document.addEventListener('DOMContentLoaded', function() {
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
card.addEventListener('click', function() {
const service = this.dataset.service;
console.log(`Service clicked: ${service}`);
serviceCards.forEach(c => c.classList.remove('bg-primary/20'));
this.classList.add('bg-primary/20');
});
});
});
