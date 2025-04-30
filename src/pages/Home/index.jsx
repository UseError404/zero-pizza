import React from "react";
import qs from "qs";
import axios from "axios";

import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {selectFilter, setCategoryId, setCurrentPage, setFilters} from '../../redux/slices/filterSlice.js';
import {fetchPizzas, selectPizzaData} from "../../redux/slices/pizzaSlice.js";

import {Sort, Categories, PizzaBlock, Skeleton, Pagination} from "../../components/index.jsx";
import {arrPopup} from "../../components/Sort/index.jsx";


function Home() {
    const navigate = useNavigate();
    const isSearch = React.useRef(false);
    const isMounted = React.useRef(false);

    // Get data
    // const [isLoading, setIsLoading] = React.useState(true);
    const {items, status} = useSelector(selectPizzaData);
    const isLoading = status === 'loading';

    // Sort
    const dispatch = useDispatch();
    const {categoryId, sort, currentPage, searchValue} = useSelector(selectFilter);
    const sortType = sort.sortProperty;


    // Pagination
    const onChangePage = (number) => {
        dispatch(setCurrentPage(number))
    }

// Если был первый рендер, то проверяем URL-параметры и сохраняем в redux
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
    const axiosPizzas = async () => {
        // setIsLoading(true);

        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sort = sortType.replace('-', '');
        const order = sortType.includes('-') ? 'asc' : 'desc';
        const search = searchValue ? `&search=${searchValue}` : '';

        dispatch(fetchPizzas({
            category,
            sort,
            order,
            search,
            currentPage
        }));
        window.scrollTo(0, 0);
    }
    React.useEffect(() => {
        window.scrollTo(0, 0);
        if (!isSearch.current) {
            axiosPizzas();
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


    const pizzaItems = items.map((obj) => (<PizzaBlock key={obj.id} {...obj}/>));
    const skeleton = [...new Array(8)].map((_, i) => (<Skeleton key={i}/>));


    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories category={categoryId} onClickCategory={(id) => dispatch(setCategoryId(id))}/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                {
                    status === 'error' ?
                        (<div>Пицц нет в наличии 😕</div>) :
                        (<div className="content__items">
                                {isLoading ? skeleton : pizzaItems}
                            </div>
                        )
                }
                <Pagination value={currentPage} setCurrentPage={onChangePage}/>
            </div>
        </div>
    );
}

export default Home;