/* ============================================
   NAVIGATION SYSTEM - JavaScript
   Mobile Menu & Mega Menu Functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // Create mobile menu toggle if not exists
    if (!document.querySelector('.mobile-menu-toggle')) {
        const headerActions = document.querySelector('.header-actions');
        if (headerActions) {
            const toggleButton = document.createElement('button');
            toggleButton.className = 'mobile-menu-toggle';
            toggleButton.id = 'mobileMenuToggle';
            toggleButton.setAttribute('aria-label', 'Toggle menu');
            toggleButton.innerHTML = '<span></span><span></span><span></span>';
            headerActions.appendChild(toggleButton);
        }
    }
    
    // Create mobile overlay if not exists
    if (!document.querySelector('.mobile-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'mobile-overlay';
        overlay.id = 'mobileOverlay';
        document.body.insertBefore(overlay, document.body.firstChild);
    }
    
    // Get elements
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navigation = document.querySelector('.navigation');
    const mobileOverlay = document.getElementById('mobileOverlay');
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        if (mobileMenuToggle && navigation && mobileOverlay) {
            mobileMenuToggle.classList.toggle('active');
            navigation.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navigation.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    }
    
    // Event listeners for mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking on a link (optional)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 968 && !this.parentElement.querySelector('.mega-menu, .dropdown-menu')) {
                toggleMobileMenu();
            }
        });
    });
    
    // Mobile submenu toggle
    const menuItemsWithSubmenu = document.querySelectorAll('.nav-menu > li > a');
    menuItemsWithSubmenu.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 968) {
                const parentLi = this.parentElement;
                const hasSubmenu = parentLi.querySelector('.mega-menu, .dropdown-menu');
                
                if (hasSubmenu) {
                    e.preventDefault();
                    parentLi.classList.toggle('menu-open');
                }
            }
        });
    });
    
    // Reset navigation state on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 968) {
            if (navigation) navigation.classList.remove('active');
            if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
            if (mobileOverlay) mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
            
            // Close all mobile submenus
            document.querySelectorAll('.nav-menu > li.menu-open').forEach(item => {
                item.classList.remove('menu-open');
            });
        }
    });
    
    // Close mega menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth > 968) {
            if (!e.target.closest('.nav-menu')) {
                document.querySelectorAll('.nav-menu > li').forEach(item => {
                    item.classList.remove('menu-open');
                });
            }
        }
    });
    
    console.log('Navigation system initialized');
});
