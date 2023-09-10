import React from 'react'
import Cpanel_LeftNav from './Cpanel_LeftNav'
export default function Cpanel_UserList() {
    async function deleteRecord(_id){
        alert("Deleteed "+_id)
    }
    return (
        <div className='row'>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <Cpanel_LeftNav />
            </div>
            <div className='col-xxl-10 col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                <h5 className='background text-light text-center p-2'>User List Page </h5>
                <div className='table-responsive'>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Email Id</th>
                                <th>Phone Number</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nitin Chauhan</td>
                                <td>Nitin</td>
                                <td>vishankchauhan@gmail.com</td>
                                <td>9873848046</td>
                                <td>User</td>
                                <td><button onClick={()=>deleteRecord(1)} className='btn text-primary'><i className="material-icons">delete_forever</i></button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nitin Chauhan</td>
                                <td>Nitin</td>
                                <td>vishankchauhan@gmail.com</td>
                                <td>9873848046</td>
                                <td>User</td>
                                <td><button onClick={()=>deleteRecord(1)} className='btn text-primary'><i className="material-icons">delete_forever</i></button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nitin Chauhan</td>
                                <td>Nitin</td>
                                <td>vishankchauhan@gmail.com</td>
                                <td>9873848046</td>
                                <td>User</td>
                                <td><button onClick={()=>deleteRecord(1)} className='btn text-primary'><i className="material-icons">delete_forever</i></button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nitin Chauhan</td>
                                <td>Nitin</td>
                                <td>vishankchauhan@gmail.com</td>
                                <td>9873848046</td>
                                <td>User</td>
                                <td><button onClick={()=>deleteRecord(1)} className='btn text-primary'><i className="material-icons">delete_forever</i></button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nitin Chauhan</td>
                                <td>Nitin</td>
                                <td>vishankchauhan@gmail.com</td>
                                <td>9873848046</td>
                                <td>User</td>
                                <td><button onClick={()=>deleteRecord(1)} className='btn text-primary'><i className="material-icons">delete_forever</i></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
