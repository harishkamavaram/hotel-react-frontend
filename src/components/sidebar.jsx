import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link " to="/admin">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" href="/" data-bs-target="#tables-nav" data-bs-toggle="collapse" >
            <i class="bi bi-layout-text-window-reverse"></i><span>Booking</span><i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <Link to="/admin/bookings/allbookings">
                <i class="bi bi-circle"></i><span>All Bookings</span>
              </Link>
            </li>
            <li>
              <Link to="/bookings/editbookings">
                <i class="bi bi-circle"></i><span>Edit Bookings</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/bookings/addbookings">
                <i class="bi bi-circle"></i><span>Add Bookings</span>
              </Link>
            </li>

          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" href="/" data-bs-target="#Customers-nav" data-bs-toggle="collapse" >
            <i class="bi bi-people-fill"></i>
            <span>Customers</span><i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="Customers-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <Link to="/customers/allcustomers">
                <i class="bi bi-circle"></i><span>All Customers</span>
              </Link>
            </li>
            <li>
              <Link to="/bookings/editbookings">
                <i class="bi bi-circle"></i><span>Edit Customers</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/bookings/addbookings">
                <i class="bi bi-circle"></i><span>Add Customers</span>
              </Link>
            </li>

          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" href="/" data-bs-target="#Rooms-nav" data-bs-toggle="collapse" >
          <i class="bi bi-key"></i>
<span>Rooms</span><i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="Rooms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <Link to="/admin/bookings/allbookings">
                <i class="bi bi-circle"></i><span>All Rooms</span>
              </Link>
            </li>
            <li>
              <Link to="/bookings/editbookings">
                <i class="bi bi-circle"></i><span>Edit Rooms</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/bookings/addbookings">
                <i class="bi bi-circle"></i><span>Add Rooms</span>
              </Link>
            </li>

          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" href="/" data-bs-target="#Staff-nav" data-bs-toggle="collapse" >
          <i class="bi bi-person"></i>
<span>Staff</span><i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="Staff-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <Link to="/admin/bookings/allbookings">
                <i class="bi bi-circle"></i><span>All Staff</span>
              </Link>
            </li>
            <li>
              <Link to="/bookings/editbookings">
                <i class="bi bi-circle"></i><span>Edit Staff</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/bookings/addbookings">
                <i class="bi bi-circle"></i><span>Add Staff</span>
              </Link>
            </li>

          </ul>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link collapsed" href="/" data-bs-target="#tables-nav" data-bs-toggle="collapse" >
            <i class="bi bi-layout-text-window-reverse"></i><span>Booking</span><i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <Link to="/admin/bookings/allbookings">
                <i class="bi bi-circle"></i><span>All Bookings</span>
              </Link>
            </li>
            <li>
              <Link to="/bookings/editbookings">
                <i class="bi bi-circle"></i><span>Edit Bookings</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/bookings/addbookings">
                <i class="bi bi-circle"></i><span>Add Bookings</span>
              </Link>
            </li>

          </ul>
        </li> */}
      </ul>
    </aside>
  )
}


export default Sidebar;