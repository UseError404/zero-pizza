import React from "react";
import {Sort, Categories, PizzaBlock, Skeleton, Pagination} from "../../components/index.jsx";
import {SearchContext} from "../../App.jsx";

// Array for skeleton
const arraySkeleton = new Array(8).fill(0);

function Home() {
    const {searchValue} = React.useContext(SearchContext);

    // Get data
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({name: 'популярности', sortProperty: 'rating'});

    //Pagination
    const [currentPage, setCurrentPage] = React.useState(1);


    React.useEffect(() => {
        setIsLoading(true);

        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sort = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        const search = searchValue ? `&search=${searchValue}` : '';


        fetch(`https://673607b65995834c8a951d71.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort}&order=${order}${search}`,
        )
            .then(res => {
                return res.json()
            })
            .then(json => {
                setPizzas(json);
                setIsLoading(false);
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType, searchValue, currentPage])


    /* const pizzaItems = pizzas.filter(obj => {
             return !!obj.name.toLowerCase().includes(searchValue.toLowerCase());
         }
     ).map((obj) => (<PizzaBlock key={obj.id} {...obj}/>));*/ //Поиск для статического количесва данных
    const pizzaItems = pizzas.map((obj) => (<PizzaBlock key={obj.id} {...obj}/>));
    const skeleton = [...new Array(8)].map((_, i) => (<Skeleton key={i}/>));
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories category={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
                    <Sort sortType={sortType} onClickSort={(id) => setSortType(id)}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading ? skeleton : pizzaItems}
                </div>
                <Pagination setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    );
}

export default Home;