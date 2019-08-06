$("form").on("submit", async function (e) {
  e.preventDefault();
  let giphySearch = $("#search").val();

  let obj = {
    params: {
      q: giphySearch,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  };

  let giphyImgObj = await axios.get("http://api.giphy.com/v1/gifs/search", obj);
  let randNum = Math.floor(Math.random() * 25);
  let gifImg = giphyImgObj.data.data[randNum];

  $("#img-container").append(
    `<img src="${gifImg.images.fixed_height.url}" alt="image" >`
  );
});

$("#remove").on("click", function () {
  $("img").remove();
});
