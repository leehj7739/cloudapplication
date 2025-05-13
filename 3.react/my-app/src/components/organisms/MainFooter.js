import React from 'react';
import Bannerarea from '../molecules/Bannerarea';
import Asidearea from '../molecules/Asidearea';
import Corparea from '../molecules/Corparea';

function MainFooter() {


    return (
        <React.Fragment>
            <footer className="footer">
                <div className="footer-wrapper">
                    <Bannerarea />
                    <hr />
                    <Asidearea />
                    <hr />
                    <Corparea />
                </div>
            </footer>
        </React.Fragment>
    )
}
export default MainFooter;