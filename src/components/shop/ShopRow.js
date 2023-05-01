import React from 'react';
import './ShopRow.css'

function ShopRow(props) {
    return (<article className="shop__list__row">
        {/* TODO 상세 페이지 연결할 때 Router 방법으로 변경*/}
        <a className="shop__list__link" href="/shop">
            <div className="shop__list__photo">
                <img src={props.data.shopImage} alt="가게명" height="90"/>
            </div>
            <div className="shop__list__info">
                <div className="shop__list__title">
                    {props.data.shopName}
                </div>
                <div className="shop__list__content">
                    <div className="shop__list__rating">
                        <span className="fa fa-star checked shop__list__star"/>
                        <span className="shop__list__score">
                            {props.data.score}
                        </span>
                        <span className="blur">({props.data.reviewCount})</span>
                    </div>
                    <div className="shop__list__region">
                        <span className="article-region-distance blur">
                            {props.data.regionDistance}m
                        </span>
                        <span className="blur"> | </span>
                        <span className="article-region-name blur">
                            {props.data.regionName}
                        </span>
                    </div>
                </div>
            </div>
        </a>
        <hr className="shop__list__hr"/>
    </article>);
}

export default ShopRow;