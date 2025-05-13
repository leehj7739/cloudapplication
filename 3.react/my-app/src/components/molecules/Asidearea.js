import React from 'react';

function Asidearea() {
    return (
        <React.Fragment>
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
                        <a target="_blank" href="http://whale.naver.com/" className="service_logo" rel="noreferrer"><img src="data:image/png;base64,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" alt="웨일 브라우저" width="48" height="48" /></a>
                    </div>
                    <div className="service_box">
                        <div className="service_info"><strong className="title">기업 사이트</strong><a target="_blank" href="https://www.navercorp.com" className="dsc" rel="noreferrer">바로가기</a></div>
                        <a target="_blank" href="https://www.navercorp.com" className="service_logo" rel="noreferrer"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAIVBMVEUAAAD///+QkJBhYWFSUlItLS3j4+O8vLxKSkr09PR9fX3vnz0hAAAA0UlEQVRYw+3WsQ7BUBSA4Ru0TWyXuMXEG5BiJhZjxWRr4wV4A4MXMNh5U/RWmPT8c8+/nJykX3K73FxjNE3T6t0ueTcrt6DYkvkfMLZFZ7+1/NapBhkFMQV2QsGNgpgCe6egR4GjwI4o6FPgKLBHCroUDFIIXmeCYEiBTSnI5CD3H8rBwo+LGGz8OIjB0k8nB+Hvz0tAQIF5UBBREFwhMFMKIgpMTsGKggYF3zNJwZaCNgXmRMGegiYFnzPJQUiB4NbwT4ckLdd15dNB0zStDj0B379JDVnibr4AAAAASUVORK5CYII=" alt="기업 사이트" width="48" height="48" /></a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Asidearea;