import React from 'react';
import Card from "../../Components/Card/Card";
import Banner from "../../Components/Banner/Banner";
import Button from "../../Components/Button/Button";
import classes from "./Exit.module.scss";

const Exit = (props) => {
    return (
        <div className='flex justify-around min-h-screen'>
            <div className="flex my-10 ml-20 mb-32">
                <Card>
                    <div className="flex flex-col m-10 max-w-[600px]">
                        <Banner color={'green'}>Játék vége</Banner>
                        <div className="mx-auto mt-8 text-left">
                            <p className={'text-3xl font-bold mb-12'}>Köszönöm a segítséged!</p>
                            <p className={'text-3xl font-bold mb-12'}>Sikeresen megfőzted a tökéletes főzetet!</p>
                        </div>
                        <div className="mx-auto mt-32">
                            <Button text={'Vissza'} click={() => props.setActiveScreen('game')}/>
                        </div>

                    </div>
                </Card>

            </div>
        </div>
    );
};

export default Exit;
