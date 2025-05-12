import React from 'react';
import './MainPage.css';
function MainPage() {


  return (
    <React.Fragment>
        <header>
        <div className="topwrapper">
            <div className="header-container">
                <section className="toplinkarea">
                    <div className="left_buttons">
                        <div id="topAsideArea" className="menu_area">
                            <button id="topAsideButton" type="button" className="btn_menu"></button>
                        </div>
                        <div id="topPayArea" className="pay_area">
                            <button id="topPayButton" type="button" className="btn_pay"></button>
                        </div>  
                    </div>
                    <div className="right_buttons">
                        <div id="topTalkArea" className="talk_area">
                            <button id="topTalkButton" type="button" className="btn_talk"></button>
                        </div>
                        <div id="topNotiArea" className="notify_area">
                            <button id="topNotiButton" type="button" className="btn_notify"></button>
                        </div>  
                        <div id="topShoppingArea" className="shopping_area">
                            <button id="topShoppingButton" type="button" className="btn_shopping"></button>
                        </div>
                    </div>
                </section>
                <section className="searcharea">
                    <div className="search_wrap">
                        <div className="search_box">
                            <div className="search_logo">
                                <a href="/2.naverclone/naverclone.html" className="link_naver" rel="noreferrer">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="naver_logo">
                                        <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" fill="#03C75A"/>
                                    </svg>
                                    <span className="blind">NAVER</span>
                                </a>
                            </div>
                            <div className="search_input_wrap">
                                <div className="search_input_area">
                                    <form action="https://search.naver.com/search.naver" method="GET" className="search_form">
                                        <input type="text" name="query" className="search_input" title="검색어 입력" maxlength="255" autocomplete="off" placeholder="검색어를 입력해주세요" />
                                        <button type="submit" className="btn_search">
                                            <span className="blind">검색</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <nav className="shortcutarea">
                    <ul className="shortcut-list">
                        <li className="shortcut-item">
                            <a href="https://mail.naver.com" className="link_service" target="_blank" rel="noreferrer">
                                <span className="service_icon type_mail"></span>
                                <span className="service_name">메일</span></a>
                        </li>
                        <li className="shortcut-item">
                            <a href="https://cafe.naver.com" className="link_service" target="_blank" rel="noreferrer">
                                <span className="service_icon type_cafe"></span>
                                <span className="service_name">카페</span></a>
                        </li>
                        <li className="shortcut-item">
                            <a href="https://blog.naver.com" className="link_service" target="_blank" rel="noreferrer">
                                <span className="service_icon type_blog"></span>
                                <span className="service_name">블로그</span></a>
                        </li>
                        <li className="shortcut-item">
                            <a href="https://shopping.naver.com/ns/home" className="link_service" target="_blank" rel="noreferrer">
                                <span className="service_icon type_shopping"></span>
                                <span className="service_name">스토어</span></a>
                        </li>
                        <li className="shortcut-item">
                            <a href="https://news.naver.com/" className="link_service" target="_blank" rel="noreferrer">
                                <span className="service_icon type_news"></span>
                                <span className="service_name">뉴스</span></a>
                        </li>
                        <li className="shortcut-item">
                            <a href="https://finance.naver.com/" className="link_service" target="_blank" rel="noreferrer">
                                <span className="service_icon type_stock"></span>
                                <span className="service_name">증권</span></a>
                        </li>
                        <li className="shortcut-item">
                            <a href="https://land.naver.com/" className="link_service" target="_blank" rel="noreferrer">
                                <span className="service_icon type_real"></span>
                                <span className="service_name">부동산</span></a>
                        </li>
                        <li className="shortcut-item">
                            <a href="https://map.naver.com" className="link_service" target="_blank" rel="noreferrer">
                                <span className="service_icon type_map"></span>
                                <span className="service_name">지도</span></a>
                        </li>
                        <li className="shortcut-item">
                            <a href="https://comic.naver.com" className="link_service" target="_blank" rel="noreferrer">
                                <span className="service_icon type_webtoon"></span>
                                <span className="service_name">웹툰</span></a>
                        </li>
                        <li className="shortcut-item">
                            <a href="https://chzzk.naver.com/" className="link_service" target="_blank" rel="noreferrer">
                                <span className="service_icon"><img src="https://s.pstatic.net/static/www/mobile/edit/20240112_1095/upload_1705057885416AaxUM.png" width="40" height="40" className="service_img" alt="치지직"/></span>
                                <span className="service_name">치지직</span>
                            </a>
                        </li>
                        <li className="shortcut-item">
                            <a href="#" className="link_service" role="button" >
                                <span className="service_icon type_more"></span>
                                <span className="blind">바로가기 펼침</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <div className="container-wrapper">
        <div className="container">
            <div className="left-container section">
                <div className="left-container-content">
                    <div className="left-container-content-item newsstand">
                        <div className="contentHeader">
                            <ul className="category-list">
                                <li className="category-item active" data-category="all">전체</li>
                                <li className="category-item" data-category="news">뉴스</li>
                                <li className="category-item" data-category="sports">스포츠</li>
                                <li className="category-item" data-category="entertainment">연예</li>
                            </ul>
                        </div>
                        <div className="contentView">
                            <div className="grid-container">
                            </div>
                        </div>
                        <div className="contentPaging">
                            <button className="paging-btn prev" disabled>이전</button>
                            <div className="page-numbers"></div>
                            <button className="paging-btn next">다음</button>
                        </div>
                    </div>
                </div>
                <div className="left-container-content">왼쪽2</div>
                <div className="left-container-content">왼쪽3</div>
                <div className="left-container-content">왼쪽4</div>
                <div className="left-container-content">왼쪽5</div>
            </div>
            <div className="right-container section">
              <div className="right-container-content">
                <div id="account" className="login-module-account">
                    <div className="login-module">
                        <p className="login-module_text">네이버를 더 안전하고 편리하게 이용하세요</p>
                        <a href="https://nid.naver.com/nidlogin.login?mode=form&amp;url=https://www.naver.com/" className="login-module_link" rel="noreferrer">
                            <i className="login-module_logo">
                                <span className="blind">NAVER</span>
                            </i>로그인
                        </a>
                        <div className="login-module_more">
                            <a href="https://nid.naver.com/user2/api/route?m=routeIdInquiry" className="login-module_more_link">아이디 찾기</a>
                            <a href="https://nid.naver.com/user2/api/route?m=routePwInquiry" className="login-module_more_link">비밀번호 찾기</a>
                            <a href="https://nid.naver.com/nidregister.form?url=https%3A%2F%2Fwww.naver.com" className="login-module_more_link">회원가입</a>
                        </div>
                    </div>
                </div>
              </div>
              <div className="right-container-content">오른쪽2</div>
              <div className="right-container-content">오른쪽3</div>
              <div className="right-container-content">오른쪽4</div>
              <div className="right-container-content">오른쪽5</div> 
            </div>
        </div>
    </div>
    

    <footer className="footer">
        <div className="footer-wrapper">
            <div className="banner_area">
                <div id="da_public_left">
                    <div style={{ width: '410px', height: '100px', border: '0pt none' }}>
                        <iframe 
                            id="da_public_left_tgtLREC" 
                            width="410" 
                            height="100" 
                            frameBorder="no" 
                            scrolling="no" 
                            tabIndex="0" 
                            title="AD" 
                            src="https://siape.veta.naver.com/fxshow?su=SU10868&nrefreshx=1&calp=1#frameId=da_public_left_tgtLREC&origin=https%3A%2F%2Fwww.naver.com&msgToken=1698118435.1830182&isFluid=false&runtime=NDPSDK" 
                            style={{ border: '0px', verticalAlign: 'bottom' }}
                        />
                    </div>
                </div>
                <div id="da_public_right">
                    <div style={{ width: '410px', height: '100px', border: '0pt none' }}>
                        <iframe 
                            id="da_public_right_tgtLREC" 
                            width="410" 
                            height="100" 
                            frameBorder="no" 
                            scrolling="no" 
                            tabIndex="0" 
                            title="AD" 
                            src="https://siape.veta.naver.com/fxshow?su=SU10869&nrefreshx=1&calp=1#frameId=da_public_right_tgtLREC&origin=https%3A%2F%2Fwww.naver.com&msgToken=6208896990.476297&isFluid=false&runtime=NDPSDK" 
                            style={{ border: '0px', verticalAlign: 'bottom' }}
                        />
                    </div>
                </div>
                <div id="veta_time2">
                    <div style={{ width: '410px', height: '100px', border: '0pt none' }}>
                        <iframe 
                            id="veta_time2_tgtLREC" 
                            width="410" 
                            height="100" 
                            frameBorder="no" 
                            scrolling="no" 
                            tabIndex="0" 
                            title="AD" 
                            src="https://siape.veta.naver.com/fxshow?su=SU10870&nrefreshx=1&calp=1#frameId=veta_time2_tgtLREC&origin=https%3A%2F%2Fwww.naver.com&msgToken=1514591909.1107514&isFluid=false&runtime=NDPSDK" 
                            style={{ border: '0px', verticalAlign: 'bottom' }}
                        />
                    </div>
                </div>
            </div>
            <hr/>
        <div className="notice_area">
            <div className="notice_box">
                <h3 className="title"><a target="_blank" href="https://www.naver.com/NOTICE" rel="noreferrer">공지사항</a></h3>
            </div>
            <a href="/more.html" target="_blank" className="link_all" rel="noreferrer">서비스 전체보기 &gt;</a>
        </div>
        <hr/>
        <div className="aside_area">
            <div className="partner_box_wrap">
                <div className="partner_box">
                    <h3 className="title">Partners</h3>
                    <a target="_blank" href="https://www.navercorp.com/esg/projectFlower" className="link_partner" rel="noreferrer">프로젝트 꽃</a>
                    <a target="_blank" href="https://business.naver.com/" className="link_partner" rel="noreferrer">네이버 비즈니스</a>
                    <a target="_blank" href="https://bizschool.naver.com/" className="link_partner" rel="noreferrer">네이버 비즈니스 스쿨</a>
                    <a target="_blank" href="https://www.navercorp.com/service/serviceAD" className="link_partner" rel="noreferrer">네이버 광고</a>
                    <a target="_blank" href="https://sell.storefarm.naver.com/#/home/about" className="link_partner" rel="noreferrer">스토어 개설</a>
                    <a target="_blank" href="https://smartplace.naver.com/" className="link_partner" rel="noreferrer">지역업체 등록</a>
                    <a target="_blank" href="https://expert.naver.com/expert/introduction?tab=guide#join" className="link_partner" rel="noreferrer">엑스퍼트 등록</a>
                </div>
                <div className="partner_box">
                    <h3 className="title">Developers</h3>
                    <a target="_blank" href="https://developers.naver.com/" className="link_partner" rel="noreferrer">네이버 개발자 센터</a>
                    <a target="_blank" href="https://developers.naver.com/docs/common/openapiguide/#/apilist.md" className="link_partner" rel="noreferrer">오픈 API</a>
                    <a target="_blank" href="https://naver.github.io/" className="link_partner" rel="noreferrer">오픈소스</a>
                    <a target="_blank" href="https://d2.naver.com/" className="link_partner" rel="noreferrer">네이버 D2</a>
                    <a target="_blank" href="http://d2startup.com/" className="link_partner" rel="noreferrer">네이버 D2SF</a>
                    <a target="_blank" href="https://www.naverlabs.com/" className="link_partner" rel="noreferrer">네이버 랩스</a>
                </div>
            </div>
            <div className="service_box_wrap">
                <div className="service_box">
                    <div className="service_info"><strong className="title">웨일 브라우저</strong><a target="_blank" href="http://whale.naver.com/" className="dsc" rel="noreferrer">이용안내</a></div>
                    <a target="_blank" href="http://whale.naver.com/" className="service_logo" rel="noreferrer"><img src="data:image/png;base64,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" alt="웨일 브라우저" width="48" height="48"/></a>
                </div>
                <div className="service_box">
                    <div className="service_info"><strong className="title">기업 사이트</strong><a target="_blank" href="https://www.navercorp.com" className="dsc" rel="noreferrer">바로가기</a></div>
                    <a target="_blank" href="https://www.navercorp.com" className="service_logo" rel="noreferrer"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAIVBMVEUAAAD///+QkJBhYWFSUlItLS3j4+O8vLxKSkr09PR9fX3vnz0hAAAA0UlEQVRYw+3WsQ7BUBSA4Ru0TWyXuMXEG5BiJhZjxWRr4wV4A4MXMNh5U/RWmPT8c8+/nJykX3K73FxjNE3T6t0ueTcrt6DYkvkfMLZFZ7+1/NapBhkFMQV2QsGNgpgCe6egR4GjwI4o6FPgKLBHCroUDFIIXmeCYEiBTSnI5CD3H8rBwo+LGGz8OIjB0k8nB+Hvz0tAQIF5UBBREFwhMFMKIgpMTsGKggYF3zNJwZaCNgXmRMGegiYFnzPJQUiB4NbwT4ckLdd15dNB0zStDj0B379JDVnibr4AAAAASUVORK5CYII=" alt="기업 사이트" width="48" height="48"/></a>
                </div>
            </div>
        </div>
        <hr/>
        <div className="corp_area">
            <ul className="corp_list">
                <li className="corp_item">
                    <a target="_blank" href="https://www.navercorp.com/" rel="noreferrer">회사소개</a>
                </li>
                <li className="corp_item">
                    <a target="_blank" href="https://recruit.navercorp.com/" rel="noreferrer">인재채용</a>
                </li>
                <li className="corp_item">
                    <a target="_blank" href="https://www.navercorp.com/naver/proposalInquire" rel="noreferrer">제휴제안</a>
                </li>
                <li className="corp_item">
                    <a target="_blank" href="https://www.naver.com/policy/service.html" rel="noreferrer">이용약관</a>
                </li>
                <li className="corp_item">
                    <a target="_blank" href="https://www.naver.com/policy/privacy.html" rel="noreferrer"><strong>개인정보처리방침</strong></a>
                </li>
                <li className="corp_item">
                    <a target="_blank" href="https://www.naver.com/policy/youthpolicy.html" rel="noreferrer">청소년보호정책</a>
                </li>
                <li className="corp_item">
                    <a target="_blank" href="https://policy.naver.com/policy/service_group.html" rel="noreferrer">네이버 정책</a>
                </li>
                <li className="corp_item">
                    <a target="_blank" href="https://help.naver.com/" rel="noreferrer">고객센터</a>
                </li>
                <li className="corp_item">
                    <a target="_blank" href="https://www.navercorp.com/" rel="noreferrer"><strong>ⓒ NAVER Corp.</strong></a>
                </li>
            </ul>
        </div>
        </div>
    </footer>
    <script src="script.js"></script>
    </React.Fragment>
  );
}

export default MainPage;
