const BASE_URL = 'http://localhost:3000/user'

function signUpUser() {
    // let email = document.getElementById('signupEmail').value;
    // let name = document.getElementById('name').value;
    // let password = document.getElementById('email').value;

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({ "firstName": "Ashish", "email": "ashish1076@gmail.com", "password": "ashish12345", "attempts": 0 });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: 'cors'
    };

    fetch(`${BASE_URL}/register`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if (result.success) {
                alert("User registered successfully!");
                return;
            }
            showError(result.message);
        }).catch(error => {
            console.log('error', error)
        });
}

function loginUser() {
    // let email = document.getElementById('signupEmail').value;
    // let password = document.getElementById('email').value;

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = { "email": "ashish1076@gmail.com", "password": "ashish12345" };

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(raw),
        redirect: 'follow',
        mode: 'cors',
        credentials: 'include'
    };

    fetch(`${BASE_URL}/login`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if (result.success) {
                alert("Login successful!");
                return;
            }
            showError(result.message);
        })
        .catch(error => {
            console.log('error', error)
        });
}

function setScore(score) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = { "score": score };

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(raw),
        redirect: 'follow',
        mode: 'cors',
        credentials: 'include'
    };

    fetch(`${BASE_URL}/setscore`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                console.log("Score updated");
                return;
            }
            showError(result.message);
        }).catch(error => {
            console.log(error);
        })
}

function isAllowed() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        credentials: 'include'
    };

    return fetch(`${BASE_URL}/attempts`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            return result.isAllowed
        })
        .catch(error => console.log('error', error));
}

function getProfile() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        credentials: 'include'
    };

    fetch(`${BASE_URL}/profile`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if (result.success) {
                alert(`${result.name}, High Score: ${result.highScore}`)
                return;
            }
            showError(result.message);
        })
        .catch(error => console.log('error', error));
}

function logoutUser() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        credentials: 'include'
    };

    fetch(`${BASE_URL}/logout`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert("You have logged out successfully!");
                return;
            }
            showError(result.message);
        })
        .catch(error => console.log('error', error));
}

function showError(errMessage) {
    alert(`ERROR: ${errMessage}`);
}