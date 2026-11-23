/**
 * LOKESH JAYACHANDRAN - LUXURY CINEMATIC PORTFOLIO JAVASCRIPT
 * Premium Interactions • Video Control • Smooth Animations • Accessibility
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ==========================================
    // 1. PROJECT DATA ARCHITECTURE (VERIFIED ONLY)
    // ==========================================
    const projectDetails = {
        climateguard: {
            title: "ClimateGuard-AI",
            category: "AI & Environmental Risk Analytics",
            badge: "PROJECT 01",
            overview: "An AI-powered climate and environmental risk prediction project using weather data and machine learning to analyze patterns and forecast critical environmental hazards.",
            highlights: [
                "Multidimensional weather data processing and feature engineering for atmospheric indicators.",
                "Environmental wildfire and climate risk classification algorithms trained on environmental datasets.",
                "Interactive Streamlit analytical dashboard providing accessible risk heatmaps and parameter sliders.",
                "Rigorous model evaluation metrics, loss curves, confusion matrices, and risk vulnerability scoring."
            ],
            technologies: ["Python", "Machine Learning", "Streamlit", "Weather Data Processing", "Model Evaluation & Analytics"],
            github: "https://github.com/LokeshJ0018"
        },
        documind: {
            title: "DocuMind AI",
            category: "Generative AI & Retrieval-Augmented Generation",
            badge: "PROJECT 02",
            overview: "An AI-powered document question-answering application leveraging Retrieval-Augmented Generation (RAG) to deliver contextually grounded, accurate responses from complex PDF knowledge bases.",
            highlights: [
                "Robust PDF ingestion pipeline handling text extraction, semantic chunking, and metadata parsing.",
                "Vector embedding generation and indexing within ChromaDB for rapid nearest-neighbor vector search.",
                "Context-injected prompt synthesis paired with the Gemini API to prevent LLM hallucinations.",
                "Precise natural language querying over multi-page research and documentation files."
            ],
            technologies: ["Python", "Gemini API", "ChromaDB", "PDF Processing", "RAG Pipeline"],
            github: "https://github.com/LokeshJ0018"
        },
        waterleak: {
            title: "IoT Smart Home Water Leak Detection",
            category: "IoT Automation & Embedded Hardware",
            badge: "PROJECT 03",
            overview: "An IoT-based smart home solution designed to detect water leakage using moisture sensors and instantly dispatch automated mobile alerts to prevent catastrophic structural damage.",
            highlights: [
                "Continuous physical threshold monitoring across vulnerable water access points using moisture sensor probes.",
                "Immediate algorithmic detection of abnormal liquid presence with noise filtering.",
                "Automated mobile push notification dispatch mechanism for instantaneous homeowner notification.",
                "Proactive risk mitigation reducing severe property damage and domestic water waste."
            ],
            technologies: ["IoT Moisture Sensors", "Hardware Logic", "Mobile Alert Dispatch", "Automation Rules"],
            github: "https://github.com/LokeshJ0018"
        },
        habittracker: {
            title: "Habit Tracker",
            category: "Productivity & Web Systems",
            badge: "PROJECT 04",
            overview: "A simple productivity application designed to help users monitor habits, foster self-discipline, and maintain consistency through clean visual feedback.",
            highlights: [
                "Intuitive daily routine tracking with straightforward completion toggles and streak indicators.",
                "Clean, distraction-free user interface focused entirely on friction-free habit management.",
                "Progress visualization allowing users to monitor consistency trends across cycles.",
                "Persistent local state storage ensuring user data continuity between sessions."
            ],
            technologies: ["JavaScript", "HTML5", "CSS3", "State Management", "UI/UX Design"],
            github: "https://github.com/LokeshJ0018"
        }
    };

    // ==========================================
    // 2. VIDEO PLAYBACK CONTROLLER
    // ==========================================
    const heroVideo = document.getElementById('heroVideo');
    const videoPlayToggle = document.getElementById('videoPlayToggle');
    const playIcon = document.getElementById('playIcon');
    const playLabel = document.getElementById('playLabel');

    if (heroVideo && videoPlayToggle) {
        // Attempt immediate muted autoplay
        const playPromise = heroVideo.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Autoplay was prevented by browser policy
                if (playIcon && playLabel) {
                    playIcon.textContent = '▶';
                    playLabel.textContent = 'Play Cinematic';
                }
            });
        }

        videoPlayToggle.addEventListener('click', () => {
            if (heroVideo.paused) {
                heroVideo.play().then(() => {
                    playIcon.textContent = '⏸';
                    playLabel.textContent = 'Cinematic Ambience';
                }).catch(() => {});
            } else {
                heroVideo.pause();
                playIcon.textContent = '▶';
                playLabel.textContent = 'Play Cinematic';
            }
        });
    }

    // ==========================================
    // 3. CUSTOM MOUSE CURSOR WITH SMOOTH LERP
    // ==========================================
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    if (!isTouchDevice && cursorDot && cursorRing) {
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        });

        const renderCursor = () => {
            // Linear interpolation for smooth trailing ring
            ringX += (mouseX - ringX) * 0.18;
            ringY += (mouseY - ringY) * 0.18;
            cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
            requestAnimationFrame(renderCursor);
        };
        requestAnimationFrame(renderCursor);

        // Hover expand effects on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card, .filter-tab, .form-input');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                cursorRing.style.width = '54px';
                cursorRing.style.height = '54px';
                cursorRing.style.borderColor = 'rgba(212, 175, 55, 0.85)';
                cursorRing.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                cursorRing.style.width = '32px';
                cursorRing.style.height = '32px';
                cursorRing.style.borderColor = 'var(--color-gold-400)';
                cursorRing.style.backgroundColor = 'rgba(212, 175, 55, 0.04)';
            });
        });
    }

    // ==========================================
    // 4. SCROLL PROGRESS BAR & NAVBAR SCROLLED STATE
    // ==========================================
    const scrollProgressBar = document.getElementById('scrollProgressBar');
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        if (scrollProgressBar) {
            scrollProgressBar.style.width = `${scrollPercent}%`;
        }

        if (navbar) {
            if (scrollTop > 60) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }, { passive: true });

    // ==========================================
    // 5. MOBILE DRAWER NAVIGATION
    // ==========================================
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerClose = document.getElementById('drawerClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleDrawer = (open) => {
        if (!mobileDrawer || !mobileToggle) return;
        const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains('open');
        if (isOpen) {
            mobileDrawer.classList.add('open');
            mobileToggle.classList.add('active');
            mobileToggle.setAttribute('aria-expanded', 'true');
            mobileDrawer.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        } else {
            mobileDrawer.classList.remove('open');
            mobileToggle.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileDrawer.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    };

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => toggleDrawer());
    }

    if (drawerClose) {
        drawerClose.addEventListener('click', () => toggleDrawer(false));
    }

    mobileNavLinks.forEach((link) => {
        link.addEventListener('click', () => toggleDrawer(false));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (mobileDrawer && mobileDrawer.classList.contains('open')) {
            if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
                toggleDrawer(false);
            }
        }
    });

    // ==========================================
    // 6. ACTIVE NAV LINK HIGHLIGHTING
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const highlightActiveNav = () => {
        const scrollPos = window.scrollY + 200;
        sections.forEach((section) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightActiveNav, { passive: true });

    // ==========================================
    // 7. REVEAL-ON-SCROLL (INTERSECTION OBSERVER)
    // ==========================================
    const revealItems = document.querySelectorAll('.reveal-item');
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('is-revealed');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        revealItems.forEach((item) => revealObserver.observe(item));
    } else {
        // Fallback for older browsers
        revealItems.forEach((item) => item.classList.add('is-revealed'));
    }

    // ==========================================
    // 8. TECHNICAL SKILLS CATEGORY FILTERING
    // ==========================================
    const filterTabs = document.querySelectorAll('.filter-tab');
    const skillCards = document.querySelectorAll('.skill-card');

    filterTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            filterTabs.forEach((t) => t.classList.remove('active'));
            tab.classList.add('active');

            const filterValue = tab.getAttribute('data-filter');

            skillCards.forEach((card) => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('filtered-out');
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                } else {
                    card.classList.add('filtered-out');
                }
            });
        });
    });

    // ==========================================
    // 9. PROJECT DETAILS MODAL DIALOG
    // ==========================================
    const projectModal = document.getElementById('projectModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalBodyContent = document.getElementById('modalBodyContent');
    const openModalButtons = document.querySelectorAll('.open-modal-btn');

    const openModal = (projectKey) => {
        const data = projectDetails[projectKey];
        if (!data || !projectModal || !modalBodyContent) return;

        const highlightsHtml = data.highlights.map(item => `
            <li>
                <span class="bullet-gold">✦</span>
                <span>${item}</span>
            </li>
        `).join('');

        const techTagsHtml = data.technologies.map(tech => `
            <span class="tech-tag">${tech}</span>
        `).join('');

        modalBodyContent.innerHTML = `
            <div class="modal-header-tag">${data.badge} • ${data.category}</div>
            <h3 class="modal-title" id="modalProjectTitle">${data.title}</h3>
            <p class="modal-lead">${data.overview}</p>
            
            <h4 class="modal-section-title">Architectural Features &amp; Implementation</h4>
            <ul class="modal-list">
                ${highlightsHtml}
            </ul>

            <h4 class="modal-section-title">Core Technologies</h4>
            <div class="project-tech-tags modal-tech-box">
                ${techTagsHtml}
            </div>

            <div class="modal-actions">
                <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn-luxury-primary">
                    <span class="btn-content">
                        <span>Visit GitHub Profile</span>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                    </span>
                </a>
                <button class="btn-luxury-outline" id="modalDismissBtn">
                    <span class="btn-content">Close Window</span>
                </button>
            </div>
        `;

        projectModal.classList.add('active');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        const dismissBtn = document.getElementById('modalDismissBtn');
        if (dismissBtn) {
            dismissBtn.addEventListener('click', closeModal);
        }
    };

    const closeModal = () => {
        if (!projectModal) return;
        projectModal.classList.remove('active');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    openModalButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const projectKey = btn.getAttribute('data-project');
            openModal(projectKey);
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
            closeModal();
        }
    });

    // ==========================================
    // 10. LUXURY TOAST SYSTEM & COPY EMAIL
    // ==========================================
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const copyBtnText = document.getElementById('copyBtnText');
    const targetEmailText = document.getElementById('targetEmailText');
    const luxuryToast = document.getElementById('luxuryToast');
    const toastMessage = document.getElementById('toastMessage');

    let toastTimeout;
    const showToast = (message) => {
        if (!luxuryToast || !toastMessage) return;
        toastMessage.textContent = message;
        luxuryToast.classList.add('show');

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            luxuryToast.classList.remove('show');
        }, 3200);
    };

    if (copyEmailBtn && targetEmailText) {
        copyEmailBtn.addEventListener('click', async () => {
            const email = targetEmailText.textContent.trim();
            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(email);
                } else {
                    // Fallback for non-secure contexts
                    const tempInput = document.createElement('input');
                    tempInput.value = email;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                }

                if (copyBtnText) copyBtnText.textContent = 'Copied!';
                copyEmailBtn.style.borderColor = '#50e3c2';
                copyEmailBtn.style.color = '#50e3c2';
                showToast(`Copied to clipboard: ${email}`);

                setTimeout(() => {
                    if (copyBtnText) copyBtnText.textContent = 'Copy Email';
                    copyEmailBtn.style.borderColor = '';
                    copyEmailBtn.style.color = '';
                }, 2500);
            } catch (err) {
                showToast(`Email: ${email}`);
            }
        });
    }

    // ==========================================
    // 11. FUNCTIONAL CONTACT FORM WITH MAILTO
    // ==========================================
    const sendEmailBtn = document.getElementById('sendEmailBtn');
    const senderName = document.getElementById('senderName');
    const senderEmail = document.getElementById('senderEmail');
    const senderSubject = document.getElementById('senderSubject');
    const senderMessage = document.getElementById('senderMessage');

    if (sendEmailBtn) {
        sendEmailBtn.addEventListener('click', () => {
            const nameVal = senderName ? senderName.value.trim() : '';
            const emailVal = senderEmail ? senderEmail.value.trim() : '';
            const subjectVal = senderSubject ? senderSubject.value.trim() : '';
            const messageVal = senderMessage ? senderMessage.value.trim() : '';

            if (!nameVal || !emailVal || !messageVal) {
                showToast('Please complete all required fields.');
                return;
            }

            const recipient = 'lokeshjai2005@gmail.com';
            const emailSubject = encodeURIComponent(subjectVal || `Portfolio Inquiry from ${nameVal}`);
            const emailBody = encodeURIComponent(
                `Hello Lokesh,\n\n${messageVal}\n\n---\nSender: ${nameVal}\nEmail: ${emailVal}`
            );

            const mailtoUrl = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
            showToast('Opening default email client...');
            window.location.href = mailtoUrl;
        });
    }

    // ==========================================
    // 12. DYNAMIC CURRENT YEAR
    // ==========================================
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        const year = new Date().getFullYear();
        // Since graduation is May 2027, display academic span or current year gracefully
        currentYearEl.textContent = year >= 2027 ? year : '2024 - 2027';
    }
});
