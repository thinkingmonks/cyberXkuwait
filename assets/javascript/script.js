// Navbar
document.querySelectorAll(".hamburger").forEach((element) => {
  element.addEventListener("click", (event) => {
    element.classList.toggle("is-active");
  });
});
document.querySelectorAll(".menu-super, .hamburger").forEach(element => {
  element.addEventListener("click", function() {
      document.querySelector(".hamburger").classList.toggle("is-active");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const menuSuper = document.querySelector(".menu-super");
  const menuContainer = document.querySelector(".menu-container");

  if (menuSuper && menuContainer) {
      // Toggle menu when clicking on .menu-super
      menuSuper.addEventListener("click", function (event) {
          menuContainer.classList.toggle("menu-active");
          event.stopPropagation(); // Prevents click from reaching the document
      });

      // Hide menu when clicking outside
      document.addEventListener("click", function (event) {
          if (!menuContainer.contains(event.target) && !menuSuper.contains(event.target)) {
              menuContainer.classList.remove("menu-active");
          }
      });
  }
});

// Navbar Scroll Behavior
document.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
    if (scrollPosition > 50) { // Adjust this value based on when you want the patch to appear
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
  
    // Section active state detection
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");
    
    let currentSection = "";  // Store the current section ID
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });
  
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
          console.log(`${link.getAttribute("href")} is now active`);
        }
      });
  });
  
  // Patches
  const patches = document.querySelectorAll('.patch');
  
  patches.forEach((patch, index) => {
    const overlay = patch.querySelector('.overlay');
  
    // Set the correct overlay style for the active patch
    if (patch.classList.contains('active')) {
      overlay.style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Transparent for active patches
    } else {
      overlay.style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Transparent for inactive patches
    }
  
    overlay.addEventListener('click', () => {
      // Remove the active class from the current active patch
      const currentActivePatch = document.querySelector('.patch.active');
      const currentIndex = Array.from(patches).indexOf(currentActivePatch);
  
      if (currentActivePatch) {
        currentActivePatch.classList.remove('active');
        currentActivePatch.classList.add('inactive');
        currentActivePatch.querySelector('.overlay').style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Transparent overlay for inactive
      }
  
      // Determine the next patch index
      const nextIndex = (currentIndex + 1) % patches.length;
      const nextPatch = patches[nextIndex];
  
      // Add active class to the next patch
      nextPatch.classList.remove('inactive');
      nextPatch.classList.add('active');
      nextPatch.querySelector('.overlay').style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Transparent for active patch
    });
  });
  
  // Mobile Menu
  // const hamburger = document.getElementById('hamburger');
  // const mobileMenu = document.getElementById('mobile-menu');
  // const closeBtn = document.getElementById('close-btn');
  // const menuLinks = document.querySelectorAll('.mobile-menu-links a');
  
  // // Open the mobile menu when the hamburger is clicked
  // hamburger.addEventListener('click', () => {
  //   hamburger.classList.toggle('active');  // Animate the hamburger menu
  //   mobileMenu.classList.toggle('active'); // Display the mobile menu with blur
  // });
  
  // // Close the mobile menu when the close button is clicked
  // closeBtn.addEventListener('click', () => {
  //   hamburger.classList.remove('active');  // Reset hamburger animation
  //   mobileMenu.classList.remove('active'); // Hide the mobile menu
  // });
  
  // // Close the menu when a section link is clicked
  // document.querySelectorAll('.mobile-menu a').forEach(link => {
  //   link.addEventListener('click', () => {
  //     mobileMenu.classList.remove('active');
  //     hamburger.classList.remove('active');
  //     document.body.classList.remove('no-scroll');
  //   });
  // });
  

  // count down
// Set the date we're counting down to
var countDownDate = new Date("2025-07-10T07:59:59+02:00").getTime();

// Update the count down every 1 second
var u = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day-box").innerHTML = days;
    document.getElementById("hour-box").innerHTML = hours;
    document.getElementById("min-box").innerHTML = minutes;
    document.getElementById("sec-box").innerHTML = seconds;

    
// Get the seconds element
var secondsElement = document.getElementById("sect-box");

// Change the color of the seconds box every second
if (seconds % 2 == 0) {
  secondsElement.classList.add("count-cl")
} else {
 secondsElement.classList.remove("count-cl")
}


    // Apply background colors individually to each digit
    applyClassToDigits(days, "day-box", "dig_class");
    applyClassToDigits(hours, "hour-box", "dig_class");
    applyClassToDigits(minutes, "min-box", "dig_class");
    applyClassToDigits(seconds, "sec-box", "dig_class");

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(u);
        document.getElementById("day-box").innerHTML = 0;
        document.getElementById("hour-box").innerHTML = 0;
        document.getElementById("min-box").innerHTML = 0;
        document.getElementById("sec-box").innerHTML = 0;
    }
}, 1000);

function applyClassToDigits(value, elementId, className) {
 // Check if value is not null or undefined
 if (value != null && value != undefined) {
     // Convert the value to a string to access each digit individually
     var valueString = value.toString();

     // Get the element by ID
     var element = document.getElementById(elementId);

     // Clear the content of the element before adding new spans
     element.innerHTML = '';

     // Apply class individually to each digit
     for (var i = 0; i < valueString.length; i++) {
         var digit = valueString[i];
         element.innerHTML += '<span class="' + className + '">' + digit + '</span>';
     }
 }
}