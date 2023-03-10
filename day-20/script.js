const links = document.querySelectorAll('.nav-list li a');

for (link of links) {
  link.addEventListener('click', smoothScroll);
  console.log(link);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  document.querySelector(href).scrollIntoView({
    behavior: 'smooth',
  });
}
