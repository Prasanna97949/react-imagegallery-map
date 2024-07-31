import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import one from "./images/copper-mustrad.jpg"
import two from "./images/crown-tail.jpg"
import three from "./images/dumbo-ear.jpg"
import four from "./images/fullmoon-red.jpg"
import five from "./images/hell-boy.jpg"
import six from "./images/mustrad-gas.jpg"
import seven from "./images/nemo-galaxy.jpg"
import eight from "./images/redsnow-dragon.jpg"
import Header from './components/header';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Gallery(props){
    return(
            <div class="container">

        <div class="image">
            <img src={props.image} alt="loading error"/>
            <h3>{props.con}</h3>
        </div>

        </div> 
    )
}
var card = [
    {
        image:one,
        con:"Copper Mustrad"
    },
    {
        image:two,
        con:"Crown Tail"
    },
    {
        image:three,
        con:"Dumbo Ear"
    },
    {
        image:four,
        con:"Full Moon Red"
    },
    {
        image:five,
        con:"Hell Boy"
    },
    {
        image:six,
        con:"Mustrad Gas"
    },
    {
        image:seven,
        con:"Nemo Galaxy"
    },
    {
        image:eight,
        con:"Red Snow Dragon"
    }
]

root.render(
<div>
    <Header></Header>
    <div class="cont">
    {
        card.map(function(item){
            return<Gallery image={item.image} con={item.con}></Gallery>
        })
    }
    </div>
    <Footer></Footer>
</div>);

