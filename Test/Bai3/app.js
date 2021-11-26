function fetchData(req, res, next) {
    let url = $("#input-url").val();
  fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then((res) => {
        if (!res.ok) {
            throw Error("Error")
        }
      return res.json();
    })
    .then((data) => {
      console.log(data.result.short_link)
      $("#short_link").html(`<h2>${data.result.full_short_link}</h2>`)
    }).catch((err) => {console.log(err)});

}
