// Lightbox functionality for publication images
document.addEventListener('DOMContentLoaded', function() {
  // Create lightbox HTML
  const lightboxHTML = `
    <div class="lightbox" id="lightbox">
      <span class="lightbox-close" id="lightboxClose">&times;</span>
      <div class="lightbox-content">
        <img id="lightboxImage" src="" alt="" />
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', lightboxHTML);

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');

  // Add click handlers to all publication images
  const publicationImages = document.querySelectorAll('.publication-image img');
  publicationImages.forEach(img => {
    img.addEventListener('click', function() {
      lightboxImage.src = this.src;
      lightbox.classList.add('active');
    });
  });

  // Close lightbox when clicking close button
  lightboxClose.addEventListener('click', function() {
    lightbox.classList.remove('active');
  });

  // Close lightbox when clicking outside image
  lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });

  // Close lightbox on Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      lightbox.classList.remove('active');
    }
  });
});
