document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('trendingSlider');
    const slideLeft = document.getElementById('slideLeft');
    const slideRight = document.getElementById('slideRight');

    if(slideLeft && slideRight && slider) {
        slideLeft.addEventListener('click', () => {
            // Slides exactly the visible width of the container
            slider.scrollLeft -= slider.clientWidth;
        });

        slideRight.addEventListener('click', () => {
            // Slides exactly the visible width of the container
            slider.scrollLeft += slider.clientWidth;
        });
    }
});

// FAQ Accordion Logic
document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the answer div that comes immediately after the clicked button
            const answer = button.nextElementSibling;
            // Find the SVG icon inside the clicked button
            const icon = button.querySelector('.faq-icon');

            // Toggle the 'hidden' class to show/hide the answer
            answer.classList.toggle('hidden');

            // Rotate the icon 45 degrees (turns a + into an x)
            icon.classList.toggle('rotate-45');
        });
    });
});
// Load the Footer Dynamically
document.addEventListener('DOMContentLoaded', () => {
    fetch('./src/components/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});