// default header for all pages except forms
var header = '<nav class="navbar navbar-expand-sm bg-dark navbar-dark">' +
    '<a class="navbar-brand" href="/se-projects/index.html"> <span class="logo">MovieMax</span></a>' +
    '<form class="form-inline col-sm " action="/se-projects/search.html"> <input class=' +
    '"form-control mr-sm-2  col-sm-8" type="text" id="query" name="query" placeholder="Search movie">' +
    '<button class="btn btn-primary" type="submit">Search</button> </form>' +
    '<ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="login.html">' +
    'Log in</a> </li> <li class="nav-item"><a class="nav-link" href="cart.html">Cart</a>' +
    '</li></ul></nav>'

// default footer for all pages
var footer = '<div class="col col-sm-4" style="">' +
    '<ul class="list-unstyled"><li class="nav-item"><a href="/se-projects/account/index.html">Your Account</a>' +
    '</li><li class="nav-item"><a href="/se-projects/register.html">Register</a></li><p><small>' +
    '&copy; 2019 MovieMax</small></p></ul></div><div class="col col-sm-4">' +
    '<ul class="list-unstyled"><li class="nav-item"><a href="/se-projects/terms.html">Terms of Use</a>' +
    '</li><li class="nav-item"><a href="/se-projects/privacy.html">Privacy Policy</a></li></ul></div>' +
    '<div class="col col-sm-4"><ul class="list-unstyled"><li class="nav-item">' +
    '<a href="/se-projects/contact.html">Contact Us</a></li><li class="nav-item"><a href="/se-projects/about.html">' +
    'About us</a></li></ul></div>'

// header for pages with forms
var forms_header = '<nav class="navbar navbar-expand-sm bg-dark navbar-dark">' +
    '<a class="navbar-brand" href="/se-projects/index.html"> <span class="logo">MovieMax</span></a></nav>'

// header for logged in user
var header_loggedIn = '<nav class="navbar navbar-expand-sm bg-dark navbar-dark">' +
    '<a class="navbar-brand" href="/se-projects/index.html"> <span class="logo">MovieMax</span></a>' +
    '<form class="form-inline col-sm " action="/se-projects/search.html"> <input class=' +
    '"form-control mr-sm-2  col-sm-8" type="text" id="query" name="query" placeholder="Search movie">' +
    '<button class="btn btn-primary" type="submit">Search</button> </form>' +
    '<ul class="navbar-nav"><li class="nav-item dropdown">' +
    '<a class="nav-link dropdown-toggle" href="/se-projects/account/index.html" id="navbardrop" data-toggle="dropdown">' +
    'My account</a><div class="dropdown-menu">' +
    '<a class="dropdown-item" href="/se-projects/account/edit.html">Edit profile</a>' +
    '<a class="dropdown-item" href="/se-projects/account/library.html">Movie library</a>' +
    '<a class="dropdown-item" href="/se-projects/account/history.html">History</a></div></li>' +
    '<li class="nav-item"><a class="nav-link" href="/se-projects/cart.html">Cart</a>' +
    '</li></ul></nav>'

var loggedIn = localStorage.getItem("loggedIn");
var lastSearched = localStorage.getItem("lastSearched");
var lastType = localStorage.getItem("lastType");
var movieTitle = localStorage.getItem("movieTitle");
var movieActors = localStorage.getItem("movieActors");
var movieDirector = localStorage.getItem("movieDirector");
var moviePoster = localStorage.getItem("moviePoster");
var movieReview = localStorage.getItem("movieReview");
var moviePlot = localStorage.getItem("moviePlot");
var movieRating = localStorage.getItem("movieRating");
var movieYear = localStorage.getItem("movieYear");
var movieRuntime = localStorage.getItem("movieRuntime");
var movieGenre = localStorage.getItem("movieGenre");

// pulls data from url
function url_query(query) {
    query = query.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var expr = "[\\?&]" + query + "=([^&#]*)";
    var regex = new RegExp(expr);
    var results = regex.exec(window.location.href);
    if (results !== null) {
        return results[1];
    } else {
        return false;
    }
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

function logIn() {
    localStorage.setItem("loggedIn", true);
}

// save movie info
function saveMovie(current) {
    var movie = parseInt(current);
    localStorage.setItem("movieTitle", movieList[movie].title);
    localStorage.setItem("movieActors", movieList[movie].actors);
    localStorage.setItem("movieDirector", movieList[movie].director);
    localStorage.setItem("moviePoster", movieList[movie].poster);
    localStorage.setItem("movieGenre", movieList[movie].genre);
    localStorage.setItem("movieReview", movieList[movie].imdbRating);
    localStorage.setItem("moviePlot", movieList[movie].plot);
    localStorage.setItem("movieRating", movieList[movie].rated);
    date = movieList[movie].released.split(' ');
    localStorage.setItem("movieYear", date[2]);
    localStorage.setItem("movieRuntime", movieList[movie].runtime);
}
