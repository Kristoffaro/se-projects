const library_endpoint = 'https://j0l1npgx02.execute-api.us-east-2.amazonaws.com/prod-live/all/';
const lib = document.getElementById('library');
var movieList = [];
const ownedLib = userOwned.split(', ')
const library = ownedLib.concat(userRented.split(', '))

function getLibrary() {
    if (library.length > 0) {
        const container = document.createElement('div')
        container.setAttribute('class', 'container')
        lib.appendChild(container)

        const h1 = document.createElement('h2')
        h1.textContent = 'Library'
        container.appendChild(h1)

        const row1 = document.createElement('div')
        row1.setAttribute('class', 'row')
        const row2 = document.createElement('div')
        row2.setAttribute('class', 'row')
        const row3 = document.createElement('div')
        row3.setAttribute('class', 'row')
        const row4 = document.createElement('div')
        row4.setAttribute('class', 'row')
        const row5 = document.createElement('div')
        row5.setAttribute('class', 'row')
        container.appendChild(row1)
        container.appendChild(row2)
        container.appendChild(row3)
        container.appendChild(row4)
        container.appendChild(row5)

        var request = new XMLHttpRequest()
        request.open('GET', library_endpoint + 'a', true)

        request.onload = function () {
            var data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                var j = 0;
                for (var i = 0; i < data.movies.length; i++) {

                    movieList.push(data.movies[i])
                    if (j < 4 && library.includes(data.movies[i].title)) {
                        const col = document.createElement('div')
                        col.setAttribute('class', 'col2')

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
                        img.setAttribute('class', 'img-fluid2')

                        link.appendChild(img)
                        col.appendChild(link)
                        row1.appendChild(col)
                        j++
                    } else if (j < 8 && library.includes(data.movies[i].title)) {
                        const col = document.createElement('div')
                        col.setAttribute('class', 'col2')

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
                        img.setAttribute('class', 'img-fluid2')

                        link.appendChild(img)
                        col.appendChild(link)
                        row2.appendChild(col)
                        j++
                    } else if (j < 12 && library.includes(data.movies[i].title)) {
                        const col = document.createElement('div')
                        col.setAttribute('class', 'col2')

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
                        img.setAttribute('class', 'img-fluid2')

                        link.appendChild(img)
                        col.appendChild(link)
                        row3.appendChild(col)
                        j++
                    } else if (j < 16 && library.includes(data.movies[i].title)) {
                        const col = document.createElement('div')
                        col.setAttribute('class', 'col2')

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
                        img.setAttribute('class', 'img-fluid2')

                        link.appendChild(img)
                        col.appendChild(link)
                        row4.appendChild(col)
                        j++
                    } else if (j < 20 && library.includes(data.movies[i].title)) {
                        const col = document.createElement('div')
                        col.setAttribute('class', 'col2')

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
                        img.setAttribute('class', 'img-fluid2')

                        link.appendChild(img)
                        col.appendChild(link)
                        row5.appendChild(col)
                        j++
                    }
                }
            } else {
                console.log("Error")
            }
        }
        request.send();
    }
}
