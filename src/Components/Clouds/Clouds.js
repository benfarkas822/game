import React from 'react';
import './Clouds.scss'

const Clouds = (props) => {
    return (
        <div className="clouds">
            <div
                className='wrapper absolute top-0 left-0 bottom-0 right-0 flex-col justify-around overflow-y-hidden'>
                <div className="cloud large cloud-1">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="cloud normal secondary cloud-2">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="cloud normal cloud-17 secondary">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="cloud small cloud-3">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="cloud tiny cloud-4 secondary">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="cloud large cloud-5">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="cloud large secondary cloud-18">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="cloud normal cloud-6">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="cloud small cloud-7">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="cloud tiny cloud-8">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="cloud small cloud-9">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="cloud normal cloud-10">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="cloud tiny cloud-11 secondary">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="cloud small cloud-12">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="cloud large cloud-13">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="cloud large cloud-14">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="cloud large cloud-15 secondary">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="cloud large cloud-16">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
            {props.children}
        </div>
    );
};

export default Clouds;