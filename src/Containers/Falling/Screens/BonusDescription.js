import React from 'react';
import Button from "../../../Components/Button/Button";
import Card from "../../../Components/Card/Card";
import Banner from "../../../Components/Banner/Banner";
import classes from "./BonusDescription.module.scss";

const TruthDescription = (props) => {
    return (
        <div className='flex justify-around min-h-screen'>
            <div className="flex my-10 ml-20 mb-32">
                <Card>
                    <div className="flex flex-col m-10">
                        <Banner color={'blue'}>Játék</Banner>
                        <div className="pt-4 font-bold max-w-[600px] text-left text-3xl">
                            <p className="my-5">Ebben a játékban el
                                kell kapnod a véletlenszerűen lehulló tárgyakat az üstöddel, így elkészítve a
                                Halloween-t megmentő főzetet!</p>
                            <p className="my-5">Vigyázz a pókokkal, ha négyet összeszedsz belőlük
                                sajnos vége a játéknak!</p>
                            <p className="my-5">Készen állsz? Akkor kezdjünk bele a kotyvasztásba!</p>
                        </div>
                        <div className=" mx-auto mt-44">
                            <Button text={'Start'} click={() => props.setActiveScreen('game')}/>
                        </div>

                    </div>

                </Card>
            </div>
        </div>
    );
};

export default TruthDescription;
