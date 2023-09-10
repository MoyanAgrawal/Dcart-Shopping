import React,{useState} from 'react'

export default function Footer() {
  var [email,setemail] = useState("")
  function getData(e){
    setemail(e.target.value)
  }
  function postData(e){
    e.preventDefault()
    alert("Email = "+email)
  }
  return (
    <footer className='heading'>
      <h5>copyright@Dcart.com</h5>
      <div className='row'>
        <div className='col-md-3 col-sm-12 col-12'></div>
        <div className='col-md-6 col-sm-12 col-12'>
          <form method="post" onSubmit={postData}>
            <div class="mb-3">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" class="form-control" onChange={getData} name="email" placeholder='Enter Your Email id to Subscribe Our Newslatter Service'/>
            </div>
            <button type="submit" class="btn btn-light w-100">Subscribe</button>
          </form>
        </div>
        <div className='col-md-3 col-sm-12 col-12'></div>
      </div>
    </footer>
  )
}