import React from 'react';

import Leftcontainer from '../molecules/Leftcontainer';
import Rightcontainer from '../molecules/Rightcontainer';


function MainContainer() {


    return (
        <React.Fragment>
            <div className="container-wrapper">
                <div className="container">
                    <Leftcontainer />
                    <Rightcontainer />
                </div>
            </div>
        </React.Fragment>
    );
}

export default MainContainer;