import './App.css';
import {useState} from "react";
import Falling from "./Containers/Falling/Falling";

const App = () => {
    const [activeView, setActiveView] = useState('falling');

    const view = {
        'falling': <Falling setActiveView={setActiveView}/>

    }

    return (
        <div className="App">
            {view[activeView]}
        </div>
    );
}

export default App;
