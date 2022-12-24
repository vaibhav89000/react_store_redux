// initial state
const initailState = 0;

// reducer function
const changeTheNumber = (state=initailState,action) => {
    switch(action.type){
        case "INCREMENT": return state + action.payload

        case "DECREMENT": return state - action.payload
        default: return state
    }
}
export default changeTheNumber;