document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('myVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');

    playPauseBtn.addEventListener('click', function () {
        if (video.paused || video.ended) {
            video.play();
            playPauseBtn.style.display = 'none';
        } else {
            video.pause();
            playPauseBtn.style.display = 'flex';
        }
    });

    video.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            playPauseBtn.style.display = 'none';
        } else {
            video.pause();
            playPauseBtn.style.display = 'flex';
        }
    });

    video.addEventListener('ended', function () {
        playPauseBtn.style.display = 'flex';
    });
});

const dropdown = document.getElementById("dropdown")
dropdown.addEventListener("click", function() {
    const dropdownCont = document.getElementById("content")
    dropdownCont.classList.toggle("hidden")
})

const dropdownFooter = document.getElementById("dropdown-footer")
dropdownFooter.addEventListener("click", function() {
    const dropdownCont = document.getElementById("content-footer")
    dropdownCont.classList.toggle("hidden")
})

const dropdownMob = document.getElementById("dropdown-mob")
dropdownMob.addEventListener("click", function() {
    const dropdownCont = document.getElementById("content-mob")
    dropdownCont.classList.toggle("hidden")
})

const dropdownMenu = document.getElementById("dropdown-menu")
dropdownMenu.addEventListener("click", function() {
    const dropdownCont = document.getElementById("content-menu")
    dropdownCont.classList.toggle("hidden")
})

function toggleMenu() {
    var mobileMenu = document.getElementById('mobile-menu');
    var body = document.body

    if(mobileMenu.style.height === '0px') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        mobileMenu.style.height = '100vh'
    } else {
        mobileMenu.style.height = '0px'
    }
}