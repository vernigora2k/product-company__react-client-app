import { urlCatalogItems, urlLogin } from './config'
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

singIn('user2@gmail.com', '2222')
getProductItems()