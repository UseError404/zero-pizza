import React from "react";
import {Sort, Categories, PizzaBlock, Skeleton} from "../../components/index.jsx";

// Array for skeleton
const arraySkeleton = new Array(8).fill(0);

function Home() {
    // Get data
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        fetch('https://673607b65995834c8a951d71.mockapi.io/items')
            .then(res => {
                return res.json()
            })
            .then(json => {
                setPizzas(json);
                setIsLoading(false);

            })
    }, [])

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading
                        ? [...new Array(8)].map((_, i) => (<Skeleton key={i}/>))
                        : pizzas.map((obj) => (<PizzaBlock key={obj.id} {...obj}/>))
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;