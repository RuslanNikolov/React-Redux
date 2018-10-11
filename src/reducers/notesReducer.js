export default function notesReducer(state = [
]
    , action) {
    switch (action.type) {
        case 'GET_NOTES': {
            return Array.from(state);
        }
        case 'GET_ITEMS': {
            state =  state.filter(note => {
                if(note.id === action.payload.id){
                    return true;
                }
                else { return false }
            });
            return state[0].items
        }
        case 'ADD_NOTE': {
            return state.concat({
                id: action.payload,
                title: 'Unnamed',
                items: []
            })
        }
        case 'ADD_ITEM': {
            return state.map(note => {
                if (note.id === action.payload.id) {
                        note.items = note.items.concat({
                        id: action.payload.item.id,
                        content: action.payload.item.textContent,
                        from: action.payload.item.fromWhen,
                        till: action.payload.item.tillWhen
                    })
                }
                return note;
            })
        }
        case 'UPDATE_TITLE': {
            return state.map( note => {
                if (note.id === action.payload.id) {
                    note.title = action.payload.title;
                }
                return note;
            })
        }
        case 'UPDATE_ITEM': {
            return state.map(note => {
                if (note.id === action.payload.id) {
                    note.items = note.items.map( item => {
                        if(item.id === action.payload.item.id){
                            item = {
                                ...item,
                                content: action.payload.item.textContent,
                                from: action.payload.item.fromWhen,
                                till: action.payload.item.tillWhen
                            }
                        }
                        return item;
                    })
                }
                return note;
            })
        }
        case 'DELETE_NOTE': {
            return state.filter((note) => note.id !== action.payload)
        }
        case 'DELETE_ITEM': {
            return state.map(note => {

                if(note.id === action.payload.id) {
                    note.items = note.items.filter( item => item.id !== action.payload.item.id)
                }
                return note;
            })
        }
    }
    return state;
}