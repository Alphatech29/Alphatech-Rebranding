const header = document.querySelector('.nav');
let isScrolled = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 0 && !isScrolled) {
    header.classList.add('scrolled');
    isScrolled = true;
  } else if (window.scrollY === 0 && isScrolled) {
    header.classList.remove('scrolled');
    isScrolled = false;
  }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Update the copyright element
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
      copyrightElement.textContent = `© ${currentYear} Alphatech Multimedia Technologies-RC No: 3596357. All rights reserved.`;
    }
  });

  const texts = [
    "web development.",
    "mobile app development.",
    "digital marketing."
  ];

  const speed = 80; 
  const eraseDelay = 2000; 

  let textIndex = 0;
  let charIndex = 0;
  const typewriterText = document.getElementById('type-writer');

  function typeWriter() {
    if (textIndex < texts.length) {
      if (charIndex < texts[textIndex].length) {
        typewriterText.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
      } else {
        // Wait before erasing
        setTimeout(eraseText, eraseDelay);
      }
    }
  }

  function eraseText() {
    if (charIndex > 0) {
      typewriterText.innerHTML = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, speed);
    } else {
      // Move to the next text
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();


  // Initialize ScrollReveal
  ScrollReveal({
     reset: true,
     distance:"60px",
     duration: 2500,
     delay: 400
     });

  ScrollReveal().reveal('.text-heading , .newsletter , .left , .award-img , .h3_head , .about-text', {delay: 200, origin:"left",});
  ScrollReveal().reveal('.hero-img , .right , .abc-img', {delay: 100, origin:"right",});
  ScrollReveal().reveal('.text-sub , .our-pragraph , .bottom , .requst , .nav-tabs', {delay: 200, origin:"bottom",});
  ScrollReveal().reveal('.our-text , .top , .head-title , .about-title', {delay: 200, origin:"top",});
 
 
//This code allow user to swtich tab 
  function switchTab(tabId) {
    document.querySelectorAll('.nav-link').forEach(function (tab) {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-pane').forEach(function (pane) {
        pane.classList.remove('active', 'show');
    });
    document.getElementById(tabId).classList.add('active', 'show');
    document.getElementById(tabId + 'Tab').classList.add('active');
}

