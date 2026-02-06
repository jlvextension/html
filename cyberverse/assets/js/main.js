        // Offcanvas Menu Toggle
        function toggleOffcanvas() {
            const offcanvas = document.querySelector('.offcanvas');
            const overlay = document.querySelector('.offcanvas-overlay');
            offcanvas.classList.toggle('active');
            overlay.classList.toggle('active');
        }

        // Wallet Connection Demo
        function connectWallet(walletName) {
            const statusDiv = document.getElementById('walletStatus');
            const addressDiv = document.getElementById('walletAddress');
            
            // Simulate connection
            statusDiv.style.display = 'block';
            addressDiv.innerHTML = `<div class="loading"></div> Connecting to ${walletName}...`;
            
            setTimeout(() => {
                const mockAddress = '0x' + Math.random().toString(16).substr(2, 40);
                addressDiv.textContent = mockAddress;
            }, 1500);
        }

        function disconnectWallet() {
            const statusDiv = document.getElementById('walletStatus');
            statusDiv.style.display = 'none';
        }

        function showWalletModal() {
            document.getElementById('wallet').scrollIntoView({ behavior: 'smooth' });
        }

        // Newsletter Subscription
        function subscribeNewsletter(event) {
            event.preventDefault();
            const input = event.target.querySelector('input');
            const button = event.target.querySelector('button');
            const originalText = button.textContent;
            
            button.innerHTML = '<div class="loading"></div>';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = '✓ Subscribed!';
                button.style.background = 'linear-gradient(135deg, var(--neon-green), var(--neon-blue))';
                input.value = '';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                    button.disabled = false;
                }, 2000);
            }, 1500);
        }

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && document.querySelector(href)) {
                    e.preventDefault();
                    document.querySelector(href).scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close offcanvas if open
                    const offcanvas = document.querySelector('.offcanvas');
                    const overlay = document.querySelector('.offcanvas-overlay');
                    if (offcanvas.classList.contains('active')) {
                        offcanvas.classList.remove('active');
                        overlay.classList.remove('active');
                    }
                }
            });
        });

        // Add parallax effect on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            document.querySelector('.cyber-bg').style.transform = `translateY(${scrolled * 0.5}px)`;
        });

        // Close offcanvas when clicking outside
        document.addEventListener('click', (e) => {
            const offcanvas = document.querySelector('.offcanvas');
            const toggle = document.querySelector('.menu-toggle');
            
            if (!offcanvas.contains(e.target) && !toggle.contains(e.target)) {
                offcanvas.classList.remove('active');
                document.querySelector('.offcanvas-overlay').classList.remove('active');
            }
        });
