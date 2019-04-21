const movies_endpoint = 'https://j0l1npgx02.execute-api.us-east-2.amazonaws.com/prod-live/movies/';
const app = document.getElementById('moviesList');

// get movie function
function getMovies(searchString) {

    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    app.appendChild(container);

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', movies_endpoint + toTitleCase(searchString), true);

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            data.movies.forEach(movie => {
                const card = document.createElement('div')
                card.setAttribute('class', 'row shadow p-3 mb-5 bg-white')

                const imgCard = document.createElement('div')
                imgCard.setAttribute('class', 'col col-sm-2')
                const link = document.createElement('a')
                link.setAttribute('href', 'movie.html')
                const img = document.createElement('IMG')
                img.setAttribute('src', movie.poster)
                img.setAttribute('class', 'img-fluid')

                const infoCard = document.createElement('div')
                infoCard.setAttribute('class', 'col-10')

                const h3 = document.createElement('h3')
                h3.textContent = movie.title + ' (' + movie.year + ')'

                const actors = document.createElement('i')
                actors.textContent = 'Cast: ' + movie.actors
                const br = document.createElement('br')

                const director = document.createElement('i')
                director.textContent = 'Director: ' + movie.director

                const plot = document.createElement('p')
                movie.plot = movie.plot.substring(0, 300)
                plot.textContent = `${movie.plot}...`

                link.appendChild(img)
                infoCard.appendChild(h3)
                infoCard.appendChild(actors)
                infoCard.appendChild(br)
                infoCard.appendChild(director)
                infoCard.appendChild(plot)
                imgCard.appendChild(link)
                container.appendChild(card)
                card.appendChild(imgCard)
                card.appendChild(infoCard)
            })
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
    for(i = 0; i < str.length; i++){
        if(result.charAt(0) === '+'){
            result = result.substring(1)
        }
        if(result.charAt(result.length-1) === '+'){
            result = result.substring(0, result.length - 1)
        }
    }
    return result.replace(
        /\w*/gm,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
