import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ShopTab.css'



class ShopTab extends React.Component {

    render() {
        return <Tabs>
            <TabList>
                <Tab>정보</Tab>
                <Tab>리뷰</Tab>
            </TabList>

            <TabPanel>
                <div className="block__box">
                    <div className="block__header">
                        이용안내
                    </div>
                    <div className="block__body">
                        <p dangerouslySetInnerHTML={{__html: this.props.shopInfo.noticeContent}}>
                        </p>
                    </div>
                </div>
                <div className="block__box">
                    <div className="block__header">
                        영업시간
                    </div>
                    <div className="block__body">
                        <div className="week__body">
                            <div className="week__name">
                                월요일
                            </div>
                            <div>
                                {this.props.shopInfo.monday}
                            </div>
                        </div>
                        <div className="week__body">
                            <div className="week__name">
                                화요일
                            </div>
                            <div>
                                {this.props.shopInfo.tuesday}
                            </div>
                        </div>
                        <div className="week__body">
                            <div className="week__name">
                                수요일
                            </div>
                            <div>
                                {this.props.shopInfo.wednesday}
                            </div>
                        </div>
                        <div className="week__body">
                            <div className="week__name">
                                목요일
                            </div>
                            <div>
                                {this.props.shopInfo.thursday}
                            </div>
                        </div>
                        <div className="week__body">
                            <div className="week__name">
                                금요일
                            </div>
                            <div>
                                {this.props.shopInfo.friday}
                            </div>
                        </div>
                        <div className="week__body">
                            <div className="week__name">
                                토요일
                            </div>
                            <div>
                                {this.props.shopInfo.saturday}
                            </div>
                        </div>
                        <div className="week__body">
                            <div className="week__name">
                                일요일
                            </div>
                            <div>
                                {this.props.shopInfo.sunday}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block__box">
                    <div className="block__header">
                        전화번호
                    </div>
                    <div className="block__body">
                        <p>
                            {this.props.shopInfo.callNumber}
                        </p>
                    </div>
                </div>
                <div className="block__box">
                    <div className="block__header">
                        주소
                    </div>
                    <div className="block__body">
                        <p>
                            {this.props.shopInfo.address}
                        </p>
                        {/*todo 지도 api 사용*/}
                    </div>
                </div>
                <div className="block__box">
                    <div className="block__header">
                        상세설명
                    </div>
                    <div className="block__body">
                        <p dangerouslySetInnerHTML={{__html: this.props.shopInfo.detail}}>
                        </p>
                    </div>
                </div>
                <div className="block__box">
                    <div className="block__header">
                        판매자 정보
                    </div>
                    <div className="block__body">
                        <div className="sales__body">
                            <div className="sales__name">
                                상호명
                            </div>
                            <div>
                                {this.props.shopInfo.shopName}
                            </div>
                        </div>
                        <div className="sales__body">
                            <div className="sales__name">
                                대표자명
                            </div>
                            <div>
                                {this.props.shopInfo.ceoName}
                            </div>
                        </div>
                        <div className="sales__body">
                            <div className="sales__name">
                                연락처
                            </div>
                            <div>
                                {this.props.shopInfo.ceoPhoneNumber}
                            </div>
                        </div>
                        <div className="sales__body">
                            <div className="sales__name">
                                사업장주소
                            </div>
                            <div>
                                {this.props.shopInfo.shopAddress}
                            </div>
                        </div>
                        <div className="sales__body">
                            <div className="sales__name">
                                사업자등록번호
                            </div>
                            <div>
                                {this.props.shopInfo.ceoRegisterNumber}
                            </div>
                        </div>
                        <div className="sales__body">
                            <div className="sales__name">
                                통신판매 신고번호
                            </div>
                            <div>
                                {this.props.shopInfo.ceoBizRegisterNumber}
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    }
}
export default ShopTab;