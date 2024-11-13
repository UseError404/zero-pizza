import {Sort, Categories, PizzaBlock} from "../../components/index.jsx";
import pizzas from '../../../public/db.json'

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

                    {pizzas.map((obj)=>(<PizzaBlock key={obj.id} {...obj}/>))}
                </div>
            </div>
        </div>
    );
}

export default Home;