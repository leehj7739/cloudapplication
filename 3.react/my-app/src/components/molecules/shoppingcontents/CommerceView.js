import React from 'react';
import styled from 'styled-components';

const CView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;
    padding-left: 20px;
    padding-right: 20px;
`;

// 세로열 div
const CMallLink = styled.div`
  width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #c0c0c0;
    border: 1px solid rgb(157, 157, 157);
    border-radius: 8px;
    padding: 5px;
    margin-bottom: 12px;
`;

const CItemGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`;

const CMallLinkItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & > a{
        text-decoration: none;
        color: #080808;
        font-size: 13px;
        transition: all 0.2s ease;
    }
    &:hover{
        text-decoration: underline;
    }
`;

const DotSeparator = styled.span`
    display: inline-block;
    width: 4px;
    height: 4px;
    background-color: #080808;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;
    
`;

const CQuickMenu = styled.div`
    width: 100%;
    background-color: #c0c0c0;
    border: 1px solid rgb(157, 157, 157);
    border-radius: 8px;
    padding: 9px;
    margin-bottom: 12px;
`;

const CQuickMenuList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
   
`;

const CQuickMenuItem = styled.li`
    flex: 1;
`;

const CQuickMenuLink = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    text-decoration: none;
    color: #000;
    &:hover{
        color: #000;
        text-decoration: underline;
    }
