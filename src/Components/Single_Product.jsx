import React,{useContext} from 'react'

import { ProductContext } from '../Store/ProductContext'
import { CartContext } from '../Store/CartContext'
import { WishlistContext } from '../Store/WishlistContext'

import { Link, useParams } from 'react-router-dom'
export default function Single_Product() {
    var products = useContext(ProductContext)
    var {id} = useParams()
    var product = products.find((item)=>item.id==id)
    var {dispatch} = useContext(CartContext)
    var {wishlistdispatch}= useContext(WishlistContext)
    return (
        <div className='row'>
            <div className='col-md-6 col-sm-12 col-12'>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={product.pic1} height="500px" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={product.pic2} height="500px" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={product.pic3} height="500px" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={product.pic4} height="500px" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <img src={product.pic1} height="250px" width="24%"></img>
                    <img src={product.pic2} height="250px" width="24%"></img>
                    <img src={product.pic3} height="250px" width="24%"></img>
                    <img src={product.pic4} height="250px" width="24%"></img>
                </div>
            </div>
            <div className='col-md-6 col-sm-12 col-12'>
                <h5 className='background text-light text-center p-2'>{product.name}</h5>
                <table className='table'>
                    <tbody>
                        <tr>
                            <th>Main Category</th>
                            <td>{product.maincategory}</td>
                        </tr>
                        <tr>
                            <th>Sub Category</th>
                            <td>{product.subcategory}</td>
                        </tr>
                        <tr>
                            <th>Brand</th>
                            <td>{product.brand}</td>
                        </tr>
                        <tr>
                            <th>Base Price</th>
                            <td>&#8377;{product.baseprice}</td>
                        </tr>
                        <tr>
                            <th>Discount</th>
                            <td>{product.discount}%</td>
                        </tr>
                        <tr>
                            <th>Final Price</th>
                            <td>&#8377;{product.finalprice}</td>
                        </tr>
                        <tr>
                            <th>Color</th>
                            <td>{product.color}</td>
                        </tr>
                        <tr>
                            <th>Size</th>
                            <td>{product.size}</td>
                        </tr>
                        <tr>
                            <th>Stock</th>
                            <td>{product.stock}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{product.description}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}><Link to="/cart" onClick={()=>dispatch({type:"ADD_To_CART",product:product,id:product.id})} className='btn background text-light w-100'>Add to Cart</Link></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><Link to="/profile" className='btn background text-light w-100' onClick={()=>wishlistdispatch({type:"ADD_To_WISHLIST",product:product,id:product.id})} >Add to Wishlist</Link></td>
                        </tr>
                   </tbody>
                </table>
            </div>
        </div>
    )
}
