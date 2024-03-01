import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
          <li class="nav-item">
            <a class="nav-link " href="index.html">
              <i class="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>

          {/* <li class="nav-heading">Pages</li> */}

          <li class="nav-item">
            <Link class="nav-link collapsed" to="/Contractor">
              <i class="bi bi-person"></i>
              <span>Contractor</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link collapsed" to="/Subadmin">
              <i class="bi bi-person"></i>
              <span>SubAdmin</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link collapsed" to="/Project">
              <i class="bi bi-person"></i>
              <span>Project</span>
            </Link>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-faq.html">
              <i class="bi bi-question-circle"></i>
              <span>F.A.Q</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-contact.html">
              <i class="bi bi-envelope"></i>
              <span>Contact</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-register.html">
              <i class="bi bi-card-list"></i>
              <span>Register</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-login.html">
              <i class="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-error-404.html">
              <i class="bi bi-dash-circle"></i>
              <span>Error 404</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-blank.html">
              <i class="bi bi-file-earmark"></i>
              <span>Blank</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
