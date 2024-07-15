// Manga öğelerine hover efekti
const mangaItems = document.querySelectorAll('.manga-item');
mangaItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.05)';
  });
  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
  });
});

// Logo animasyonu
const logo = document.querySelector('.logo h1');
logo.addEventListener('mouseover', () => {
  logo.style.textShadow = '4px 4px 8px rgba(0,0,0,0.7)';
});
logo.addEventListener('mouseout', () => {
  logo.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
});

// Slider fonksiyonu
function startSlider() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 5000); // Her 5 saniyede bir slayt değişir
}

// Sayfa yüklendiğinde slider'ı başlat
window.addEventListener('load', startSlider);

// Koyu mod toggle fonksiyonu
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️';
  } else {
    darkModeToggle.textContent = '🌙';
  }
});

// Sayfa kaydırma efekti
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Tüm iç linklere smooth scroll efekti ekle
const allLinks = document.querySelectorAll('a[href^="#"]');
allLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    smoothScroll(href, 1000);
  });
});
