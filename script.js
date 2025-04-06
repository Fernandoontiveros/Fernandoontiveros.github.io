document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Modal de video
    const videoModal = document.getElementById('video-modal');
    const playBtn = document.getElementById('play-btn');
    const closeBtn = document.querySelector('.close-btn');
    const modalVideo = document.getElementById('modal-video');
    
    playBtn.addEventListener('click', function() {
        videoModal.style.display = 'block';
        const newLocal = "https://youtu.be/6WtgbN5Honc; ";
        modalVideo.src = newLocal
        document.body.style.overflow = 'hidden';
    });
    
    closeBtn.addEventListener('click', function() {
        videoModal.style.display = 'none';
        modalVideo.src = '';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            modalVideo.src = '';
            document.body.style.overflow = 'auto';
        }
    });

    // Galería interactiva
    const galleryBtn = document.getElementById('gallery-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryBtn.addEventListener('click', function() {
        document.getElementById('galeria').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Podrías añadir aquí un lightbox para la galería si lo deseas
    // galleryItems.forEach(item => {
    //     item.addEventListener('click', function() {
    //         // Implementar lightbox
    //     });
    // });

    // Efecto de scroll para el header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.fixed-header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(34, 34, 34, 0.95)';
            header.style.padding = '5px 0';
        } else {
            header.style.backgroundColor = 'var(--dark-color)';
            header.style.padding = '10px 0';
        }
    });

    // Animaciones al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.section, .achievement-card, .effect-card, .gallery-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Configurar elementos para animación
    document.querySelectorAll('.section, .achievement-card, .effect-card, .gallery-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar una vez al cargar
});