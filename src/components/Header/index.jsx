import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Search} from "../index.jsx";
import './style.scss';

import logo from '../../assets/img/pizza-logo.svg';
import cart from '../../assets/img/cart.svg';

function Header() {
    const {totalPrice, items} = useSelector(state => state.cart)
    const itemCount = items.reduce((sum,item) => sum + item.count, 0);
    return(
        <div className="header">
            <div className="container">
                <Link to='/zero-pizza/'>
                    <div className="header__logo">
                        <img width="38" src={logo} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                <Search/>
                <div className="header__cart">
                    <Link to="/zero-pizza/cart/" className="button button--cart">
                        <span>{totalPrice} ₽</span>
                        <div className="button__delimiter"></div>
                        <img className="cart-svg" src={cart} alt="cart"/>
                        <span>{itemCount}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;