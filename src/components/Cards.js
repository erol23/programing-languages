import './Cards.css';
import { useState } from 'react';


const Cards = ({ name, img, options}) => {

    const [click, setClick] = useState(true)

    const handleClick = () => {
        setClick(!click);
    }
    return (
        <div>
            <div onClick={handleClick}>
                {click ? 
                <div className="card" >
                    <img src={img} alt={name} className="card-img"/>
                    <h3 className="card-name">{name}</h3>
                </div>:
                <div className="card">
                    <ul>
                        {options.map((element, index) => (
                            <li key={index}>{element}</li>
                        ))}
                    </ul>
                </div>
                }
            </div> 
        </div>  
    )
}

export default Cards;