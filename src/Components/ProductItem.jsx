import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductItem(props) {
    return (
        <div className="card">
            <Link to={"/single-product/"+props.id}><img src={props.pic} height="300px" className="card-img-top" alt="..." /></Link>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Price &#8377;<del>{props.baseprice}</del><sub> {props.finalprice}</sub></p>
                <p className="card-text">Discount {props.discount}%</p>
            </div>
        </div>
    )
}
