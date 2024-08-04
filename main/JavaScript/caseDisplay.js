document.addEventListener("DOMContentLoaded", function() {
    const caseContainer = document.querySelector(".defaultCaseImages");

    // Generate HTML for cases
    caseData.forEach(caseItem => {
        const caseElement = document.createElement("div");
        caseElement.className = "caseimage";
        caseElement.id = caseItem.id;
        caseElement.innerHTML = `
            <a>
                <img src="${caseItem.img}" width="270px" height="200px" alt="This is a picture of the ${caseItem.name}" title="${caseItem.name}">
            </a>
            <hr class="caseimagehr">
            <br>
            <p>${caseItem.name}</p>
        `;
        caseContainer.appendChild(caseElement);
    });
});