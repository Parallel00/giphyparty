const $area = $("#gifarea");
const $input = $("#GIFSEARCH");

function putGif(res) {
    let results = res.data.length;
    if (results) {
        let randomIdx = Math.floor(Math.random() * results);
        let $newDiv = $("<div>", { class: "col-md-4 col-12 mb-4" });
        let $giff = $("<img>", { src: res.data[randomIdx].images.original.url, class: "w-100" });
        $newDiv.append($giff);
        $area.append($newDiv);
    }
}

$("form").on("submit", async function (evt) {
    evt.preventDefault();

    let term = $input.val();
    $input.val("");

    const respon = await axios.get("http://api.giphy.com/v1/gifs/search", { params: { q: term, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" } });
    putGif(respon.data);
});

$("#remove").on("click", function () {
    $area.empty();
})