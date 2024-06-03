import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { dashboardMenu } from "../data/Menu";

export default class Sidebar extends Component {
  toggleFooterMenu = (e) => {
    e.preventDefault();

    let parent = e.target.closest(".sidebar");
    parent.classList.toggle("footer-menu-show");
  };

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <Link to="/dashboard" className="sidebar-logo">
            Stock Nova
          </Link>
        </div>
        <PerfectScrollbar
          className="sidebar-body"
          ref={(ref) => (this._scrollBarRef = ref)}
        >
          <SidebarMenu onUpdateSize={() => this._scrollBarRef.updateScroll()} />
        </PerfectScrollbar>
      </div>
    );
  }
}

class SidebarMenu extends Component {
  populateMenu = (m) => {
    const menu = m.map((m, key) => {
      let sm;
      if (m.submenu) {
        sm = m.submenu.map((sm, key) => {
          return (
            <NavLink to={sm.link} className="nav-sub-link" key={key}>
              {sm.label}
            </NavLink>
          );
        });
      }

      return (
        <li key={key} className="nav-item">
          {!sm ? (
            <NavLink to={m.link} className="nav-link">
              {m.icon} <span>{m.label}</span>
            </NavLink>
          ) : (
            <div onClick={this.toggleSubMenu} className="nav-link has-sub">
              <i className={m.icon}></i> <span>{m.label}</span>
            </div>
          )}
          {m.submenu && <nav className="nav nav-sub">{sm}</nav>}
        </li>
      );
    });

    return <ul className="nav nav-sidebar">{menu}</ul>;
  };

  // Toggle menu group
  toggleMenu = (e) => {
    e.preventDefault();

    let parent = e.target.closest(".nav-group");
    parent.classList.toggle("show");

    this.props.onUpdateSize();
  };

  // Toggle submenu while closing siblings' submenu
  toggleSubMenu = (e) => {
    e.preventDefault();

    let parent = e.target.closest(".nav-item");
    let node = parent.parentNode.firstChild;

    while (node) {
      if (node !== parent && node.nodeType === Node.ELEMENT_NODE)
        node.classList.remove("show");
      node = node.nextElementSibling || node.nextSibling;
    }

    parent.classList.toggle("show");

    this.props.onUpdateSize();
  };

  render() {
    return (
      <>
        <div className="nav-group show">
          <div className="nav-label" onClick={this.toggleMenu}>
            Dashboard
          </div>
          {this.populateMenu(dashboardMenu)}
        </div>
      </>
    );
  }
}

window.addEventListener("click", function (e) {
    
  // Hide sidebar offset when clicked outside of sidebar
  let tar = e.target;
  if (!tar.closest(".sidebar") && !tar.closest(".menu-link")) {
    document.querySelector("body").classList.remove("sidebar-show");
  }
  
});