import React from "react";
import {useSelector, useDispatch} from "react-redux";
import qs from "qs";
import {useNavigate} from "react-router-dom";

import {setCategoryId, setCurrentPage, setFilters} from '../../redux/slices/filterSlice.js'
import {Sort, Categories, PizzaBlock, Skeleton, Pagination} from "../../components/index.jsx";
import {SearchContext} from "../../App.jsx";
import axios from "axios";
import {arrPopup} from "../../components/Sort/index.jsx";


function Home() {
    const {searchValue} = React.useContext(SearchContext);
    const navigate = useNavigate();
    const isSearch = React.useRef(false);
    const isMounted = React.useRef(false);
    // Get data
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    // Sort
    const dispatch = useDispatch();
    const {categoryId, sort, currentPage} = useSelector(state => state.filter);
    const sortType = sort.sortProperty;

    // Pagination
    const onChangePage = (number) => {
        dispatch(setCurrentPage(number))
    }

// Если был первый рендер, то проверяем UKL-параметры и сохраняем в redux
    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sort = arrPopup.find(obj => obj.sortProperty === params.sortProperty)
            dispatch(setFilters({...params, sort}));
            isSearch.current = true;
        }
    }, [])

    // Запрос на палучение данных
    // Сортировка по категориям
    // Отображение по панигации
//Если был первый рендер, то получаем данные
    const fetchPizzas = () => {
        setIsLoading(true);

        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sort = sortType.replace('-', '');
        const order = sortType.includes('-') ? 'asc' : 'desc';
        const search = searchValue ? `&search=${searchValue}` : '';

        axios.get(`https://673607b65995834c8a951d71.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort}&order=${order}${search}`)
            .then(res => {
                    setPizzas(res.data)
                    setIsLoading(false);
                }
            )
    }
    React.useEffect(() => {
        window.scrollTo(0, 0);
        if (!isSearch.current) {
            fetchPizzas();
        }
        isSearch.current = false;
    }, [categoryId, sortType, searchValue, currentPage])


    // Отображение URL с сортировкой
    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sortType,
                categoryId,
                currentPage,
            });
            navigate(`?${queryString}`)
        }
        isMounted.current = true;
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
                    <Categories category={categoryId} onClickCategory={(id) => dispatch(setCategoryId(id))}/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading ? skeleton : pizzaItems}
                </div>
                <Pagination value={currentPage} setCurrentPage={onChangePage}/>
            </div>
        </div>
    );
}

export default Home;