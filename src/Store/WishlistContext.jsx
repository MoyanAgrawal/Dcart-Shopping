import React,{createContext,useReducer} from "react";
import { WishlistReducer } from "./WishlistReducer";

export const WishlistContext = createContext()

const WishlistContextProvider = (props)=>{
    const [wishlist,wishlistdispatch] = useReducer(WishlistReducer,{wishlist:[]})
    return(
        <WishlistContext.Provider value={{...wishlist,wishlistdispatch}}>
            {props.children}
        </WishlistContext.Provider>
    )
}
export default WishlistContextProvider