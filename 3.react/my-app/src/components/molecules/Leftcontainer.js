import React from 'react';
import NewsStand from './newsStand';
import Shopping from './Shopping';

function Leftcontainer() {
    return (
        <React.Fragment>
            <div className="left-container section">
                <div className="left-container-content">
                    <div className="left-container-content-item newsstand">
                        <NewsStand />
                    </div>
                </div>
                <div className="left-container-content">
                    <Shopping />
                </div>
                <div className="left-container-content">왼쪽3</div>
                <div className="left-container-content">왼쪽4</div>
                <div className="left-container-content">왼쪽5</div>
            </div>
        </React.Fragment>
    );
}
export default Leftcontainer;
