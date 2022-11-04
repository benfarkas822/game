import React, {useState} from 'react';
import Clouds from "../../Components/Clouds/Clouds";
import Button from "../../Components/Button/Button";
import BonusDescription from "./Screens/BonusDescription";
import BonusGame from "./Screens/BonusGame";
import Exit from "../Exit/Exit";
import Retry from "../Retry/Retry";

const Falling = (props) => {
    const [activeScreen, setActiveScreen] = useState('description');

    const screens = {
        'description': <BonusDescription setActiveScreen={setActiveScreen}/>,
        'game': <BonusGame setActiveScreen={setActiveScreen}/>,
        'exit': <Exit setActiveScreen={setActiveScreen}/>,
        'retry': <Retry setActiveScreen={setActiveScreen}/>,
    }
    return (
        <div>
            <Clouds>
                <div className="container mx-auto ">
                    {screens[activeScreen]}
                </div>
            </Clouds>
        </div>
    );
};

export default Falling;
