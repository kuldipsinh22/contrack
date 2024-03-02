import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [auth, setAuth] = useState(sessionStorage.getItem("user"));
  const [role_id, setRole] = useState(sessionStorage.getItem("role"));
  return (
    <div>
      <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
          {role_id == 1 ? (
            <>
              {" "}
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
            </>
          ) : role_id == 2 ? (
            <>
              <li class="nav-item">
                <Link class="nav-link collapsed" to="/Contractor">
                  <i class="bi bi-person"></i>
                  <span>Contractor</span>
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
            </>
          ) : (
            <>
              <li class="nav-item">
                <Link class="nav-link collapsed" to="/Task">
                  <i class="bi bi-person"></i>
                  <span>Task</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </aside>
    </div>
  );
}
