const movies_endpoint = 'https://j0l1npgx02.execute-api.us-east-2.amazonaws.com/prod-live/movies/';
const app = document.getElementById('moviesList');

// get movie function 2
function getMovies(searchString) {

    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    app.appendChild(container);

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    // ghibliapi is a placeholder until i get our movies endpoint working
    // movies_endpoint + toTitleCase(searchString)
    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            data.forEach(movie => {
                const card = document.createElement('div')
                card.setAttribute('class', 'row shadow p-3 mb-5 bg-white')

                const imgCard = document.createElement('div')
                imgCard.setAttribute('class', 'col col-sm-2')
                const link = document.createElement('a')
                link.setAttribute('href', 'movie.html')
                const img = document.createElement('IMG')
                img.setAttribute('src', 'poster.jpg')

                const infoCard = document.createElement('div')
                infoCard.setAttribute('class', 'col-10')

                const h3 = document.createElement('h3')
                h3.textContent = movie.title

                const p = document.createElement('p')
                movie.description = movie.description.substring(0, 300)
                p.textContent = `${movie.description}...`
                
                link.appendChild(img)
                infoCard.appendChild(h3)
                infoCard.appendChild(p)
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
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}