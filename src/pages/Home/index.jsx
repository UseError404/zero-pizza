import React from "react";
import {Sort, Categories, PizzaBlock, Skeleton} from "../../components/index.jsx";

// Array for skeleton
const arraySkeleton = new Array(8).fill(0);

function Home() {
    // Get data
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({name: 'популярности', sortProperty: 'rating'});

    console.log(categoryId, sortType)


    React.useEffect(() => {
        setIsLoading(true);
        fetch(`https://673607b65995834c8a951d71.mockapi.io/items?${
            categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortType.sortProperty}&order=desc`,
        )
            .then(res => {
                return res.json()
            })
            .then(json => {
                setPizzas(json);
                setIsLoading(false);
            })
        window.scrollTo(0, 0)
    }, [categoryId,sortType])

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories category={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
                    <Sort sortType={sortType} onClickSort={(id) => setSortType(id)}/>
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