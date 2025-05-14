import React from 'react';

function CommerceView() {
    return (
        <React.Fragment>
            {/* 커머스 뷰 세로정렬 아이템 3개 */}
            <div className="commerce_view">
                {/* 쇼핑몰 링크 */}
                <div className="commerce_mall_link">
                    <div className="commerce_mall_link_item_group">
                        <div className="commerce_mall_link_item">
                            <a href="https://www.coupang.com/" class="mall_link" target="_blank" rel="noreferrer">쿠팡</a>
                        </div>
                        <div className="commerce_mall_link_item">
                            <a href="https://www.gmarket.co.kr/" class="mall_link" target="_blank" rel="noreferrer">G마켓</a>
                        </div>
                        <div className="commerce_mall_link_item">
                            <a href="https://www.auction.co.kr/" class="mall_link" target="_blank" rel="noreferrer">옥션</a>
                        </div>
                        <div className="commerce_mall_link_item">
                            <a href="https://www.oliveyoung.co.kr/" class="mall_link" target="_blank" rel="noreferrer">올리브영영</a>
                        </div>
                    </div>
                    <div className="commerce_mall_link_item_group">
                        <div className="commerce_mall_link_item">
                            <a href="https://www.11st.co.kr/" class="mall_link" target="_blank" rel="noreferrer">11번가</a>
                        </div>
                        <div className="commerce_mall_link_item">
                            <a href="https://www.ssg.com/" class="mall_link" target="_blank" rel="noreferrer">SSG닷컴</a>
                        </div>
                        <div className="commerce_mall_link_item">
                            <a href="https://with.gsshop.com/" class="mall_link" target="_blank" rel="noreferrer">GS SHOP</a>
                        </div>
                    </div>
                    <div className="commerce_mall_link_item_group">
                        <div className="commerce_mall_link_item">
                            <a href="https://www.halfclub.com/" class="mall_link" target="_blank" rel="noreferrer">하프클럽</a>
                        </div>
                        <div className="commerce_mall_link_item">
                            <a href="https://display.cjonstyle.com/" class="mall_link" target="_blank" rel="noreferrer">CJ온스타일</a>
                        </div>
                        <div className="commerce_mall_link_item">
                            <a href="https://www.fashionplus.co.kr/" class="mall_link" target="_blank" rel="noreferrer">패션플러스</a>
                        </div>
                    </div>
                </div>

                {/* 네이버 쇼핑 퀵메뉴 */}
                <div className="commerce_quick_menu">
                    <ul className="commerce_quick_menu_list">
                        <li className="commerce_quick_menu_item">
                            <a href="https://shopping.naver.com/my/home" className="commerce_quick_menu_link"  target="_blank" rel="noreferrer">
                                <div className="commerce_quick_menu_thumbnail"></div>
                                <div className="commerce_quick_menu_text">마이쇼핑</div>
                            </a>
                        </li>
                        <li className="commerce_quick_menu_item">
                            <a href="https://shopping.naver.com/my/writable-reviews" className="commerce_quick_menu_link"  target="_blank" rel="noreferrer">
                                <div className="commerce_quick_menu_thumbnail"></div>
                                <div className="commerce_quick_menu_text">리뷰적립</div>
                            </a>
                        </li>
                        <li className="commerce_quick_menu_item">
                            <a href="https://new-m.pay.naver.com/pcpay?serviceGroup=SHOPPING&amp;page=1" className="commerce_quick_menu_link"  target="_blank" rel="noreferrer">
                                <div className="commerce_quick_menu_thumbnail"></div>
                                <div className="commerce_quick_menu_text">주문</div>
                            </a>
                        </li>
                        <li className="commerce_quick_menu_item">
                            <a href="https://shopping.naver.com/cart" className="commerce_quick_menu_link"  target="_blank" rel="noreferrer">
                                <div className="commerce_quick_menu_thumbnail"></div>
                                <div className="commerce_quick_menu_text">장바구니</div>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* 배너 링크 */}
                <div className="commerce_banner_link"></div>

            </div>
        </React.Fragment>

    );
}
export default CommerceView;
