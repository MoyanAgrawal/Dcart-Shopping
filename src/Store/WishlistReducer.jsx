export const WishlistReducer = (state, action) => {
    const { wishlist} = state

    var product, updatedqty, updatedprice,index
    switch (action.type) {
        case "ADD_To_WISHLIST":
            const check = wishlist.find((item)=>item.id == action.id)
            if (check)
                return state
            else {
                product = action.product
                return {
                    wishlist: [product, ...wishlist],
                }
            }
            break
        case "REMOVE_FROM_WISHLIST":
            var filteredproducts = wishlist.filter((item)=>item.id!=action.id)
            return {
                wishlist: [...filteredproducts],
            }
            break
        default:
            return state
    }
}