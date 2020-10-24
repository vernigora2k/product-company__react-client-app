import { urlCatalogItems, urlLogin, urlLogout } from './config'
const { apiRequest } = require("./apiClient");


export function singIn(email, password) {
    const urlencoded = new URLSearchParams()
    urlencoded.append("email", email);
    urlencoded.append("password", password);
    
    apiRequest('POST', urlLogin, urlencoded)
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

export function getProductItems() {
    apiRequest('GET', urlCatalogItems)
        .then(data => console.log(data))
        .then(err => console.log(err))
    }
    
export function logout() {
    apiRequest('GET', urlLogout)
        .then(data => console.log(data))
        .then(err => console.log(err))
    
}

// singIn('user2@gmail.com', '2222')
logout()
getProductItems()
singIn('user2@gmail.com', '2222')
// setTimeout(getProductItems(), 1000)
// getProductItems()
