

export default function Staff() {
    
  
    return (
      <div>
        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Staff Data Table</h1>
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
                    <h5 className="card-title"> All Bookings</h5>
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
                          <th
                            width="12.5%"
                            className="sort-table"
                            id="sort_room_type"
                          >
                            Room Type     
                          </th>
                          <th
                            width="12.5%"
                            className="sort-table"
                            id="sort_members"
                          >
                            Total Members
                          </th>
                          <th width="12.5%" className="sort-table" id="sort_date">
                             Date of Booking
                          </th>
                          <th width="12.5%" className="sort-table" id="sort_time">
                             Time of Booking
                          </th>
                          <th width="12.5%" className="sort-table" id="sort_arrival_date">
                             Arrival Date
                          </th>
                          <th width="25%" className="sort-table" id="sort_departure_date">
                             Departure Date
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
                          <td>&nbsp;</td>
                        </tr>
  
    
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
  