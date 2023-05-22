
// Hide the loading animation when the page has finished loading
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
    }, 500)
    });


// for floating button (vision and mission)
const floatingButton = document.querySelector('.floating-button');
floatingButton.addEventListener('click', () => {
    floatingButton.classList.toggle('floating-window');
    if (floatingButton.classList.contains('floating-window')) {
        floatingButton.innerHTML += `
<section class="floating-button-content">
<h1>Edrian Catid</h1>
<p>Section: 11-STEM 3 <br>
Subject: EmpTech</p
</section>`;
    } else {
        floatingButton.innerHTML = '<img src="icons/vision.png" alt="vision">';
    }
});



window.addEventListener('load', () => {
    const floatingButton = document.querySelector('.floating-button');
    floatingButton.click();
});



var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0px";
}
function hideMenu() {
    navLinks.style.right = "-210px";
}

// popup for code darkroom
var popup = document.getElementById("popup");

function showPopup() {
    popup.style.display = "block";
}

function closePopup() {
    popup.style.display = "none";
}

function checkAccessCode() {
    var accessCode = document.getElementById("access-code").value;
    if (accessCode === "1120252") { // replace "myaccesscode" with your actual access code
        window.open("https://neonfelixe.github.io/SABS-Website-Revamp.github.io/answerkey.html", "_blank")
        popup.click();
    } else {
        alert("Invalid access code. Please try again.");
    }
}
// Detect if the user is on a mobile device
function isMobile() {
    return /Mobi/.test(navigator.userAgent);
}


// Open the link in the browser on mobile devices
if (isMobile()) {
    popupLink.setAttribute("href", "https://neonfelixe.github.io/SABS-Website-Revamp.github.io/answerkey.html");
}

// make the navbar hide when scrolled down
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navigationbar").style.top = "0";
    } else {
        document.getElementById("navigationbar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
}
