import React, { useState } from "react";
import im1 from "../assets/im1.png";
import logo from "../assets/download.png";

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const ToggleSwitch = ({ isDarkMode }) => (
    <div
      className="w-[80px] h-[40px] bg-gray-200 cursor-pointer rounded-full p-1 flex items-center justify-between shadow-inner"
      onClick={() => setDarkMode(!isDarkMode)}
    >
      <span
        className={`w-[32px] h-[32px] flex items-center justify-center rounded-full text-[1.2rem] transition-all duration-300 ${
          !isDarkMode ? "bg-[#ff2b00] text-white" : "text-gray-400"
        }`}
      >
        <i className="fas fa-sun"></i>
      </span>
      <span
        className={`w-[32px] h-[32px] flex items-center justify-center rounded-full text-[1.2rem] transition-all duration-300 ${
          isDarkMode ? "bg-[#ff2b00] text-white" : "text-gray-400"
        }`}
      >
        <i className="fas fa-moon"></i>
      </span>
    </div>
  );

  return (
    <section
      className={`min-h-screen w-screen overflow-x-hidden font-[Cairo] transition-colors duration-500 pt-1 flex flex-col relative ${
        darkMode ? "bg-[#121212] text-white" : "bg-[#ff2b00] text-white"
      }`}
    >
      {/* ✅ Navbar أكبر وأوضح */}
      <div className="fixed top-0 w-full flex justify-center z-50 pointer-events-none">
        <nav
          className={`w-[95%] max-w-[1300px] rounded-2xl px-6 py-1 my-3 min-h-[90px] flex justify-between items-center shadow-lg pointer-events-auto transition-all duration-300 ${
            darkMode ? "bg-[#1f1f1f] text-gray-100" : "bg-white text-gray-800"
          }`}
        >
          {/* Logo + Title + Toggle */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="logo" className="h-[55px]" />

            <div className="hidden md:flex flex-col items-start leading-none">
              <span
                className={`font-extrabold text-xl ${
                  darkMode ? "text-gray-100" : "text-gray-700"
                }`}
              >
                THE LEGEND
              </span>
              <span
                className={`text-base ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                FOR CHEMISTRY
              </span>
            </div>

            <ToggleSwitch isDarkMode={darkMode} />
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="bg-[#f73d09] text-white font-bold rounded-full px-8 py-3 text-lg shadow-md hover:bg-[#ff4d1a] hover:-translate-y-[2px] transition-all">
              حساب جديد
            </button>
            <button className="border-2 border-[#c90000] text-[#c40000] font-bold rounded-full px-8 py-3 text-lg hover:bg-[#c90000] hover:text-white hover:-translate-y-[2px] transition-all">
              تسجيل الدخول
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className={`text-4xl border-0 bg-transparent ${
                darkMode ? "text-white" : "text-black"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`fixed top-0 end-0 w-full py-6 text-center lg:hidden z-[200] shadow-lg transition-all duration-300 ${
            darkMode ? "bg-[#1f1f1f] text-gray-100" : "bg-white text-gray-800"
          }`}
        >
          <button
            className="text-red-600 font-bold mb-4"
            onClick={() => setMenuOpen(false)}
          >
            ✖ إغلاق
          </button>
          <div className="flex flex-col gap-3">
            <button className="bg-red-600 text-white rounded-full font-bold mx-4 py-3 text-lg">
              حساب جديد
            </button>
            <button className="border border-red-600 text-red-600 rounded-full font-bold mx-4 py-3 text-lg">
              تسجيل الدخول
            </button>
          </div>
        </div>
      )}

      {/* ✅ Hero Content مرفوع لفوق شوية */}
      <div className="container mx-auto flex-grow flex items-start mt-36">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center w-full min-h-[80vh] px-4 lg:px-16"
          dir="rtl"
        >
          {/* النص على اليمين */}
          <div className="text-end pe-0 lg:pe-10 py-1 mt-0 order-1 lg:order-1">
            <h1
              className={`text-5xl lg:text-7xl font-black mb-6 text-end transition-colors duration-300 leading-tight ${
                darkMode ? "text-gray-100" : "text-white"
              }`}
            >
              وفهم الكيمياء بأسلوب
              <br />
              بسيط وممتع
            </h1>
            <p
              className={`text-xl lg:text-2xl font-medium leading-relaxed mb-4 text-end ${
                darkMode ? "text-gray-400" : "text-white/90"
              } max-w-[650px] ms-auto`}
            >
              <strong>أهلاً بك في بيتك التاني!</strong>
              <br />
              سواء كنت في أولى، تانية أو تالتة ثانوي، هنا هتلاقي كل اللي تحتاجه عشان تتفوق.
            </p>
            <div className="text-end">
              <button className="bg-white text-[#ff2b00] font-bold rounded-xl shadow-lg px-10 py-4 text-lg hover:bg-[#ffe3db] hover:-translate-y-[3px] transition-all">
                اشترك دلوقتي !
              </button>
            </div>
          </div>

          {/* الصورة على الشمال */}
          <div className="flex justify-center py-10 order-2 lg:order-2 -mt-10">
            <div className="relative w-[360px] sm:w-[440px] lg:w-[600px] aspect-square flex items-center justify-center transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_45%_45%,#ff4d4d_10%,#cc2400_80%)] animate-pulse"></div>
              <img
                src={im1}
                alt="teacher"
                className="relative z-10 w-[92%] translate-y-8 transition-transform duration-500 hover:translate-y-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
