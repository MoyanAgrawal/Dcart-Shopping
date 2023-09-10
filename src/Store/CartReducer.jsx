export const CartReducer = (state, action) => {
    const { cart, total, qty } = state

    var product, updatedqty, updatedprice,index
    switch (action.type) {
        case "ADD_To_CART":
            const check = cart.find((item)=>item.id == action.id)
            if (check)
                return state
            else {
                product = action.product
                product['qty'] = 1
                updatedqty = qty + 1
                updatedprice = total + product.finalprice
                return {
                    cart: [product, ...cart],
                    total: updatedprice,
                    qty: updatedqty
                }
            }
            break
        case "INC":
            product = action.product
            product['qty'] = product['qty']+1
            updatedqty = qty + 1
            updatedprice = total + product.finalprice
            index = cart.findIndex((item)=>item.id==action.id)
            cart[index]=product            
            return {
                cart: [...cart],
                total: updatedprice,
                qty: updatedqty
            }
            break
        case "DEC":
            product = action.product
            if(product['qty']>1){
                product['qty'] = product['qty']-1
                updatedqty = qty - 1
                updatedprice = total - product.finalprice
                index = cart.findIndex((item)=>item.id==action.id)
                cart[index]=product            
                return {
                    cart: [...cart],
                    total: updatedprice,
                    qty: updatedqty
                }    
            }
            else
                return state
            break
        case "REMOVE_FROM_CART":
            var filteredproducts = cart.filter((item)=>item.id!=action.id)
            product = action.product
            updatedqty = qty - product['qty']
            updatedprice = total - product.finalprice*product['qty']
            return {
                cart: [...filteredproducts],
                total: updatedprice,
                qty: updatedqty
            }
            break
        default:
            return state
    }
}