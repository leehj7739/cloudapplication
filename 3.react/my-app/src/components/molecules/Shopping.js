import React, { useState } from 'react';
import ShoppingContent from './shoppingcontents/ShoppingContent';
import MensContent from './shoppingcontents/MensContent';
import OneDealContent from './shoppingcontents/OneDealContent';
import ShoppingLiveContent from './shoppingcontents/ShoppingLiveContent';

function Shopping() {

    const [activeTab, setActiveTab] = useState('shopping');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <React.Fragment>
            <div className="shopping_area">
                <div className="shopping_header">
                    <div className="menu_tab">
                        <ul className="menu_tablist">
                            <li className="menu_tabitem">
                                <a href="/"
                                    className="menu_tablink"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleTabClick('shopping');
                                    }}
                                >쇼핑</a>
                            </li>
                            <li className="menu_tabitem">
                                <a href="/"
                                    className="menu_tablink"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleTabClick('mans');
                                    }}
                                >맨즈</a>
                            </li>
                            <li className="menu_tabitem">
                                <a href="/"
                                    className="menu_tablink"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleTabClick('onedeal');
                                    }}
                                >원쁠딜</a>
                            </li>
                            <li className="menu_tabitem">
                                <a href="/"
                                    className="menu_tablink"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleTabClick('shoppinglive');
                                    }}
                                >쇼핑라이브</a>
                            </li>
                        </ul>
                    </div>
                    <div className="pagination"></div>
                </div>
                <div className="content">
                    {/* 일치하는 컨텐츠 컴포넌트 사용 */}
                    {{
                        'shopping': <ShoppingContent />,
                        'mans': <MensContent />,
                        'onedeal': <OneDealContent />,
                        'shoppinglive': <ShoppingLiveContent />
                    }[activeTab]}
                </div>
                <div className="bottom_pagination"></div>
            </div>
        </React.Fragment>
    );
}

export default Shopping;
