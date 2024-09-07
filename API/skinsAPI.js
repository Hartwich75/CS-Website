const skins_apiUrl = "https://bymykel.github.io/CSGO-API/api/en/skins.json";


fetch(skins_apiUrl)

  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })

  .then(data => {
    console.log(data);
 })

  .catch(error => {
    console.error("Error fetching data:", error);
  });