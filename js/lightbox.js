/**
 * Lightbox para Galeria de Imagens
 * Daniel Aguiar - Gestor Ads + IA
 */

document.addEventListener('DOMContentLoaded', function() {
    // Criar estrutura do lightbox
    const lightboxHTML = `
        <div id="lightbox" class="lightbox">
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-content" id="lightbox-img">
            <div class="lightbox-caption"></div>
            <button class="lightbox-prev">&#10094;</button>
            <button class="lightbox-next">&#10095;</button>
        </div>
    `;
    
    // Adicionar lightbox ao body
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    
    // Elementos do lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    // Pegar todas as imagens da galeria
    const galleryImages = document.querySelectorAll('.result-image-card .result-image');
    let currentIndex = 0;
    
    // Adicionar evento de clique em cada imagem
    galleryImages.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            currentIndex = index;
            openLightbox(this);
        });
    });
    
    // Função para abrir o lightbox
    function openLightbox(img) {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        
        // Pegar a legenda do overlay
        const overlay = img.parentElement.querySelector('.result-image-overlay p');
        if (overlay) {
            lightboxCaption.textContent = overlay.textContent;
        }
        
        // Prevenir scroll do body
        document.body.style.overflow = 'hidden';
    }
    
    // Função para fechar o lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Função para mostrar imagem anterior
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        openLightbox(galleryImages[currentIndex]);
    }
    
    // Função para mostrar próxima imagem
    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        openLightbox(galleryImages[currentIndex]);
    }
    
    // Eventos de clique
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // Fechar ao clicar fora da imagem
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Navegação por teclado
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });
    
    // Suporte para touch/swipe em mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    lightbox.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    lightbox.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left - próxima imagem
            showNextImage();
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe right - imagem anterior
            showPrevImage();
        }
    }
});
