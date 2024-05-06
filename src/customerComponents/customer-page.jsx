import { DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  getRoomTypes } from "../actionCreators/rooms";


export default function Customer() {

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    const rooms = useSelector((state) => state.rooms.roomTypes)
    // console.log("rooms0>>>>>>", rooms);
    // const room1 = rooms[0];
    // const room2 = rooms[1];
    // const room3 = rooms[2];
    // console.log("rooms0>>>>>>", room1);
    // console.log("rooms0>>>>>>", room2);
    // console.log("rooms0>>>>>>", room3);
    // const oneRoom = useSelector((state) => state.rooms.oneRoom)
    //   console.log("oneRoom ... >",oneRoom);
    useEffect(() => {

        // setTimeout(() => {
            // if (loading) {
                dispatch(getRoomTypes());
                // setLoading(false);   
            }
        // }, 100);
    // }
// )
    , [
        loading,
        dispatch,
        setLoading,
    ]);
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <>



            {/* <!-- Hero Section Begin --> */}
            <section class="hero-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="hero-text">
                                <h1>NiceHotel A Luxury Hotel</h1>
                                <p>Here are the best hotel booking sites, including recommendations for international
                                    travel and for finding low-priced hotel rooms.</p>
                                <Link to="#" class="primary-btn">Discover Now</Link>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
                            <div class="booking-form">
                                <h3>Booking Your Hotel</h3>
                                <form action="#">
                                    <div class="check-date">
                                        <label for="date-in">Check In:</label>
                                        <DatePicker
                                            format={{
                                                format: 'YYYY-MM-DD             ',
                                                type: 'mask',
                                            }}
                                            onChange={onChange}
                                        />
                                        {/* <i class="icon_calendar"></i> */}
                                    </div>
                                    <div class="check-date">
                                        <label for="date-out">Check Out:</label>
                                        <DatePicker
                                            format={{
                                                format: 'YYYY-MM-DD             ',
                                                type: 'mask',
                                            }}
                                            onChange={onChange}
                                        />
                                        {/* <i class="icon_calendar"></i> */}
                                    </div>
                                    <div class="select-option">
                                        <label for="guest">Guests:</label>
                                        {/* <select id="guest" style={{ display: "none" }}>
                                            <option value="">2 Adults</option>
                                            <option value="">3 Adults</option>
                                            <option value="">4 Adults</option>
                                        </select> */}
                                        <div class="nice-select" tabindex="0">
                                            <span class="current">2 Adults</span>
                                            <ul class="list"><li data-value="" class="option selected">2 Adults</li>
                                                <li data-value="" class="option">3 Adults</li>
                                                <li data-value="" class="option">5 Adults</li>
                                            </ul></div>
                                    </div>
                                    <div class="select-option">
                                        <label for="room">Room:</label>
                                        {/* <select id="room" style={{ display: "none" }}>
                                            <option value="">1 Room</option>
                                            <option value="">2 Room</option>
                                        </select> */}
                                        <div class="nice-select" tabindex="0"><span class="current">1 Room</span><ul class="list"><li data-value="" class="option selected">1 Room</li><li data-value="" class="option">2 Room</li></ul></div>
                                    </div>
                                    <button type="submit">Check Availability</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero-slider owl-carousel owl-loaded">
                    <div class="owl-stage-outer">
                        <div class="owl-stage" style={{ width: "10635px" }}>
                            <div class="owl-item cloned" style={{ width: "1519.2px" }}>
                                <div class="hs-item set-bg" data-setbg="img/hero/hero-1.jpg" style={{ backgroundImage: "url(img/hero/hero-2.jpg)" }}
                                >
                                </div>
                            </div>
                            {/* <div class="owl-item cloned" style={{ width: "1519.2px" }}>
                                <div class="hs-item set-bg" data-setbg="img/hero/hero-3.jpg" style={{ backgroundImage: "url(img/hero/hero-3.jpg)" }}
                                >
                                </div>
                            </div>
                            <div class="owl-item" style={{ width: "1519.2px" }}>
                                <div class="hs-item set-bg" data-setbg="img/hero/hero-1.jpg" style={{ backgroundImage: "url(img/hero/hero-1.jpg)" }}>
                                </div>
                            </div>
                            <div class="owl-item animated owl-animated-in fadeIn active" style={{ width: "1519.2px" }}>
                                <div class="hs-item set-bg" data-setbg="img/hero/hero-2.jpg" style={{ backgroundImage: "url(img/hero/hero-2.jpg)" }}>
                                </div>
                            </div>
                            <div class="owl-item animated owl-animated-in fadeIn" style={{ width: " 1519.2px" }}>
                                <div class="hs-item set-bg" data-setbg="img/hero/hero-3.jpg" style={{ backgroundImage: "url(img/hero/hero-3.jpg)" }}>
                                </div>
                            </div>.
                            <div class="owl-item cloned" style={{ width: "1519.2px" }}>
                                <div class="hs-item set-bg" data-setbg="img/hero/hero-1.jpg" style={{ backgroundImage: "url(img/hero/hero-1.jpg)" }}>
                                </div>
                            </div>
                            <div class="owl-item cloned" style={{ width: "1519.2px" }}>
                                <div class="hs-item set-bg" data-setbg="img/hero/hero-2.jpg" style={{ backgroundImage: "url(img/hero/hero-2.jpg)" }}>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous"></span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next"></span></button>
                    </div>
                    <div class="owl-dots">

                    </div>
                </div>
            </section>
            {/* <!-- Hero Section End -->

    <!-- About Us Section Begin --> */}
            <section class="aboutus-section spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="about-text">
                                <div class="section-title">
                                    <span>About Us</span>
                                    <h2>Intercontinental  <br />Westlake Hotel</h2>
                                </div>
                                <p class="f-para">Sona.com is a leading online accommodation site. We’re passionate about
                                    travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41
                                    languages.</p>
                                <p class="s-para">So when it comes to booking the perfect hotel, vacation rental, resort,
                                    apartment, guest house, or tree house, we’ve got you covered.</p>
                                {/* <Link to="#" class="primary-btn about-btn">Read More</Link> */}
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-pic">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <img src="img/about/about-1.jpg" alt="" />
                                    </div>
                                    <div class="col-sm-6">
                                        <img src="img/about/about-2.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- About Us Section End -->

    <!-- Services Section End --> */}
            <section class="services-section spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <span>What We Do</span>
                                <h2>Discover Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-sm-6">
                            <div class="service-item">
                                <i class="flaticon-036-parking"></i>
                                <h4>Travel Plan</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="service-item">
                                <i class="flaticon-033-dinner"></i>
                                <h4>Catering Service</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="service-item">
                                <i class="flaticon-026-bed"></i>
                                <h4>Babysitting</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="service-item">
                                <i class="flaticon-024-towel"></i>
                                <h4>Laundry</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="service-item">
                                <i class="flaticon-044-clock-1"></i>
                                <h4>Hire Driver</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="service-item">
                                <i class="flaticon-012-cocktail"></i>
                                <h4>Bar &amp; Drink</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Services Section End -->

    <!-- Home Room Section Begin --> */}
            <section class="hp-room-section">
                <div class="container-fluid">
                    <div class="hp-room-items">
                        <div class="row">
                            {/* <div class="col-lg-4 col-md-6">
                                <div class="hp-room-item set-bg" data-setbg="img/room/room-b3.jpg" style={{ backgroundImage: " url(img/room/room-b3.jpg)" }}>
                                    <div class="hr-text">
                                        <h3>{room1.Name} Room</h3>
                                        <h2>₹ {room1.PricePerNight}<span>/Pernight</span></h2>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="r-o">Size:</td>
                                                    <td>30 ft</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Capacity:</td>
                                                    <td>Max persion {room1.Capacity}</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Bed:</td>
                                                    <td>King Beds</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Services:</td>
                                                    <td>Wifi, Television, Bathroom,...</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {/* <Link to="#" class="primary-btn">More Details</Link> */}
                                    {/* </div>
                                </div>
                            </div>  */}
                           {rooms.map((room2)=>
                            <div class="col-lg-3 col-md-6">
                                <div className="hp-room-item set-bg" data-setbg="img/room/room-b2.jpg" style={{ backgroundImage: `url("img/room/room-b2.jpg")` }}>

                                    <div class="hr-text">
                                        <h3>{room2.Name} Room</h3>
                                        <h2>₹ {room2.PricePerNight}<span>/Pernight</span></h2>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="r-o">Size:</td>
                                                    <td>30 ft</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Capacity:</td>
                                                    <td>Max persion {room2.Capacity}</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Bed:</td>
                                                    <td>King Beds</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Services:</td>
                                                    <td>Wifi, Television, Bathroom,...</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {/* <Link to="#" class="primary-btn">More Details</Link> */}
                                    </div>
                                </div>
                            </div>)}
                            {/* <div class="col-lg-4 col-md-6">
                                <div class="hp-room-item set-bg" data-setbg="img/room/room-b3.jpg" style={{ backgroundImage: " url(img/room/room-b3.jpg)" }}>
                                    <div class="hr-text">
                                        <h3>{room3.Name} Room</h3>
                                        <h2>₹ {room3.PricePerNight}<span>/Pernight</span></h2>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="r-o">Size:</td>
                                                    <td>30 ft</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Capacity:</td>
                                                    <td>Max persion {room3.Capacity}</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Bed:</td>
                                                    <td>King Beds</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Services:</td>
                                                    <td>Wifi, Television, Bathroom,...</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Link to="#" class="primary-btn">More Details</Link>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div class="col-lg-3 col-md-6">
                                <div class="hp-room-item set-bg" data-setbg="img/room/room-b4.jpg" style={{ backgroundImage: " url(img/room/room-b4.jpg)" }}>
                                    <div class="hr-text">
                                        <h3>Family Room</h3>
                                        <h2>299$<span>/Pernight</span></h2>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="r-o">Size:</td>
                                                    <td>30 ft</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Capacity:</td>
                                                    <td>Max persion 5</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Bed:</td>
                                                    <td>King Beds</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Services:</td>
                                                    <td>Wifi, Television, Bathroom,...</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Link to="#" class="primary-btn">More Details</Link>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Home Room Section End -->

    <!-- Testimonial Section Begin --> */}
            <section class="testimonial-section spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <span>Testimonials</span>
                                <h2>What Customers Say?</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <div class="testimonial-slider owl-carousel owl-loaded owl-drag">


                                <div class="owl-stage-outer"><div class="owl-stage" style={{ transform: "translate3d(-2250px, 0px, 0px)", transition: "all 1.2s ease 0s", width: "4500px" }}><div class="owl-item cloned" style={{ width: "750px" }}><div class="ts-item">
                                    <p>After a construction project took longer than expected, my husband, my daughter and I
                                        needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
                                        city, neighborhood and the types of housing options available and absolutely love our
                                        vacation at  NiceHotel.</p>
                                    <div class="ti-author">
                                        <div class="rating">
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star-half_alt"></i>
                                        </div>
                                        <h5> - Alexander Vasquez</h5>
                                    </div>
                                    <img src="img/testimonial-logo.png" alt="" />
                                </div></div><div class="owl-item cloned" style={{ width: " 750px" }}><div class="ts-item">
                                    <p>lerom njjhbuhbgjunbjg ygiunihio uh9huh u0 yuhio hiojh iouhu8ohiohn hg 8yhiouhihguoyhndsniocivicx vhcxiuvhijcxnv </p>
                                    <div class="ti-author">
                                        <div class="rating">
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star-half_alt"></i>
                                        </div>
                                        <h5> - Alexander Vasquez</h5>
                                    </div>
                                    <img src="img/testimonial-logo.png" alt="" />
                                </div></div><div class="owl-item" style={{ width: " 750px" }}><div class="ts-item">
                                    <p>After a construction project took longer than expected, my husband, my daughter and I
                                        needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
                                        city, neighborhood and the types of housing options available and absolutely love our
                                        vacation at  NiceHotel.</p>
                                    <div class="ti-author">
                                        <div class="rating">
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star-half_alt"></i>
                                        </div>
                                        <h5> - Alexander Vasquez</h5>
                                    </div>
                                    <img src="img/testimonial-logo.png" alt="" />
                                </div></div><div class="owl-item active" style={{ width: " 750px" }}><div class="ts-item">
                                    <p>After a construction project took longer than expected, my husband, my daughter and I
                                        needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
                                        city, neighborhood and the types of housing options available and absolutely love our
                                        vacation at NiceHotel.</p>
                                    <div class="ti-author">
                                        <div class="rating">
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star-half_alt"></i>
                                        </div>
                                        <h5> - Alexander Vasquez</h5>
                                    </div>
                                    <img src="img/testimonial-logo.png" alt="" />
                                </div></div><div class="owl-item cloned" style={{ width: " 750px" }}><div class="ts-item">
                                    <p>After a construction project took longer than expected, my husband, my daughter and I
                                        needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
                                        city, neighborhood and the types of housing options available and absolutely love our
                                        vacation at NiceHotel.</p>
                                    <div class="ti-author">
                                        <div class="rating">
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star-half_alt"></i>
                                        </div>
                                        <h5> - Alexander Vasquez</h5>
                                    </div>
                                    <img src="img/testimonial-logo.png" alt="" />
                                </div></div><div class="owl-item cloned" style={{ width: " 750px" }}><div class="ts-item">
                                    <p>After a construction project took longer than expected, my husband, my daughter and I
                                        needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
                                        city, neighborhood and the types of housing options available and absolutely love our
                                        vacation at NiceHotel.</p>
                                    <div class="ti-author">
                                        <div class="rating">
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star-half_alt"></i>
                                        </div>
                                        <h5> - Alexander Vasquez</h5>
                                    </div>
                                    <img src="img/testimonial-logo.png" alt="" />
                                </div></div></div></div><div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><i class="arrow_left"></i></button><button type="button" role="presentation" class="owl-next"><i class="arrow_right"></i></button></div><div class="owl-dots disabled"></div></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Testimonial Section End -->

    <!-- Blog Section Begin --> */}
            {/* <section class="blog-section spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <span>Hotel News</span>
                                <h2>Our Blog &amp; Event</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="blog-item set-bg" data-setbg="img/blog/blog-1.jpg" style={{ backgroundImage: "url(img/blog/blog-1.jpg)" }}>
                                <div class="bi-text">
                                    <span class="b-tag">Travel Trip</span>
                                    <h4><Link to="#">Tremblant In Canada</Link></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 15th April, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="blog-item set-bg" data-setbg="img/blog/blog-2.jpg" style={{ backgroundImage: " url(img/blog/blog-2.jpg)" }}>
                                <div class="bi-text">
                                    <span class="b-tag">Camping</span>
                                    <h4><Link to="#">Choosing A Static Caravan</Link></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 15th April, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="blog-item set-bg" data-setbg="img/blog/blog-3.jpg" style={{ backgroundImage: " url(img/blog/blog-3.jpg)" }}>
                                <div class="bi-text">
                                    <span class="b-tag">Event</span>
                                    <h4><Link to="#">Copper Canyon</Link></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 21th April, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="blog-item small-size set-bg" data-setbg="img/blog/blog-wide.jpg" style={{ backgroundImage: "url(img/blog/blog-wide.jpg)" }}>
                                <div class="bi-text">
                                    <span class="b-tag">Event</span>
                                    <h4><Link to="#">Trip To Iqaluit In Nunavut A Canadian Arctic City</Link></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 08th April, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="blog-item small-size set-bg" data-setbg="img/blog/blog-10.jpg" style={{ backgroundImage: " url(img/blog/blog-10.jpg)" }}>
                                <div class="bi-text">
                                    <span class="b-tag">Travel</span>
                                    <h4><Link to="#">Traveling To Barcelona</Link></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 12th April, 2019</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <!-- Blog Section End -->

    <!-- Footer Section Begin --> */}


        </>
    )
}