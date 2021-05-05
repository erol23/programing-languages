import './Cards.css';
import { categories } from '../helper/data';
import { useState } from 'react';
import logo from "../assets/react.svg";


const Cards = () => {

    const [click, setClick] = useState(true)

    const handleClick = () => {
        setClick(!click);
    }
    return (
        <div>
            <img src={logo} className="react-img"/>
        <div className="card-container">
            
            {categories.map((card) => {
                return (
                    <div className="cards" onClick={handleClick}>
                        {click ? 
                        <div className="card">
                            <img src={card.img} alt={card.name} className="card-img"/>
                            <h3 className="card-name">{card.name}</h3>
                        </div>:
                        <div className="card">
                            <ul>{card.options}</ul>
                        </div>
                            
                        }
                    </div>   
                )
            })}
        </div>
        </div>
    );
}

export default Cards;