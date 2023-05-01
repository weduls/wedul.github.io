import React from "react";
import './Navigation.css'
import {Link, Outlet} from "react-router-dom";

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.navigationClick = this.navigationClick.bind(this)
    }

    navigationClick(type) {
        this.props.updateCurrentNav(type);
    }

    render () {
        return (
            <>
                <nav className="nav">
                    <ul className="nav__wrapper">
                        <Link to={"/shop"} className={this.props.currentNav === 'shop' ? "nav__current__item" : "nav__item"} onClick={() => this.navigationClick('shop')}>가게</Link>
                        <Link to={"/review"} className={this.props.currentNav === 'review' ? "nav__current__item" : "nav__item"} onClick={() => this.navigationClick('review')}>리뷰</Link>
                        <Link to={"/shop-detail"} className={this.props.currentNav === 'a' ? "nav__current__item" : "nav__item"} onClick={() => this.navigationClick('a')}>호식</Link>
                    </ul>
                </nav>
                <Outlet/>
            </>
        )
    }
}
export default Navigation