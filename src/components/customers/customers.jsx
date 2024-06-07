import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomers } from "../../actionCreators/guest";


export default function Customers() {
     

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
 const guests = useSelector((state) => state.guest.allGuests)

 console.log("booking....>",guests);



  useEffect(() => {

    setTimeout(() => {
      if (loading) {
        dispatch(
          getAllCustomers()

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
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
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
        
          </div>
        </main>
      </div>
    );
  }
  