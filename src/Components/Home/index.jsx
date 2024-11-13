import {Sort, Categories, PizzaBlock} from "../index.jsx";

function Home() {
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    <PizzaBlock/>
                </div>
            </div>
        </div>
    );
}

export default Home;