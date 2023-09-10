import React from 'react'
import Cpanel_LeftNav from './Cpanel_LeftNav'
import pic from "../../assets/images/user.jpg"
export default function Cpanel_Index() {
    return (
        <div className='row'>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <Cpanel_LeftNav/>
            </div>
            <div className='col-xxl-10 col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                <h5 className='background text-light text-center p-2'>Admin Home Page</h5>
                <div className='row'>
                    <div className='col-md-6 col-sm-12 col-12'>
                        <img src={pic} className="w-100"></img>
                    </div>
                    <div className='col-md-6 col-sm-12 col-12'>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>Admin</td>
                                </tr>
                                <tr>
                                    <th>User Name</th>
                                    <td>Admin</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>admin@dcart.com</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>9873848046</td>
                                </tr>
                                <tr>
                                    <th>Role</th>
                                    <td>Admin</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
