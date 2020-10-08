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
            } else {
                alert(`Error in registering user! ${result.message}`)
            }
        }).catch(error => {
            console.log('error', error)
        });
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return;
}

function loginUser() {
    // let email = document.getElementById('signupEmail').value;
    // let password = document.getElementById('email').value;

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = { "email": "ashish1076@gmail.com", "password": "ashish12345" };

    if (getCookie('auth')) {
        raw['auth'] = getCookie('auth');
    }

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
                alert("Login successful!")
            } else {
                alert(result.message);
            }
        })
        .catch(error => {
            console.log('error', error)
        });
}

