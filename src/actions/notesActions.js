export function getNotes(){
    return {type: 'GET_NOTES',
            payload:''}
}

export function getItems(id){
    return {type: 'GET_ITEMS',
            payload: id}
}

export function addNote(id){
    return {type: 'ADD_NOTE',
            payload: id}
}

export function addItem(id, itemId, textContent, fromWhen, tillWhen){
    return {type: 'ADD_ITEM',
            payload: { id:id,
                       item: {
                            id: itemId,
                            textContent,
                            fromWhen,
                            tillWhen }
                       }
                    }
}

export function updateTitle(id, title){
    return { type: 'UPDATE_TITLE',
             payload: { id,
                        title }
                    }
}

export function updateItem(id, itemId, fromWhen, tillWhen, textContent){
    return { type: 'UPDATE_ITEM',
             payload: { id:id,
                        item: {
                                id: itemId,
                                textContent,
                                fromWhen,
                                tillWhen }
                }
    }
}

export function deleteNote(id){
    return { type: 'DELETE_NOTE',
             payload: id }

}

export function deleteItem(id, itemId){
    return { type: 'DELETE_ITEM',
             payload: {id,
                       item: { id: itemId }
                      } 
            }

}
        