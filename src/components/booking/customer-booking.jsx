import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import ReactPaginate from "react-paginate";
import {  getCustomerBookings } from "../../actionCreators/booking"
import { EditOutlined } from "@ant-design/icons";
import { DatePicker, Input } from "antd";
import ReactPaginate from "react-paginate";


export default function CustomerBookings() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
 const booking = useSelector((state) => state.booking.customerBooking)
//  console.log("booking....>",booking);

const pagination = useSelector((state) => state.booking.customerPagination)
//  console.log("booking....>",booking);
// console.log("pagination....>", pagination);


const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(10); // Default value for items per page

const [searchName, setSearchName] = useState("");
const [searchCheckIn, setSearchCheckIn] = useState("");
const [searchCheckOut, setSearchCheckOut] = useState("");
const [searchBookingId, setSearchBookingId] = useState("");

const [sortDirection, setSortDirection] = useState("DESC");
const [sortBy, setSortBy] = useState("BookingID");

const pageCount = Math.ceil(pagination.itemCount / itemsPerPage);


// const handleSortDirection = () => {
//   if (sortDirection === "ASC") {
//     setSortDirection("DESC");
//     setLoading(true);
//     // console.log("clicked");
//   } else {
//     setSortDirection("ASC");
//     // console.log("clicked ASC");
//     setLoading(true);
//   }
// };

