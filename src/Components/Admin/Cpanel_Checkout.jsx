import React from 'react'
import Cpanel_LeftNav from './Cpanel_LeftNav'
import { Link } from 'react-router-dom'
export default function Cpanel_Checkout() {
    async function deleteRecord(_id){
        alert("Deleted "+_id)
    }
    return (
        <div className='row'>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <Cpanel_LeftNav />
            </div>
            <div className='col-xxl-10 col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                <h5 className='background text-light text-center p-2'>Checkout Page</h5>
                <div className='table-responsive'>
                    <table className='table'>
                        <tbody>
                        <tr>
                                <th>Id</th>
                                <th>Mode of Payment</th>
                                <th>Order Status</th>
                                <th>Payment Status</th>
                                <th>Total</th>
                                <th>Shipping</th>
                                <th>Final</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>COD</td>
                                <td>Not Packed</td>
                                <td>Pending</td>
                                <td>&#8377;5000</td>
                                <td>&#8377;0</td>
                                <td>&#8377;5000</td>
                                <td><Link to="" className='btn text-primary'><i className="material-icons">visibility</i></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
