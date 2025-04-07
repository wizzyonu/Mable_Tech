document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const animationDuration = 1000; // 1 seconds
    const frameDuration = 1000 / 60; // 60 frames per second
    const totalFrames = Math.round(animationDuration / frameDuration);
    
    statNumbers.forEach(statNumber => {
        const targetNumber = parseInt(statNumber.textContent.replace('+', ''));
        const increment = targetNumber / totalFrames;
        let currentNumber = 0;
        
        const animateCount = () => {
            currentNumber += increment;
            
            // Stop if we've reached or passed the target number
            if (currentNumber >= targetNumber) {
                statNumber.textContent = targetNumber + '+';
                return;
            }
            
            // Update the displayed number
            statNumber.textContent = Math.floor(currentNumber) + '+';
            
            // Continue the animation
            requestAnimationFrame(animateCount);
        };
        
        // Start the animation
        requestAnimationFrame(animateCount);
    });
    const formGroups = document.querySelectorAll('.form-group');
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.querySelector('.submit-btn');

    contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

   
    
    // Disable button & show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
    
    // Simulate form submission (replace with actual fetch/AJAX)
    setTimeout(() => {
        submitBtn.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
        submitBtn.style.backgroundColor = '#4CAF50'; // Green success color
        
        // Reset form after 2 seconds
        setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
            submitBtn.style.backgroundColor = ''; // Revert to original color
            submitBtn.disabled = false;
        }, 2000);
    }, 1500); // Simulate network delay
});
});