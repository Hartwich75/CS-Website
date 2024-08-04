document.addEventListener("DOMContentLoaded", function() {
    // Fetch the header content
    fetch('/main/HTML/pageHeader.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('pageHeader').innerHTML = data;
        });
});


function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

function showSidebar1() {
    const sidebar1 = document.querySelector(".sidebar1");
    sidebar1.style.display = "flex";
}

function hideSidebar1() {
    const sidebar1 = document.querySelector(".sidebar1");
    sidebar1.style.display = "none";
}

function hideDefaultWeaponImages() {
    const weaponContainer = document.querySelector(".defaultWeaponImages");
    weaponContainer.style.display = 'none';
}