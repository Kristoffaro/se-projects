const movies_endpoint = 'https://j0l1npgx02.execute-api.us-east-2.amazonaws.com/prod-live/movies/';
const app = document.getElementById('moviesList');
const actor_endpoint = 'https://j0l1npgx02.execute-api.us-east-2.amazonaws.com/prod-live/actor/';
const director_endpoint = 'https://j0l1npgx02.execute-api.us-east-2.amazonaws.com/prod-live/director/';
const genre_endpoint = 'https://j0l1npgx02.execute-api.us-east-2.amazonaws.com/prod-live/genre-theme/';
const all_endpoint = 'https://j0l1npgx02.execute-api.us-east-2.amazonaws.com/prod-live/all/a';
var movieList = [];
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

// get movie function
function getMovies(searchString, type) {
    localStorage.setItem("lastSearched", searchString);
    localStorage.setItem("lastType", type);

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    if (type === 'query') {
        request.open('GET', movies_endpoint + toTitleCase(searchString), true);
    } else if (type === 'actor') {
        request.open('GET', actor_endpoint + toTitleCase(searchString), true);
    } else if (type === 'director') {
        request.open('GET', director_endpoint + toTitleCase(searchString), true);
    } else if (type === 'genre') {
        request.open('GET', genre_endpoint + toTitleCase(searchString), true);
    } else if (type === 'decade') {
        request.open('GET', all_endpoint, true);
    } else if (type === 'reviews') {
        request.open('GET', all_endpoint, true);
    } else if (type === 'price') {
        request.open('GET', all_endpoint, true);
    }

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            for (var i = 0; i < data.movies.length; i++) {
                movieList.push(data.movies[i])
                if (type === 'decade') {
                    if (data.movies[i].year.substring(0, 3) === searchString.substring(0, 3)) {
                        const card = document.createElement('div')
                        card.setAttribute('class', 'row shadow p-3 mb-5 bg-white')

                        const imgCard = document.createElement('div')
                        imgCard.setAttribute('class', 'col col-sm-2')
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

                        const infoCard = document.createElement('div')
                        infoCard.setAttribute('class', 'col-10')

                        const h3 = document.createElement('h3')
                        var date = data.movies[i].released.split(' ');
                        h3.textContent = data.movies[i].title + ' (' + data.movies[i].year + ')'

                        const actors = document.createElement('i')
                        actors.textContent = 'Cast: ' + data.movies[i].actors

                        const br = document.createElement('br')

                        const director = document.createElement('i')
                        director.textContent = 'Director: ' + data.movies[i].director

                        const br2 = document.createElement('br')

                        const genre = document.createElement('i')
                        genre.textContent = 'Genre: ' + data.movies[i].genre

                        const plot = document.createElement('p')
                        plot.textContent = `${data.movies[i].plot}`

                        link.appendChild(img)
                        infoCard.appendChild(h3)
                        infoCard.appendChild(actors)
                        infoCard.appendChild(br)
                        infoCard.appendChild(director)
                        infoCard.appendChild(br2)
                        infoCard.appendChild(genre)
                        infoCard.appendChild(plot)
                        imgCard.appendChild(link)
                        container.appendChild(card)
                        card.appendChild(imgCard)
                        card.appendChild(infoCard)
                    }
                } else if (type === 'reviews') {
                    if (data.movies[i].imdbRating.substring(0, 1).includes(searchString)) {
                        const card = document.createElement('div')
                        card.setAttribute('class', 'row shadow p-3 mb-5 bg-white')

                        const imgCard = document.createElement('div')
                        imgCard.setAttribute('class', 'col col-sm-2')
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

                        const infoCard = document.createElement('div')
                        infoCard.setAttribute('class', 'col-10')

                        const h3 = document.createElement('h3')
                        var date = data.movies[i].released.split(' ');
                        h3.textContent = data.movies[i].title + ' (' + data.movies[i].year + ')'

                        const actors = document.createElement('i')
                        actors.textContent = 'Cast: ' + data.movies[i].actors

                        const br = document.createElement('br')

                        const director = document.createElement('i')
                        director.textContent = 'Director: ' + data.movies[i].director

                        const br2 = document.createElement('br')

                        const genre = document.createElement('i')
                        genre.textContent = 'Genre: ' + data.movies[i].genre

                        const plot = document.createElement('p')
                        plot.textContent = `${data.movies[i].plot}`

                        link.appendChild(img)
                        infoCard.appendChild(h3)
                        infoCard.appendChild(actors)
                        infoCard.appendChild(br)
                        infoCard.appendChild(director)
                        infoCard.appendChild(br2)
                        infoCard.appendChild(genre)
                        infoCard.appendChild(plot)
                        imgCard.appendChild(link)
                        container.appendChild(card)
                        card.appendChild(imgCard)
                        card.appendChild(infoCard)
                    }
                } else if (type === 'price') {
                    if (parseInt(data.movies[i].priceBuy) <= parseInt(searchString)) {
                        const card = document.createElement('div')
                        card.setAttribute('class', 'row shadow p-3 mb-5 bg-white')

                        const imgCard = document.createElement('div')
                        imgCard.setAttribute('class', 'col col-sm-2')
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

                        const infoCard = document.createElement('div')
                        infoCard.setAttribute('class', 'col-10')

                        const h3 = document.createElement('h3')
                        var date = data.movies[i].released.split(' ');
                        h3.textContent = data.movies[i].title + ' (' + data.movies[i].year + ')'

                        const actors = document.createElement('i')
                        actors.textContent = 'Cast: ' + data.movies[i].actors

                        const br = document.createElement('br')

                        const director = document.createElement('i')
                        director.textContent = 'Director: ' + data.movies[i].director

                        const br2 = document.createElement('br')

                        const genre = document.createElement('i')
                        genre.textContent = 'Genre: ' + data.movies[i].genre

                        const plot = document.createElement('p')
                        plot.textContent = `${data.movies[i].plot}`

                        link.appendChild(img)
                        infoCard.appendChild(h3)
                        infoCard.appendChild(actors)
                        infoCard.appendChild(br)
                        infoCard.appendChild(director)
                        infoCard.appendChild(br2)
                        infoCard.appendChild(genre)
                        infoCard.appendChild(plot)
                        imgCard.appendChild(link)
                        container.appendChild(card)
                        card.appendChild(imgCard)
                        card.appendChild(infoCard)
                    }
                } else {
                    const card = document.createElement('div')
                    card.setAttribute('class', 'row shadow p-3 mb-5 bg-white')

                    const imgCard = document.createElement('div')
                    imgCard.setAttribute('class', 'col col-sm-2')
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

                    const infoCard = document.createElement('div')
                    infoCard.setAttribute('class', 'col-10')

                    const h3 = document.createElement('h3')
                    var date = data.movies[i].released.split(' ');
                    h3.textContent = data.movies[i].title + ' (' + data.movies[i].year + ')'

                    const actors = document.createElement('i')
                    actors.textContent = 'Cast: ' + data.movies[i].actors

                    const br = document.createElement('br')

                    const director = document.createElement('i')
                    director.textContent = 'Director: ' + data.movies[i].director

                    const br2 = document.createElement('br')

                    const genre = document.createElement('i')
                    genre.textContent = 'Genre: ' + data.movies[i].genre

                    const plot = document.createElement('p')
                    plot.textContent = `${data.movies[i].plot}`

                    link.appendChild(img)
                    infoCard.appendChild(h3)
                    infoCard.appendChild(actors)
                    infoCard.appendChild(br)
                    infoCard.appendChild(director)
                    infoCard.appendChild(br2)
                    infoCard.appendChild(genre)
                    infoCard.appendChild(plot)
                    imgCard.appendChild(link)
                    container.appendChild(card)
                    card.appendChild(imgCard)
                    card.appendChild(infoCard)
                }
            }
        } else {
            const errorMessage = document.createElement('marquee')
            errorMessage.textContent = `Not Working!`
            app.appendChild(errorMessage)
        }
    }

    // Send request
    request.send();
}

// case matching
function toTitleCase(str) {
    result = str;
    for (i = 0; i < str.length; i++) {
        if (result.charAt(0) === '+') {
            result = result.substring(1)
        }
        if (result.charAt(result.length - 1) === '+') {
            result = result.substring(0, result.length - 1)
        }
    }
    return result.replace(
        /\w*/gm,
        function (txt) {
            if (txt !== 'of' && txt !== 'in' && txt !== 'to') {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            } else {
                return txt
            }
        }
    );
}
