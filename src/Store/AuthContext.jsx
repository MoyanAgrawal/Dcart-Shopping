import React,{createContext,useReducer} from "react";
import { AuthReducer } from "./AuthReducer";

export const AuthContext = createContext()

const AuthContextProvider = (props)=>{
    const [auth,authdispatch] = useReducer(AuthReducer,{auth:"logout"})
    return(
        <AuthContext.Provider value={{...auth,authdispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider