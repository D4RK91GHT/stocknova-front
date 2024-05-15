import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { RiMenu2Line, RiSettings3Line, RiSearchLine } from "react-icons/ri";

export default function DashboardNavbar({ onSkin }) {
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

  const skinMode = (e) => {
    e.preventDefault();
    e.target.classList.add("active");

    let node = e.target.parentNode.firstChild;
    while (node) {
      if (node !== e.target && node.nodeType === Node.ELEMENT_NODE)
        node.classList.remove("active");
      node = node.nextElementSibling || node.nextSibling;
    }

    let skin = e.target.textContent.toLowerCase();
    let HTMLTag = document.querySelector("html");

    if (skin === "dark") {
      HTMLTag.setAttribute("data-skin", skin);
      localStorage.setItem("skin-mode", skin);

      onSkin(skin);
    } else {
      HTMLTag.removeAttribute("data-skin");
      localStorage.removeItem("skin-mode");

      onSkin("");
    }
  };

  const sidebarSkin = (e) => {
    e.preventDefault();
    e.target.classList.add("active");

    let node = e.target.parentNode.firstChild;
    while (node) {
      if (node !== e.target && node.nodeType === Node.ELEMENT_NODE)
        node.classList.remove("active");
      node = node.nextElementSibling || node.nextSibling;
    }

    let skin = e.target.textContent.toLowerCase();
    let HTMLTag = document.querySelector("html");

    HTMLTag.removeAttribute("data-sidebar");

    if (skin !== "default") {
      HTMLTag.setAttribute("data-sidebar", skin);
      localStorage.setItem("sidebar-skin", skin);
    } else {
      localStorage.removeItem("sidebar-skin", skin);
    }
  };

  return (
    <div className="header-main px-3 px-lg-4">
      <Link onClick={toggleSidebar} className="menu-link me-3 me-lg-4">
        {/* <i className="ri-menu-2-fill"></i> */}
        <RiMenu2Line />
      </Link>

      <div className="form-search me-auto">
        <input type="text" className="form-control" placeholder="Search" />
        {/* <i className="ri-search-line"></i> */}
        <RiSearchLine />
      </div>

      <Dropdown className="dropdown-skin" align="end">
        <Dropdown.Toggle as={CustomToggle}>
          {/* <i className="ri-settings-3-line"></i> */}
          <RiSettings3Line className="fs-5"/>
        </Dropdown.Toggle>
        <Dropdown.Menu className="mt-10-f">
          <label>Skin Mode</label>
          <nav className="nav nav-skin">
            <Link
              onClick={skinMode}
              className={
                localStorage.getItem("skin-mode")
                  ? "nav-link"
                  : "nav-link active"
              }
            >
              Light
            </Link>
            <Link
              onClick={skinMode}
              className={
                localStorage.getItem("skin-mode")
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Dark
            </Link>
          </nav>
          <hr />
          <label>Sidebar Skin</label>
          <nav id="sidebarSkin" className="nav nav-skin">
            <Link
              onClick={sidebarSkin}
              className={
                !localStorage.getItem("sidebar-skin")
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Default
            </Link>
            <Link
              onClick={sidebarSkin}
              className={
                localStorage.getItem("sidebar-skin") === "prime"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Prime
            </Link>
            <Link
              onClick={sidebarSkin}
              className={
                localStorage.getItem("sidebar-skin") === "dark"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Dark
            </Link>
          </nav>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="dropdown-profile ms-3 ms-xl-4" align="end">
        <Dropdown.Toggle as={CustomToggle}>
          <div className="avatar online">
            <img src="assets/img/user-avatar.png" alt="" />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="mt-10-f">
          <div className="dropdown-menu-body">
            <div className="avatar avatar-xl online mb-3"><img src="assets/img/user-avatar.png" alt="" /></div>
            <h5 className="mb-1 text-dark fw-semibold">Shaira Diaz</h5>
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
