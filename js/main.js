const global = {
  currentPage: window.location.pathname,
};

function highlightCurrentPageLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}

function init() {
  highlightCurrentPageLink();
}

document.addEventListener('DOMContentLoaded', init);