`;

const CQuickMenuLinkThumb = styled.div`
    width: 32px;
    height: 32px;
    background-color: #ffffff;
    border-radius: 50%;
    &::before{
        content: "";
        display: block;
        position: relative;
        top: 50%;
        left: 50%;
        background-image: url(https://spastatic.naver.com/v1/shopad/static/shopad-square-node/v2504301225/_next/static/media/sp_main.8149d447.png);
        background-size: 216px 190px;
        background-position: ${props => props.iconPosition || '-124px -34px'};
        width: ${props => props.width || '32px'};
        height: ${props => props.height || '32px'};
        background-repeat: no-repeat;
        transform: translate(-50%, -50%);
    }
`;

const CQuickMenuText = styled.div`
    padding-top: 5px;
`;

// 배너
const CBanner = styled.div`
    width: 100%;
    background-color:rgb(255, 255, 255);
    margin-bottom: 12px;
`;

const CBannerImg = styled.div`
    width: 100%;
    background-color:rgb(255, 255, 255);
    border: 1px solid rgb(157, 157, 157);
    border-radius: 8px;
    margin-bottom: 12px;
    overflow: hidden;

`;

const StyledImage = styled.img`
    overflow-clip-margin: content-box;
    overflow: clip;
    transition: all 0.5s ease;    
    &:hover {
        transform: scale(1.1);
    }
`;


const CBannerText = styled.div`
    width: 100%;
    font-size: 13px;
    color: #000;
    text-align: center;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;




function CommerceView() {
    return (
        <React.Fragment>
            {/* 커머스 뷰 세로정렬 아이템 3개 */}
            <CView className="commerce_view">
                {/* 쇼핑몰 링크 */}
                <CMallLink>
                    <CItemGroup>
                        <CMallLinkItem className="commerce_mall_link_item">
                            <a href="https://www.coupang.com/" class="mall_link" target="_blank" rel="noreferrer">쿠팡</a>
                        </CMallLinkItem>
                        <DotSeparator />
                        <CMallLinkItem className="commerce_mall_link_item">
                            <a href="https://www.gmarket.co.kr/" class="mall_link" target="_blank" rel="noreferrer">G마켓</a>
                        </CMallLinkItem>
                        <DotSeparator />
                        <CMallLinkItem className="commerce_mall_link_item">
                            <a href="https://www.auction.co.kr/" class="mall_link" target="_blank" rel="noreferrer">옥션</a>
                        </CMallLinkItem>
                        <DotSeparator />
                        <CMallLinkItem className="commerce_mall_link_item">
                            <a href="https://www.oliveyoung.co.kr/" class="mall_link" target="_blank" rel="noreferrer">올리브영영</a>
                        </CMallLinkItem>
                    </CItemGroup>
                    <CItemGroup>
                        <CMallLinkItem className="commerce_mall_link_item">
                            <a href="https://www.11st.co.kr/" class="mall_link" target="_blank" rel="noreferrer">11번가</a>
                        </CMallLinkItem>
                        <DotSeparator />
                        <CMallLinkItem className="commerce_mall_link_item">
                            <a href="https://www.ssg.com/" class="mall_link" target="_blank" rel="noreferrer">SSG닷컴</a>
                        </CMallLinkItem>
                        <DotSeparator />
                        <CMallLinkItem className="commerce_mall_link_item">
                            <a href="https://with.gsshop.com/" class="mall_link" target="_blank" rel="noreferrer">GS SHOP</a>
                        </CMallLinkItem>
                    </CItemGroup>
                    <CItemGroup>
                        <CMallLinkItem className="commerce_mall_link_item">
                            <a href="https://www.halfclub.com/" class="mall_link" target="_blank" rel="noreferrer">하프클럽</a>
                        </CMallLinkItem>
                        <DotSeparator />
                        <CMallLinkItem className="commerce_mall_link_item">
                            <a href="https://display.cjonstyle.com/" class="mall_link" target="_blank" rel="noreferrer">CJ온스타일</a>
                        </CMallLinkItem>
                        <DotSeparator />
                        <CMallLinkItem className="commerce_mall_link_item">
                            <a href="https://www.fashionplus.co.kr/" class="mall_link" target="_blank" rel="noreferrer">패션플러스</a>
                        </CMallLinkItem>
                    </CItemGroup>
                </CMallLink>

                {/* 네이버 쇼핑 퀵메뉴 */}
                <CQuickMenu className="commerce_quick_menu">
                    <CQuickMenuList className="commerce_quick_menu_list">
                        <CQuickMenuItem className="commerce_quick_menu_item">
                            <CQuickMenuLink href="https://shopping.naver.com/my/home" className="commerce_quick_menu_link" target="_blank" rel="noreferrer">
                                <CQuickMenuLinkThumb className="commerce_quick_menu_thumbnail" iconPosition="-124px -34px"></CQuickMenuLinkThumb>
                                <CQuickMenuText className="commerce_quick_menu_text">마이쇼핑</CQuickMenuText>
                            </CQuickMenuLink>
                        </CQuickMenuItem>
                        <CQuickMenuItem className="commerce_quick_menu_item">
                            <CQuickMenuLink href="https://shopping.naver.com/my/writable-reviews" className="commerce_quick_menu_link" target="_blank" rel="noreferrer">
                                <CQuickMenuLinkThumb className="commerce_quick_menu_thumbnail" iconPosition="-68px -102px"></CQuickMenuLinkThumb>
                                <CQuickMenuText className="commerce_quick_menu_text">리뷰적립</CQuickMenuText>
                            </CQuickMenuLink>
                        </CQuickMenuItem>
                        <CQuickMenuItem className="commerce_quick_menu_item">
                            <CQuickMenuLink href="https://new-m.pay.naver.com/pcpay?serviceGroup=SHOPPING&amp;page=1" className="commerce_quick_menu_link" target="_blank" rel="noreferrer">
                                <CQuickMenuLinkThumb className="commerce_quick_menu_thumbnail" iconPosition="0 -102px"></CQuickMenuLinkThumb>
                                <CQuickMenuText className="commerce_quick_menu_text">주문</CQuickMenuText>
                            </CQuickMenuLink>
                        </CQuickMenuItem>
                        <CQuickMenuItem className="commerce_quick_menu_item">
                            <CQuickMenuLink href="https://shopping.naver.com/cart" className="commerce_quick_menu_link" target="_blank" rel="noreferrer">
                                <CQuickMenuLinkThumb className="commerce_quick_menu_thumbnail" iconPosition="-19px -174px" width="17px" height="16px"></CQuickMenuLinkThumb>
                                <CQuickMenuText className="commerce_quick_menu_text">장바구니</CQuickMenuText>
                            </CQuickMenuLink>
                        </CQuickMenuItem>
                    </CQuickMenuList>
                </CQuickMenu>

                {/* 배너 링크 */}
                <CBanner className="commerce_banner_link">
                    <CBannerImg className="commerce_banner_img">
                    <StyledImage src="https://s.pstatic.net/shopping.phinf/20250515_17/325a5f94-e25f-44aa-946f-1e77c2cb71e4.jpg" width="248" height="146" alt="제이에스티나 목걸이 10만원대" />
                    </CBannerImg>
                    <CBannerText className="commerce_banner_text">제이에스티나 목걸이 10만원대</CBannerText>
                </CBanner>

            </CView>
        </React.Fragment>

    );
}
export default CommerceView;
