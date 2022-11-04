import React, {useState} from 'react';
import './Score.scss';
import Counter from "../../../Components/Counter/Counter";

const Score = (props) => {
    const [flow, setFlow] = useState(0);

    const liquidFlow = () => {
        if (flow > 0) {
            setFlow(flow - 20)
        } else {
            setFlow(0)
        }
    }
    requestAnimationFrame(liquidFlow);
    return (
        <div id="score">
            <Counter>
                {props.score}
            </Counter>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 900">
                <defs>
                    <linearGradient id="liquidGrad" x1="557" y1="150" x2="557" y2="546" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#50F442"/>
                        <stop offset="0.2" stopColor="#50F442"/>
                        <stop offset="0.5" stopColor="#50F442"/>
                        <stop offset="1" stopColor="#9050E2"/>
                    </linearGradient>
                    <rect id="tube" x="357" y="150" width="86" height="400" rx="43" ry="43"/>
                    <clipPath id="liquidMask">
                        <use xlinkHref="#tube" className="liquidMask"/>
                    </clipPath>
                    <clipPath id="tubeMask">
                        <use xlinkHref="#tube" className="liquidMask"/>
                    </clipPath>
                    <path id="liquid" transform={`matrix(1,0,0,1,-200,-${props.score})`}
                          d="M757,552v490H357V552c50,0,50,20,100,20s50-20,100-20,50,20,100,20S707,552,757,552Z">
                        {props.score < 150 ? <animateTransform attributeName="transform" keyTimes="0;  1"
                                                               type='translate'
                                                               from={`0,-${props.score * 2.8}`}
                                                               to={`-200,-${props.score * 2.8}`}
                                                               dur="5s" repeatCount="indefinite"/> :
                            <animateTransform attributeName="transform" keyTimes="0;  1"
                                              type='translate'
                                              from={`0,-420`}
                                              to={`-200,-420`}
                                              dur="5s" repeatCount="indefinite"/>}
                        />
                    </path>
                    <mask id="gradMask">

                        <use xlinkHref="#liquid" className="liquid" x='0' fill="#EAEAEA"/>


                    </mask>
                </defs>


                <g className="whole" transform="translate(0, 40)">

                    <use xlinkHref="#tube" className="tubeBg" fill="#EAEAEA" opacity="0.61"/>


                    <g mask="url(#gradMask)">
                        <use xlinkHref="#tube" fill="url(#liquidGrad)"/>
                    </g>
                    <line className="tubeShine" x1="371" y1="200" x2="371" y2="443" fill="none" stroke="#FFF"
                          strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" opacity="0.21"
                          strokeDasharray="153 30" strokeDashoffset="-20"/>
                    <g className="measurements" fill="none" stroke="#FCEFD6" strokeWidth="3" strokeLinecap="round"
                       opacity="1">
                        <line x1="358" y1="196" x2="370" y2="196"/>
                        <line x1="358" y1="234" x2="370" y2="234"/>
                        <line x1="358" y1="273" x2="370" y2="273"/>
                        <line x1="358" y1="311" x2="370" y2="311"/>
                        <line x1="358" y1="350" x2="370" y2="350"/>
                        <line x1="358" y1="388" x2="370" y2="388"/>
                        <line x1="358" y1="426" x2="370" y2="426"/>
                        <line x1="358" y1="465" x2="370" y2="465"/>
                        <line x1="358" y1="503" x2="370" y2="503"/>
                    </g>

                    <circle className="follower" cx="400" cy="540" r="0" fill="#62B6CB" fillOpacity="1"
                            stroke="#FCEFD6"
                            strokeWidth="0"/>
                </g>
            </svg>

        </div>


    );
};

export default Score;
