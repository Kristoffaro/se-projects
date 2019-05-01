function init() {
    gapi.client.setApiKey("AIzaSyBmyogOtizklthGZI6j9_XFRgX7tvaNxFI");
    gapi.client.load("youtube", "v3", function () {
        // prepare request
    var request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: encodeURIComponent('Avengers+2012+trailer'),
        maxResults: 1
    });

    // execute request
    request.execute(function (response) {
        console.log(response);
    });
    });
}