function init() {
    gapi.client.setApiKey("AIzaSyBmyogOtizklthGZI6j9_XFRgX7tvaNxFI");
    gapi.client.load("youtube", "v3", function () {
        // prepare request
        var search = movieTitle.concat(' trailer')
        var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent(search.replace(/\s/g, "+")),
            maxResults: 1
        });

        // execute request
        request.execute(function (response) {
            console.log(search.replace(/\s/g, "+"));
            console.log(response);
            //$("results").append(results.items[0].id.videoId + ' ' + results.items[0].snippet.title);
        });
    });
}