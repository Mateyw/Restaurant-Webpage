export function loadHome() {
    const contentEl = document.getElementById('content');
    const homeCard = document.createElement('div');
    homeCard.classList.add('card', 'home');
    homeCard.innerHTML = `
        <h3 class="title">Restaurant Bonasera</h3>
        <p class="welcome-text">
            "Welcome to <em>Restaurant Bonasera</em>!
            Discover a culinary haven in the heart of <strong>Lisboa</strong>. Our cozy restaurant beckons with
            irresistible <em>aromas</em> and a warm, inviting <em>atmosphere</em>.
            Indulge in our chef-inspired <em>menu</em>, showcasing the finest <em>ingredients and flavors</em>. From savory <em>starters</em>
            to mouthwatering <em>mains</em> and decadent <em>desserts</em>, each dish is a testament to our commitment to <em>
                culinary excellence</em>.
            Join us for an unforgettable <em>dining</em> experience, where every bite tells a <em>story</em> and every moment is
            savored. We can't wait to welcome you!"
        </p>
    `;
    contentEl.appendChild(homeCard);
}