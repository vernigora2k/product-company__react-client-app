import { URLlogin, URLlogout, URLcatalogItems, URLidItem } from './config.js'
//import { errorHandler } from './controller.js'

const login = 'login'

export function apiRequest(type, url) {
    switch(type) {
        case login:
            return fetch(URL, config)
    }
}