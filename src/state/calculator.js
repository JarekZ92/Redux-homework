const INPUT = 'calculator/INPUT'
const ADD = 'calculator/ADD'
const SUBSTRACT = 'calculator/SUBSTRACT'
const RESULT = 'calculator/RESULT'
const DEVIDE = 'calculator/DEVIDE'
const MULTIPLY = 'calculator/MULTIPLY'

export const addAction = () => ({ type: ADD })

export const substractAction = () => ({ type: SUBSTRACT })

export const resultAction = () => ({ type: RESULT })

export const devideAction = () => ({ type: DEVIDE })

export const multiplyAction = () => ({type: MULTIPLY})

export const inputAction = number => ({
    type: INPUT,
    number
})

const initialState = {
    result: 0,
    input: 0,
    isResultShown: false,
    lastOperation: null
}

const calculateResult = currentState => {
    switch (currentState.lastOperation) {
        case ADD:
            return currentState.result + currentState.input
        case SUBSTRACT:
            return currentState.result - currentState.input
        case DEVIDE:
            return currentState.result / currentState.input
            case MULTIPLY:
            return currentState.result * currentState.input
        default:
            return currentState.result + currentState.input
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INPUT:
            return {
                ...state,
                input: state.input * 10 + action.number,
                isResultShown: false
            }
        case ADD:
            return {
                ...state,
                result: calculateResult(state),
                input: 0,
                isResultShown: true,
                lastOperation: action.type
            }
        case SUBSTRACT:
            return {
                ...state,
                result: calculateResult(state),
                input: 0,
                isResultShown: true,
                lastOperation: action.type
            }
        case RESULT:
            return {
                ...state,
                result: calculateResult(state),
                input: 0,
                isResultShown: true,
                lastOperation: initialState.lastOperation
            }
        case DEVIDE:
            return {
                ...state,
                result: calculateResult(state),
                input: 0,
                isResultShown: true,
                lastOperation: action.type
            }
            case MULTIPLY:
            return {
                ...state,
                result: calculateResult(state),
                input: 0,
                isResultShown: true,
                lastOperation: action.type
            }
        default:
            return state
    }
} 
