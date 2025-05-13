import React from 'react';

function Shortcutarea() {
    return (
        <React.Fragment>
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
                            <span className="service_icon"><img src="https://s.pstatic.net/static/www/mobile/edit/20240112_1095/upload_1705057885416AaxUM.png" width="40" height="40" className="service_img" alt="치지직" /></span>
                            <span className="service_name">치지직</span>
                        </a>
                    </li>
                    <li className="shortcut-item">
                        <a href="https://chzzk.naver.com/" className="link_service" role="button">
                            <span className="service_icon type_more"></span>
                            <span className="blind">바로가기 펼침</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}
export default Shortcutarea;
