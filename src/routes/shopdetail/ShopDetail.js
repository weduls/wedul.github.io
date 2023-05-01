import './ShopDetail.css'
import React from "react";
import ImageGallery from 'react-image-gallery';
import ShopTab from "../../components/shoptab/ShopTab";

const shopInfo = {
    noticeContent : "예약 필수 입니다. 방문 전 예약해주세요. <br />이용안내를 쓰고 관리할 수 있는 영역. 업주가 써야될 듯? 어쩌구 저쩌구 주차는 무료고 어쩌고 저쩌고<br> 스는대로 길어져라 얍얍얍스는대로 길어져라 얍얍얍스는대로 길어져라 얍얍얍스는대로 길어져라 얍얍얍스는대로 길어져라 얍얍얍스는대로 길어져라 얍얍얍스는대로 길어져라 얍얍얍스는대로 길어져라 얍얍얍",
    monday : "휴무",
    tuesday : "9:30 ~ 18:30",
    wednesday : "9:30 ~ 18:30",
    thursday : "9:30 ~ 18:30",
    friday : "9:30 ~ 18:30",
    saturday : "9:30 ~ 18:30",
    sunday : "휴무",
    callNumber : "010-1234-1234",
    address : "경기도 남양주시 평내동",
    detail : "주차, 예약, 예약 가능<br>" +
        "애견 진료, 용품, 미용<br>" +
        "가족같은 마음으로 최선의 진료를 약속 드리며 편안한 병원이 되도록 노력하겠습니다.",
    shopName : "두리뚱이 미용실",
    ceoName : "정철",
    ceoPhoneNumber : "010-1234-1234",
    shopAddress : "경기도 남양주시 평내동",
    ceoRegisterNumber : "11-2221312-14",
    ceoBizRegisterNumber : "14-214124-14",
    rating: 4.9,
    reviewCount: 123,
    shopProfileImage: "https://avatars.githubusercontent.com/u/17659440?s=40&v=4",
    images : [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            originalHeight: '414px',
            loading: 'lazy'
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            originalHeight: '414px',
            loading: 'lazy'
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            originalHeight: '414px',
            loading: 'lazy',
        }]
}

class ShopDetail extends React.Component {
    render() {
        return <div className="shop__detail__main">
            <div className="shop__detail__image__gallary">
                <ImageGallery items={shopInfo.images} showFullscreenButton={true} showPlayButton={false} lazyLoad={true}
                                      showThumbnails={false} showBullets={true}/>
            </div>
            <div className="shop__detail__info">
                <div className="shop__detail__info__profile">
                    <div>
                        <div style={{"display": 'flex'}}>
                            <div className="shop__detail__info__article__profile__image">
                                <img alt="qwerty" src={shopInfo.shopProfileImage}/>
                            </div>
                            <div className="shop__detail__info__article__profile__left">
                                <div className="shop__name">{shopInfo.shopName}</div>
                                <div className="shop__star">
                                    <span className="fa fa-star checked shop__list__star"/>
                                    {shopInfo.rating} ({shopInfo.reviewCount}개)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"/>
            <ShopTab shopInfo={shopInfo}/>
        </div>;
    }
}

export default ShopDetail