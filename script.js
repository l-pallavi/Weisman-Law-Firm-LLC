function toggleMobileMenu() {
    const menu = document.querySelector('.column-menu nav ul');
    menu.classList.toggle('menu-open');
}


document.getElementById('number').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
