import { createStore, combineReducers } from 'redux'

import counterReducer, {
    incAction,
    decAction,
    substractAction,
    addAction
} from './state/counter'

const reducer = combineReducers({
    counter: counterReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


window.counterInc = () => store.dispatch(incAction())
window.counterDec = () => store.dispatch(decAction())

store.dispatch(addAction(6))


