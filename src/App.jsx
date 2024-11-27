import React from "react";
import './App.css'
import './assets/scss/app.scss'
import {Header} from "./components/index.jsx";
import {Cart, Home, NotFound} from "./pages/index.jsx";
import {Route, Routes} from "react-router-dom";

export const SearchContext = React.createContext();

function App() {
    const [searchValue, setSearchValue] = React.useState('');

    return (
        <div className="wrapper">
            <SearchContext.Provider value={{searchValue, setSearchValue}}>
            <Header/>
            <Routes>
                <Route path='/zero-pizza/' element={<Home/>}/>
                <Route path='/zero-pizza/cart/' element={<Cart/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </SearchContext.Provider>
</div>
)
}

export default App
