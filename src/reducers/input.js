const initailState = "";

// second reducer for input value
const showInput = (state=initailState, action) => {
    switch(action.type){
        case "INPUT": return action.payload;
        case "OUTPUT": return state;
        default: return state
    }
}

export default showInput;