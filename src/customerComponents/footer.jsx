import React from "react";
import { Link } from "react-router-dom";

export default function CustomerFooter() {
    return (
        <>
          <footer class="footer-section">
                <div class="container">
                    <div class="footer-text">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="ft-about">
                                    <div class="logo">
                                        <Link to="#">
                                            {/* <img src="img/footer-logo.png" alt="" /> */}
                                            <span className="d-none d-lg-block" style={{color:"#dfa974"}}>NiceHotel</span>
                                        </Link>
                                    </div>
                                    <p>We inspire and reach millions of travelers<br /> across 90 local websites</p>
                                    <div class="fa-social">
                                        <Link to="#"><i class="fa fa-facebook"></i></Link>
                                        <Link to="#"><i class="fa fa-twitter"></i></Link>
                                        <Link to="#"><i class="fa fa-tripadvisor"></i></Link>
                                        <Link to="#"><i class="fa fa-instagram"></i></Link>
                                        <Link to="#"><i class="fa fa-youtube-play"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 offset-lg-1">
                                <div class="ft-contact">
                                    <h6>Contact Us</h6>
                                    <ul>
                                        <li>(12) 345 67890</li>
                                        <li>info.niceHotel@gmail.com</li>
                                        <li>PUNE, MH</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 offset-lg-1">
                                <div class="ft-newslatter">
                                    <h6>New latest</h6>
                                    <p>Get the latest updates and offers.</p>
                                    <form action="#" class="fn-form">
                                        <input type="text" placeholder="Email" />
                                        <button type="submit"><i class="fa fa-send"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-option">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7">
                                <ul>
                                    <li><Link to="#">Contact</Link></li>
                                    <li><Link to="#">Terms of use</Link></li>
                                    <li><Link to="#">Privacy</Link></li>
                                    <li><Link to="#">Environmental Policy</Link></li>
                                </ul>
                            </div>
                            <div class="col-lg-5">
                                <div class="co-text"><p>
                                    Copyright ©<script>document.write(new Date().getFullYear());</script>2024 All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <Link to="/admin" >NiceHotel</Link>
                                </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- Footer Section End -->

    <!-- Search model Begin --> */}
            <div class="search-model">
                <div class="h-100 d-flex align-items-center justify-content-center">
                    <div class="search-close-switch"><i class="icon_close"></i></div>
                    <form class="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
            {/* <!-- Search model end --> */}
        </>
    )}