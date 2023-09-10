import React,{useState} from 'react'
import { useParams } from 'react-router-dom'

import Cpanel_LeftNav from './Cpanel_LeftNav'
export default function Cpanel_Update_Subcategory() {
    var {_id} = useParams()
    var [name,setname] = useState("")
    function getData(e){
        setname(e.target.value)
    }
    async function postData(e){
        e.preventDefault()
        alert("Name = "+name)
    }
    return (
        <div className='row'>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <Cpanel_LeftNav />
            </div>
            <div className='col-xxl-10 col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                <h5 className='background text-light text-center p-2'>Sub-Category Page</h5>
                <form onSubmit={postData}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={getData} name="name" placeholder='Enter Subcategory Name'/>
                    </div>
                    <button type="submit" className="btn background text-light w-100">Update</button>
                </form>
            </div>
        </div>
    )
}
