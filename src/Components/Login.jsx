import React,{useState,useContext} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import pic from "../assets/images/login.jpg"
import { AuthContext } from '../Store/AuthContext'
export default function Login() {
    var {authdispatch}  = useContext(AuthContext)
    var navigate = useNavigate()
    var [login, setlogin] = useState({
        username: "",
        password: ""
    })
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setlogin((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        localStorage.setItem("login",true)
        localStorage.setItem("username","Nitin Chauhan")
        localStorage.setItem("role","user")
        authdispatch({type:"LOGIN"})
        navigate("/profile")
    }
    return (
        <div className='row'>
            <div className='col-md-6 col-sm-12 col-12'>
                <img src={pic} className="w-100"></img>
            </div>
            <div className='col-md-6 col-sm-12 col-12'>
                <h5 className='background text-center text-light p-2'>Login Section</h5>
                <form onSubmit={postData} method="post">
                    <div className="mb-3">
                        <label className="form-label">User Name</label>
                        <input type="text" className="form-control" onChange={getData} name="username" placeholder='Enter User Name to Login' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={getData} name="password" placeholder='Enter Password to Login' />
                    </div>
                    <button type="submit" className="btn background text-light w-100">Login</button>
                    <div className='d-flex justify-content-between'>
                        <Link to="" className='text-decoration-none'>Forget Password</Link>
                        <Link to="/signup" className='text-decoration-none'>New User?Create a Free Account</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
