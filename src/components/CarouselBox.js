import React from 'react';
import Carousel from "react-bootstrap/Carousel"
import orange from "../assets/images/banner-orange.jpg"
import yellow from "../assets/images/banner-limon.jpg"
import green from "../assets/images/banner-mint.jpg"
import red from "../assets/images/banner-strawberry.jpg"
import './CarouselBox.css'
export default function CarouselBox() {
    return (
        <Carousel>
           <Carousel.Item>
                <img
                className="d-block w-100 h-20"
                src={orange}
                alt="Нетангин фито со вкусом апельсина"
                />
               <div className="carousel-caption text-right">
                    <h2 className="font-weight-bold">НЕТАНГИН ФИТО*</h2>
                    <p>Пастилки для горла</p>
                </div>
            </Carousel.Item> 
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={yellow}
                alt="Нетангин фито со вкусом имбиря и лимона"
                />
                <Carousel.Caption>
                    <h2>НЕТАНГИН ФИТО*</h2>
                    <p>Пастилки для горла</p>
                </Carousel.Caption>
            </Carousel.Item> 
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={red}
                alt="Нетангин фито со вкусом клубники"
                />
                <Carousel.Caption>
                    <h2>НЕТАНГИН ФИТО*</h2>
                    <p>Пастилки для горла</p>
                </Carousel.Caption>
            </Carousel.Item> 
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={green}
                alt="Нетангин фито со вкусом мяты"
                />
                <Carousel.Caption>
                    <h2>НЕТАНГИН ФИТО*</h2>
                    <p>Пастилки для горла</p>
                </Carousel.Caption>
            </Carousel.Item> 
        </Carousel>

    )
}