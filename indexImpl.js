const movies_endpoint = 'https://j0l1npgx02.execute-api.us-east-2.amazonaws.com/prod-live/movies/';
const app = document.getElementById('newMovies');
var movieList = [];

function getMovies() {

    const container = document.createElement('div')
    container.setAttribute('class', 'container')
    app.appendChild(container)

    const h1 = document.createElement('h1')
    h1.textContent = 'New Movies'
    container.appendChild(h1)

    const row1 = document.createElement('div')
    row1.setAttribute('class', 'row')
    const row2 = document.createElement('div')
    row2.setAttribute('class', 'row')
    container.appendChild(row1)
    container.appendChild(row2)

    var request = new XMLHttpRequest()
    request.open('GET', movies_endpoint + 'A', true)

    request.onload = function () {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            for (var i = 0; i < data.movies.length; i++) {

                movieList.push(data.movies[i])
                if (i < 4) {
                    const col = document.createElement('div')
                    col.setAttribute('class', 'col')

                    const link = document.createElement('a')
                    link.setAttribute('href', 'movie.html')
                    link.onclick = (function () {
                        var currentI = i;
                        return function () {
                            saveMovie(currentI + '');
                        }
                    })();

                    const img = document.createElement('IMG')
                    img.setAttribute('src', data.movies[i].poster)
                    img.setAttribute('class', 'img-fluid')

                    link.appendChild(img)
                    col.appendChild(link)
                    row1.appendChild(col)
                } else if (i < 8) {
                    const col = document.createElement('div')
                    col.setAttribute('class', 'col')

                    const link = document.createElement('a')
                    link.setAttribute('href', 'movie.html')
                    link.onclick = (function () {
                        var currentI = i;
                        return function () {
                            saveMovie(currentI + '');
                        }
                    })();

                    const img = document.createElement('IMG')
                    img.setAttribute('src', data.movies[i].poster)
                    img.setAttribute('class', 'img-fluid')

                    link.appendChild(img)
                    col.appendChild(link)
                    row2.appendChild(col)
                }
            }
        } else {
            const errorMessage = document.createElement('marquee')
            errorMessage.textContent = `Not Working!`
            app.appendChild(errorMessage)
        }
    }
    request.send();
} 