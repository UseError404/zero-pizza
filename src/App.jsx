import './App.css'
import './assets/scss/app.scss'
import {Header} from "./components/index.jsx";
import {Home} from "./pages/index.jsx";

function App() {

    return (
        <div className="wrapper">
           <Header/>
           <Home/>
        </div>
    )
}

export default App
