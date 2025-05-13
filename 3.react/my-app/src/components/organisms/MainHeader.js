import React from 'react';
import Toplinkarea from '../molecules/Toplinkarea';
import Searcharea from '../molecules/Searcharea';
import Shortcutarea from '../molecules/Shortcutarea';



function MainHeader() {

    
    return (
        <React.Fragment>
            <header>
                <div className="topwrapper">
                    <div className="header-container">
                        <Toplinkarea />
                        <Searcharea />
                        <Shortcutarea />
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default MainHeader;

