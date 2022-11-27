// Projects card overlay
const projCard = document.querySelectorAll('.card');

projCard.forEach((projCard) => {

    const img = projCard.querySelector('.projects-photo');
    const overlay = img.querySelector('.overlay');
    const link = projCard.querySelector('.projects-links');

    img.addEventListener('mouseover', (e) => {
        overlay.setAttribute('style', 'visibility: visible;');
        link.setAttribute('style', 'visibility: visible;');
    });

    // this will keep the efffect consistent when hovering on the Links
    // card flickers on hover when you remove this.
    link.addEventListener('mouseover', (e) => {
        link.setAttribute('style', 'visibility: visible;');
        overlay.setAttribute('style', 'visibility: visible;');
    });

    overlay.addEventListener('mouseout', (e) => {
        overlay.setAttribute('style', 'visibility: hidden;');
        link.setAttribute('style', 'visibility: hidden;');
    });

});

// Simple Form Validation
const form = document.forms.contactForm;
const formName = form.name;

formName.addEventListener('blur', () => {
    console.log(formName.value);
    const error = document.querySelector('.name-error-message');

    if (formName.value === "") {
        error.setAttribute('style', 'visibility: hidden;');
    }

    if (/[0-9]/.test(formName.value) && formName.value != "") {
        error.setAttribute('style', 'visibility: visible;');
        formName.classList.add('invalid');
    }
});

formName.addEventListener('focus', () => {
    const error = document.querySelector('.name-error-message');
    error.setAttribute('style', 'visibility: hidden;');
    formName.classList.remove('invalid');
});

const email = form.email;
email.addEventListener('blur', () => {
    console.log(form.email.value);
    const error = document.querySelector('.email-error-message');

    if (email.value === "") {
        error.setAttribute('style', 'visibility: hidden;');
    }

    if (!email.value.includes('@') && email.value != "") {
        error.setAttribute('style', 'visibility: visible;');
        email.classList.add('invalid');
    }
});

email.addEventListener('focus', () => {
    const error = document.querySelector('.email-error-message');
    error.setAttribute('style', 'visibility: hidden;');
    email.classList.remove('invalid');
});