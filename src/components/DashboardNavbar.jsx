import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { RiMenu2Line } from "react-icons/ri";

export default function DashboardNavbar() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      to=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="dropdown-link"
    >
      {children}
    </Link>
  ));

  const toggleSidebar = (e) => {
    e.preventDefault();
    let isOffset = document.body.classList.contains("sidebar-offset");
    if (isOffset) {
      document.body.classList.toggle("sidebar-show");
    } else {
      if (window.matchMedia("(max-width: 991px)").matches) {
        document.body.classList.toggle("sidebar-show");
      } else {
        document.body.classList.toggle("sidebar-hide");
      }
    }
  };


  return (
    <div className="header-main d-flex justify-content-between px-3 px-lg-4">
      <Link onClick={toggleSidebar} className="menu-link me-3 me-lg-4">
        {/* <i className="ri-menu-2-fill"></i> */}
        <RiMenu2Line />
      </Link>

      <Dropdown className="dropdown-profile ms-3 ms-xl-4" align="end">
        <Dropdown.Toggle as={CustomToggle}>
          <div className="avatar online">
            <img src="assets/img/user-avatar.png" alt="" />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="mt-10-f">
          <div className="dropdown-menu-body">
            <div className="avatar avatar-xl online mb-3"><img src="assets/img/user-avatar.png" alt="" /></div>
            <h5 className="mb-1 text-dark fw-semibold">Dipak Majumdar</h5>
            <p className="fs-sm text-secondary">Premium Member</p>

            <nav className="nav">
              <Link to="/"><i className="ri-edit-2-line"></i> Edit Profile</Link>
              <Link to="/"><i className="ri-profile-line"></i> View Profile</Link>
            </nav>
            <hr />
            <nav className="nav">
              <Link to=""><i className="ri-question-line"></i> Help Center</Link>
              <Link to=""><i className="ri-lock-line"></i> Privacy Settings</Link>
              <Link to=""><i className="ri-user-settings-line"></i> Account Settings</Link>
              <Link to="/pages/signin"><i className="ri-logout-box-r-line"></i> Log Out</Link>
            </nav>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
