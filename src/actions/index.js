// action with type increment and payload
export const incNumber = (num) => {
    return {
        type: "INCREMENT",
        payload: num
    }
}

// action with type decrement and payload
export const decNumber = (num) => {
    return {
        type: "DECREMENT",
        payload: num
    }
}

export const input = (val) => {
    return {
        type: "INPUT",
        payload: val
    }
}

export const output = () => {
    return {
        type: "OUTPUT"
    }
}