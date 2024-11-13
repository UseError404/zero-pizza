import {Button} from "../index.jsx";
import React from "react";

function PizzaBlock({name, imageUrl, price, types, sizes}) {

    const typeNames = ['тонкое', 'традиционное'];
    const [activeType, setActiveType] = React.useState(types[0]);
    const onSelectTypes = (index) => {
        setActiveType(index)
    }

    const [activeSize, setActiveSize] = React.useState(0)
    const onSelectSizes = (index) => {
        setActiveSize(index)
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((typeId) => (
                        <li key={typeId}
                            onClick={() => onSelectTypes(typeId)}
                            className={activeType === typeId ? 'active' : ''}>
                            {typeNames[typeId]}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((size, index) => (
                        <li key={index}
                            onClick={()=>onSelectSizes(index)}
                            className={activeSize === index ? 'active' : ''}>
                            {size} см.</li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{price} $</div>
                <Button/>
            </div>
        </div>
    );
}

export default PizzaBlock;