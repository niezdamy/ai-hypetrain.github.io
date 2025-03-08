// Simple JavaScript for the static test site
document.addEventListener('DOMContentLoaded', () => {
    console.log('Static test site loaded successfully!');
    
    // Get the CTA button
    const ctaButton = document.getElementById('cta-button');
    
    // Add click event listener
    ctaButton.addEventListener('click', () => {
        alert('Thanks for your interest in AI Hypetrain!');
    });
    
    // Simple animation for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        // Add a small delay for each card
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            // Trigger animation
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 150);
    });
});
