import React, { useState, useEffect } from "react";
import "./Header.css";

import { CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import AllProducts from "./AllProducts";
import AvailableProducts from "../pages/AvailableProducts";
import UnAvailableProducts from "../pages/UnAvailableProducts";
import WishList from "../pages/WishList";

function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <Router>
      <header className="Header">
        <img
          src={
            "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/103016556/original/49be30f313de56dd95e55eea69e0b9fc3939dcd3/make-jewelry-or-diamond-shop-logo.jpg"
          }
          className="Logo"
          alt="logo"
        />
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <nav className="Nav">
            <Link to="/">All Products</Link>
            <Link to="/avlbleprod">Available Products</Link>
            <Link to="/unavlbleprod">Unavilable Products</Link>
            <Link to="/wish">WishList</Link>
            {/* <button>Logout</button> */}
          </nav>
        </CSSTransition>
        <button onClick={toggleNav} className="Burger">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={AllProducts} />
          <Route exact path="/avlbleprod" component={AvailableProducts} />
          <Route exact path="/unavlbleprod" component={UnAvailableProducts} />
          <Route exact path="/wish" component={WishList} />
        </Switch>
      </main>
    </Router>
  );
}

export default Header;
