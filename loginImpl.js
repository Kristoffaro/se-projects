const user_endpoint = 'https://g7jn2eiov9.execute-api.us-east-2.amazonaws.com/prod-live/user/'
const wrongPassElement = document.getElementById('wrongPass')
function validateLogin(username, pwd) {
    var request = new XMLHttpRequest()
    request.open('GET', user_endpoint + username, true)
    request.onload = function () {
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            if (data.user[0].Password === pwd) {
                localStorage.setItem('loggedIn', 'true')
                localStorage.setItem('userId', data.user[0].UserName)
                localStorage.setItem('userOwned', data.user[0].Owned)
                localStorage.setItem('userRented', data.user[0].Rented)
                window.location.href = '/se-projects/index.html'
            } else {
                const wrong = document.createElement('div')
                wrong.innerHTML = 'Password incorrect. Please try again'

                wrongPassElement.appendChild(wrong)
            }
        } else {
            console.log('Error')
        }
    }
    request.send()
}