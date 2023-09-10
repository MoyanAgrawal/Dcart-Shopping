import React from 'react'
import Cpanel_LeftNav from './Cpanel_LeftNav'
import { Link } from 'react-router-dom'
export default function Cpanel_Contact() {
    async function deleteRecord(_id){
        alert("Deleted "+_id)
    }
    return (
        <div className='row'>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <Cpanel_LeftNav />
            </div>
            <div className='col-xxl-10 col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                <h5 className='background text-light text-center p-2'>Contact Us Query Page</h5>
                <div className='table-responsive'>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Subject</th>
                                <th>Message</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nitin Chauhan</td>
                                <td>nitin@gmail.com</td>
                                <td>9873848046</td>
                                <td>Sample Subject</td>
                                <td>Sample Message</td>
                                <td><Link to="/admin-single-contact" className='btn text-primary'><i className="material-icons">visibility</i></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
