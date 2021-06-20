import {createStore, combineReducers} from 'redux'

// import reducers
import token from './login'
 import articles from './article'


const reducers = combineReducers({
    token,
    articles

})

const store= createStore(reducers)

export default store
