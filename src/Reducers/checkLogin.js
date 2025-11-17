
const changeLogin = (data = {},actions) => {
    switch(actions.type){
        case "CHANGELOGIN": return {
            isLogin: actions.isLogin,
            token: actions.token
        }
        default: return data;
    }
    return data;
}
export default changeLogin;