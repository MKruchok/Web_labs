export const addItem = ({name, price}) => {
    return {
        type: "ADD",
        payload: {name, price}
    }
}

export const deleteItem = ({name}) => {
    return {
        type: "DELETE",
        payload: {name}
    }
}