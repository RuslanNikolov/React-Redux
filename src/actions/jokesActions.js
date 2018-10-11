import axios from 'axios';

export function changeJoke(){
    return function(dispatch){
        axios.get('https://api.chucknorris.io/jokes/random')
             .then((response) => {
                 console.log(response)
                dispatch({type: 'CHANGE_JOKE', payload: response.data})
             })
             .catch((error) => {
                dispatch({type: 'FAILED_JOKE', payload: error})
             })
    }
}

export function getCategories(){
    return function(dispatch){
        axios.get('https://api.chucknorris.io/jokes/categories')
             .then((response) => {
                 dispatch({type: 'GET_CATEGORIES', payload: response})
             })
             .catch((error) => {
                 dispatch({type: 'FAILED_CATEGORIES', payload: error})
             })
    }
}

export function getCategory(category){
    return function(dispatch) {
        axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
             .then((response) => {
                 dispatch({type: 'GET_CATEGORY', payload: response})
             })
             .catch((error) => {
                 dispatch({type: 'FAILED_CATEGORY', payload: error})
             })
    }
}