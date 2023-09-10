import React from 'react'
import { Link } from 'react-router-dom'

export default function Cpanel_LeftNav() {
    return (
        <>
            <div className="list-group">
                <h5 className='background text-light text-center p-2'>Menu</h5>
                <Link to="/admin" className="list-group-item background text-light mt-1">Home</Link>
                <Link to="/admin-userlist" className="list-group-item background text-light mt-1">User List</Link>
                <Link to="/admin-maincategory" className="list-group-item background text-light mt-1">Main-Category</Link>
                <Link to="/admin-subcategory" className="list-group-item background text-light mt-1">Sub-Category</Link>
                <Link to="/admin-brand" className="list-group-item background text-light mt-1">Brand</Link>
                <Link to="/admin-product" className="list-group-item background text-light mt-1">Product</Link>
                <Link to="/admin-checkout" className="list-group-item background text-light mt-1">Checkout</Link>
                <Link to="/admin-contact" className="list-group-item background text-light mt-1">Contact</Link>
                <Link to="/admin-newslatter" className="list-group-item background text-light mt-1">Newslatter</Link>
            </div>
        </>
    )
}
