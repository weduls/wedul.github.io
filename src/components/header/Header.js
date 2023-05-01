import React from "react";
import './Header.css'
import {FaDog} from "react-icons/fa";
import {BiUserCircle} from "react-icons/bi";
import {Link} from "react-router-dom";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.navigationClick = this.navigationClick.bind(this)
    }


    componentDidMount() {
        // todo user 사진 추가
    }

    navigationClick(type) {
        this.props.updateCurrentNav(type);
    }

    render() {
        return <div className="header">
            <div className="header__wrapper">
                <h1 className="header__start">
                </h1>
                <div className="header__center">
                    <Link to={"/"} style={{textDecoration: "none", color: "black"}} onClick={() => this.navigationClick('shop')}>
                    <span className="header__title">
                        <FaDog /> 레인보우</span>
                    </Link>
                </div>
                <div className="header__end">
                    <div className="header__profile">
                        <BiUserCircle/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Header