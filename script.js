document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    const themeIcon = document.querySelector('#theme-toggle i');
    if (document.body.classList.contains('light-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});
