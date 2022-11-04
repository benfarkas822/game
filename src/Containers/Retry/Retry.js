import React from 'react';
import Card from "../../Components/Card/Card";
import Banner from "../../Components/Banner/Banner";
import Button from "../../Components/Button/Button";
import classes from "./Retry.module.scss";

const Exit = (props) => {
    return (
        <div className='flex justify-around min-h-screen'>
            <div className="flex my-10 ml-20 mb-32">
                <Card>
                    <div className="flex flex-col m-10 max-w-[600px]">
                        <Banner color={'red'}>Játék vége</Banner>
                        <div className="mx-auto mt-8 text-left">
                            <p className={'text-3xl font-bold mb-12'}>Köszönöm a segítséged!</p>

                            <p className={'text-3xl font-bold mb-12'}>Sajnos most nem sikerült elkészíteni a tökéletes
                                főzetet. Ha van kedved hozzá, vagy próbáld újra!</p>
                        </div>
                        <div className="flex justify-center mt-20">
                            <Button text={'Újra'} click={() => props.setActiveScreen('game')}/>
                        </div>
                    </div>
                </Card>
                <div className={'z-0 ' + classes['wrapper']}>
                </div>
            </div>
        </div>
    );
};

export default Exit;
