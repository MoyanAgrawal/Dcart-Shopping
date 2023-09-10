import React from 'react'
import { Link,useParams } from 'react-router-dom'
import ProductList from './ProductList'

export default function Shop() {
    var {mc,br,sc} = useParams()
    return (
        <div className='row'>
            <div className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <h5 className='heading'>Menu</h5>
                <div className="list-group">
                   <h6 className='p-2 rounded heading'>Main-Category</h6>
                    <Link to={`/shop/All/${sc}/${br}`} className="list-group-item list-group-item-action">All</Link>
                    <Link to={`/shop/Male/${sc}/${br}`} className="list-group-item list-group-item-action">Male</Link>
                    <Link to={`/shop/Female/${sc}/${br}`} className="list-group-item list-group-item-action">Female</Link>
                    <Link to={`/shop/Kids/${sc}/${br}`} className="list-group-item list-group-item-action">Kids</Link>
                </div>
                <div className="list-group">
                   <h6 className='p-2 rounded heading'>Sub-Category</h6>
                    <Link to={`/shop/${mc}/All/${br}`} className="list-group-item list-group-item-action">All</Link>
                    <Link to={`/shop/${mc}/Tshirt/${br}`} className="list-group-item list-group-item-action">Tshirt</Link>
                    <Link to={`/shop/${mc}/Shirt/${br}`} className="list-group-item list-group-item-action">Shirt</Link>
                    <Link to={`/shop/${mc}/Jeans/${br}`} className="list-group-item list-group-item-action">Jeans</Link>
                    <Link to={`/shop/${mc}/Trouser/${br}`} className="list-group-item list-group-item-action">Trouser</Link>
                </div>
                <div className="list-group">
                   <h6 className='p-2 rounded heading'>Brands</h6>
                    <Link to={`/shop/${mc}/${sc}/All`} className="list-group-item list-group-item-action">All</Link>
                    <Link to={`/shop/${mc}/${sc}/Adidas`} className="list-group-item list-group-item-action">Adidas</Link>
                    <Link to={`/shop/${mc}/${sc}/Nike`} className="list-group-item list-group-item-action">Nike</Link>
                    <Link to={`/shop/${mc}/${sc}/Polo`} className="list-group-item list-group-item-action">Polo</Link>
                    <Link to={`/shop/${mc}/${sc}/Tommy Hilfiger`} className="list-group-item list-group-item-action">Tommy Hilfiger</Link>
                    <Link to={`/shop/${mc}/${sc}/HRX`} className="list-group-item list-group-item-action">HRX</Link>
                    <Link to={`/shop/${mc}/${sc}/Mufti`} className="list-group-item list-group-item-action">Mufti</Link>
                </div>
            </div>
            <div className='col-xxl-11 col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                <h5 className='heading'>Shop Component</h5>
                <ProductList  mc={mc} sc={sc} br={br}/>
            </div>
        </div>
    )
}
