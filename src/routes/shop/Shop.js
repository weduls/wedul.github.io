import React, {useState, useEffect} from "react";
import './Shop.css'
import ShopRow from "../../components/shop/ShopRow";

function Shop() {

    const [reginName, setRegionName] = useState("평내동");
    const shopRows = [
        {
            shopId: 1,
            shopImage: "https://www.cccreationsusa.com/wp-content/uploads/2017/10/apple-touch-icon-192x192.png",
            shopName: "가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명",
            score: 9.5,
            reviewCount: 827,
            regionDistance: 81,
            regionName: "경기도 남양주 경춘로"
        },
        {
            shopId: 2,
            shopImage: "https://www.cccreationsusa.com/wp-content/uploads/2017/10/apple-touch-icon-192x192.png",
            shopName: "가게명 가게명 가게명 가게명 가게명",
            score: 9.5,
            reviewCount: 827,
            regionDistance: 81,
            regionName: "경기도 남양주 경춘로"
        },
        {
            shopId: 3,
            shopImage: "https://www.cccreationsusa.com/wp-content/uploads/2017/10/apple-touch-icon-192x192.png",
            shopName: "가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명",
            score: 9.5,
            reviewCount: 827,
            regionDistance: 81,
            regionName: "경기도 남양주 경춘로"
        },
        {
            shopId: 4,
            shopImage: "https://www.cccreationsusa.com/wp-content/uploads/2017/10/apple-touch-icon-192x192.png",
            shopName: "가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명",
            score: 9.5,
            reviewCount: 827,
            regionDistance: 81,
            regionName: "경기도 남양주 경춘로"
        },
        {
            shopId: 5,
            shopImage: "https://www.cccreationsusa.com/wp-content/uploads/2017/10/apple-touch-icon-192x192.png",
            shopName: "가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명",
            score: 9.5,
            reviewCount: 827,
            regionDistance: 81,
            regionName: "경기도 남양주 경춘로"
        },
        {
            shopId: 6,
            shopImage: "https://www.cccreationsusa.com/wp-content/uploads/2017/10/apple-touch-icon-192x192.png",
            shopName: "가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명",
            score: 9.5,
            reviewCount: 827,
            regionDistance: 81,
            regionName: "경기도 남양주 경춘로"
        },
        {
            shopId: 7,
            shopImage: "https://www.cccreationsusa.com/wp-content/uploads/2017/10/apple-touch-icon-192x192.png",
            shopName: "가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명",
            score: 9.5,
            reviewCount: 827,
            regionDistance: 81,
            regionName: "경기도 남양주 경춘로"
        },
        {
            shopId: 8,
            shopImage: "https://www.cccreationsusa.com/wp-content/uploads/2017/10/apple-touch-icon-192x192.png",
            shopName: "가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명",
            score: 9.5,
            reviewCount: 827,
            regionDistance: 81,
            regionName: "경기도 남양주 경춘로"
        },
        {
            shopId: 9,
            shopImage: "https://www.cccreationsusa.com/wp-content/uploads/2017/10/apple-touch-icon-192x192.png",
            shopName: "가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명 가게명",
            score: 9.5,
            reviewCount: 827,
            regionDistance: 81,
            regionName: "경기도 남양주 경춘로"
        },
    ];

    useEffect(() => {
        setRegionName("평내동");
    });

    return (
        <div>
            <div className="user__region__main ">
                <span className="user__region__name"><span className="bold">{reginName}</span>에서 가까운</span>
                <br/>
                그루밍 업체를 알려드려요
                {/* TODO 빈응형 버튼 오른쪽 위치, 버튼 눌렀을 경우 어떻게 할지? */}
                <span className="user__region__button">변경</span>
            </div>
            <div>
                {
                    shopRows.map((shopRow, index) => (<ShopRow key= {index} data={shopRow}/>))
                }
            </div>
        </div>
    );
}

export default Shop