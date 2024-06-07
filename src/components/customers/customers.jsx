import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomers } from "../../actionCreators/guest";
import ReactPaginate from "react-paginate";
import { Input } from "antd";


export default function Customers() {
     

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
 const guests = useSelector((state) => state.guest.allGuests)
const pagination = useSelector((state) => state.guest.pagination)
//  console.log("booking....>",guests);


 const [currentPage, setCurrentPage] = useState(1);
 const [itemsPerPage, setItemsPerPage] = useState(10); // Default value for items per page

 const [searchGuestId, setSearchGuestId] = useState("");
 const [searchFirstName, setSearchFirstName] = useState("");
 const [searchLastName, setSearchLastName] = useState("");
//  const [searchCheckOut, setSearchCheckOut] = useState("");
//  const [searchBookingId, setSearchBookingId] = useState("");

 const [sortDirection, setSortDirection] = useState("DESC");
 const [sortBy, setSortBy] = useState("GuestID");

 const pageCount = Math.ceil(pagination.itemCount / itemsPerPage);


 const handlePageClick = (data) => {
  const pageNumber = data.selected + 1;
  setCurrentPage(pageNumber);

  setLoading(true);
};

  useEffect(() => {

    setTimeout(() => {
      if (loading) {
        dispatch(
          getAllCustomers(currentPage,
            itemsPerPage,
            searchGuestId,
            searchFirstName,
            searchLastName,
            sortDirection,
            sortBy)

        );
        setLoading(false);
      }
    }, 100);
  }, [
    loading,
    dispatch,
    setLoading,
  ]);

  
    return (
      <div>
        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Customers Data Table</h1>
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
                    <h5 className="card-title"> All Customers</h5>
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
                          <th width="14.2%" className="sort-table" id="sort_id">
                            Guest ID
                          </th>
                          <th width="14.2%" className="sort-table" id="sort_name">
                             First Name
                          </th>
                          <th
                            width="14.2%"
                            className="sort-table"
                            id="sort_room_type"
                          >
                            Last Name  
                          </th>
                          <th
                            width="14.2%"
                            className="sort-table"
                            id="sort_members"
                          >
                            Date Of Birth
                          </th>
                          <th width="14.2%" className="sort-table" id="sort_date">
                             Address
                          </th>
                          <th width="14.2%" className="sort-table" id="sort_time">
                             Phone No.
                          </th>
                          <th width="14.2%" className="sort-table" id="sort_arrival_date">
                            Email
                          </th>
                         
                        </tr>
                      </thead>
                      <tbody id="data-rows">
                        <tr>
                          <td> <Input
                            type="text"
                            id="search-customer-GuestID"
                            placeholder=" GuestID"
                            onKeyDown={(e) => {
                              if (e.key === "Enter"){
                                console.log(e.target.value)
                              setSearchGuestId(e.target.value);
                              setCurrentPage(1);
                              setLoading(true);}
                            }}
                          /></td>
                          <td> <Input
                            type="text"
                            id="search-customer-first"
                            placeholder="first Name"
                            onKeyDown={(e) => {
                              if (e.key === "Enter"){
                                console.log(e.target.value)
                              setSearchFirstName(e.target.value);
                              setCurrentPage(1);
                              setLoading(true);}
                            }}
                          /></td>
                          <td> <Input
                            type="text"
                            id="search-customer-last"
                            placeholder="Last Name"
                            onKeyDown={(e) => {
                              if (e.key === "Enter"){
                                console.log(e.target.value)
                              setSearchLastName(e.target.value);
                              setCurrentPage(1);
                              setLoading(true);}
                            }}
                          /></td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
  
                        {guests.map((guest) => (
                         <tr key={guest.GuestID}>
                         <td>{guest.GuestID}</td>
                         <td>{guest.FirstName}</td>
                         <td>{guest.LastName}</td>
                         <td>{new Date(guest.DateOfBirth).toLocaleDateString('en-GB')}</td> 
                         <td>{guest.Address}</td>
                         <td>{guest.Phone}</td>
                         <td>{guest.Email}</td>
                        
                         {/* <td>{new Date(guest.CheckoutDate).toLocaleDateString('en-GB')}</td> */}
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
              initialPage={currentPage - 1}
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
  