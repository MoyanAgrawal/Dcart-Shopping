import React from 'react'
import Cpanel_LeftNav from './Cpanel_LeftNav'
import { Link } from 'react-router-dom'
export default function Cpanel_Newslatter() {
    async function deleteRecord(_id){
        alert("Deleted "+_id)
    }
    return (
        <div className='row'>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <Cpanel_LeftNav />
            </div>
            <div className='col-xxl-10 col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                <h5 className='background text-light text-center p-2'>NewsLatters</h5>
                <div className='table-responsive'>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>vishankchauhan@gmail.com</td>
                                <td><button onClick={()=>deleteRecord(1)} className='btn text-primary'><i className="material-icons">delete_forever</i></button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>vishankchauhan2@gmail.com</td>
                                <td><button onClick={()=>deleteRecord(1)} className='btn text-primary'><i className="material-icons">delete_forever</i></button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>vishankchauhan3@gmail.com</td>
                                <td><button onClick={()=>deleteRecord(1)} className='btn text-primary'><i className="material-icons">delete_forever</i></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
