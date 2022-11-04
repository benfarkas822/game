import React, {useCallback, useEffect, useRef, useState} from 'react';
import {createItem, InBasket, removeItem, SPAWN_INTERVAL, SPEED_STEP} from "../Utils/Utils";
import Items from "../Components/Items";
import classes from './BonusGame.module.scss'
import Score from "../Components/Score";
import Lives from "../Components/Lives";
import {hearts} from "../../../Config/bonusConfig";

const BonusGame = (props) => {
    const [items, updateItems] = useState([]);
    let [score, setScore] = useState(0)
    const [controlState, setControlState] = useState(1);
    let [speed, setSpeed] = useState(SPEED_STEP);
    let [spawn, setSpawn] = useState(SPAWN_INTERVAL);
    const [gameLife, setGameLife] = useState([...hearts])
    let [life, setLife] = useState(1);

    const [coords, setCoords] = useState({x: 0, y: 0});

    const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleWindowMouseMove = event => {
            setGlobalCoords({
                x: event.screenX,
                y: event.screenY,
            });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleWindowMouseMove);
        };
    }, []);

    const handleMouseMove = event => {
        setCoords({
            x: event.clientX - 250,
            y: event.clientY,
        });
    };

    const spawnDot = useCallback(() => {
        updateItems((oldItems) => [...oldItems, createItem()]);
    }, [updateItems]);
    const fieldRef = useRef();
    const intervalRef = useRef();

    const requestRef = useRef();
    const advanceStep = useCallback(() => {
        updateItems((oldItems) => {
            const newItems = [];
            for (let item of oldItems) {
                const newY = item.y + speed;
                if (newY <= fieldRef.current.offsetHeight) {
                    if (!InBasket(item)) {
                        newItems.push(
                            {
                                ...item,
                                y: newY,
                            }
                        );
                    } else {
                        setStats(item)
                    }
                }
            }
            return newItems;
        });
        requestRef.current = requestAnimationFrame(advanceStep);
    }, [speed, updateItems]);

    useEffect(() => {
        const stop = () => {
            intervalRef.current &&
            clearInterval(intervalRef.current);
            requestRef.current &&
            cancelAnimationFrame(requestRef.current);
        }
        intervalRef.current = setInterval(
            spawnDot, spawn
        );
        requestRef.current = requestAnimationFrame(advanceStep);

        return () => stop();
    }, [controlState.isRunning, advanceStep, spawnDot])

    const setStats = item => {
        setScore(score += item.item.pointValue);
        if (score >= 150) {
            props.setActiveScreen('exit');
        }
        if (speed < 10 || item.item.speedModifier < 1) {
            setSpeed(speed = speed * item.item.speedModifier);
        }
        if (spawn > 300 || item.item.speedModifier < 1) {
            setSpawn(spawn = spawn / item.item.speedModifier);
        }
        if (item.item.isDanger) {
            setGameLife(gameLife
                .map((heart) => heart.id === life
                    ? {id: heart.id, isFilled: !heart.isFilled}
                    : {id: heart.id, isFilled: heart.isFilled}
                ))
            setLife(life = life + 1)
            console.log(life)
            if (life === 5) {
                props.setActiveScreen('retry');
            }
        }
    }


    return (
        <div className="main overflow-hidden flex items-end">
            <div className={classes["field"]} ref={fieldRef} onMouseMove={handleMouseMove}>
                {items.map((item, index) => {
                    const x = (
                        fieldRef.current.offsetWidth - 220
                    ) * item.x / 100;
                    return <Items
                        key={`dot-${index}`}
                        img={item.item.img}
                        id={item.id}
                        x={x}
                        y={item.y}
                        index={index}
                        onClick={() => {
                        }}
                    />;
                })}
                <div id='basket' className={'absolute w-[220px] h-[180px]'}
                     style={{bottom: '0', left: coords.x}}>
                    <img
                        src={`assets/images/games/bonus/cauldron.png`}
                        alt="" className={'absolute max-w-[220px] z-10'}/>
                </div>
            </div>
            <Score score={score}/>
            <Lives lives={gameLife}/>

        </div>
    );
};

export default BonusGame;
