import React from 'react';

function Searcharea() {
    return (
        <React.Fragment>
            <section className="searcharea">
                <div className="search_wrap">
                    <div className="search_box">
                        <div className="search_logo">
                            <a href="/" className="link_naver">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="naver_logo">
                                    <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" fill="#03C75A" />
                                </svg>
                                <span className="blind">NAVER</span>
                            </a>
                        </div>
                        <div className="search_input_wrap">
                            <div className="search_input_area">
                                <form action="https://search.naver.com/search.naver" method="GET" className="search_form">
                                    <input
                                        type="text"
                                        name="query"
                                        className="search_input"
                                        title="검색어 입력"
                                        maxLength={255}
                                        autoComplete="off"
                                        placeholder="검색어를 입력해주세요"
                                    />
                                    <button type="submit" className="btn_search">
                                        <span className="blind">검색</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Searcharea;