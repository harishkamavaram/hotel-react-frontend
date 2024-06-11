import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tag } from "antd";
import { getAllMessages } from "../actionCreators/messages";
import ReactPaginate from "react-paginate";


export default function AllMessages() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  const messages = useSelector((state) => state.messages.data)
  console.log("messages>>>>>>", messages);
  const pagination = useSelector((state) => state.messages.pagination)
  console.log("pagination>>>>>>", pagination);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [sortDirection, setSortDirection] = useState("DESC");
  const [sortBy, setSortBy] = useState("id");

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
        dispatch(getAllMessages(currentPage,
          itemsPerPage,
          sortDirection,
          sortBy));
        setLoading(false);
      }
    }, 100);
  }, [
    loading,
    dispatch,
    setLoading, currentPage,
    itemsPerPage,
    sortDirection,
    sortBy
  ]);

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Messages Data Table</h1>
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
              </select>{' '}
              entries per page
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"> All Messages</h5>
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
                      <th width="10%" className="sort-table" id="sort_id">
                          No.
                        </th>
                        <th width="20%" className="sort-table" id="sort_id">
                          Name
                        </th>
                        <th width="30%" className="sort-table" id="sort_name">
                          Email
                        </th>
                        <th
                          width="40%"
                          className="sort-table"
                          id="sort_room_type"
                        >
                          Message
                        </th>
                        {/* <th
                          width="20%"
                          className="sort-table"
                          id="sort_members"
                        >
                          Total Members
                        </th>
                        <th width="20%" className="sort-table" id="sort_date">
                          Price
                        </th>
                        <th width="20%" className="sort-table" id="sort_date">
                          Status
                        </th> */}

                      </tr>
                    </thead>
                    <tbody id="data-rows">
                      <tr>
                      <td >&nbsp;</td>
                      <td >&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        {/* <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td> */}
                      </tr>
                      {messages.map((message,i=1) => (
                        <tr key={message.id}>
                          <td>{++i}</td>
                          <td>{message.name}</td>
                          <td>{message.email}</td>
                          <td>{message.message
                          }</td>
                          
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
