function showSkinImages(id){
    const skinImages = document.querySelector(".skinImages" + id);
    if (skinImages) {
        skinImages.style.display = "flex";
    } 
}

function hideDefaultWeaponImages(){
    const defaultWeaponImages = document.querySelector(".defaultWeaponImages");
    defaultWeaponImages.style.display = "none";
}

function hideDefaultWeaponImagesAk(){
    const defaultWeaponImagesAk = document.querySelector(".defaultWeaponImagesAk");
    defaultWeaponImagesAk.style.display = "none";
}

function hidepatternSkinImages(){
    const patternSkinImages = document.querySelector(".patternSkinImages")
    patternSkinImages.style.display = "none"
}