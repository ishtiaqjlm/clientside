 // Get all images on the page
    const allImages = document.querySelectorAll("img");

    const lightbox = document.getElementById("imageLightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeLightbox = document.getElementById("closeLightbox");

    // Add click event to each image
    allImages.forEach(img => {
      img.style.cursor = "pointer";
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      });
    });

    // Close the lightbox
    closeLightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });

    // Close when clicking outside the image
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });

    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

   toggle.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });

  //copyright year
  document.getElementById("year").innerHTML = new Date().getFullYear();