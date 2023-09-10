import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cpanel_Add_Brand from './Admin/Cpanel_Add_Brand'
import Cpanel_Add_Maincategory from './Admin/Cpanel_Add_Maincategory'
import Cpanel_Add_Product from './Admin/Cpanel_Add_Product'
import Cpanel_Add_Subcategory from './Admin/Cpanel_Add_Subcategory'
import Cpanel_Brand from './Admin/Cpanel_Brand'
import Cpanel_Checkout from './Admin/Cpanel_Checkout'
import Cpanel_Contact from './Admin/Cpanel_Contact'
import Cpanel_Index from './Admin/Cpanel_Index'
import Cpanel_Maincategory from './Admin/Cpanel_Maincategory'
import Cpanel_Newslatter from './Admin/Cpanel_Newslatter'
import Cpanel_Product from './Admin/Cpanel_Product'
import Cpanel_Single_Contact from './Admin/Cpanel_Single_Contact'
import Cpanel_Subcategory from './Admin/Cpanel_Subcategory'
import Cpanel_Update_Brand from './Admin/Cpanel_Update_Brand'
import Cpanel_Update_Maincategory from './Admin/Cpanel_Update_Maincategory'
import Cpanel_Update_Product from './Admin/Cpanel_Update_Product'
import Cpanel_Update_Subcategory from './Admin/Cpanel_Update_Subcategory'
import Cpanel_UserList from './Admin/Cpanel_UserList'
import Cart from './Cart'
import Checkout from './Checkout'
import Contact from './Contact'
import Footer from './Footer'

import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Profile from './Profile'
import Shop from './Shop'
import Signup from './Signup'
import Single_Product from './Single_Product'
import Update_Profile from './Update_Profile'


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/shop/:mc/:sc/:br' element={<Shop/>}></Route>
                    <Route path='/single-product/:id' element={<Single_Product/>}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>
                    <Route path='/profile' element={<Profile/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/signup' element={<Signup/>}></Route>
                    <Route path='/update-profile' element={<Update_Profile/>}></Route>
                    <Route path='/checkout' element={<Checkout/>}></Route>
                    <Route path='/checkout' element={<Checkout/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>

                    <Route path='/admin' element={<Cpanel_Index/>}></Route>
                    <Route path='/admin-maincategory' element={<Cpanel_Maincategory/>}></Route>
                    <Route path='/admin-add-maincategory' element={<Cpanel_Add_Maincategory/>}></Route>
                    <Route path='/admin-update-maincategory/:_id' element={<Cpanel_Update_Maincategory/>}></Route>
                    <Route path='/admin-subcategory' element={<Cpanel_Subcategory/>}></Route>
                    <Route path='/admin-add-subcategory' element={<Cpanel_Add_Subcategory/>}></Route>
                    <Route path='/admin-update-subcategory/:_id' element={<Cpanel_Update_Subcategory/>}></Route>
                    <Route path='/admin-product' element={<Cpanel_Product/>}></Route>
                    <Route path='/admin-add-product' element={<Cpanel_Add_Product/>}></Route>
                    <Route path='/admin-update-product/:_id' element={<Cpanel_Update_Product/>}></Route>
                    <Route path='/admin-brand' element={<Cpanel_Brand/>}></Route>
                    <Route path='/admin-add-brand' element={<Cpanel_Add_Brand/>}></Route>
                    <Route path='/admin-update-brand/:_id' element={<Cpanel_Update_Brand/>}></Route>
                    <Route path='/admin-userlist' element={<Cpanel_UserList/>}></Route>
                    <Route path='/admin-contact' element={<Cpanel_Contact/>}></Route>
                    <Route path='/admin-newslatter' element={<Cpanel_Newslatter/>}></Route>
                    <Route path='/admin-checkout' element={<Cpanel_Checkout/>}></Route>
                    <Route path='/admin-single-contact' element={<Cpanel_Single_Contact/>}></Route>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    )
}
