import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGuestMessage } from "../actionCreators/guest";


export default function Contactus() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    const handleOnClick = () => {
       
        const messages ={name, email, message};
        // console.log("messages",messages);
        dispatch(createGuestMessage(messages))
        setName("");
        setEmail("");
        setMessage("")
    }

    return (
        <>
            <section class="contact-section spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="contact-text">
                                <h2>Contact Info</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="c-o">Address:</td>
                                            <td>PUNE , MH</td>
                                        </tr>
                                        <tr>
                                            <td class="c-o">Phone:</td>
                                            <td>(12) 345 67890</td>
                                        </tr>
                                        <tr>
                                            <td class="c-o">Email:</td>
                                            <td>info.niceHotel@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td class="c-o">Fax:</td>
                                            <td>+(12) 345 67890</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-lg-7 offset-lg-1">
                            <form action="#" class="contact-form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input type="text" placeholder="Your Name" value={name}
                                            onChange={(e) => {
                                                // console.log(e.target.value);
                                                setName(e.target.value)
                                            }} />
                                    </div>
                                    <div class="col-lg-6">
                                        <input type="text" placeholder="Your Email" value={email}
                                            onChange={(e) => {
                                                // console.log(e.target.value);
                                                setEmail(e.target.value)
                                            }} />
                                    </div>
                                    <div class="col-lg-12">
                                        <textarea placeholder="Your Message" value={message}
                                            onChange={(e) => {
                                                // console.log(e.target.value);
                                                setMessage(e.target.value)
                                            }}></textarea>
                                        <button type="submit"
                                            onClick={handleOnClick}>Submit Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15136451.055764145!2d73.7128151!3d18.5257619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf3120c8b1f1%3A0x11a6beb8bbd8bb!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1647021799228!5m2!1sen!2sin"
                            height="470"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            title="Google Map of Pune, Maharashtra, India"
                        ></iframe>

                    </div>
                </div>
            </section>
        </>
    )
}