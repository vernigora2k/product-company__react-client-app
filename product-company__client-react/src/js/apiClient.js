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


const headers = new Headers()
headers.append("Content-Type", "application/x-www-form-urlencoded")

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
