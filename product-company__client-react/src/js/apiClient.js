// import { urlBase } from './config.js'
// //import { errorHandler } from './controller.js'
// export const config = { 'method': 'GET' }
// export const configPOST = { 'method': 'POST' }
// export const body = {
//     email: 'user2@gmail.com',
//     password: '2222'
// }

// console.log('test console')

// export function apiRequest(method, url, body = null) {
//     let URL = urlBase + url
//     const headers = {
//         'Content-Type': 'application/json'
//     }

//     return fetch(URL, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: headers,
//     }).then(res => {
//         return res.text()
//     }).catch(err => {
//         console.error(err)
//     })
// }

// apiRequest('POST', 'login', body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


import { urlBase } from './config'

const headers = new Headers()
headers.append("Content-Type", "application/x-www-form-urlencoded")
// headers.append("Cookie", "connect.sid=s%3AgIlbPA5a3lXPBP6ZKZYDG6rmCl5Mo7ab.7QFHCsiTgjqDA7qXd%2BK8UWKOyq7ElysnCoK7KDqGb6k")

const urlencoded = new URLSearchParams()
urlencoded.append("email", "user2@gmail.com");
urlencoded.append("password", "2222");

export function apiRequest(method, url, urlencoded = null) {
    const requestOptions = {
        method: method,
        headers: headers,
        body: urlencoded,
        redirect: 'follow',
        credentials: 'include',
      };

    return fetch(url, requestOptions)
        .then(response => {return response.json()})
        .catch(error => console.log('error', error))
}       

apiRequest('POST', urlBase, urlencoded)
    .then(data => console.log(data))
    .catch(err => console.log(err))