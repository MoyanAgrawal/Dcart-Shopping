import React from 'react'
import Cpanel_LeftNav from './Cpanel_LeftNav'
import { Link } from 'react-router-dom'
export default function Cpanel_Single_Contact() {
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
                                <th>ID</th>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>Nitin Chauhan</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>nitinchauhan@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Subject</th>
                                <td>Sample Subject</td>
                            </tr>
                            <tr>
                                <th>Message</th>
                                <td>This is Sample textThis is Sample textThis is Sample textThis is Sample textThis is Sample textThis is Sample textThis is Sample textThis is Sample textThis is Sample textThis is Sample textThis is Sample textThis is Sample textThis is Sample text</td>
                            </tr>
                            <tr>
                                <th>Status</th>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <th colSpan={2}><button className='btn background text-light w-100'>Change Status to Done</button></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
