export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
                return {
                    auth: "Login"
                }
            break
        case "LOGOUT":
            return {
                auth: "Logout"
            }
            break
        default:
            return state
    }
}