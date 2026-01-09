/**
 * Main JavaScript for Gestão Ads & IA Theme
 */

(function($) {
    'use strict';
    
    // Header scroll effect
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.site-header').addClass('scrolled');
        } else {
            $('.site-header').removeClass('scrolled');
        }
    });
    
    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800, 'swing');
        }
    });
    
    // Animate elements on scroll
    function animateOnScroll() {
        $('.service-card, .result-card, .testimonial-card').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate-in');
            }
        });
    }
    
    // Run on scroll
    $(window).on('scroll', animateOnScroll);
    
    // Run on load
    $(document).ready(function() {
        animateOnScroll();
        
        // Add animation class to elements
        $('.service-card, .result-card, .testimonial-card').css({
            'opacity': '0',
            'transform': 'translateY(30px)',
            'transition': 'all 0.6s ease'
        });
        
        // Animate in class
        $('<style>')
            .text('.animate-in { opacity: 1 !important; transform: translateY(0) !important; }')
            .appendTo('head');
    });
    
    // Counter animation for stats
    function animateCounter() {
        $('.stat-number').each(function() {
            var $this = $(this);
            var countTo = $this.text();
            
            // Check if it's a number
            if (!isNaN(parseFloat(countTo))) {
                $({ countNum: 0 }).animate({
                    countNum: parseFloat(countTo)
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(countTo);
                    }
                });
            }
        });
    }
    
    // Trigger counter animation when in viewport
    var counterAnimated = false;
    $(window).on('scroll', function() {
        if (!counterAnimated) {
            var resultsSection = $('.results-section');
            if (resultsSection.length) {
                var sectionTop = resultsSection.offset().top;
                var sectionBottom = sectionTop + resultsSection.outerHeight();
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();
                
                if (sectionBottom > viewportTop && sectionTop < viewportBottom) {
                    animateCounter();
                    counterAnimated = true;
                }
            }
        }
    });
    
    // Form validation
    $('.cta-form').on('submit', function(e) {
        var email = $(this).find('input[type="email"]').val();
        var phone = $(this).find('input[type="tel"]').val();
        
        // Basic validation
        if (!email || !phone) {
            e.preventDefault();
            alert('Por favor, preencha todos os campos.');
            return false;
        }
        
        // Email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('Por favor, insira um e-mail válido.');
            return false;
        }
        
        // Phone validation (basic)
        var phoneRegex = /^[\d\s\-\(\)]+$/;
        if (!phoneRegex.test(phone) || phone.length < 10) {
            e.preventDefault();
            alert('Por favor, insira um telefone válido.');
            return false;
        }
    });
    
    // Mobile menu toggle (if needed)
    $('.menu-toggle').on('click', function() {
        $('.main-nav').toggleClass('active');
        $(this).toggleClass('active');
    });
    
    // Close mobile menu on link click
    $('.main-nav a').on('click', function() {
        $('.main-nav').removeClass('active');
        $('.menu-toggle').removeClass('active');
    });
    
    // Lazy load images (simple implementation)
    if ('IntersectionObserver' in window) {
        var imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                }
            });
        });
        
        document.querySelectorAll('img.lazy').forEach(function(img) {
            imageObserver.observe(img);
        });
    }
    
    // Success message handling
    if (window.location.search.indexOf('contact=success') > -1) {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        
        // Clean URL
        if (window.history.replaceState) {
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }
    
})(jQuery);
