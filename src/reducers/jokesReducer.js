export default function jokesReducer( state = {
 id: null,
 content: `Chuck Norris always carries a ice cooler around with him so he can
 store severed hands of people who where brave enough to shake his hand`,
 error: null,
 categories: []
}, action) {
    switch(action.type){
        case 'CHANGE_JOKE': {
            return {...state, 
                content: action.payload.value,                         
             }
        }
        case 'GET_CATEGORIES': {
            return {...state, categories: action.payload}
        }
        case 'GET_CATEGORY': {
            return {...state, 
                    id: action.payload.id,
                    content: action.payload.value 
                }
        }
        case 'FAILED_JOKE': {
            return {...state, error: action.payload}
        }
         
        case 'FAILED_CATEGORIES': {
            return {...state, error: action.payload}
        }
       
        case 'FAILED_CATEGORY': {
            return {...state, error: action.payload}
        }
    }     
   return state;
}