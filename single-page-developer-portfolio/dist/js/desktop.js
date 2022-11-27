const projCard = document.querySelectorAll('.card');

projCard.forEach((projCard) => {
    const img = projCard.querySelector('.projects-photo');
    const overlay = img.querySelector('.overlay');
    const link = projCard.querySelector('.projects-links');

    img.addEventListener('mouseover', (e) => {
        overlay.setAttribute('style', 'visibility: visible;');
        link.setAttribute('style', 'visibility: visible;');
    })

    img.addEventListener('mouseout', (e) => {
        overlay.setAttribute('style', 'visibility: hidden;');
        link.setAttribute('style', 'visibility: hidden;');
    })
});