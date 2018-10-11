export default function(state={
    onInput: false,
    checked: false,
    showJoke: false,
    showInsideJoke: false,
    changingTitle: false
},action){
    switch(action.type){
        case 'ON_INPUT': {
            return {...state, onInput: true}
        }
        case 'OFF_INPUT': {
            return {...state, onInput: false}
           }
        case 'NULL_INPUT': {
            return {...state, onInput: null}
        }
        case 'SHOW_JOKE': {
            return {...state, showJoke: true}
        } 
        case 'HIDE_JOKE': {
            return {...state, showJoke: false,showInsideJoke: true}
        } 
        case 'SHOW_INSIDE_JOKE': {
            return {...state, showInsideJoke: true}
        } 
        case 'HIDE_INSIDE_JOKE': {
            return {...state, showInsideJoke: false}
        } 
        case 'CHANGING_TITLE': {
            return {...state, changingTitle: true }
        }
        case 'CHANGED_TITLE': {
            return {...state, changingTitle: false }
        }
        case 'CHECKED': {
            return {...state, checked: true}
        }
        case 'UNCHECKED': {
            return {...state, unchecked: false}
        }
    }
    return state;
}