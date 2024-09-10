function showDefaultWeaponImages(id){
    const defaultWeaponImages = document.querySelector(".defaultWeaponImages" + id);
    if (defaultWeaponImages) {
        defaultWeaponImages.style.display = "flex";
    } 
}

function showDefaultCrateImages(id){
    const defaultCaseImages = document.querySelector(".defaultCaseImages" +  id);
    if (defaultCaseImages) {
        defaultCaseImages.style.display = "flex";
    } 
}

function showDefaultCollectionImages(id){
    const defaultCollectionImages = document.querySelector(".defaultCollectionImages" +  id);
    if (defaultCollectionImages) {
        defaultCollectionImages.style.display = "flex";
    } 
}

function showDefaultPatternImages(id){
    const defaultPatternImages = document.querySelector(".defaultPatternImages" +  id);
    if (defaultPatternImages) {
        defaultPatternImages.style.display = "flex";
    } 
}

function hideDefaultWeaponImages(){
    const defaultWeaponImages = document.querySelector(".defaultWeaponImages");
    defaultWeaponImages.style.display = "none";
}

function hideDefaultCrateImages(){
    const defaultCaseImages = document.querySelector(".defaultCaseImages");
    defaultCaseImages.style.display = "none";
}

function hideDefaultCollectionImages(){
    const defaultCollectionImages = document.querySelector(".defaultCollectionImages");
    defaultCollectionImages.style.display = "none";
}

function hideDefaultPatternImages(){
    const defaultPatternImages = document.querySelector(".defaultPatternImages");
    defaultPatternImages.style.display = "none";
}