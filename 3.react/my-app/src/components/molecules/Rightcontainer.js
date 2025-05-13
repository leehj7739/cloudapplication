import React from 'react';

function Rightcontainer() {
    return (
        <React.Fragment>
            <div className="right-container section">
                <div className="right-container-content">
                    <div id="account" className="login-module-account">
                        <div className="login-module">
                            <p className="login-module_text">네이버를 더 안전하고 편리하게 이용하세요</p>
                            <a href="https://nid.naver.com/nidlogin.login?mode=form&amp;url=https://www.naver.com/" className="login-module_link">
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
        </React.Fragment>
    );
}
export default Rightcontainer;
