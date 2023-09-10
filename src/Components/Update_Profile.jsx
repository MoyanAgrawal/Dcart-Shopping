import React,{useState} from 'react'
import pic from "../assets/images/noimage.png"
export default function Update_Profile() {
    var [register,setregister] = useState({
        name:"",
        email:"",
        phone:"",
        addressline1:"",
        addressline2:"",
        addressline3:"",
        pin:"",
        city:"",
        state:"",
        pic:""
    }) 
    function getData(e){
        var name = e.target.name
        var value = e.target.value
        setregister((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    function getFile(e){
        var name = e.target.name
        var value = e.target.files[0]
        setregister((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    async function postData(e){
        e.preventDefault()
        if(register.password==register.cpassword)
        {
            alert(`
            Name : ${register.name}
            Email : ${register.email}
            Phone : ${register.phone}
            addressline1 : ${register.addressline1}
            addressline2 : ${register.addressline2}
            addressline3 : ${register.addressline3}
            pin : ${register.pin}
            city : ${register.city}
            state : ${register.state}
            pic : ${register.pic}
        `)
        }
        else
            alert("Password and Confirm Password Does not Match")
    }
    return (
        <div className='row'>
            <div className='col-md-6 col-sm-12 col-12'>
                <img src={pic} className="w-100"></img>
            </div>
            <div className='col-md-6 col-sm-12 col-12'>
                <h5 className='background text-center text-light p-2'>Update Profile Section</h5>
                <form onSubmit={postData} method="post">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={getData} name="name" placeholder='Enter Name'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email Id</label>
                        <input type="email" className="form-control" onChange={getData} name="email" placeholder='Enter Email Id'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control" onChange={getData} name="phone" placeholder='Enter Phone Number'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Addressl Line 1</label>
                        <input type="text" className="form-control" onChange={getData} name="addressline1" placeholder='Enter House Number or Builting Number'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address Line 2</label>
                        <input type="text" className="form-control" onChange={getData} name="addressline2" placeholder='Enter Street Number or Near By'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address Line 3</label>
                        <input type="text" className="form-control" onChange={getData} name="addressline1" placeholder='Enter Village or Locality'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Pin</label>
                        <input type="text" className="form-control" onChange={getData} name="pin" placeholder='Enter Pin Number'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" onChange={getData} name="city" placeholder='Enter City Name'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">state</label>
                        <input type="text" className="form-control" onChange={getData} name="state" placeholder='Enter State Name'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Pic</label>
                        <input type="file" className="form-control" onChange={getFile} name="pic"/>
                    </div>
                    <button type="submit" className="btn background text-light w-100">Update</button>
                </form>
            </div>
        </div>
    )
}
