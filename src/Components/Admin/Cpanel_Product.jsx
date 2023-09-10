import React from 'react'
import Cpanel_LeftNav from './Cpanel_LeftNav'
import { Link } from 'react-router-dom'
import p1 from "../../assets/products/p1.jpg"
import p2 from "../../assets/products/p2.jpg"
import p3 from "../../assets/products/p3.jpg"
import p4 from "../../assets/products/p4.jpg"
export default function Cpanel_Product() {
    async function deleteRecord(_id){
        alert("Deleted "+_id)
    }
    return (
        <div className='row'>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <Cpanel_LeftNav />
            </div>
            <div className='col-xxl-10 col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                <h5 className='background text-light text-center p-2'>Product Page <Link to="/admin-add-product" className='text-light' title='Add product'><i class="fa fa-plus"></i></Link></h5>
                <div className='table-responsive'>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Maincategory</th>
                                <th>Subcategory</th>
                                <th>Brand</th>
                                <th>Color</th>
                                <th>Size</th>
                                <th>Base Price</th>
                                <th>Discount</th>
                                <th>Final Price</th>
                                <th>Stock</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Man Jeasn Slim Fit Mufti</td>
                                <td>Male</td>
                                <td>Jeans</td>
                                <td>Mufti</td>
                                <td>Blue</td>
                                <td>XXL</td>
                                <td>&#8377;5000</td>
                                <td>50%</td>
                                <td>&#8377;2500</td>
                                <td>In Stock</td>
                                <td><img src={p1} width="100px" height="100px" className="rounded"></img></td>
                                <td><img src={p2} width="100px" height="100px" className="rounded"></img></td>
                                <td><img src={p3} width="100px" height="100px" className="rounded"></img></td>
                                <td><img src={p4} width="100px" height="100px" className="rounded"></img></td>
                                <td><Link to={"/admin-update-product/1"} className='btn text-primary' title='Edit'><i className="material-icons">edit</i></Link></td>
                                <td><button onClick={()=>deleteRecord(1)} className='btn text-primary'><i className="material-icons">delete_forever</i></button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Man Jeasn Slim Fit Mufti</td>
                                <td>Male</td>
                                <td>Jeans</td>
                                <td>Mufti</td>
                                <td>Blue</td>
                                <td>XXL</td>
                                <td>&#8377;5000</td>
                                <td>50%</td>
                                <td>&#8377;2500</td>
                                <td>In Stock</td>
                                <td><img src={p1} width="100px" height="100px" className="rounded"></img></td>
                                <td><img src={p2} width="100px" height="100px" className="rounded"></img></td>
                                <td><img src={p3} width="100px" height="100px" className="rounded"></img></td>
                                <td><img src={p4} width="100px" height="100px" className="rounded"></img></td>
                                <td><Link to={"/admin-update-product/1"} className='btn text-primary' title='Edit'><i className="material-icons">edit</i></Link></td>
                                <td><button onClick={()=>deleteRecord(1)} className='btn text-primary'><i className="material-icons">delete_forever</i></button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Man Jeasn Slim Fit Mufti</td>
                                <td>Male</td>
                                <td>Jeans</td>
                                <td>Mufti</td>
                                <td>Blue</td>
                                <td>XXL</td>
                                <td>&#8377;5000</td>
                                <td>50%</td>
                                <td>&#8377;2500</td>
                                <td>In Stock</td>
                                <td><img src={p1} width="100px" height="100px" className="rounded"></img></td>
                                <td><img src={p2} width="100px" height="100px" className="rounded"></img></td>
                                <td><img src={p3} width="100px" height="100px" className="rounded"></img></td>
                                <td><img src={p4} width="100px" height="100px" className="rounded"></img></td>
                                <td><Link to={"/admin-update-product/1"} className='btn text-primary' title='Edit'><i className="material-icons">edit</i></Link></td>
                                <td><button onClick={()=>deleteRecord(1)} className='btn text-primary'><i className="material-icons">delete_forever</i></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
