import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import pic from "../assets/images/user.jpg"
import p1 from "../assets/products/p1.jpg"
import p2 from "../assets/products/p19.jpg"
import p3 from "../assets/products/p62.jpg"
import { WishlistContext } from '../Store/WishlistContext'
export default function Profile() {
    var {wishlist,wishlistdispatch} = useContext(WishlistContext)
    return (
        <>
            <div className='row'>
                <div className='col-md-6 col-sm-12 col-12'>
                    <img src={pic} height="500px" />
                </div>
                <div className='col-md-6 col-sm-12 col-12'>
                    <h5 className='background text-light text-center p-2'>Buyer Profile Section</h5>
                    <table className='table table-light table-striped table-hover'>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>Nitin Chauhan</td>
                            </tr>
                            <tr>
                                <th>User Name</th>
                                <td>nitin</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>nitinchauhan@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Phone Number</th>
                                <td>9873848046</td>
                            </tr>
                            <tr>
                                <th>Address Line1</th>
                                <td>House Number 82</td>
                            </tr>
                            <tr>
                                <th>Address Line2</th>
                                <td>Street Number 5</td>
                            </tr>
                            <tr>
                                <th>Adress Line3</th>
                                <td>Village Sample</td>
                            </tr>
                            <tr>
                                <th>Pin Code</th>
                                <td>121002</td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td>Faridabad</td>
                            </tr>
                            <tr>
                                <th>State</th>
                                <td>Haryana</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><Link to="/update-profile" className='btn background text-light w-100'>Update Profile</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h5 className='background text-light text-center p-2'>Wishlist Section</h5>
            <div className='table-responsive'>
                <table className='table table-light table-striped table-hover'>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                        {
                            wishlist.map((item, index) => {
                                return <tr key={index}>
                                    <td><img src={item.pic1} height="100px" width="100px" className="rounded"></img></td>
                                    <td>{item.name}</td>
                                    <td>{item.color}</td>
                                    <td>{item.size}</td>
                                    <td>&#8377;{item.finalprice}</td>
                                    <td><Link className='btn text-primary' to={"/single-product/"+item.id}><i className="material-icons">shopping_cart</i></Link></td>
                                    <td><button className='btn text-primary' onClick={() => wishlistdispatch({ type: "REMOVE_FROM_WISHLIST", product: item, id: item.id })}><i className="material-icons">delete_forever</i></button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <h5 className='background text-light text-center p-2'>Order History Section</h5>
            <div className='row'>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Order Id</th>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th>Payment Mode</th>
                                <td>COD</td>
                            </tr>
                            <tr>
                                <th>Order Status</th>
                                <td>Not Packed</td>
                            </tr>
                            <tr>
                                <th>Payment Status</th>
                                <td>Pending</td>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <td>&#8377;1500</td>
                            </tr>
                            <tr>
                                <th>Shipping</th>
                                <td>&#8377;0</td>
                            </tr>
                            <tr>
                                <th>Final</th>
                                <td>&#8377;1500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='col-xxl-10 col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Color</th>
                                <th>Size</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                                <td><img src={p1} width="100px" height="100px" className="rounded"/></td>
                                <td>Men Jeans Mufti Blue Slim Fit</td>
                                <td>Blue</td>
                                <td>XL</td>
                                <td>&#8377;500</td>
                                <td>1</td>
                                <td>&#8377;500</td>
                            </tr>
                            <tr>
                                <td><img src={p2} width="100px" height="100px" className="rounded"/></td>
                                <td>Woman Jeans Mufti Blue Slim Fit</td>
                                <td>Blue</td>
                                <td>XL</td>
                                <td>&#8377;500</td>
                                <td>1</td>
                                <td>&#8377;500</td>
                            </tr>
                            <tr>
                                <td><img src={p3} width="100px" height="100px" className="rounded"/></td>
                                <td>Kids Jeans Mufti Blue Slim Fit</td>
                                <td>Blue</td>
                                <td>XL</td>
                                <td>&#8377;500</td>
                                <td>1</td>
                                <td>&#8377;500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
