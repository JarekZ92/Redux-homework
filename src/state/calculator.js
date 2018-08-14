const INPUT = 'calculator/INPUT'
const ADD = 'calculator/ADD'
const SUBSTRACT = 'calculator/SUBSTRACT'

export const inputAction = number => ({
    type: INPUT,
    number
})

const initialState = {
    result: 0,
    input: 0,
    isResultShown: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INPUT:
            return {
                ...state,
                input: state.input * 10 + action.number,
                isResultShown: false
            }
        default:
            return state
    }
} 
