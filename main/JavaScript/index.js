document.addEventListener("DOMContentLoaded", function() {
    fetch('/main/HTML/pageHeader.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('pageHeader').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    const weaponContainer = document.querySelector(".defaultWeaponImages");
    const weaponSkinsContainer = document.querySelector(".defaultWeaponImagesAk");

    weaponData.forEach(weapon => {
    
        const weaponElement = document.createElement("div");
        weaponElement.className = "weaponimage";
        weaponElement.id = weapon.id;
        weaponElement.innerHTML = `
            <divclass="defaultWeaponImages" onclick="hideDefaultWeaponImages()">
            <a onclick="showDefaultWeaponImages('${weapon.id}')">
                <img src="${weapon.img}" width="270px" height="200px" alt="This is a picture of the ${weapon.name}" title="${weapon.name}">
            </a>
            <hr class="weaponimagehr">
            <br>
            <p>${weapon.name}</p>
            </div>
        `;
        weaponContainer.appendChild(weaponElement);

        if (weapon.skins) {
            weapon.skins.forEach(skin => {
                const skinElement = document.createElement("div");
                skinElement.className = "weaponimage";
                skinElement.id = skin.id;
                skinElement.innerHTML = `
                    <a onclick="showDefaultWeaponImages('${skin.id}')">
                        <img src="${skin.img}" width="270px" height="200px" alt="This is a picture of the ${weapon.name} ${skin.name}" title="${weapon.name} ${skin.name}">
                    </a>
                    <hr class="weaponimagehr">
                    <br>
                    <p>${skin.name}</p>
                `;
                weaponSkinsContainer.appendChild(skinElement);
            });
        }
    });
});

function showSidebar(){
const sidebar = document.querySelector(".sidebar")
sidebar.style.display = "flex"
}

function hideSidebar(){
const sidebar = document.querySelector(".sidebar")
sidebar.style.display = "none"
}

function showSidebar1(){
const sidebar1 = document.querySelector(".sidebar1")
sidebar1.style.display = "flex"
}

function hideSidebar1(){
const sidebar1 = document.querySelector(".sidebar1")
sidebar1.style.display = "none"
}