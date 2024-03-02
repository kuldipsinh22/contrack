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
            <Link class="nav-link collapsed" to="/Task">
              <i class="bi bi-person"></i>
              <span>Task</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link collapsed" to="/CompletedTask">
              <i class="bi bi-person"></i>
              <span>CompletedTask</span>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}
