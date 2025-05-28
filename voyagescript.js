        // Menu mobile
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const nav = document.querySelector('nav');

        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        // Fermer le menu mobile quand on clique sur un lien
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    nav.classList.remove('active');
                }
            });
        });

// Témoignages
const testimonials = document.querySelectorAll('.testimonial');
const dotsContainer = document.querySelector('.dots-container'); // Ajoute une div dédiée dans ton HTML
let currentSlide = 0;

// Supprime les anciens dots s’il y en a
dotsContainer.innerHTML = '';

// Crée les dots dynamiquement
testimonials.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        showSlide(index);
    });
    dotsContainer.appendChild(dot);
});

// Re-récupère les dots créés
const dots = dotsContainer.querySelectorAll('.dot');

function showSlide(n) {
    testimonials.forEach(testimonial => testimonial.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    currentSlide = (n + testimonials.length) % testimonials.length;

    testimonials[currentSlide].style.display = 'block';
    dots[currentSlide].classList.add('active');
}

// Auto-slide
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Affiche le premier slide
showSlide(0);


        // // Formulaire de contact
        // const contactForm = document.getElementById('contactForm');
        
        // contactForm.addEventListener('submit', (e) => {
        //     e.preventDefault();
            
        //     // Récupérer les valeurs du formulaire
        //     const name = document.getElementById('name').value;
        //     const email = document.getElementById('email').value;
        //     const message = document.getElementById('message').value;
            
        //     // Ici, vous pourriez ajouter du code pour envoyer les données à un serveur
        //     console.log('Formulaire soumis:', { name, email, message });
            
        //     // Afficher un message de confirmation
        //     alert('Merci pour votre message, ' + name + ' ! Nous vous contacterons bientôt.');
            
        //     // Réinitialiser le formulaire
        //     contactForm.reset();
        // });

        // Animation au défilement
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            
            // Ajouter un effet au header
            if (scrollPosition > 100) {
                document.querySelector('header').style.background = 'rgba(30, 87, 153, 0.95)';
            } else {
                document.querySelector('header').style.background = 'linear-gradient(135deg, #1e5799 0%, #207cca 51%, #2989d8 100%)';
            }
        });

//--------------------------------------------------------------

const destinationCards = document.querySelectorAll('.destination-card');
const body = document.querySelector('body');

const modalData = {
    paris: {
        title: "Paris, France",
        images: ["Paris1..jpg", "Paris2.jpg", "Paris3.jpg"],
        description: "Découvrez Paris, la ville lumière, avec ses monuments emblématiques comme la Tour Eiffel, le Louvre et ses cafés romantiques."
    },
    toliara: {
        title: "Toliara, Madagascar",
        // images: ["images/tokyo2.jpg"],
        description: "Toliara, entre tradition et ultra-modernité. Explorez ses temples, ses gratte-ciels, et sa gastronomie inégalée."
    },
    bali: {
        title: "Bali, Indonésie",
        // images: ["images/tokyo2.jpg"],
        description: "Bali, endroit paradisiaque."
    },
    // Ajoute plus ici si tu as d'autres destinations...
};

destinationCards.forEach(card => {
    const id = card.dataset.id;
    const data = modalData[id];

    if (data) {
        // Crée la modale dynamiquement
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.id = `modal-${id}`;

        // Description (optionnelle)
        const descriptionHTML = data.description ? `<p>${data.description}</p>` : '';

        // Images avec classe "image-gallery"
        const imagesHTML = (Array.isArray(data.images) && data.images.length > 0)
        ? `<div class="image-gallery">
                ${data.images.map(src => `<img src="${src}" alt="${data.title}">`).join('')}
            </div>`
        : '';

        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>${data.title}</h2>
                ${descriptionHTML}
                ${imagesHTML}
            </div>
        `;


        body.appendChild(modal);

        // Ouvrir la modale au clic
        card.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    }
});


// Gérer la fermeture
document.addEventListener('click', (e) => {
    // Ferme la modale si on clique sur la "close-btn"
    if (e.target.classList.contains('close-btn')) {
        e.target.closest('.modal').style.display = 'none';
    }
    // Ferme la modale si on clique en dehors de celle-ci
    else if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Ferme toutes les modales si l'utilisateur appuie sur la touche Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal');
        openModals.forEach(modal => {
            if (modal.style.display === 'block') {
            modal.style.display = 'none'; }
        });
    }
});

// Boutons "Voir la destination" du calendrier
document.querySelectorAll('.open-destination').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target-id');
        const destinationCard = document.querySelector(`.destination-card[data-id="${targetId}"]`);
        if (destinationCard) {
            destinationCard.click(); // Simule un clic sur la carte pour ouvrir la modale
        }
    });
});
