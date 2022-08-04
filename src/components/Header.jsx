import React from "react";

export default function Header() {

    const liGnbs = [
        {id:'gnb-01', gnb: '로그인'},
        {id:'gnb-02', gnb: '회원가입'},
        {id:'gnb-03', gnb: '장바구니'}
    ]

    const liLnbs = [
        {id:'lnb-01', lnb:'베스트상품'},
        {id:'lnb-02', lnb:'신상품'},
        {id:'lnb-03', lnb:'기획전'},
        {id:'lnb-04', lnb:'이벤트/혜택'},
    ]

    return (
        <header>
            <div className="header__container" style={{width:'1024px', margin:'0 auto'}}>
                <nav className="gnb" style={{overflow:'hidden'}}>
                    <ul style={{float:'right'}}>
                        {
                            liGnbs.map((liGnb) => {
                                return (
                                    <li key={liGnb.id} style={{display:'inline-block',margin:'0 10px'}}>{liGnb.gnb}</li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <div className="logo" style={{textAlign:'center'}}>
                    <h1 style={{margin:'20px 0'}}>삼진어묵</h1>
                </div>
                <nav className="lnb">
                    <ul style={{textAlign:'center',padding:'10px 0',boxSizing:'border-box'}}>
                        {
                            liLnbs.map((liLnb) => {
                                return (
                                    <li key={liLnb.id} style={{display:'inline-block',margin:'0 20px'}}>{liLnb.lnb}</li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}