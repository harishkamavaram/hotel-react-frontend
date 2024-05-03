import React from "react";
import { Link } from "react-router-dom";

export default function CustomerHeader() {
    return (
        <>
            {/* <!-- Page Preloder --> */}
            <div id="preloder" style={{ display: "none" }}>
                <div className="loader" style={{ display: "none" }}></div>
            </div>


            {/* <!-- Offcanvas Menu Section Begin --> */}
            <div class="offcanvas-menu-overlay"></div>
            <div class="canvas-open">
                <i class="icon_menu"></i>
            </div>
            <div class="offcanvas-menu-wrapper">
                <div class="canvas-close">
                    <i class="icon_close"></i>
                </div>
                <div class="search-icon  search-switch">
                    <i class="icon_search"></i>
                </div>
                <div class="header-configure-area">
                    {/* <div class="language-option">
                        <img src="img/flag.jpg" alt="" />
                        <span>EN <i class="fa fa-angle-down"></i></span>
                        <div class="flag-dropdown">
                            <ul>
                                <li><Link to="#">Zi</Link></li>
                                <li><Link to="#">Fr</Link></li>
                            </ul>
                        </div>
                    </div> */}
                    <Link to="#" class="bk-btn">Booking Now</Link>
                </div>
                <nav class="mainmenu mobile-menu">
                    <ul>
                        <li class="active"><Link to="/">Home</Link></li>
                        <li><Link to="/rooms">Rooms</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="./pages.html">Pages</Link>
                            <ul class="dropdown">
                                <li><Link to="./room-details.html">Room Details</Link></li>
                                <li><Link to="#">Deluxe Room</Link></li>
                                <li><Link to="#">Family Room</Link></li>
                                <li><Link to="#">Premium Room</Link></li>
                            </ul>
                        </li>
                        <li><Link to="./blog.html">News</Link></li>
                        <li><Link to="/contactus">Contact</Link></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"><div class="slicknav_menu"><Link to="#" aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed" style={{ outline: "none;" }}><span class="slicknav_menutxt">MENU</span><span class="slicknav_icon"><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></span></Link><nav class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{ display: "none;" }}>
                    <ul>
                        <li class="active"><Link to="/" role="menuitem">Home</Link></li>
                        <li><Link to="/rooms" role="menuitem">Rooms</Link></li>
                        <li><Link to="/aboutus" role="menuitem">About Us</Link></li>
                        <li class="slicknav_collapsed slicknav_parent"><Link to="" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" style={{ outline: "none" }}><Link to="./pages.html">Pages</Link>
                            <span class="slicknav_arrow">►</span></Link><ul class="dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{ display: "none" }}>
                                {/* <li><Link to="./room-details.html" role="menuitem" tabindex="-1">Room Details</Link></li>
                                <li><Link to="#" role="menuitem" tabindex="-1">Deluxe Room</Link></li>
                                <li><Link to="#" role="menuitem" tabindex="-1">Family Room</Link></li>
                                <li><Link to="#" role="menuitem" tabindex="-1">Premium Room</Link></li> */}
                            </ul>
                        </li>
                        {/* <li><Link to="./blog.html" role="menuitem">News</Link></li> */}
                        <li><Link to="/contactus" role="menuitem">Contact</Link></li>
                    </ul>
                </nav></div></div>
                <div class="top-social">
                    <Link to="#"><i class="fa fa-facebook"></i></Link>
                    <Link to="#"><i class="fa fa-twitter"></i></Link>
                    <Link to="#"><i class="fa fa-tripadvisor"></i></Link>
                    <Link to="#"><i class="fa fa-instagram"></i></Link>
                </div>
                <ul class="top-widget">
                    <li><i class="fa fa-phone"></i> (12) 345 67890</li>
                    <li><i class="fa fa-envelope"></i> info.niceHotel@gmail.com</li>
                </ul>
            </div>
            {/* <!-- Offcanvas Menu Section End -->

    <!-- Header Section Begin --> */}
            <header class="header-section">
                <div class="top-nav">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <ul class="tn-left">
                                    <li><i class="fa fa-phone"></i> (12) 345 67890</li>
                                    <li><i class="fa fa-envelope"></i> info.niceHotel@gmail.com</li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <div class="tn-right">
                                    <div class="top-social">
                                        <Link to="#"><i class="fa fa-facebook"></i></Link>
                                        <Link to="#"><i class="fa fa-twitter"></i></Link>
                                        <Link to="#"><i class="fa fa-tripadvisor"></i></Link>
                                        <Link to="#"><i class="fa fa-instagram"></i></Link>
                                    </div>
                                    <Link to="#" class="bk-btn">Booking Now</Link>
                                    {/* <div class="language-option">
                                        <img src="img/flag.jpg" alt="" />
                                        <span>EN <i class="fa fa-angle-down"></i></span>
                                        <div class="flag-dropdown">
                                            <ul>
                                                <li><Link to="#">Zi</Link></li>
                                                <li><Link to="#">Fr</Link></li>
                                            </ul>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-2">
                                <div class="logo" style={{height:"8vmin",display:"flex",justifyContent:"center"}}>
                                    <Link to="/" className="logo d-flex align-items-center" >
                                        {/* <img src="/assets/img/logo.png" alt="" /> */}
                                        <span className="d-none d-lg-block" style={{color:"#dfa974"}}>NiceHotel</span>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-10">
                                <div class="nav-menu">
                                    <nav class="mainmenu">
                                        <ul>
                                            <li class="active"><Link to="/">Home</Link></li>
                                            <li><Link to="/rooms">Rooms</Link></li>
                                            <li><Link to="/aboutus">About Us</Link></li>
                                            {/* <li><Link to="./pages.html">Pages</Link>
                                                <ul class="dropdown">
                                                    <li><Link to="./room-details.html">Room Details</Link></li>
                                                    <li><Link to="./blog-details.html">Blog Details</Link></li>
                                                    <li><Link to="#">Family Room</Link></li>
                                                    <li><Link to="#">Premium Room</Link></li>
                                                </ul>
                                            </li> */}
                                            {/* <li><Link to="./blog.html">News</Link></li> */}
                                            <li><Link to="/contactus">Contact</Link></li>
                                        </ul>
                                    </nav>
                                    {/* <div class="nav-right search-switch">
                                        <i class="icon_search"></i>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- Header End -->*/}
        </>
    )
}