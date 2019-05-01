function init() {
    gapi.client.setApiKey("AIzaSyBmyogOtizklthGZI6j9_XFRgX7tvaNxFI");
    gapi.client.load("youtube", "v3", function () {
        // prepare request
        var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent(movieTitle.concat(' trailer')),
            maxResults: 1
        });

        // execute request
        request.execute(function (response) {
            console.log(movieTitle.concat(' trailer'));
            console.log(response);
            $("results").append(result.items[0].id.videoId + ' ' + result.items[0].snippet.title);
        });
    });
}