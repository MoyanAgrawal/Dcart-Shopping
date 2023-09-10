import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import pic from "../assets/images/signup.jpg"
export default function Signup() {
    var [register,setregister] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        password:"",
        cpassword:""
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
    // async function postData(e){
    //     e.preventDefault()
    //     if(register.password==register.cpassword)
    //     {
    //         alert(`
    //         Name : ${register.name}
    //         User Name : ${register.username}
    //         Email : ${register.email}
    //         Phone : ${register.phone}
    //         password : ${register.password}
    //         cpassword : ${register.cpassword}    
    //     `)
    //     }
    //     else
    //         alert("Password and Confirm Password Does not Match")
    // }
    return (
        <div className='row'>
            <div className='col-md-6 col-sm-12 col-12'>
                <img src={pic} className="w-100"></img>
            </div>
            <div className='col-md-6 col-sm-12 col-12'>
                <h5 className='background text-center text-light p-2'>SignUp Section</h5>
                <form onSubmit={postData} method="post">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={getData} name="name" placeholder='Enter Name'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">User Name</label>
                        <input type="text" className="form-control" onChange={getData} name="username" placeholder='Enter User Name'/>
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
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={getData} name="password" placeholder='Enter Password'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" onChange={getData} name="cpassword" placeholder='Confirm Password'/>
                    </div>
                    <button type="submit" className="btn background text-light w-100">SignUP</button>
                        <Link to="/login" className='text-decoration-none'>Already User?Login</Link>
                </form>
            </div>
        </div>
    )
}
