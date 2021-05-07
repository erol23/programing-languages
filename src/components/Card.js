import Cards from "./Cards";
import { categories } from '../helper/data';
import logo from "../assets/react.svg";

const Card = () => {
    return (
        <div>
            <img src={logo} className="react-img"/>
            <div className="card-container">
                <div className="small-card-div" >
                    {
                        categories.map((element) => (
                            <Cards name={element.name}
                                img={element.img}
                                options={element.options}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Card;