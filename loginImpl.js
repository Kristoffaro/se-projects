const user_endpoint = 'https://g7jn2eiov9.execute-api.us-east-2.amazonaws.com/prod-live/user/'
const wrongPassElement = document.getElementById('wrongPass')
const wrongUserElement = document.getElementById('wrongUser')

function validateLogin(username, pwd) {
    var request = new XMLHttpRequest()
    request.open('GET', user_endpoint + username, true)
    request.onload = function () {
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            console.log(request)
            if (null === data.user) {
                if (wrongUserElement.childNodes[2]) {
                    wrongUserElement.removeChild(wrongUserElement.childNodes[2])
                }
                const wrongUser = document.createElement('div')
                wrong.innerHTML = '<font color="red">User does not exist. Please try again</font>'

                wrongUserElement.appendChild(wrongUser)
            }
            if (data.user[0].Password === pwd) {
                localStorage.setItem('loggedIn', 'true')
                saveUser(data.user[0])
                window.location.href = '/se-projects/index.html'
            } else {
                if (wrongPassElement.childNodes[2]) {
                    wrongPassElement.removeChild(wrongPassElement.childNodes[2])
                }
                const wrong = document.createElement('div')
                wrong.innerHTML = '<font color="red">Password incorrect. Please try again</font>'

                wrongPassElement.appendChild(wrong)
            }
        } else {
            console.log('Error')
        }
    }
    request.send()
}