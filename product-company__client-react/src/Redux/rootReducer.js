import { combineReducers } from 'redux'
import { NEW_CATALOG_ITEMS, NEW_ID_ITEM } from './actions'

const initilaStateCatalogItems = {
    itemsData: null,
}

function catalogItemsReducer(state=initilaStateCatalogItems, action) {
    switch(action.type) {
        case NEW_CATALOG_ITEMS:
            return {
                ...state, itemsData: action.payload
            }
        default: 
            return state
    }
}
 
const initilaStateIdItem = {
    idItemData: null,
}
    
function idItemReducer(state=initilaStateIdItem, action) {
    switch(action.type) {
        case NEW_ID_ITEM:
            return {
                ...state, idItemData: action.payload
            }
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    itemsData: catalogItemsReducer,
    idItemData: idItemReducer,
})    