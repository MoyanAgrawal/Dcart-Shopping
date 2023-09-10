import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import pic from "../assets/images/signup.jpg"
export default function Contact() {
    var [contact,setcontact] = useState({
        name:"",
        email:"",
        phone:"",
        subject:"",
        message:""
    }) 
    function getData(e){
        var name = e.target.name
        var value = e.target.value
        setcontact((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    async function postData(e){
        e.preventDefault()
        alert(`
            Name : ${contact.name}
            Email : ${contact.email}
            Phone : ${contact.phone}
            Subject : ${contact.subject}
            Message : ${contact.message}    
        `)
    }
    return (
        <div className='row'>
            <div className='col-md-6 col-sm-12 col-12'>
                <div className='background text-light text-center p-3 mt-1'>
                    pankaj_jha@gmail.com
                </div>
                <div className='background text-light text-center p-3 mt-1'>
                    98454456456
                </div>
                <div className='background text-light text-center p-3 mt-1'>
                    H-65,Sector-63,Noida,UP-201301
                </div>
                <div className="mapouter mt-2 mb-2"><div className="gmap_canvas"><iframe width="100%" height="500"  id="gmap_canvas" src="https://maps.google.com/maps?q=a43%20sector%2016%20noida&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
            </div>
            <div className='col-md-6 col-sm-12 col-12'>
                <h5 className='background text-center text-light p-2'>Contact US Section</h5>
                <form onSubmit={postData} method="post">
                    <div className="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" onChange={getData} name="name" placeholder='Enter Name'/>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email Id</label>
                        <input type="email" class="form-control" onChange={getData} name="email" placeholder='Enter Email Id'/>
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone Number</label>
                        <input type="text" class="form-control" onChange={getData} name="phone" placeholder='Enter Phone Number'/>
                    </div>
                    <div class="mb-3">
                        <label for="subject" class="form-label">Subject</label>
                        <input type="text" class="form-control" onChange={getData} name="subject" placeholder='Enter subject'/>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea name='message' onChange={getData} className='form-control' rows={8}></textarea>
                    </div>
                    <button type="submit" class="btn background text-light w-100">Send</button>
                </form>
            </div>
        </div>
    )
}
