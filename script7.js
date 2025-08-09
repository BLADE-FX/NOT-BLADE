
document.addEventListener('DOMContentLoaded', function() {
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
e.preventDefault();
const formData = new FormData(this);
const name = this.querySelector('input[placeholder="Your Name"]').value;
const email = this.querySelector('input[placeholder="Your Email"]').value;
const subject = this.querySelector('input[placeholder="Subject"]').value;
const message = this.querySelector('textarea').value;
if (name && email && subject && message) {
alert('Thank you for your message! I will get back to you soon.');
this.reset();
} else {
alert('Please fill in all fields.');
}
});
});
