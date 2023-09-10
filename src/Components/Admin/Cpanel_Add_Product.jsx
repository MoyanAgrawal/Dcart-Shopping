import React, { useState } from 'react'
import Cpanel_LeftNav from './Cpanel_LeftNav'
export default function Cpanel_Add_Product() {
    var [product, setproduct] = useState({
        name: "",
        maincategory: "Male",
        subcategory: "Jeans",
        brand: "Polo",
        color: "",
        size: "",
        baseprice: "",
        discount: "",
        finalprice: "",
        description: "This is Sample Product",
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: ""
    })
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setproduct((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function getFile(e) {
        var name = e.target.name
        var value = e.target.files[0]
        setproduct((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    async function postData(e) {
        product.finalprice = product.baseprice-product.baseprice*product.discount/100
        e.preventDefault()
            alert(`
            name:${product.name},
            maincategory:${product.maincategory},
            subcategory:${product.subcategory},
            brand:${product.brand},
            color:${product.color},
            size:${product.size},
            baseprice:${product.baseprice},
            discount:${product.discount},
            finalprice:${product.finalprice},
            description:${product.description},
            pic1:${product.pic1},
            pic2:${product.pic2},
            pic3:${product.pic3},
            pic4:${product.pic4}
        `)
    }
    return (
        <div className='row'>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <Cpanel_LeftNav />
            </div>
            <div className='col-xxl-10 col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                <h5 className='background text-light text-center p-2'>Product Page</h5>
                <form onSubmit={postData}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={getData} name="name" placeholder='Enter Product Name' />
                    </div>
                    <div className='row mb-3'>
                        <div className='col-md-3 col-sm-6 col-12'>
                            <label className="form-label">Maincategory</label>
                            <select name='maincategory' onChange={getData} className='form-select'>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Kids">Kids</option>
                            </select>
                        </div>
                        <div className='col-md-3 col-sm-6 col-12'>
                            <label className="form-label">Subcategory</label>
                            <select name='subcategory' onChange={getData} className='form-select'>
                                <option value="Jeans">Jeans</option>
                                <option value="Shirt">Shirt</option>
                                <option value="Tshirt">Tshirt</option>
                            </select>
                        </div>
                        <div className='col-md-3 col-sm-6 col-12'>
                            <label className="form-label">Brand</label>
                            <select name='brand' onChange={getData} className='form-select'>
                                <option value="Polo">Polo</option>
                                <option value="Adidas">Adidas</option>
                                <option value="Mufti">Mufti</option>
                            </select>
                        </div>
                        <div className='col-md-3 col-sm-6 col-12'>
                            <label className="form-label">Stock</label>
                            <select name='stock' onChange={getData} className='form-select'>
                                <option value="In Stock">In Stock</option>
                                <option value="Out Of Stock">Out Of Stock</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-sm-6 col-12'>
                            <label className="form-label">Color</label>
                            <input type="text" className="form-control" onChange={getData} name="color" placeholder='Enter Product Color' />
                        </div>
                        <div className='col-sm-6 col-12'>
                            <label className="form-label">Size</label>
                            <input type="text" className="form-control" onChange={getData} name="size" placeholder='Enter Product Size' />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-sm-6 col-12'>
                            <label className="form-label">Base Price</label>
                            <input type="number" className="form-control" onChange={getData} name="baseprice" placeholder='Enter Product Color' />
                        </div>
                        <div className='col-sm-6 col-12'>
                            <label className="form-label">Discount</label>
                            <input type="number" className="form-control" onChange={getData} name="discount" min={0} max={100} placeholder='Enter Product Size' />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea name='description' onChange={getData} rows={5} className="form-control">This is Sample Product</textarea>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-sm-6 col-12'>
                            <label className="form-label">Pic1</label>
                            <input type="file" className="form-control" onChange={getFile} name="pic1" />
                        </div>
                        <div className='col-sm-6 col-12'>
                            <label className="form-label">Pic2</label>
                            <input type="file" className="form-control" onChange={getFile} name="pic2" />
                        </div>
                        <div className='col-sm-6 col-12'>
                            <label className="form-label">Pic3</label>
                            <input type="file" className="form-control" onChange={getFile} name="pic3" />
                        </div>
                        <div className='col-sm-6 col-12'>
                            <label className="form-label">Pic4</label>
                            <input type="file" className="form-control" onChange={getFile} name="pic4" />
                        </div>
                    </div>
                    <button type="submit" className="btn background text-light w-100">Add</button>
                </form>
            </div>
        </div>
    )
}
