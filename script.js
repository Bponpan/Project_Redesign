document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('video-bg');
    video.play();
});


// รับความสูงของ Navbar
var navbar = document.getElementById("navbar");
var prevScrollPos = window.pageYOffset;

// เมื่อมีการเลื่อนหน้าเว็บ
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
        // เลื่อนขึ้น (scroll up) - แสดง Navbar
        navbar.style.top = "0";
    } else {
        // เลื่อนลง (scroll down) - ซ่อน Navbar
        navbar.style.top = "-500px"; // หรือความสูงตามที่คุณต้องการ
    }

    prevScrollPos = currentScrollPos;
    
}

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

