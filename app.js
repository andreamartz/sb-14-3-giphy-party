// get a GIF based on searchTerm
async function getGif(searchTerm) {
  try {
    const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
    const res = await axios.get(url);
    const div = document.createElement("div");
    div.className = "col-sm-6 col-md-4";
    const img = document.createElement("img");
    img.classList.add("img-fluid");
    img.src = res.data.data[0].images.downsized_medium.url;
    div.append(img);
    const gallery = document.querySelector("#gif-gallery");
    gallery.append(div);
    // gallery.append(figure).append(img);
  } catch (e) {
    alert("Search term not found!");
    // getRandomGif();
  }
}

const form = document.querySelector("#search-form");
form.addEventListener("submit", function (e) {
  const input = document.querySelector("#search-term");
  e.preventDefault();
  getGif(input.value);
  input.value = "";
});

const removeBtn = document.querySelector("#remove");
removeBtn.addEventListener("click", function (e) {
  // $("#gif-gallery").empty();
  const gallery = document.querySelector("#gif-gallery");
  gallery.innerHTML = "";
});
