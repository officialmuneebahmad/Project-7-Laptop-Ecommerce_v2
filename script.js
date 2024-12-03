document.addEventListener('DOMContentLoaded', () => {
    // Dropdown menu logic
    const dropdownTrigger = document.querySelector('.group > a');
    const dropdownMenu = document.querySelector('.group ul');

    dropdownTrigger.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!dropdownTrigger.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.add('hidden');
        }
    });

    // NAV BAR PLAY 
    const burger = document.getElementById('nav-burger');
    const navLinks = document.getElementById('nav-bar');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    })

    // Grab all toggle buttons and paragraphs
    const buttons = document.querySelectorAll('.toggleButton');
    const paragraphs = document.querySelectorAll('.toggleParagraph');

    // Ensure all paragraphs are hidden initially
    paragraphs.forEach(paragraph => {
        paragraph.classList.add('hidden');
    });

    // Add event listeners to each button
    buttons.forEach((button, index) => {
        const paragraph = paragraphs[index]; // Match button with the corresponding paragraph

        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click from triggering the "click outside" listener

            // Close all other paragraphs
            paragraphs.forEach((para, paraIndex) => {
                if (paraIndex !== index && !para.classList.contains('hidden')) {
                    para.classList.remove('opacity-100', 'scale-100');
                    para.classList.add('opacity-0', 'scale-90');
                    setTimeout(() => para.classList.add('hidden'), 300); // Match duration-300
                }
            });

            // Toggle visibility for the clicked button's paragraph
            if (paragraph.classList.contains('hidden')) {
                // Open the current paragraph
                paragraph.classList.remove('hidden', 'opacity-0', 'scale-90');
                paragraph.classList.add('opacity-100', 'scale-100', 'transition-all', 'duration-300', 'ease-in');
            } else {
                // Close the current paragraph
                paragraph.classList.remove('opacity-100', 'scale-100');
                paragraph.classList.add('opacity-0', 'scale-90', 'transition-all', 'duration-300', 'ease-out');
                setTimeout(() => paragraph.classList.add('hidden'), 300); // Match duration-300
            }
        });
    });
});

// ===========================================================================

