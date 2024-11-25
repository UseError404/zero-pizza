import React from "react";
import './App.css'
import './assets/scss/app.scss'
import {Header} from "./components/index.jsx";
import {Cart, Home, NotFound} from "./pages/index.jsx";
import {Route, Routes} from "react-router-dom";

function App() {
const [searchValue, setSearchValue] = React.useState('');
console.log(searchValue)
    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
            <Routes>
                <Route path='/zero-pizza/' element={<Home searchValue={searchValue}/>}/>
                <Route path='/zero-pizza/cart/' element={<Cart/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    )
}

export default App
