import axios from "axios";
import autoComplete from "@tarekraafat/autocomplete.js";

if (location.pathname === "/" || location.pathname === "/index.html") {
  const apiKey = process.env.CITIES_API_KEY;
  const destination = document.querySelector("#destination");
  
  const autoCompleteJS = new autoComplete({
    selector: "#destination",
    debounce: 1000,
    data: {
      src: async namePrefix => {
        try {
          const responce = await axios.get("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", {
            params: { namePrefix: namePrefix.toLowerCase() },
            headers: {
              "x-rapidapi-key": `${apiKey}`,
              "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
            }
          });
          return responce.data.data;
        } catch (error) {
          return error;
        }
      },
      keys: ["city", "country"]
    },
    resultItem: {
      highlight: {
        render: true
      }
    }
  });

  destination.addEventListener("selection", selectCityAndCountry);

  function selectCityAndCountry(event) {
    event.preventDefault();

    const { city, country } = event.detail.selection.value;
    destination.value = `${city} (${country})`;
  }
}
