import React, {useState} from "react";
import styled from "styled-components";


const Button = styled.button `
     display:inline-block;
     width: 50%;
     height: 50px;
     border-radius: 0;
     border: 1px solid #ccc;
     background: #eee;
     transition: all 0.2s;
     :hover {
        background:#999
     }
    `
export default function Contents() {

    const bests = [
        {
            id: 'best-01',
            image: 'img/best_01.png',
            desc:'쫄깃하고 탱글탱글한 식감이 일품!',
            title: '캠핑어묵탕(순한맛)',
            price: '8,900원'
        },
        {
            id: 'best-02',
            image: 'img/best_02.png',
            desc:'간편하게 어묵탕을 만들수 있는 모듬어묵!',
            title: '어묵탕모듬어묵 플러스',
            price: '19,000원'
        },
        {
            id: 'best-03',
            image: 'img/best_03.png',
            desc:'시장에서 맛보았던 추억의 어묵 모둠',
            title: '[삼진어묵 창립65주년 기념 행사상품]실속모둠어묵',
            price: '19,900원'
        },
        {
            id: 'best-04',
            image: 'img/best_04.png',
            desc:'인기 고급제품으로 구성된 선물세트',
            title: '1953세트 2호',
            price: '36,000원'
        },
        {
            id: 'best-05',
            image: 'img/best_05.png',
            desc:'인기 고급제품으로 구성된 선물세트',
            title: '1953세트 2호',
            price: '36,000원'
        },
        {
            id: 'best-06',
            image: 'img/best_06.png',
            desc:'인기 고급제품으로 구성된 선물세트',
            title: '1953세트 2호',
            price: '36,000원'
        },
        {
            id: 'best-07',
            image: 'img/best_07.png',
            desc:'인기 고급제품으로 구성된 선물세트',
            title: '1953세트 2호',
            price: '36,000원'
        },
        {
            id: 'best-08',
            image: 'img/best_08.png',
            desc:'인기 고급제품으로 구성된 선물세트',
            title: '1953세트 2호',
            price: '36,000원'
        },
        
    ]
    const recommends = [
        {
            id: 'recommend-01',
            image: 'img/recommend_01.jpg',
            desc: '팔도x삼진 신제품 기념 이벤트',
            title: '팔도 딱한기 볶음어묵 2종 세트',
            price : '8,900원'
        },
        {
            id: 'recommend-02',
            image: 'img/recommend_02.png',
            desc: '탱글한 식감이 일품인 모듬어묵',
            title: '특선 모듬어묵',
            price : '16,000원'
        },
        {
            id: 'recommend-03',
            image: 'img/recommend_03.png',
            desc: '팔도x삼진 콜라보 사각어묵',
            title: '딱한끼 볶음사각(팔도)',
            price : '3,980원'
        },
        {
            id: 'recommend-04',
            image: 'img/recommend_04.png',
            desc: '고소하고 담백한 사각어묵',
            title: '담백한 사각어묵',
            price : '2,700원'
        },
        {
            id: 'recommend-05',
            image: 'img/recommend_05.jpg',
            desc: '고소하고 담백한 사각어묵',
            title: '담백한 사각어묵',
            price : '2,700원'
        },
        {
            id: 'recommend-06',
            image: 'img/recommend_06.jpg',
            desc: '고소하고 담백한 사각어묵',
            title: '담백한 사각어묵',
            price : '2,700원'
        },
        {
            id: 'recommend-07',
            image: 'img/recommend_07.png',
            desc: '고소하고 담백한 사각어묵',
            title: '담백한 사각어묵',
            price : '2,700원'
        },
        {
            id: 'recommend-08',
            image: 'img/recommend_08.png',
            desc: '고소하고 담백한 사각어묵',
            title: '담백한 사각어묵',
            price : '2,700원'
        },
    ]

    const [count, setCount] = useState([0,0,0,0,0,0,0,0])

    return (
        <>
            <section className="visual-main">
                {/* {<img src={process.env.PUBLIC_URL+"/img/visual_main_01.jpg"} alt="visual_img01" />} */}
                <img src="/img/visual_main_01.jpg" alt="visual_img01" />
            </section>

            <section className="best-container">
                <h2 className="best__title">삼진어묵 베스트</h2>
                <div className="best__list">
                {
                    bests.map((best, i) => {
                        return (
                            <div className="best" key={best.id}>
                                <img src={best.image} alt="best_img01" />
                                <p className="best__desc">{best.desc}</p>
                                <h4 className="best__title">{best.title}</h4>
                                <p className="best__price">{best.price}</p>
                                <div className="best__btn">
                                    <Button onClick={()=>{
                                        let countCopy = [...count]
                                        countCopy[i] += 1
                                        setCount(countCopy)
                                    }}>🤍찜하기 {count[i]}</Button>
                                    <Button>🛒장바구니</Button>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </section>

            <section className="recommend-container">
                <h2 className="recommend__title">삼진어묵 추천상품</h2>
                <div className="recommend__list">
                {
                    recommends.map((recommend, i)=> {
                        return (
                            <div className="recommend" key={recommend.id}>
                                <img src={recommend.image} alt="recommend_img01"/>
                                <p className="recommend__desc">{recommend.desc}</p>
                                <h4 className="recommend__title">{recommend.title}</h4>
                                <p className="recommend__price">{recommend.price}</p>
                                <div className="recommend__btn">
                                    <Button onClick={()=> {
                                        let countCopy = [...count]
                                        countCopy[i] += 1
                                        setCount(countCopy)
                                    }}>🤍찜하기{count[i]}</Button>
                                    <Button>🛒장바구니</Button>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </section>
        </>
    )
}