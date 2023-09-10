import React from 'react'
import banner1 from "../assets/images/banner1.jpg"
import banner2 from "../assets/images/banner2.jpg"
import banner3 from "../assets/images/banner3.jpg"
import banner4 from "../assets/images/banner4.jpg"
import banner5 from "../assets/images/banner5.jpg"
import banner6 from "../assets/images/banner6.jpg"
import banner7 from "../assets/images/banner7.jpg"
import banner8 from "../assets/images/banner8.jpg"
import banner9 from "../assets/images/banner9.jpg"
import ProductList from './ProductList'
export default function Home() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100" height="500px" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100" height="500px" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100" height="500px" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner4} className="d-block w-100" height="500px" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner5} className="d-block w-100" height="500px" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner6} className="d-block w-100" height="500px" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner7} className="d-block w-100" height="500px" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner8} className="d-block w-100" height="500px" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner9} className="d-block w-100" height="500px" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h5 className='heading'>Latest Products Section</h5>
            <ProductList mc="All" sc="All" br="All"/>
        </>
    )
}