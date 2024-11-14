import React from "react";
import {Sort, Categories, PizzaBlock} from "../../components/index.jsx";

function Home() {
    // Get data
    const [pizzas, setPizzas] = React.useState([])
    React.useEffect(() => {
        fetch('https://673607b65995834c8a951d71.mockapi.io/items')
            .then(res => {
                return res.json()
            })
            .then(json => {
                setPizzas(json);
            })
    }, [])

    console.log(pizzas)
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">

                    {pizzas.map((obj) => (<PizzaBlock key={obj.id} {...obj}/>))}
                </div>
            </div>
        </div>
    );
}

export default Home;