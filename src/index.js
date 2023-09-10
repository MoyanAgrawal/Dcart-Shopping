import React from "react"
import ReactDOM from "react-dom/client"
import App from "./Components/App"
import ProductContextProvider from "./Store/ProductContext"
import CartContextProvider from "./Store/CartContext"
import WishlistContextProvider from "./Store/WishlistContext"
import AuthContextProvider from "./Store/AuthContext"
var root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <ProductContextProvider>
        <CartContextProvider>
            <WishlistContextProvider>
               <AuthContextProvider>
                   <App/>
               </AuthContextProvider>
            </WishlistContextProvider>
        </CartContextProvider>
    </ProductContextProvider>
)