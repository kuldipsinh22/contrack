import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Header() {
  const [admin_name, setadmin_name] = useState("");
  const [sub_admin_name, setsubadmin_name] = useState("");
  const [contractor_name, setcontractor_name] = useState("");
  const [id, setId] = useState(sessionStorage.getItem("user"));
  const [role_id, setRole_Id] = useState(sessionStorage.getItem("role"));
  useEffect(() => {
    fatchUserName();
    if (!id) {
      Navigate("/");
      window.location.reload();
    }
  }, [id]);

  const fatchUserName = async () => {
    if (role_id == 1) {
      try {
        const res = await axios.get("http://localhost:1122/track/admin/" + id);
        console.log(res.data.admin_name);
        setadmin_name(res.data.admin_name);
      } catch (error) {}
    } else if (role_id == 2) {
      try {
        const res = await axios.get(
          "http://localhost:1122/track/subadmin/" + id
        );
        console.log(res.data);
        setsubadmin_name(res.data.setsubadmin_name);
      } catch (error) {}
    } else {
      try {
        const res = await axios.get(
          "http://localhost:1122/track/contractor/" + id
        );
        console.log(res.data);
        setcontractor_name(res.data.contractor_name);
      } catch (error) {}
    }
  };
  const btnSignOut = () => {
    sessionStorage.clear();
    setId("");
  };
  return (
    <header id="header" class="header fixed-top d-flex align-items-center">
      <div class="d-flex align-items-center justify-content-between">
        <a href="index.html" class="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
          <span class="d-none d-lg-block">CONTRACK</span>
        </a>
      </div>

      <div class="search-bar">
        <form
          class="search-form d-flex align-items-center"
          method="POST"
          action="#"
        ></form>
      </div>

      <nav class="header-nav ms-auto">
        <ul class="d-flex align-items-center">
          <li class="nav-item d-block d-lg-none">
            <a class="nav-link nav-icon search-bar-toggle " href="#">
              <i class="bi bi-search"></i>
            </a>
          </li>

          <li class="nav-item dropdown">
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
              <li class="dropdown-header">
                You have 4 new notifications
                <a href="#">
                  <span class="badge rounded-pill bg-primary p-2 ms-2">
                    View all
                  </span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="notification-item">
                <i class="bi bi-exclamation-circle text-warning"></i>
                <div>
                  <h4>Lorem Ipsum</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>30 min. ago</p>
                </div>
              </li>

              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="notification-item">
                <i class="bi bi-x-circle text-danger"></i>
                <div>
                  <h4>Atque rerum nesciunt</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>1 hr. ago</p>
                </div>
              </li>

              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="notification-item">
                <i class="bi bi-check-circle text-success"></i>
                <div>
                  <h4>Sit rerum fuga</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>2 hrs. ago</p>
                </div>
              </li>

              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="notification-item">
                <i class="bi bi-info-circle text-primary"></i>
                <div>
                  <h4>Dicta reprehenderit</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>4 hrs. ago</p>
                </div>
              </li>

              <li>
                <hr class="dropdown-divider" />
              </li>
              <li class="dropdown-footer">
                <a href="#">Show all notifications</a>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
              <li class="dropdown-header">
                You have 3 new messages
                <a href="#">
                  <span class="badge rounded-pill bg-primary p-2 ms-2">
                    View all
                  </span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="message-item">
                <a href="#">
                  <img
                    src="assets/img/messages-1.jpg"
                    alt=""
                    class="rounded-circle"
                  />
                  <div>
                    <h4>Maria Hudson</h4>
                    <p>
                      Velit asperiores et ducimus soluta repudiandae labore
                      officia est ut...
                    </p>
                    <p>4 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="message-item">
                <a href="#">
                  <img
                    src="assets/img/messages-2.jpg"
                    alt=""
                    class="rounded-circle"
                  />
                  <div>
                    <h4>Anna Nelson</h4>
                    <p>
                      Velit asperiores et ducimus soluta repudiandae labore
                      officia est ut...
                    </p>
                    <p>6 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="message-item">
                <a href="#">
                  <img
                    src="assets/img/messages-3.jpg"
                    alt=""
                    class="rounded-circle"
                  />
                  <div>
                    <h4>David Muldon</h4>
                    <p>
                      Velit asperiores et ducimus soluta repudiandae labore
                      officia est ut...
                    </p>
                    <p>8 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="dropdown-footer">
                <a href="#">Show all messages</a>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown pe-3">
            <a
              class="nav-link nav-profile d-flex align-items-center pe-0"
              href="#"
              data-bs-toggle="dropdown"
            >
              <span class="d-none d-md-block dropdown-toggle ps-2">
                {role_id == "1" ? (
                  <span>{admin_name}</span>
                ) : role_id == "2" ? (
                  <span>{sub_admin_name}</span>
                ) : (
                  <span>{contractor_name}</span>
                )}
              </span>
            </a>

            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li class="dropdown-header">
                <h6>
                  {role_id == "1" ? (
                    <span>{admin_name}</span>
                  ) : role_id == "2" ? (
                    <span>{sub_admin_name}</span>
                  ) : (
                    <span>{contractor_name}</span>
                  )}
                </h6>
                <span>
                  {role_id == "1" ? (
                    <span>Main Governer Admin</span>
                  ) : role_id == "2" ? (
                    <span>Sub admin under Governer's Admin</span>
                  ) : (
                    <span>Contractor under Sub admin</span>
                  )}
                </span>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li onClick={btnSignOut}>
                <a class="dropdown-item d-flex align-items-center" href="">
                  <i class="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
