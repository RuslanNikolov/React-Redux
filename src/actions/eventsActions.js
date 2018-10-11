export function onInput(){
    return { type: 'ON_INPUT',
             payload: ''}
}
export function offInput(){
    return { type: 'OFF_INPUT',
             payload: ''}
}
export function nullInput(){
    return { type: 'NULL_INPUT',
             payload: ''}
}

export function showJoke(){
    return { type: 'SHOW_JOKE',
             payload: ''}
}
export function hideJoke(){
    return { type: 'HIDE_JOKE',
             payload: ''}
}
export function showInsideJoke(){
    return { type: 'SHOW_INSIDE_JOKE',
             payload: ''}
}
export function hideInsideJoke(){
    return { type: 'HIDE_INSIDE_JOKE',
             payload: ''}
}
export function changingTitle(){
    return { type: 'CHANGING_TITLE',
             payload: ''}
}
export function changedTitle(){
    return { type: 'CHANGED_TITLE',
             payload: ''}
}

export function checked(){
    return { type: 'CHECKED',
             payload: ''}
}
export function unchecked(){
    return { type: 'UNCHECKED',
             payload: ''}
}