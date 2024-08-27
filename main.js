document.addEventListener('DOMContentLoaded', () => {
    const projectsSection = document.querySelector('.projects-section');
    
    // Add a delay for a more natural slide-in effect
    setTimeout(() => {
        projectsSection.classList.add('visible');
    }, 500); // Delay of 500ms before the slide-in
});
