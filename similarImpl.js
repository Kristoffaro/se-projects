const genre_endpoint = 'https://j0l1npgx02.execute-api.us-east-2.amazonaws.com/prod-live/genre-theme/';
const app = document.getElementById('similarMovies');
var movieList = [];

function getMovies(genre) {
    var parts = genre.split(',')
    var search = parts[0]
    
    const container = document.createElement('div')
    container.setAttribute('class', 'container')
    app.appendChild(container)

    const row = document.createElement('div')
    row.setAttribute('class', 'row')

    container.appendChild(row)


    var request = new XMLHttpRequest()
    request.open('GET', genre_endpoint + search, true)

    request.onload = function () {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            for (var i = 0; i < data.movies.length; i++) {

                movieList.push(data.movies[i])
                if (i < 6) {
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
                    row.appendChild(col)
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