const handlePageClick = (data) => {
  const pageNumber = data.selected + 1;
  setCurrentPage(pageNumber);

  setLoading(true);
};


  useEffect(() => {

    setTimeout(() => {
      if (loading) {
        dispatch(
            getCustomerBookings(currentPage,
              itemsPerPage,
              searchBookingId,
              searchName,
              searchCheckIn,
              searchCheckOut,
              sortDirection,
              sortBy)

        );
        setLoading(false);
      }
    }, 100);
  }, [
    loading,
    dispatch,
    setLoading,currentPage,
    itemsPerPage,
    searchBookingId,
    searchName,
    searchCheckIn,
    searchCheckOut,
    sortDirection,
    sortBy
  ]);


  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Customer Booking  Data Table</h1>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-7">
              <select
                id="pagesize"
                style={{ marginRight: "10" }}
                onChange={(e) => {
                  const selectedPageSize = parseInt(e.target.value);
                  setItemsPerPage(selectedPageSize);
                  setCurrentPage(1);
                  setLoading(true);
                  // handlePageClick({selected: 0})
                }}
              >
                <option value="10" selected>
                  Default: 10
                </option>
                <option value="5">5</option>
              </select>
              entries per page
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"> All Customer Bookings</h5>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "right",
                      marginRight: "7vmin",
                    }}
                  >
                    
                  </div>

                  <table className="table table-hover table-striped">
                    <thead>
                      <tr>
                        <th width="12.5%" className="sort-table" id="sort_id">
                          Booking ID
                        </th>
                        <th width="12.5%" className="sort-table" id="sort_name">
                          Name
                        </th>
                        {/* <th
                          width="12.5%"
                          className="sort-table"
                          id="sort_room_type"
                        >
                          Room No
                        </th> */}
                        <th
                          width="12.5%"
                          className="sort-table"
                          id="sort_members"
                        >
                          Total Members
                        </th>
                        {/* <th width="12.5%" className="sort-table" id="sort_date">
                          Room Type
                        </th> */}
                        <th width="12.5%" className="sort-table" id="sort_time">
                         Price with GST
                        </th>
                        <th width="12.5%" className="sort-table" id="sort_arrival_date">
                          Check IN
                        </th>
                        <th width="12.5%" className="sort-table" id="sort_departure_date">
                          Check OUT
                        </th>
                        <th width="12.5%" className="sort-table" id="sort_departure_date">
                          Final Price
                        </th>
                        <th width="12.5%" className="sort-table" id="sort_departure_date">
                          Allot Room
                        </th>
                      </tr>
                      
                    </thead>
                    <tbody id="data-rows">
                      <tr>
                        
                        <td>
                        <Input
                            type="text"
                            id="search-booking-bookingID"
                            placeholder=" BookingID"
                            onKeyDown={(e) => {
                              if (e.key === "Enter"){
                                // console.log(e.target.value)
                              setSearchBookingId(e.target.value);
                              setCurrentPage(1);
                              setLoading(true);}
                            }}
                          />
                        </td>
                        <td>
                        <Input
                            type="text"
                            id="search-booking-name"
                            placeholder="Search Name"
                            onKeyDown={(e) => {
                              if (e.key === "Enter"){
                                console.log(e.target.value)
                              setSearchName(e.target.value);
                              setCurrentPage(1);
                              setLoading(true);}
                            }}
                          />
                        </td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td><DatePicker
                          onChange={(e, eString) => {
                            // console.log( eString);
                            setSearchCheckIn(eString);
                            setCurrentPage(1);
                            setLoading(true);
                          }}
                        /></td>
                        <td><DatePicker
                          onChange={(e, eString) => {
                            // console.log(e);
                            // console.log( e.target.value );
                            setSearchCheckOut(eString);
                            setCurrentPage(1);
                            setLoading(true);
                          }}
                        /></td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>

                       {booking.map((booking) => (
                         <tr key={booking.BookingID}>
                         <td>{booking.BookingID}</td>
                         <td>{booking.FirstName}{" "}{booking.LastName}</td>
                         {/* <td>{booking.RoomNumber}</td> */}
                         <td>{booking.Capacity}</td>
                         {/* <td>{booking.Name}</td> */}
                         <td><strong>₹{' '}</strong>{booking.WithGST}</td>
                         <td>{new Date(booking.CheckinDate).toLocaleDateString('en-GB')}</td>
                         <td>{new Date(booking.CheckoutDate).toLocaleDateString('en-GB')}</td>
                         <td><strong>₹{' '}</strong>{(booking.WithGST - booking.TotalPrice * 0.05).toFixed(2)}</td>
                         <td>
                          
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target={`#allotRoom-${booking.BookingID}`}
                              onClick={(e) => {
                                // dispatch(findOneRoo(booking.BookingID));
                              }}
                              style={{
                                margin: "0.5vmin",
                                // width: "4.2vmin",
                                // paddingLeft: "1vmin",
                              }}
                            >
                              <EditOutlined />
                            </button>
                           
                            <div
                              className="modal fade"
                              id={`allotRoom-${booking.BookingID}`}
                              tabIndex="-1"
                            >
                              <div className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title">
                                    Allot Room For - {booking.FirstName}{" "}{booking.LastName}
                                    </h5>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    <form>
                                       
                                      <div className="row mb-3">
                                        <label
                                          htmlFor="inputText"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Room TypeID
                                        </label>
                                        <div className="col-sm-8">
                                          <select class="form-select" aria-label="Default select example"
                                          // onChange={(e) =>
                                          //   //  console.log(e);
                                          //   // setStatues(e.target.value)
                                           
                                          // }
                                          >
                                             {/* <option  selected></option>  */}
                                           
                                              
                                                <option value="Booked" >Booked</option>
                                             
                                                <option value="Available">Available</option>
                                              
                                          </select>
                                        </div>




                                      </div>
                                    </form>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      data-bs-dismiss="modal"
                                      // onClick={() => {
                                      //   dispatch(
                                      //     updateRoom(room.TypeID, {
                                      //       RoomNumber : roomID,
                                      //       roomType: roomType,
                                      //       status: status,
                                            
                                      //     })
                                      //   );
                                      //   setStatues("");
                                      //   // setDepartment("");

                                      //   setLoading(true);
                                      // }}
                                    >
                                      Save changes
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                       </tr>
                      ))} 
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {pagination.itemCount > itemsPerPage && (
            <ReactPaginate
              initialPage={currentPage-1}
              pageCount={pageCount} // Total number of pages
              pageRangeDisplayed={5} // Number of pages to display in the pagination
              marginPagesDisplayed={2} // Number of pages to display at the beginning and end of the pagination
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
              pageLinkClassName={"page-link"}
              previousLinkClassName={"page-link"}
              nextLinkClassName={"page-link"}
            // onChange={console.log(currentPage-1)}      
            />
          )}
        </div>
      </main>
    </div>
  );
}
