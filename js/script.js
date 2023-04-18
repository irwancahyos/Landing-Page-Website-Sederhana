// script untuk menampilkan navbar

const navMuncul = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navMuncul.classList.toggle('active');
};

// ambil element hamburger
const hamburger = document.querySelector('#hamburger-menu');

// menghapus class active di navbar
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navMuncul.contains(e.target)) {
    navMuncul.classList.remove('active');
  }
});
