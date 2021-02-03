import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Map } from 'react-yandex-maps';
import { Container} from 'react-bootstrap';

const Contacts =() =>{
    return (
<div>
    <h1>Сеть аптек в вашем городе:</h1>
    
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Санкт-Петербург и ЛО">
  <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
  </Tab>
  <Tab eventKey="NINO" title="Нижнегородская область">
  <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
  </Tab>
  <Tab eventKey="archangelsk" title="Архангельская область" >
  <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
     </Tab>
    <Tab eventKey="novgorod" title="Новгородская область" >
    <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
  </Tab>
 
</Tabs>

</div>
    )
}

export default Contacts