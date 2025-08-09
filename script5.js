
document.addEventListener('DOMContentLoaded', function() {
const filterButtons = document.querySelectorAll('#portfolio-filters .filter-btn');
const projects = document.querySelectorAll('#portfolio-grid .project-card');

function filterProjects(category) {
projects.forEach(project => {
const projectCategory = project.dataset.category;
if (category === 'all' || projectCategory === category) {
project.style.display = 'block';
setTimeout(() => {
project.style.opacity = '1';
project.style.transform = 'translateY(0)';
}, 50);
} else {
project.style.opacity = '0';
project.style.transform = 'translateY(20px)';
setTimeout(() => {
project.style.display = 'none';
}, 300);
}
});
}

projects.forEach(project => {
project.style.transition = 'all 0.3s ease-in-out';
});

filterButtons.forEach(button => {
button.addEventListener('click', function() {
const category = this.dataset.filter;
filterButtons.forEach(btn => {
btn.classList.remove('bg-primary', 'text-white');
btn.classList.add('text-gray-400', 'hover:text-white');
});
this.classList.remove('text-gray-400', 'hover:text-white');
this.classList.add('bg-primary', 'text-white');
filterProjects(category);
});
});

filterButtons[0].click();
});
