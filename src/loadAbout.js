export function loadAbout() {
    const contentEl = document.getElementById('content');
    const aboutCard = document.createElement('div');
    aboutCard.classList.add('card', 'about');
    aboutCard.innerHTML = `
        <h3 class="title">About Us</h3>
        <p class="section-name"><strong>Mission</strong></p>
        <p class="mission">At Bonasera, our mission is to create unforgettable dining experiences by offering
            exquisite cuisine, exceptional service, and a warm, inviting atmosphere for every guest.</p>
        <p class="section-name"><strong>Who We Are</strong></p>
        <p class="who-we-are">Bonasera is more than just a restaurant; it's a place where culinary artistry meets
            heartfelt hospitality. Our story is crafted by passionate chefs, dedicated staff, and loyal patrons who
            come together to celebrate food, community, and the joy of dining. Every dish we serve is a testament to
            our commitment to quality, creativity, and tradition, bringing a taste of authentic flavors to your
            table.</p>
        <p class="values">
            <p class="section-name"><strong>Values</strong></p>
            <p class="values-structure-sentence">We believe in the power of food to bring people together and create
                lasting memories. Our values are rooted in:</p>
            <p class="values-details">
                <strong>Excellence:</strong> Striving for perfection in every dish, drink, and detail of your dining
                experience.
                <br>
                <strong>Sustainability:</strong> Sourcing locally and responsibly to support our community and the
                environment.
                <br>
                <strong>Innovation:</strong> Continuously exploring new culinary ideas while honoring classic recipes.
                <br>
                <strong>Community:</strong> Fostering a welcoming space where everyone feels like family.
            </p>
        </p>
        <p class="section-name"><strong>Contact</strong></p>
        <p class="contact">We're here to make your visit exceptional. If you have any questions, need assistance, or
            want to make a reservation, please don't hesitate to get in touch with us. We look forward to welcoming
            you to Bonasera, where every meal is a celebration.</p>
    `;
    contentEl.appendChild(aboutCard);
}