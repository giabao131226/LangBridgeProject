
export const add = (data) =>{
    return {
        type: "ADD",
        "data": data
    }
}
export const changeLogin = (data = {}) => {
    return {
        type: "CHANGELOGIN",
        isLogin : data.isLogin,
        token: data.token
    }
}