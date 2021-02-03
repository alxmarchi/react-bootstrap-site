import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Production from "./pages/Production";
import Offers from "./pages/Offers";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer"
import { YMaps } from 'react-yandex-maps';
import Product from "./pages/Product";

function App() {
  return (
    <>
    <BrowserRouter>
    <YMaps>
      <Header>
        
        </Header>
        
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/production" component={Production} />
            <Route path="/offers" component={Offers} />
            <Route path="/contacts" component={Contacts} />
            

          </Switch>
          <Footer>

          </Footer>
          </YMaps>
          </BrowserRouter>
    </>
  );
}

export default App;
