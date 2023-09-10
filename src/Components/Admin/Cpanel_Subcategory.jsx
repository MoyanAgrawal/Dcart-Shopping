import React from 'react'
import Cpanel_LeftNav from './Cpanel_LeftNav'
import { Link } from 'react-router-dom'
export default function Cpanel_Subcategory() {
    async function deleteRecord(_id){
        alert("Deleted "+_id)
    }
    return (
        <div className='row'>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <Cpanel_LeftNav />
            </div>
            <div className='col-xxl-10 col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                <h5 className='background text-light text-center p-2'>Sub-Category Page <Link to="/admin-add-subcategory" className='text-light' title='Add subcategory'><i class="fa fa-plus"></i></Link></h5>
                <div className='table-responsive'>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Jeans</td>
                                <td><Link to={"/admin-update-subcategory/1"} className='btn text-primary' title='Edit'><i className="material-icons">edit</i></Link></td>
                                <td><button onClick={()=>deleteRecord(1)} className='btn text-primary'><i className="material-icons">delete_forever</i></button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Shirt</td>
                                <td><Link to={"/admin-update-subcategory/2"} className='btn text-primary' title='Edit'><i className="material-icons">edit</i></Link></td>
                                <td><button onClick={()=>deleteRecord(2)} className='btn text-primary'><i className="material-icons">delete_forever</i></button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Tshirt</td>
                                <td><Link to={"/admin-update-subcategory/3"} className='btn text-primary' title='Edit'><i className="material-icons">edit</i></Link></td>
                                <td><button onClick={()=>deleteRecord(3)} className='btn text-primary'><i className="material-icons">delete_forever</i></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
