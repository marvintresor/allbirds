
const phrase1 = document.getElementById('phrase1');
const phrase2 = document.getElementById('phrase2');
const toggleButton = document.getElementById('toggleButton');


toggleButton.addEventListener('click', () => {
    
    if (phrase1.style.display === 'none') {
        phrase1.style.display = 'block';
        phrase2.style.display = 'none';
    } else {
        phrase1.style.display = 'none';
        phrase2.style.display = 'block';
    }
});
  
  function updateProgressBar(progressPercentage) {
    const progressBar = document.getElementById('progress');
    progressBar.style.width = progressPercentage + '%';
}


function closeCart() {
    const cartContainer = document.getElementById("cartContainer");
    cartContainer.style.display = "none";
}


function toggleCart() {
    const cartContainer = document.getElementById("cartContainer");
    const currentDisplay = cartContainer.style.display;
    cartContainer.style.display = currentDisplay === "none" ? "block" : "none";
}
  
  const closeBtn = document.getElementById("closeBtn");

  
  closeBtn.addEventListener("click", () => {
      
      closeBtn.style.display = "none";
      
      
  });
  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.toggleBtn');
    const menu = document.querySelector('#HOMMESDropdown');

    toggleBtn.addEventListener('click', function () {
        menu.classList.toggle('show-menu');
    });
});
document.getElementById("travel").addEventListener("click", function() {
    document.querySelector(".buttons-container.everyday").style.display = "none";
    document.querySelector(".buttons-container.travel").style.display = "block";
});























