/**
* Template Name: FolioOne
* Template URL: https://bootstrapmade.com/folioone-bootstrap-portfolio-website-template/
* Updated: Aug 23 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init - OPTIMIZED
   */
  function aosInit() {
    AOS.init({
      duration: 300, // Even faster
      easing: 'ease-out', // Faster easing
      once: true,
      mirror: false,
      offset: 50, // Start animations earlier
      delay: 0 // No delay
    });
  }
  
  // Start AOS immediately, don't wait for load
  document.addEventListener('DOMContentLoaded', aosInit);

  /**
   * Typed Animation System
   */
  let typingTimeout = null;
  let isTyping = false;
  
  function startTypingAnimation() {
    const selectTyped = document.querySelector('.typed');
    if (!selectTyped || isTyping) return;
    
    // Clear any existing animation
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    
    isTyping = true;
    
    // Mobile için farklı metinler kullan
    let typed_strings;
    if (window.innerWidth <= 768) {
      typed_strings = selectTyped.getAttribute('data-typed-items-mobile') || selectTyped.getAttribute('data-typed-items');
    } else {
      typed_strings = selectTyped.getAttribute('data-typed-items');
    }
    
    typed_strings = typed_strings.split(',');
    
    let currentStringIndex = 0;
    let currentCharIndex = 0;
    let allText = '';
    
    function typeNextChar() {
      if (!isTyping) return; // Stop if animation was cancelled
      
      if (currentStringIndex < typed_strings.length) {
        const currentString = typed_strings[currentStringIndex];
        
        if (currentCharIndex < currentString.length) {
          const char = currentString[currentCharIndex];
          
          // HTML tag'lerini tamamen ekle (linkler çalışsın diye)
          if (char === '<') {
            const tagEnd = currentString.indexOf('>', currentCharIndex);
            if (tagEnd !== -1) {
              // Tüm tag'i bir seferde ekle
              allText += currentString.substring(currentCharIndex, tagEnd + 1);
              currentCharIndex = tagEnd + 1;
              selectTyped.innerHTML = allText;
              typingTimeout = setTimeout(typeNextChar, 0); // Hemen devam et
              return;
            }
          }
          
          // Normal karakteri ekle
          allText += char;
          selectTyped.innerHTML = allText;
          currentCharIndex++;
          
          // Her harf arasında 30ms bekle
          typingTimeout = setTimeout(typeNextChar, 30);
        } else {
          // Bu satır tamamlandı, bir sonraki satıra geç
          allText += '<br>';
          selectTyped.innerHTML = allText;
          currentStringIndex++;
          currentCharIndex = 0;
          
          // Satırlar arasında 200ms bekle
          typingTimeout = setTimeout(typeNextChar, 200);
        }
      } else {
        // Animation completed
        isTyping = false;
      }
    }
    
    // Clear content and start animation
    selectTyped.innerHTML = '';
    typingTimeout = setTimeout(typeNextChar, 500);
  }

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Init isotope layout and filters - ULTRA OPTIMIZED
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    const container = isotopeItem.querySelector('.isotope-container');
    
    // Show container immediately
    container.classList.add('loaded');
    
    // Initialize Isotope immediately with faster settings
    initIsotope = new Isotope(container, {
      itemSelector: '.isotope-item',
      layoutMode: layout,
      filter: filter,
      sortBy: sort,
      transitionDuration: '0.2s', // Faster transitions
      stagger: 0 // No stagger delay
    });
    
    // Update layout when images finish loading (non-blocking)
    if (typeof imagesLoaded !== 'undefined') {
      imagesLoaded(container, function() {
        initIsotope.layout();
      });
    }

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Language Toggle System
   */
  let currentLanguage = 'en'; // Her zaman İngilizce başlar
  
  function initLanguageToggle() {
    const dropdown = document.getElementById('langDropdown');
    const flagBtn = document.getElementById('langFlagBtn');
    const menu = document.getElementById('langMenu');
    
    // Force initial state: English and show EN flag
    localStorage.setItem('language', 'en');
    updateLanguage('en');
    
    // Start initial typing animation
    setTimeout(() => {
      startTypingAnimation();
    }, 1000);
    
    // If language UI not present, simply ensure English and exit
    if (!dropdown || !flagBtn || !menu) {
      localStorage.setItem('language', 'en');
      updateLanguage('en');
      setTimeout(() => startTypingAnimation(), 1000);
      return;
    }

    // Open/close dropdown
    flagBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = menu.classList.toggle('open');
      flagBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Click outside to close
    document.addEventListener('click', function() {
      menu.classList.remove('open');
      flagBtn.setAttribute('aria-expanded', 'false');
    });

    // Select language
    menu.querySelectorAll('.lang-item').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        currentLanguage = lang;
        updateLanguage(lang);
        localStorage.setItem('language', lang);
        // update flag icon on button
        const span = flagBtn.querySelector('.flag-icon');
        let cls = 'flag-icon-en';
        if (lang === 'tr') cls = 'flag-icon-tr';
        else if (lang === 'de') cls = 'flag-icon-de';
        else if (lang === 'zh') cls = 'flag-icon-zh';
        span.className = 'flag-icon ' + cls;
        menu.classList.remove('open');
        flagBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
  
  function updateLanguage(lang) {
    // Button label removed; we only update the visible flag via click handler
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
    
    // Update elements with HTML content
    document.querySelectorAll('[data-translate-html]').forEach(element => {
      const key = element.getAttribute('data-translate-html');
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
    
    // Update typed animation content
    const typedElement = document.querySelector('.typed');
    if (typedElement && translations[lang] && translations[lang].roles) {
      // Stop current animation
      isTyping = false;
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
      
      // Set new content
      typedElement.setAttribute('data-typed-items', translations[lang].roles.join(','));
      
      // Start new animation
      startTypingAnimation();
    }
  }
  
  
  // Initialize language toggle when page loads
  window.addEventListener('load', initLanguageToggle);

  /**
   * Showreel Modal System
   */
  function initShowreelModal() {
    const showreelBtn = document.getElementById('showreelBtn');
    const modal = document.getElementById('showreelModal');
    const closeBtn = document.querySelector('.showreel-close');
    const video = document.getElementById('showreelVideo');
    
    // Open modal
    showreelBtn.addEventListener('click', function(e) {
      e.preventDefault();
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
      
      // Play video after modal opens
      setTimeout(() => {
        video.play();
      }, 300);
    });
    
    // Close modal
    function closeModal() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restore scrolling
      video.pause();
      video.currentTime = 0; // Reset video to beginning
    }
    
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
      }
    });
  }
  
  // Initialize showreel modal when page loads
  window.addEventListener('load', initShowreelModal);

  // Video embed click functionality
  function initVideoEmbeds() {
    const videoEmbeds = document.querySelectorAll('.video-embed');
    const clickData = new Map(); // Store click state for each embed
    
    // Single click handler for outside clicks (more efficient)
    let outsideClickHandler = null;
    const isMobile = () => window.innerWidth <= 768;
    
    videoEmbeds.forEach(embed => {
      const embedId = embed.getAttribute('data-vimeo-id') || embed.getAttribute('data-youtube-id') || Math.random();
      clickData.set(embed, { count: 0, timer: null });
      
      embed.addEventListener('click', function(e) {
        const vimeoId = this.getAttribute('data-vimeo-id');
        const youtubeId = this.getAttribute('data-youtube-id');
        const title = this.getAttribute('data-title');
        const data = clickData.get(this);
        
        // Mobile: Two-tap behavior (first tap shows title, second tap opens video)
        if (isMobile()) {
          e.preventDefault();
          e.stopPropagation();
          
          // Clear previous timer
          if (data.timer) {
            clearTimeout(data.timer);
          }
          
          data.count++;
          
          if (data.count === 1) {
            // First tap: Show title overlay
            this.classList.add('show-title');
            
            // Hide other titles
            videoEmbeds.forEach(otherEmbed => {
              if (otherEmbed !== this) {
                const otherData = clickData.get(otherEmbed);
                otherEmbed.classList.remove('show-title');
                if (otherData.timer) {
                  clearTimeout(otherData.timer);
                }
                otherData.count = 0;
              }
            });
            
            // Reset click count after 2 seconds if no second tap
            data.timer = setTimeout(() => {
              data.count = 0;
              this.classList.remove('show-title');
            }, 2000);
          } else if (data.count === 2) {
            // Second tap: Open video
            data.count = 0;
            this.classList.remove('show-title');
            
            if (vimeoId) {
              openVideoModal(vimeoId, title, 'vimeo');
            } else if (youtubeId) {
              openVideoModal(youtubeId, title, 'youtube');
            }
          }
        } else {
          // Desktop: Direct click opens video (hover shows title)
          if (vimeoId) {
            openVideoModal(vimeoId, title, 'vimeo');
          } else if (youtubeId) {
            openVideoModal(youtubeId, title, 'youtube');
          }
        }
      });
    });
    
    // Single outside click handler for all embeds
    if (!outsideClickHandler) {
      outsideClickHandler = function(e) {
        if (isMobile()) {
          videoEmbeds.forEach(embed => {
            if (!embed.contains(e.target)) {
              const data = clickData.get(embed);
              embed.classList.remove('show-title');
              if (data.timer) {
                clearTimeout(data.timer);
              }
              data.count = 0;
            }
          });
        }
      };
      document.addEventListener('click', outsideClickHandler);
    }
    
    // Update on resize
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        // Reset all overlays when switching between mobile/desktop
        videoEmbeds.forEach(embed => {
          const data = clickData.get(embed);
          embed.classList.remove('show-title');
          if (data.timer) {
            clearTimeout(data.timer);
          }
          data.count = 0;
        });
      }, 250);
    });
  }
  
  // Video modal functionality (same style as showreel)
  function openVideoModal(videoId, title, platform) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('videoModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'videoModal';
      modal.className = 'showreel-modal';
      modal.innerHTML = `
        <div class="showreel-modal-content">
          <span class="showreel-close">&times;</span>
          <div class="showreel-video-container">
            <iframe id="videoFrame" src="" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      
      // Add close functionality
      const closeBtn = modal.querySelector('.showreel-close');
      closeBtn.addEventListener('click', closeVideoModal);
      
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          closeVideoModal();
        }
      });
      
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
          closeVideoModal();
        }
      });
    }
    
    // Set video source based on platform
    const iframe = modal.querySelector('#videoFrame');
    if (platform === 'vimeo') {
      iframe.src = `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`;
    } else if (platform === 'youtube') {
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  
  function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const iframe = modal.querySelector('#videoFrame');
    iframe.src = ''; // Stop video
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  // Initialize video embeds when page loads
  window.addEventListener('load', initVideoEmbeds);

  /**
   * Works page: scale portfolio items based on distance to viewport center
   */
  function initPortfolioScrollScaling() {
    const isPortfolioPage = document.body.classList.contains('portfolio-page');
    if (!isPortfolioPage) return;

    const portfolioItems = document.querySelectorAll('.portfolio-item');
    if (portfolioItems.length === 0) return;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    let ticking = false;
    const easeOut = (t) => 1 - Math.pow(1 - t, 3); // smooth cubic ease

    const update = () => {
      const viewportCenter = window.innerHeight / 2;
      portfolioItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - viewportCenter);

        const normalized = clamp(distance / (window.innerHeight * 0.75), 0, 1);
        const eased = easeOut(1 - normalized);
        const scale = 0.94 + eased * 0.14; // 0.94 → 1.08
        const opacity = 0.9 + eased * 0.1; // 0.9 → 1.0

        item.style.transform = `translateZ(0) scale(${scale})`;
        item.style.opacity = `${opacity}`;
        item.style.willChange = 'transform, opacity';
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  }

  window.addEventListener('load', initPortfolioScrollScaling);

  /**
   * Mobile video title detection - Show titles when videos are in center of viewport
   */
  function initMobileVideoTitles() {
    // Only run on mobile
    if (window.innerWidth > 768) return;
    
    const videoEmbeds = document.querySelectorAll('.video-embed');
    if (videoEmbeds.length === 0) return;

    let ticking = false;
    
    function updateVideoTitles() {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      
      videoEmbeds.forEach(video => {
        const rect = video.getBoundingClientRect();
        const videoCenter = rect.top + (rect.height / 2);
        const distanceFromCenter = Math.abs(videoCenter - viewportCenter);
        
        // Show title if video is within 200px of viewport center
        if (distanceFromCenter < 200) {
          video.classList.add('in-view');
        } else {
          video.classList.remove('in-view');
        }
      });
      
      ticking = false;
    }
    
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateVideoTitles);
        ticking = true;
      }
    }
    
    updateVideoTitles();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  }

  // Disabled: Mobile video titles now show only on tap
  // window.addEventListener('load', initMobileVideoTitles);

  /**
   * Lazy loading for video thumbnails - DISABLED for now
   */
  function initLazyLoading() {
    const videoEmbeds = document.querySelectorAll('.video-embed');
    if (videoEmbeds.length === 0) return;

    // Set all videos as loaded to show thumbnails immediately
    videoEmbeds.forEach(video => {
      video.setAttribute('data-loaded', 'true');
    });
  }

  window.addEventListener('load', initLazyLoading);

  /**
   * Contact Form - Web3Forms Integration
   */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: json
        });
        
        const result = await response.json();
        
        if (result.success) {
          // Show success message
          const sentMessage = contactForm.querySelector('.sent-message');
          sentMessage.innerHTML = 'Your message has been sent. Thank you!';
          sentMessage.style.display = 'block';
          sentMessage.style.color = '#059652';
          
          // Reset form
          contactForm.reset();
          
          // Hide message after 5 seconds
          setTimeout(() => {
            sentMessage.style.display = 'none';
          }, 5000);
        } else {
          throw new Error(result.message || 'Form submission failed');
        }
      } catch (error) {
        console.error('Error:', error);
        const sentMessage = contactForm.querySelector('.sent-message');
        sentMessage.innerHTML = 'There was an error sending your message. Please try again.';
        sentMessage.style.display = 'block';
        sentMessage.style.color = '#e74c3c';
        
        setTimeout(() => {
          sentMessage.style.display = 'none';
        }, 5000);
      }
    });
  }

})();