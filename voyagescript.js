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

        // Slider témoignages
        const testimonials = document.querySelectorAll('.testimonial');
        const dots = document.querySelectorAll('.dot');
        let currentSlide = 0;

        function showSlide(n) {
            testimonials.forEach(testimonial => testimonial.style.display = 'none');
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentSlide = (n + testimonials.length) % testimonials.length;
            
            testimonials[currentSlide].style.display = 'block';
            dots[currentSlide].classList.add('active');
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        // Auto-slide
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);

        // Formulaire de contact
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Récupérer les valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Ici, vous pourriez ajouter du code pour envoyer les données à un serveur
            console.log('Formulaire soumis:', { name, email, message });
            
            // Afficher un message de confirmation
            alert('Merci pour votre message, ' + name + ' ! Nous vous contacterons bientôt.');
            
            // Réinitialiser le formulaire
            contactForm.reset();
        });

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