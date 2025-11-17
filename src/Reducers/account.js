
const account = (data = [],actions) => {
    switch(actions.type){
        case "ADD":
            return [
                ...data,
                actions.data
            ]
        default:
            return data
    }
    return data;
}
export default account;