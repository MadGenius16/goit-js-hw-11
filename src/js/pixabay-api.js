export function getImages(query) {
  const BASE_URL = "https://pixabay.com";
  const END_POINT = "/api/"

  const params = new URLSearchParams({
    key: "44405455-dc304595c2bd7cb59ead2c04f",
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  return fetch(url).then(res=>res.json()).catch(err=>{console.log(err);
  })
}