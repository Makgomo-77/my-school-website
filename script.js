document.addEventListener('DOMContentLoaded', function() {
    // Video control functionality
    const video = document.getElementById('heroVideo');
    const videoBtn = document.getElementById('videoBtn');
    
    if (video && videoBtn) {
        videoBtn.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                videoBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                video.pause();
                videoBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
    }
    
    // Gallery modal functionality
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal) {
        galleryModal.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget;
            const imgSrc = button.getAttribute('data-img');
            const title = button.getAttribute('data-title');
            const desc = button.getAttribute('data-desc');
            
            const modalTitle = galleryModal.querySelector('.modal-title');
            const modalImage = galleryModal.querySelector('.modal-body img');
            const modalDesc = galleryModal.querySelector('.modal-body p');
            
            modalTitle.textContent = title;
            modalImage.src = imgSrc;
            modalImage.alt = title;
            modalDesc.textContent = desc;
        });
    }
    
    // Testimonials carousel
    const testimonialCarousel = document.querySelector('.testimonials .carousel');
    if (testimonialCarousel) {
        new bootstrap.Carousel(testimonialCarousel, {
            interval: 5000,
            pause: 'hover'
        });
    }
    
    // Calendar export functionality
    const exportIcalBtn = document.getElementById('export-ical');
    if (exportIcalBtn) {
        exportIcalBtn.addEventListener('click', function() {
            alert('Calendar exported to iCal format. This would download the file in a real implementation.');
        });
    }
    
    // Calendar print functionality
    const printCalendarBtn = document.getElementById('print-calendar');
    if (printCalendarBtn) {
        printCalendarBtn.addEventListener('click', function() {
            window.print();
        });
    }
    
    // Calendar filter reset
    const resetFiltersBtn = document.getElementById('reset-filters');
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', function() {
            const checkboxes = document.querySelectorAll('.filters-card input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = true;
            });
            
            const select = document.getElementById('grade-level-filter');
            select.value = 'all';
            
            alert('Filters have been reset. In a real implementation, this would update the calendar display.');
        });
    }
    
    // Simulate loading upcoming events
    const upcomingEventsList = document.getElementById('upcoming-events-list');
    if (upcomingEventsList) {
        setTimeout(function() {
            upcomingEventsList.innerHTML = `
                <div class="upcoming-event-item">
                    <div class="d-flex align-items-start">
                        <span class="event-date-badge">Oct 15</span>
                        <div>
                            <strong>Parent-Teacher Conferences</strong>
                            <div class="text-muted small">8:00 AM - 6:00 PM</div>
                        </div>
                    </div>
                </div>
                <div class="upcoming-event-item">
                    <div class="d-flex align-items-start">
                        <span class="event-date-badge">Oct 22</span>
                        <div>
                            <strong>STEM Fair</strong>
                            <div class="text-muted small">10:00 AM - 3:00 PM</div>
                        </div>
                    </div>
                </div>
                <div class="upcoming-event-item">
                    <div class="d-flex align-items-start">
                        <span class="event-date-badge">Nov 5</span>
                        <div>
                            <strong>College Prep Workshop</strong>
                            <div class="text-muted small">6:00 PM - 8:00 PM</div>
                        </div>
                    </div>
                </div>
                <div class="upcoming-event-item">
                    <div class="d-flex align-items-start">
                        <span class="event-date-badge">Nov 17</span>
                        <div>
                            <strong>Fall Music Concert</strong>
                            <div class="text-muted small">7:00 PM - 9:00 PM</div>
                        </div>
                    </div>
                </div>
                <div class="upcoming-event-item">
                    <div class="d-flex align-items-start">
                        <span class="event-date-badge">Dec 1</span>
                        <div>
                            <strong>Winter Band Performance</strong>
                            <div class="text-muted small">6:30 PM - 8:00 PM</div>
                        </div>
                    </div>
                </div>
            `;
        }, 1500);
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const consent = this.querySelector('#consentCheck').checked;
            
            if (!consent) {
                alert('Please agree to receive emails from Greenwood High School.');
                return;
            }
            
            // In a real implementation, you would send this data to your server
            console.log('Subscribed email:', email);
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active nav link highlighting
    const currentPage = location.pathname.split('/').pop().replace('.html', '');
    if (currentPage) {
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').replace('.html', '');
            if (linkPage === currentPage || (currentPage === 'index' && linkPage === '')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
});
