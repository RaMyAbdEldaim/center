import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style/Hero.css";
import im1 from "../assets/im1.png";
import logo from "../assets/download.png";

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const ToggleSwitch = ({ isDarkMode }) => (
    <div
      className="hero-toggle-switch rounded-pill d-flex align-items-center justify-content-between p-1"
      onClick={() => setDarkMode(!isDarkMode)}
    >
      <span
        className={`toggle-icon-wrap rounded-circle d-flex align-items-center justify-content-center ${
          !isDarkMode ? "active-toggle" : "text-secondary-toggle"
        }`}
      >
        <i className="fas fa-sun"></i>
      </span>
      <span
        className={`toggle-icon-wrap rounded-circle d-flex align-items-center justify-content-center ${
          isDarkMode ? "active-toggle" : "text-secondary-toggle"
        }`}
      >
        <i className="fas fa-moon"></i>
      </span>
    </div>
  );

  return (
    <section
      className={`my-hero-section d-flex flex-column position-relative ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      {/* Navbar */}
      <div className="hero-navbar-wrap position-fixed w-100 top-0 d-flex justify-content-center z-3">
        <nav
          className={`hero-navbar  shadow-sm px-4 py-3 my-3 ${
            darkMode ? "bg-dark text-light" : "bg-white"
          }`}
        >
          <div className="hero-navbar-content d-flex justify-content-between align-items-center w-100">
            
            <div className="d-flex align-items-center gap-3">
            
              <img
                src={logo}
                alt="logo"
                className="hero-logo"
                style={{ height: "45px" }}
              />

              
              <div className="d-none d-md-flex flex-column align-items-start">
                <span
                  className={`fw-bold fs-5 line-height-1 ${
                    darkMode ? "text-light" : "text-secondary"
                  }`}
                >
                  THE LEGEND
                </span>
                <span
                  className={`small line-height-1 ${
                    darkMode ? "text-light-subtle" : "text-secondary"
                  }`}
                >
                  FOR CHEMISTRY
                </span>
              </div>

              
              <ToggleSwitch isDarkMode={darkMode} />
            </div>

            <div className="d-none d-lg-flex align-items-center gap-2">
              <button className="btn fw-bold rounded px-4 py-2 hero-btn-new">
                حساب جديد
              </button>
              <button className="btn fw-bold rounded px-4 py-2 hero-btn-login">
                تسجيل الدخول
              </button>
            </div>

            <div className="d-lg-none">
              <button
                className={`btn p-0 border-0 fs-2 ${
                  darkMode ? "text-light" : "text-dark"
                }`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                ☰
              </button>
            </div>
          </div>
        </nav>
      </div>


      {menuOpen && (
        <div
          className={`mobile-menu position-fixed top-0 end-0 w-100 shadow-lg py-4 text-center d-lg-none ${
            darkMode ? "bg-dark text-light" : "bg-white"
          }`}
          style={{ zIndex: 200 }}
        >
          <button
            className="btn btn-link text-danger fw-bold mb-3"
            onClick={() => setMenuOpen(false)}
          >
            ✖ إغلاق
          </button>
          <div className="d-flex flex-column gap-3">
            <button className="btn btn-danger rounded-pill fw-bold mx-4">
              حساب جديد
            </button>
            <button className="btn btn-outline-danger rounded-pill fw-bold mx-4">
              تسجيل الدخول
            </button>
          </div>
        </div>
      )}


      <div className="container-fluid flex-grow-1 d-flex align-items-center mt-navbar-offset">
        <div
          className="row w-100 align-items-center"
          style={{ minHeight: "100vh" }}
          dir="rtl"
        >
          <div className="col-12 col-lg-6 text-end pe-lg-5 py-5 mt-5 mt-lg-0 order-2 order-lg-1">
            <h1
              className={`hero-title fonts mb-4 text-center text-lg-end ${
                darkMode ? "text-light" : ""
              }`}
            >
              وفهم الكيمياء بأسلوب
              <br className="d-none d-lg-block" />
              بسيط وممتع
            </h1>
            <p
              className={`hero-desc lead mb-4 text-center text-lg-end ${
                darkMode ? "text-light-subtle" : ""
              }`}
            >
              <strong>أهلاً بك في بيتك التاني!</strong>
              <br />
              سواء كنت في أولى، تانية أو تالتة ثانوي، هنا هتلاقي كل اللي تحتاجه عشان تتفوق.
            </p>
            <div className="text-center text-lg-end">
              <button className="btn btn-light fw-bold hero-cta mb-4 rounded-3">
                اشترك دلوقتي !
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-6 d-flex justify-content-center py-5 order-1 order-lg-2">
            <div className="hero-image-wrap d-flex align-items-center justify-content-center position-relative">
              <div className="hero-image-circle"></div>
              <img src={im1} alt="teacher" className="hero-teacher" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
