import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Shop from "./routes/shop/Shop"
import Review from "./routes/review/Review";
import ShopDetail from "./routes/shopdetail/ShopDetail";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentNav: 'shop'
        }
        this.updateCurrentNav = this.updateCurrentNav.bind(this)
    }

    updateCurrentNav(type) {
        this.setState({
            currentNav: type
        })
    }

    render() {
        return (
            <Router>
                <div className="main">
                    <div className="header__common__layout">
                        <Header updateCurrentNav={this.updateCurrentNav}/>
                    </div>
                    <div className="main__body">
                        <Routes>
                            <Route element={<Navigation updateCurrentNav={this.updateCurrentNav} currentNav={this.state.currentNav}/>}>
                                <Route path="/" element={<Shop/>}/>
                                <Route path="/shop" element={<Shop/>}/>
                                <Route path="/review" element={<Review/>}/>
                            </Route>
                            <Route path="/shop-detail" element={<ShopDetail/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
