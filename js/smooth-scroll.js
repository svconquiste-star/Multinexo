/**
 * Smooth Scroll Polyfill
 */

(function() {
    'use strict';
    
    // Feature detection
    if (!('scrollBehavior' in document.documentElement.style)) {
        // Polyfill for smooth scroll
        var smoothScroll = function(target, duration) {
            var targetElement = document.querySelector(target);
            if (!targetElement) return;
            
            var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
            var startPosition = window.pageYOffset;
            var distance = targetPosition - startPosition;
            var startTime = null;
            
            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                var timeElapsed = currentTime - startTime;
                var run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }
            
            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }
            
            requestAnimationFrame(animation);
        };
        
        // Apply to all anchor links
        document.addEventListener('DOMContentLoaded', function() {
            var links = document.querySelectorAll('a[href^="#"]');
            
            links.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    var target = this.getAttribute('href');
                    if (target !== '#' && document.querySelector(target)) {
                        e.preventDefault();
                        smoothScroll(target, 800);
                    }
                });
            });
        });
    }
})();
