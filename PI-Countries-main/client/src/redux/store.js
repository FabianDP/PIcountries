import {createStore,applyMiddleware,compose} from'redux'
import thunkMiddleware  from 'redux-thunk'

import reducer from './reducer'
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose; 

const store= createStore(reducer,composeEnhancer(applyMiddleware(thunkMiddleware)));


export default store;




// se cuencia de trabajo de reducer //

// va primero a actions el hacer la orden y lo toma 
// con el type entiende que tien que hacer
// y el paylod tiene el valor que va cambiar
// reducer luego el va al estado global y lo modifica