
function hideDefaultWeaponImages(){
    const defaultWeaponImages = document.querySelector(".defaultWeaponImages");
    defaultWeaponImages.style.display = "none";
}

function showSkinImages(id){
    const skinImages = document.querySelector(".skinImages" + id);
    if (skinImages) {
        skinImages.style.display = "flex";
    } 
}
