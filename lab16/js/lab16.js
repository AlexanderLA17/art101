//Had to use cors anywhere to get the API to work

// Using jQuery's AJAX method to fetch XKCD JSON data
$.ajax({
  url: "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json", // Latest comic
  type: "GET",
  dataType: "json",
  success: function(comicObj) {
    console.log("Comic Data:", comicObj);

    // Construct HTML
    const comicHTML = `
      <h3>${comicObj.title}</h3>
      <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}" />
      <p><strong>Comic #${comicObj.num}</strong> - ${comicObj.day}/${comicObj.month}/${comicObj.year}</p>
    `;

    // Add it to the output div
    $("#output").html(comicHTML);
  },
  error: function(xhr, status, error) {
    console.error("Error fetching comic:", status, error);
    $("#output").html("<p>Sorry, could not load XKCD comic.</p>");
  }
});
