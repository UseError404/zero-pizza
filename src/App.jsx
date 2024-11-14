import './App.css'
import './assets/scss/app.scss'
import {Header} from "./components/index.jsx";
import {Cart, Home} from "./pages/index.jsx";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <div className="wrapper">
            <Header/>
            <Routes>
                <Route path='/zero-pizza/' element={<Home/>}/>
                <Route path='/zero-pizza/cart/' element={<Cart/>}/>
            </Routes>
        </div>
    )
}

export default App
