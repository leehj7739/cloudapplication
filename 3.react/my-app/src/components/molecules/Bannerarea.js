import React from 'react';

function Bannerarea() {
    return (
        <React.Fragment>
            <div className="banner_area">
                <div id="da_public_left"><div style={{ width: '410px', height: '100px', border: '0pt none' }}><iframe id="da_public_left_tgtLREC" width="410" height="100" frameBorder="no" scrolling="no" tabIndex="0" title="AD" src="https://siape.veta.naver.com/fxshow?su=SU10868&amp;nrefreshx=1&amp;calp=1#frameId=da_public_left_tgtLREC&amp;origin=https%3A%2F%2Fwww.naver.com&amp;msgToken=1698118435.1830182&amp;isFluid=false&amp;runtime=NDPSDK" style={{ border: '0px', verticalAlign: 'bottom' }}></iframe></div></div>
                <div id="da_public_right"><div style={{ width: '410px', height: '100px', border: '0pt none' }}><iframe id="da_public_right_tgtLREC" width="410" height="100" frameBorder="no" scrolling="no" tabIndex="0" title="AD" src="https://siape.veta.naver.com/fxshow?su=SU10869&amp;nrefreshx=1&amp;calp=1#frameId=da_public_right_tgtLREC&amp;origin=https%3A%2F%2Fwww.naver.com&amp;msgToken=6208896990.476297&amp;isFluid=false&amp;runtime=NDPSDK" style={{ border: '0px', verticalAlign: 'bottom' }}></iframe></div></div>
                <div id="veta_time2"><div style={{ width: '410px', height: '100px', border: '0pt none' }}><iframe id="veta_time2_tgtLREC" width="410" height="100" frameBorder="no" scrolling="no" tabIndex="0" title="AD" src="https://siape.veta.naver.com/fxshow?su=SU10870&amp;nrefreshx=1&amp;calp=1#frameId=veta_time2_tgtLREC&amp;origin=https%3A%2F%2Fwww.naver.com&amp;msgToken=1514591909.1107514&amp;isFluid=false&amp;runtime=NDPSDK" style={{ border: '0px', verticalAlign: 'bottom' }}></iframe></div></div>
            </div>
            <hr />
            <div className="notice_area">
                <div className="notice_box">
                    <h3 className="title"><a target="_blank" href="https://www.naver.com/NOTICE" rel="noreferrer">공지사항</a></h3>
                </div>
                <a href="/more.html" target="_blank" className="link_all">서비스 전체보기 &gt; </a>
            </div>
        </React.Fragment>
    )
}
export default Bannerarea;