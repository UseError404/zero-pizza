import './App.css'
import './assets/scss/app.scss'
import {Header, Home} from "./Components/index.jsx";

function App() {
    return (
        <div className="wrapper">
           <Header/>
           <Home/>
        </div>
    )
}

export default App
