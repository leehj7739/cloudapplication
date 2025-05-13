import React, { useState } from 'react';

function Toplinkarea() {

    // 헤더 메뉴 호버시 툴팁
    // 각 버튼별 툴팁 상태
    const [hovered, setHovered] = useState({
        menu: false,
        pay: false,
        talk: false,
        noti: false,
        shopping: false,
    });

    // 툴팁 on/off 핸들러
    const handleTooltip = (key, value) => {
        setHovered(prev => ({ ...prev, [key]: value }));
    };


    return (
        <React.Fragment>
            <section className="toplinkarea">
                <div className="left_buttons">
                    <div id="topAsideArea" className="menu_area button-tooltip-wrapper">
                        <button id="topAsideButton" type="button" className="btn_menu"
                            onMouseEnter={() => handleTooltip('menu', true)}
                            onMouseLeave={() => handleTooltip('menu', false)}></button>
                        {hovered.menu && (
                            <div className="tooltip" id="menuTooltip">바로가기</div>
                        )}
                    </div>
                    <div id="topPayArea" className="pay_area button-tooltip-wrapper">
                        <button id="topPayButton" type="button" className="btn_pay"
                            onClick={() => window.location.href = 'https://order.pay.naver.com/home'}
                            onMouseEnter={() => handleTooltip('pay', true)}
                            onMouseLeave={() => handleTooltip('pay', false)}></button>
                        {hovered.pay && (
                            <div className="tooltip" id="payTooltip">네이버페이</div>
                        )}
                    </div>
                </div>
                <div className="right_buttons">
                    <div id="topTalkArea" className="talk_area button-tooltip-wrapper">
                        <button id="topTalkButton" type="button" className="btn_talk"
                            onMouseEnter={() => handleTooltip('talk', true)}
                            onMouseLeave={() => handleTooltip('talk', false)}></button>
                        {hovered.talk && (
                            <div className="tooltip" id="talkTooltip">네이버톡</div>
                        )}
                    </div>
                    <div id="topNotiArea" className="notify_area button-tooltip-wrapper">
                        <button id="topNotiButton" type="button" className="btn_notify"
                            onMouseEnter={() => handleTooltip('noti', true)}
                            onMouseLeave={() => handleTooltip('noti', false)}></button>
                        {hovered.noti && (
                            <div className="tooltip" id="notiTooltip">알림</div>
                        )}
                    </div>
                    <div id="topShoppingArea" className="shopping_area button-tooltip-wrapper">
                        <button id="topShoppingButton" type="button" className="btn_shopping" onClick={() => window.location.href = 'https://shopping.naver.com/cart'}
                            onMouseEnter={() => handleTooltip('shopping', true)}
                            onMouseLeave={() => handleTooltip('shopping', false)}></button>
                        {hovered.shopping && (
                            <div className="tooltip" id="shoppingTooltip">장바구니</div>
                        )}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Toplinkarea;
