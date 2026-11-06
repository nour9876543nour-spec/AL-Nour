const contactForm = document.getElementById("contactForm");

if (contactForm) {
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        formMessage.textContent = "Thank you! Your message has been received.";

        contactForm.reset();
    });
}
const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
    const newsletterMessage = document.getElementById("newsletterMessage");

    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault();

        newsletterMessage.textContent = "Thank you for subscribing!";

        newsletterForm.reset();
    });
}
const contactPageForm = document.getElementById("contactPageForm");

if (contactPageForm) {
    const contactPageMessage = document.getElementById("contactPageMessage");

    contactPageForm.addEventListener("submit", function(event) {
        event.preventDefault();

        contactPageMessage.textContent = "Thank you! Your message has been received.";

        contactPageForm.reset();
    });
}