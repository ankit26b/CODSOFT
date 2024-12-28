document.addEventListener("DOMContentLoaded", () => {
  const images = ["Images/shoe1.png", "Images/shoe2.png", "Images/shoe3.png"];
  const imageElement = document.querySelector(".image img");
  const nextBtn = document.getElementById("next-btn");
  let currentIndex = 0;

  nextBtn.addEventListener("click", () => {
    // Set current image to inactive
    imageElement.classList.add("inactive");

    // Wait for animation to complete
    setTimeout(() => {
      // Update the image source
      currentIndex = (currentIndex + 1) % images.length;
      imageElement.src = images[currentIndex];

      // Set new image to active
      imageElement.classList.remove("inactive");
    }, 600); // Match the CSS transition duration
  });
});
