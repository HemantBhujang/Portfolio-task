document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1); // Get section ID
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjust for fixed header
            behavior: "smooth",
          });
        }
      });
    });
  });
  
  // Gallery Filtering
  function filterGallery(category) {
    let items = document.querySelectorAll(".item");
  
    items.forEach((item) => {
      if (category === "all" || item.classList.contains(category)) {
        item.style.display = "block";
        item.style.opacity = "1";
      } else {
        item.style.opacity = "0"; 
        setTimeout(() => {
          item.style.display = "none";
        }, 300); // Smooth transition
      }
    });
  }
  