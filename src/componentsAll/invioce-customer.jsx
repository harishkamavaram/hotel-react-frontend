import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { findOneBooking } from "../actionCreators/booking";
import html2pdf from 'html2pdf.js';
import { getEmail } from "../actionCreators/rooms";

export default function Invioce() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const rooms = useSelector((state) => state.rooms.customerSelectedRoom)
    console.log("rooms.......>>>>>>", rooms);
    // const guest = useSelector((state) => state.guest.data)
    // console.log("guest...>", guest);
    const bookingID = useSelector((state) => state.booking.bookingID)
    // console.log("bookingID.......>>>>>>", bookingID);
    const bookingIdDetails = useSelector((state) => state.booking.bookingIdDetails)
    // console.log("bookingIdDetails.......>>>>>>", bookingIdDetails);

    const convertToPdf = () => {
        dispatch(getEmail())
        const element = document.getElementById('content-to-convert');
        const opt = {
            margin: 0.25,
            filename: 'NiceHotel-booking-invoice.pdf',
            image: { type: 'jpeg', quality: 2.0 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().from(element).set(opt).save();
        setTimeout(() => {
            navigate("/")
        }, 3000);
    };
    useEffect(() => {
        if (loading) {
            if (rooms.length !== 0) {
                if (bookingID.length !== 0) {
                    dispatch(findOneBooking(bookingID));
                }
            }
            else {
                navigate("/")
            }
            setLoading(false)
        }
    }, [dispatch, rooms, navigate, bookingID, loading]);

    return (
        <>

            <div class="container mt-6 mb-7" >
                <div class="row justify-content-center">
                    <div class="col-lg-12 col-xl-7">
                        <div class="card">
                            <div class="card-body p-5" id="content-to-convert">
                                <h2>
                                    Hey {bookingIdDetails.FirstName}{' '}{bookingIdDetails.LastName},
                                </h2>
                                <p class="fs-sm">
                                    This is the receipt for a booking of <strong>₹{' '}{(bookingIdDetails.WithGST - bookingIdDetails.TotalPrice * 0.05).toFixed(2)}</strong> (INR) you made to NiceHotel.
                                </p>

                                <div class="border-top border-gray-200 pt-4 mt-4">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="text-muted mb-2">Booking ID</div>
                                            <strong>#{bookingIdDetails.BookingID}</strong>
                                        </div>
                                        <div class="col-md-6 text-md-end">
                                            <div class="text-muted mb-2">Check IN Date</div>
                                            <strong>{new Date(bookingIdDetails.CheckinDate).toLocaleDateString('en-GB')}</strong>
                                            <div class="text-muted mb-2">Check OUT Date</div>
                                            <strong>{new Date(bookingIdDetails.CheckoutDate).toLocaleDateString('en-GB')}</strong>
                                        </div>
                                    </div>
                                </div>

                                <div class="border-top border-gray-200 mt-4 py-4">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="text-muted mb-2">Guest</div>
                                            <strong>
                                                {bookingIdDetails.FirstName}{' '}{bookingIdDetails.LastName}
                                            </strong>
                                            <p class="fs-sm">
                                                {bookingIdDetails.Address}
                                                <br />
                                                <a href="#!" class="text-purple">{bookingIdDetails.Email}
                                                </a>
                                            </p>
                                        </div>
                                        <div class="col-md-6 text-md-end">
                                            <div class="text-muted mb-2">Payment To</div>
                                            <strong>
                                                NiceHotel
                                            </strong>
                                            <p class="fs-sm">
                                                PUNE , MH
                                                <br />
                                                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" class="text-purple" target="_main">info.niceHotel@gmail.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <table class="table border-bottom border-gray-200 mt-3">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="fs-sm text-dark text-uppercase-bold-sm px-0">Description</th>
                                            <th scope="col" class="fs-sm text-dark text-uppercase-bold-sm text-end px-0">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="px-0">{bookingIdDetails.Name}{' '}Room</td>
                                            <td class="text-end px-0">₹{bookingIdDetails.TotalPrice}</td>
                                        </tr>
                                        {/* <tr>
                                            <td class="px-0">Website design</td>
                                            <td class="text-end px-0">$80.00</td>
                                        </tr> */}
                                        {/* <tr>
                                            <td class="px-0">GST</td>
                                            <td class="text-end px-0">${bookingIdDetails.PricePerNight*0.12.toFixed(2)}</td>
                                        </tr>  */}
                                        <tr>
                                            <td class="px-0">GST</td>
                                            <td class="text-end px-0">₹{' '}{(bookingIdDetails.TotalPrice * 0.12).toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class="mt-5">
                                    <div class="d-flex justify-content-end">
                                        <p class="text-muted me-3">Subtotal :</p>
                                        <span>₹{' '}{(bookingIdDetails.WithGST)}</span>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <p class="text-muted me-3">Discount (5%) :</p>
                                        <span>₹{' '}{(bookingIdDetails.TotalPrice * 0.05).toFixed(2)}</span>
                                    </div>
                                    <div class="d-flex justify-content-end mt-3">
                                        <h5 class="me-3">Total:</h5>
                                        <h5 class="text-success">₹{' '}{(bookingIdDetails.WithGST - bookingIdDetails.TotalPrice * 0.05).toFixed(2)}</h5>
                                    </div>
                                    <div class="d-flex justify-content-end mt-3">
                                        {/* <h5 class="me-3">Pay At Hotel...!</h5> */}
                                        <h5 class="text-warning">Pay At Hotel...!</h5>
                                    </div>
                                </div>
                            </div>
                            {/* <a href="#!" class="btn btn-dark btn-lg card-footer-btn justify-content-center text-uppercase-bold-sm hover-lift-light">
                                <span class="svg-icon text-white me-2">
                                    <title>ionicons-v5-g</title>
                                    <path
                                        d="M336,208V113a80,80,0,0,0-160,0v95"
                                        style={{
                                            fill: "none",
                                            stroke: "#000",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "32px"
                                        }}
                                    />
                                    <rect x="96" y="208" width="320" height="272" rx="48" ry="48"
                                        style={{
                                            fill: "none",
                                            stroke: "#000",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "32px"
                                        }}
                                    />
                                </span>
                                Pay Now
                            </a> */}
                            <a href="#!" class="btn btn-dark btn-lg card-footer-btn justify-content-center text-uppercase-bold-sm hover-lift-light"
                                // onClick={dispatch(bookingPDF())}
                                onClick={convertToPdf}>
                                <span class="svg-icon text-white me-2">
                                    <title>ionicons-v5-g</title>
                                    <path
                                        d="M336,208V113a80,80,0,0,0-160,0v95"
                                        style={{
                                            fill: "none",
                                            stroke: "#000",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "32px"
                                        }}
                                    />
                                    <rect x="96" y="208" width="320" height="272" rx="48" ry="48"
                                        style={{
                                            fill: "none",
                                            stroke: "#000",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "32px"
                                        }}
                                    />
                                </span>
                                {/* Send  invoice To Mail */}
                                Download Invoice
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}