import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Store/CartContext'
import pic from "../assets/images/user.jpg"
export default function Checkout() {
    var { cart, total, dispatch } = useContext(CartContext)
    var shipping = 0
    if (total < 1000 && cart.length > 0) {
        shipping = 150
    }
    var final = total + shipping
    return (
        <>
            <div className='row'>
                <div className='col-md-6 col-sm-12 col-12'>
                    <h5 className='background text-light text-center p-2'>Billing Details</h5>
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
                <div className='col-md-6 col-sm-12 col-12'>
                    <h5 className='background text-light text-center p-2'>Cart</h5>
                    <div className='table-responsive'>
                        <table className='table table-light table-striped table-hover'>
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
                                {
                                    cart.map((item, index) => {
                                        return <tr key={index}>
                                            <td><img src={item.pic1} height="100px" width="100px" className="rounded"></img></td>
                                            <td>{item.name}</td>
                                            <td>{item.color}</td>
                                            <td>{item.size}</td>
                                            <td>&#8377;{item.finalprice}</td>
                                            <td>{item.qty}</td>
                                            <td>&#8377;{item.finalprice * item.qty}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <table className='table table-light table-striped table-hover'>
                        <tbody>
                            <tr>
                                <th>Total</th>
                                <td>&#8377;{total}</td>
                            </tr>
                            <tr>
                                <th>Shipping</th>
                                <td>&#8377;{shipping}</td>
                            </tr>
                            <tr>
                                <th>Final</th>
                                <td>&#8377;{final}</td>
                            </tr>
                            <tr>
                                <th>Mode of Payment</th>
                                <td>
                                    <select name='mode' className='form-select'>
                                        <option value="COD">COD</option>
                                        <option value="Net Banking">Net Banking/Card/UPI/Wallet/Pay Later</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}><Link to="" className='btn background text-light w-100'>Place Order</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
