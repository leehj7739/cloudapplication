import React from 'react';
import CommerceView from './CommerceView';

function ShoppingContent() {
    return (
        <React.Fragment>
            <div className="shopping_content_wrapper">
                <div className="shopping_content_left">
                    <CommerceView />
                </div>
                <div className="shopping_content_right">
                    <CommerceView />
                </div>
            </div>

        </React.Fragment>
    );
}

export default ShoppingContent;
