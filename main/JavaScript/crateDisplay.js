document.addEventListener("DOMContentLoaded", function() {
    const crateContainer = document.querySelector(".defaultCrateImages");
    const crateSkinsContainer = document.querySelector(".defaultCrateImagesSkins");
   
    crateData.forEach(crate => {
        // Create crate element
        const crateElement = document.createElement("div");
        crateElement.className = "crateimage";
        crateElement.id = crate.id;
        crateElement.innerHTML = `
            <divclass="defaultCrateImages" onclick="hideDefaultCrateImages()">
                <a onclick="showCrateSkins('${crate.id}')">
                    <img src="${crate.img}" width="270px" height="200px" alt="This is a picture of the ${crate.name}" title="${crate.name}">
                </a>
                <hr class="crateimagehr">
                <br>
                <p>${crate.name}</p>
            </divclass=>
        `;
            crateContainer.appendChild(crateElement);
    });

window.showCrateSkins = function(crateId) {
    // Hide the weapon patterns and clear the skin container
    crateContainer.style.display = 'none';
    crateSkinsContainer.innerHTML = ''; // Clear previous skins
    
    // Find the selected pattern by ID
    const selectedCrate = crateData.find(crate => crate.id === crateId);

    // Check if the selected pattern has skins
    if (selectedCrate && selectedCrate.skins) {
        // Loop through the skins and display them
        selectedCrate.skins.forEach(skin => {
            const skinElement = document.createElement("div");
            skinElement.className = "crateimage";
            skinElement.id = skin.id;
            skinElement.innerHTML = `
                <a onclick="showCrateDetails('${skin.id}', '${skin.crateDetailsUrl}')">
                    <img src="${skin.img}" width="270px" height="200px" alt="This is a picture of the ${selectedCrate.name} ${skin.name}" title="${selectedPattern.name} ${skin.name}">
                    <div class="rarity-box">${skin.rarity}</div>
                </a>
                <hr class="crateimagehr">
                <br>
                <p>${skin.name}</p>
            `;
            crateSkinsContainer.appendChild(skinElement);
        });

        // Display the skins container
        crateSkinsContainer.style.display = 'flex';
    }
};

window.showCrateSkins = function(crateId) {
    // Hide all collection images
   crateContainer.style.display = 'none';
    
    // Show only the skins for the selected collection
    crateSkinsContainer.innerHTML = ''; // Clear previous skins
    const selectedCrate = crateData.find(crate =>crate.id === crateId);
    if (selectedCrate && selectedCrate.skins) {
        selectedCrate.skins.forEach(skin => {
            const skinElement = document.createElement("div");
            skinElement.className = "crateimage";
            skinElement.id = skin.id;
            skinElement.innerHTML = `
                <a onclick="showCrateSkins('${skin.id}')">
                    <img src="${skin.img}" width="270px" height="200px" alt="This is a picture of the ${selectedCrate.name} ${skin.name}" title="${selectedCrate.name} ${skin.name}">
                    <div class="rarity-box">${skin.rarity}</div>
                </a>
                <hr class="crateimagehr">
                <br>
                <p>${skin.name}</p>
            `;
            crateSkinsContainer.appendChild(skinElement);
        });
        crateSkinsContainer.style.display = 'flex';
    }
};

});