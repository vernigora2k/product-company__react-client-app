export const NEW_CATALOG_ITEMS = 'NEW_CATALOG_ITEMS'
export const NEW_ID_ITEM = 'NEW_ID_ITEM'

export function newCatalogItems(items) {
    return {
        type: NEW_CATALOG_ITEMS,
        payload: items,
    }
}

export function newIdItem(item) {
    return {
        type: NEW_ID_ITEM,
        payload: item,
    }
}

