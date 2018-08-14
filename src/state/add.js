const ADD = 'add/ADD'

const initialState = {
    result: 0
}


export const addAction1 = number => ({ type: ADD, number })



export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                result: state.result + action.number
            }
        default:
            return state
    }
}