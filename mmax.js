// default header for all pages except forms
var header = '<nav class="navbar navbar-expand-sm bg-dark navbar-dark">' +
    '<a class="navbar-brand" href="/se-projects/index.html"> <span class="logo">MovieMax</span></a>' +
    '<form class="form-inline col-sm " action="/se-projects/search.html"> <input class=' +
    '"form-control mr-sm-2  col-sm-8" type="text" id="query" name="query" placeholder="Search movie">' +
    '<button class="btn btn-primary" type="submit">Search</button> </form>' +
    '<ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="login.html">' +
    'Log in</a>' +
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
    '<a class="dropdown-item" href="/se-projects/index.html" onclick="logOut()">Log Out</a></div>' +
    '</li></ul></nav>'

var loggedIn = localStorage.getItem("loggedIn");
var userId = localStorage.getItem("userId");
var userPass = localStorage.getItem("userPass");
var userOwned = localStorage.getItem("userOwned");
var userRented = localStorage.getItem("userRented");
var userAddress = localStorage.getItem("userAddress");
var userSearched = localStorage.getItem("userSearched");
var userCred = localStorage.getItem("userCred");
var userFav = localStorage.getItem("userFav");
var userEmail = localStorage.getItem("userEmail");

var lastSearched = localStorage.getItem("lastSearched");
var lastType = localStorage.getItem("lastType");
var movieTitle = localStorage.getItem("movieTitle");
var movieTrailer = localStorage.getItem("movieTrailer").concat(" trailer");
var movieActors = localStorage.getItem("movieActors");
var movieDirector = localStorage.getItem("movieDirector");
var moviePoster = localStorage.getItem("moviePoster");
var movieReview = localStorage.getItem("movieReview");
var moviePlot = localStorage.getItem("moviePlot");
var movieRating = localStorage.getItem("movieRating");
var movieYear = localStorage.getItem("movieYear");
var movieRuntime = localStorage.getItem("movieRuntime");
var movieGenre = localStorage.getItem("movieGenre");
var movieBuy = localStorage.getItem("movieBuy");
var movieRent = localStorage.getItem("movieRent");
var checkoutPrice = localStorage.getItem("checkoutPrice");
var checkoutTax = localStorage.getItem("checkoutTax");
var checkoutTotal = localStorage.getItem("checkoutTotal");

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

// save movie info
function saveMovie(current) {
    var movie = parseInt(current);
    localStorage.setItem("movieTitle", movieList[movie].title);
    localStorage.setItem("movieTrailer", movieList[movie].title);
    localStorage.setItem("movieActors", movieList[movie].actors);
    localStorage.setItem("movieDirector", movieList[movie].director);
    localStorage.setItem("moviePoster", movieList[movie].poster);
    localStorage.setItem("movieGenre", movieList[movie].genre);
    localStorage.setItem("movieReview", movieList[movie].imdbRating);
    localStorage.setItem("moviePlot", movieList[movie].plot);
    localStorage.setItem("movieRating", movieList[movie].rated);
    localStorage.setItem("movieYear", movieList[movie].year);
    localStorage.setItem("movieRuntime", movieList[movie].runtime);
    localStorage.setItem("movieBuy", movieList[movie].priceBuy);
    localStorage.setItem("movieRent", movieList[movie].priceRent);
}

function saveUser(user) {
    localStorage.setItem("userId", user.UserName);
    localStorage.setItem("userPass", user.Password);
    localStorage.setItem("userEmail", user.Email);
    localStorage.setItem("userCred", user.CreditCard);
    localStorage.setItem("userAddress", user.Address);
    localStorage.setItem("userOwned", user.Owned);
    localStorage.setItem("userRented", user.Rented);
    localStorage.setItem("userSearched", user.SearchHistory);
    localStorage.setItem("userFav", user.Favorite);
}

function logOut() {
    localStorage.setItem("loggedIn", 'false')
    localStorage.setItem("userId", "")
    localStorage.setItem("userOwned", "")
    localStorage.setItem("userRented", "")
    localStorage.setItem("userPass", "");
    localStorage.setItem("userEmail", "");
    localStorage.setItem("userCred", "");
    localStorage.setItem("userAddress", "");
    localStorage.setItem("userSearched", "");
    localStorage.setItem("userFav", "");

}
