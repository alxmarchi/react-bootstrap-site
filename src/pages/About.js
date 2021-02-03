import React from 'react';
import { Container } from 'react-bootstrap';
import CarouselBoxAbout from '../components/CarouselBoxAbout'
import Gallery from '../components/Gallery'
import { Map } from 'react-yandex-maps';

const About =() =>{
    return (
        <> 
        <h1 className="m-5">Информация о компании</h1>
    <CarouselBoxAbout></CarouselBoxAbout>
    <div className="m-5">
    <p>Sydler Remedies Pvt. Ltd. — Группа компаний Sydler — это ведущий производитель и экспортёр#nbsp; высококачественных и надежных лекарственных форм, фитопрепаратов, БАДов и пищевых добавок#nbsp;, а также нутрицевтиков, которые удовлетворяют взыскательные требования рынка по всему миру.</p>
    <h3 className="m-4">Сертификаты</h3>
    <Gallery/>
    <h3 className="m-4">Контакты</h3>
    <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
    
    </div>
    
    

</>
    )
}

export default About