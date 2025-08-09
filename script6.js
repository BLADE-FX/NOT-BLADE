
document.addEventListener('DOMContentLoaded', function() {
const skillPercentages = document.querySelectorAll('.skill-percentage');
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const target = parseInt(entry.target.getAttribute('data-target'));
let current = 0;
const increment = target / 50;
const timer = setInterval(() => {
current += increment;
if (current >= target) {
clearInterval(timer);
entry.target.textContent = `${target}%`;
} else {
entry.target.textContent = `${Math.round(current)}%`;
}
}, 40);
observer.unobserve(entry.target);
}
});
}, { threshold: 0.5 });
skillPercentages.forEach(percentage => {
observer.observe(percentage);
});
});
