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
