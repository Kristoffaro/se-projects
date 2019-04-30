function getLibrary() {
    if (userOwned.length > 0 || userRent.length > 0) {
        const app = document.getElementById('library')
        const movies_endpoint = 'https://j0l1npgx02.execute-api.us-east-2.amazonaws.com/prod-live/movies/'
        var movieList = [];

        var libArray = userOwned.split(',')

        const container = document.createElement('div')
        container.setAttribute('class', 'container')
        app.appendChild(container)

        const h1 = document.createElement('h1')
        h1.textContent = 'Movies in Library'
        container.appendChild(h1)

        const row1 = document.createElement('div')
        row1.setAttribute('class', 'row')

        container.appendChild(row1)


        var j = 0;

        libArray.forEach(element => {
            var request = new XMLHttpRequest()
            request.open('GET', movies_endpoint + element, true)
            request.onload = function () {
                var data = JSON.parse(this.response);
                if (request.status >= 200 && request.status < 400) {
                    movieList.push(data.movies[0])
                    if (j < 4) {
                        const col = document.createElement('div')
                        col.setAttribute('class', 'col')

                        const link = document.createElement('a')
                        link.setAttribute('href', 'movie.html')

                        link.onclick = (function () {
                            var currentI = j;
                            return function () {
                                saveMovie(currentI + '');
                            }
                        })();

                        const img = document.createElement('IMG')
                        img.setAttribute('src', data.movies[0].poster)
                        img.setAttribute('class', 'img-fluid')

                        link.appendChild(img)
                        col.appendChild(link)
                        row1.appendChild(col)
                    }
                }
            }
            request.send()
            j++
        }); (userOwned.split(','))
    }
}