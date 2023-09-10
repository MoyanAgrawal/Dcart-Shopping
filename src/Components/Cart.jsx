import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Store/CartContext'
export default function Cart() {
    var { cart, total,dispatch } = useContext(CartContext)
    var shipping = 0
    if (total < 1000 && cart.length > 0) {
        shipping = 150
    }
    var final = total + shipping
    return (
        <>
            <h5 className='background text-light text-center p-2'>Cart Section</h5>
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
                            <th>Qty</th>
                            <th></th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                        {
                            cart.map((item, index) => {
                                return <tr key={index}>
                                    <td><img src={item.pic1} height="100px" width="100px" className="rounded"></img></td>
                                    <td>{item.name}</td>
                                    <td>{item.color}</td>
                                    <td>{item.size}</td>
                                    <td>&#8377;{item.finalprice}</td>
                                    <td><button className='btn text-primary'onClick={()=>dispatch({type:"DEC",product:item,id:item.id})}><i className="material-icons">remove</i></button></td>
                                    <td>{item.qty}</td>
                                    <td><button className='btn text-primary' onClick={()=>dispatch({type:"INC",product:item,id:item.id})}><i className="material-icons">add</i></button></td>
                                    <td>&#8377;{item.finalprice * item.qty}</td>
                                    <td><button className='btn text-primary' onClick={()=>dispatch({type:"REMOVE_FROM_CART",product:item,id:item.id})}><i className="material-icons">delete_forever</i></button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className='row'>
                <div className='col-md-6 col-12'></div>
                <div className='col-md-6 col-12'>
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
                                <td colSpan={2}><Link to="/checkout" className='btn background text-light w-100'>Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
