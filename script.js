
let currentSlide = 0;

function showSlide(index) {
    const slideWidth = document.querySelector('.carousel-card').offsetWidth;
    const slideContainer = document.querySelector('.carousel-slide');
    currentSlide = index;
    
    slideContainer.style.transform = `translateX(-${slideWidth * index}px)`;
    
    // Update the dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

// // Initialize the first slide as active
// document.addEventListener('DOMContentLoaded', () => {
//     showSlide(0);
// });
// // Get view count from localStorage, or set it to 0 if not set
// let viewCount = localStorage.getItem('page_view_count') || 0;

// // Increment the view count
// viewCount++;

// // Store the updated count back in localStorage
// localStorage.setItem('page_view_count', viewCount);

// // Display the updated count on the webpage
// document.getElementById('viewCount').textContent = viewCount;
// let count = 0;

// function incrementNumber() {
//     count++;
//     document.getElementById("number").innerText = count;
// }
let count = 0;
const fixedNumber = 100; // Set the fixed number to stop at
let intervalId; // Variable to hold the interval ID

function incrementNumber() {
    if (count < fixedNumber) { // Check if count is less than the fixed number
        count++;
        document.getElementById("number").innerText = count+"+";
        document.getElementById("number1").innerText = count+"+";
        document.getElementById("number2").innerText = count+"+";
        document.getElementById("number3").innerText = count+"+";
        document.getElementById("number4").innerText = count+"+";
        
    } else {
        clearInterval(intervalId); // Stop the counting if the fixed number is reached
    }
}

// Start counting every 10 milliseconds
intervalId = setInterval(incrementNumber, 10);

// Function to stop counting manually (if desired)
function stopCounting() {
    clearInterval(intervalId); // Stops the interval
}

// Add event listener to the stop button
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    // Toggle dropdown on click
    dropbtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const isExpanded = dropbtn.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            dropbtn.setAttribute('aria-expanded', 'false');
            dropdown.classList.remove('show');
        } else {
            dropbtn.setAttribute('aria-expanded', 'true');
            dropdown.classList.add('show');
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropbtn.setAttribute('aria-expanded', 'false');
            dropdown.classList.remove('show');
        }
    });

    // Optional: Close dropdown when a link inside it is clicked
    const dropdownLinks = dropdownContent.querySelectorAll('a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            dropbtn.setAttribute('aria-expanded', 'false');
            dropdown.classList.remove('show');
        });
    });
});

function showPopup(message) {
    document.getElementById("popup-message").textContent = message;
    document.getElementById("popup").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
