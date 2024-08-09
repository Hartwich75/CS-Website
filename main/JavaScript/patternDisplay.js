document.addEventListener("DOMContentLoaded", function() {
    const patternContainer = document.querySelector(".defaultPatternImages");
    const patternSkinsContainer = document.querySelector(".defaultPatternImagesSkins");
    
    patternData.forEach(pattern => {
        // Create weapon element
        const patternElement = document.createElement("div");
        patternElement.className = "patternimage";
        patternElement.id = pattern.id;
        patternElement.innerHTML = `
            <divclass="defaultPatternImages" onclick="hideDefaultPatternImages()">
                <a onclick="showPatternSkins('${pattern.id}')">
                    <img src="${pattern.img}" width="270px" height="200px" alt="This is a picture of the ${pattern.name}" title="${pattern.name}">
                </a>
                <hr class="patternimagehr">
                <br>
                <p>${pattern.name}</p>
            </divclass=>
        `;
        patternContainer.appendChild(patternElement);
    });
    
    window.showPatternSkins = function(patternId) {
        // Hide all pattern images
        patternContainer.style.display = 'none';
        
        // Show only the skins for the selected pattern
        patternSkinsContainer.innerHTML = ''; // Clear previous skins
        const selectedPattern = patternData.find(pattern => pattern.id === patternId);
        if (selectedPattern && selectedPattern.skins) {
            selectedPattern.skins.forEach(skin => {
                const skinElement = document.createElement("div");
                skinElement.className = "patternimage";
                skinElement.id = skin.id;
                skinElement.innerHTML = `
                    <a onclick="showPatternSkins('${skin.id}')">
                        <img src="${skin.img}" width="270px" height="200px" alt="This is a picture of the ${selectedPattern.name} ${skin.name}" title="${selectedPattern.name} ${skin.name}">
                        <div class="rarity-box">${skin.rarity}</div>
                    </a>
                    <hr class="patternimagehr">
                    <br>
                    <p>${skin.name}</p>
                `;
                patternSkinsContainer.appendChild(skinElement);
            });
            patternSkinsContainer.style.display = 'flex';
        }
    };
    });