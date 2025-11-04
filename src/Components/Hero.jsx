import React, { useState } from "react";
import { motion } from "framer-motion";
import im1 from "../assets/im1.png";
import logo from "../assets/download.png";

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const ToggleSwitch = ({ isDarkMode }) => (
    <div
      className="w-[80px] h-[40px] bg-gray-200 dark:bg-gray-700 cursor-pointer rounded-full p-1 flex items-center justify-between shadow-inner transition-colors duration-300"
      onClick={() => setDarkMode(!isDarkMode)}
    >
      <span
        className={`w-[32px] h-[32px] flex items-center justify-center rounded-full text-[1.4rem] transition-all duration-300 ${
          !isDarkMode ? "bg-[#ff2b00] text-white" : "text-gray-400 dark:text-gray-300"
        }`}
      >
        <i className="fas fa-sun"></i>
      </span>
      <span
        className={`w-[32px] h-[32px] flex items-center justify-center rounded-full text-[1.4rem] transition-all duration-300 ${
          isDarkMode ? "bg-[#ff2b00] text-white" : "text-gray-400 dark:text-gray-300"
        }`}
      >
        <i className="fas fa-moon"></i>
      </span>
    </div>
  );

  return (
    <section
      className={`min-h-screen w-screen overflow-x-hidden font-[Cairo] transition-colors duration-500 pt-1 flex flex-col relative ${
        darkMode ? "bg-[#121212] text-white" : "bg-gradient-to-br from-[#b80000] to-[#ff2b2b] text-white"
      }`}
    >
      {/* Navbar */}
      <div className="fixed top-0 w-full flex justify-center z-50 pointer-events-none">
        <nav
          className={`w-[95%] max-w-[1300px] rounded-2xl px-8 py-4 my-3 flex justify-between items-center shadow-2xl pointer-events-auto transition-all duration-300 backdrop-blur-sm ${
            darkMode ? "bg-[#1f1f1f]/90 text-gray-100" : "bg-white/90 text-gray-800"
          }`}
        >
          <div className="flex items-center gap-6">
            <img src={logo} alt="logo" className="h-[60px]" />
            <ToggleSwitch isDarkMode={darkMode} />
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Sign Up */}
            <button className="relative inline-block px-8 py-3 text-lg font-semibold text-white rounded-full shadow-md overflow-hidden group transition-all duration-300">
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] group-hover:from-[#ff416c] group-hover:to-[#ff4b2b] transition-all duration-500 rounded-full"></span>
              <span className="relative z-10">حساب جديد</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-white rounded-full group-hover:w-full transition-all duration-500"></span>
            </button>

            {/* Login */}
            <button className="relative inline-block px-8 py-3 text-lg font-semibold text-[#c40000] border-2 border-[#c40000] rounded-full overflow-hidden group transition-all duration-300">
              <span className="absolute inset-0 bg-[#c40000] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full"></span>
              <span className="relative z-10 group-hover:text-white">تسجيل الدخول</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              className={`text-4xl border-0 bg-transparent ${darkMode ? "text-white" : "text-black"}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={menuOpen ? { x: "0%", opacity: 1 } : { x: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full h-screen z-40 flex flex-col justify-center items-center gap-8 ${
          darkMode ? "bg-[#1f1f1f]" : "bg-white text-gray-800"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-3xl font-bold"
          onClick={() => setMenuOpen(false)}
        >
          ✖
        </button>
        {/* Mobile Sign Up */}
        <button className="relative inline-block px-12 py-4 text-xl font-semibold text-white rounded-full shadow-md overflow-hidden group transition-all duration-300 w-3/4 text-center">
          <span className="absolute inset-0 bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] group-hover:from-[#ff416c] group-hover:to-[#ff4b2b] transition-all duration-500 rounded-full"></span>
          <span className="relative z-10">حساب جديد</span>
        </button>
        {/* Mobile Login */}
        <button className="relative inline-block px-12 py-4 text-xl font-semibold text-red-700 border-2 border-red-700 rounded-full overflow-hidden group transition-all duration-300 w-3/4 text-center">
          <span className="absolute inset-0 bg-red-700 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full"></span>
          <span className="relative z-10 group-hover:text-white">تسجيل الدخول</span>
        </button>
      </motion.div>

      {/* Hero Content */}
      <div className="container mx-auto flex-grow flex items-center mt-36 lg:mt-44">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center w-full min-h-[85vh] px-4 lg:px-20 gap-12"
          dir="rtl"
        >
          {/* Hero Text */}
          <motion.div
            initial={{ x: 70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-end"
          >
            <h1
              className={`text-6xl lg:text-8xl font-extrabold mb-6 leading-tight ${
                darkMode ? "text-gray-100" : "text-white"
              }`}
            >
              وفهم الكيمياء بأسلوب <br />
              بسيط وممتع
            </h1>
            <p
              className={`text-2xl lg:text-3xl font-medium leading-relaxed mb-8 max-w-[700px] ${
                darkMode ? "text-gray-400" : "text-white/90"
              }`}
            >
              <strong>أهلاً بك في بيتك التاني!</strong> <br />
              سواء كنت في أولى، تانية أو تالتة ثانوي، هنا هتلاقي كل اللي تحتاجه عشان تتفوق.
            </p>
            <motion.button
              whileHover={{ scale: 1.08 }}
              className="bg-white text-[#ff2b00] font-extrabold rounded-xl shadow-xl px-10 py-4 text-2xl hover:bg-[#ffe3db] transition-all duration-300"
            >
              اشترك دلوقتي !
            </motion.button>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative w-full lg:w-auto"
          >
            <div className="relative w-[400px] sm:w-[500px] lg:w-[650px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_45%_45%,#ff5a5a_10%,#b80000_80%)] animate-pulse"></div>
              <motion.img
                whileHover={{ scale: 1.06, y: -5 }}
                src={im1}
                alt="teacher"
                className="relative z-10 w-[92%] transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
