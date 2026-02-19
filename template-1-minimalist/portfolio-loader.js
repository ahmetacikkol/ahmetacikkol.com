// Load portfolio data from PORTFOLIO_DATA.json and generate portfolio items
async function loadPortfolio() {
  try {
    const response = await fetch('../PORTFOLIO_DATA.json');
    const data = await response.json();
    
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;
    
    // Clear existing content
    portfolioGrid.innerHTML = '';
    
    // Generate portfolio items for each category
    data.portfolio.categories.forEach(category => {
      category.items.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item isotope-item ${category.id}`;
        
        portfolioItem.innerHTML = `
          <div class="portfolio-item-inner">
            <div class="portfolio-image" 
                 data-vimeo-id="${item.vimeoId}" 
                 data-title="${item.title}"
                 style="background-image: url('../${item.image}');">
              <div class="portfolio-overlay">
                <div class="portfolio-info">
                  <h3>${item.title}</h3>
                  <p>${item.role}</p>
                  <div class="play-button">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.9)"/>
                      <path d="M24 20L40 30L24 40V20Z" fill="#000"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
      });
    });
    
    // Initialize Isotope after items are loaded
    initIsotope();
    
  } catch (error) {
    console.error('Error loading portfolio:', error);
  }
}

// Initialize Isotope layout
function initIsotope() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;
  
  // Wait for images to load
  if (typeof imagesLoaded !== 'undefined') {
    imagesLoaded(grid, function() {
      const iso = new Isotope(grid, {
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry',
        masonry: {
          columnWidth: '.portfolio-item',
          gutter: 20
        },
        transitionDuration: '0.3s'
      });
      
      // Filter functionality
      const filterButtons = document.querySelectorAll('.filter-btn');
      filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
          // Update active state
          filterButtons.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          
          // Filter items
          const filterValue = this.getAttribute('data-filter');
          iso.arrange({ filter: filterValue });
        });
      });
      
      // Video click handlers
      setupVideoHandlers();
    });
  }
}

// Setup video click handlers
function setupVideoHandlers() {
  const portfolioImages = document.querySelectorAll('.portfolio-image');
  portfolioImages.forEach(img => {
    img.addEventListener('click', function() {
      const vimeoId = this.getAttribute('data-vimeo-id');
      const title = this.getAttribute('data-title');
      openVideoModal(vimeoId, title);
    });
  });
}

// Open video modal
function openVideoModal(vimeoId, title) {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-frame');
  
  if (modal && iframe) {
    iframe.src = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

// Close video modal
function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-frame');
  
  if (modal && iframe) {
    iframe.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal handlers
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('video-modal');
  const closeBtn = document.querySelector('.video-modal-close');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeVideoModal);
  }
  
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeVideoModal();
      }
    });
  }
  
  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
      closeVideoModal();
    }
  });
  
  // Load portfolio when page loads
  loadPortfolio();
});
