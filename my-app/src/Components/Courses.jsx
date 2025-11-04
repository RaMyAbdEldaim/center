import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/Courses.css";

const courses = [
  { id: 1, title: "كورس الشهر الثاني - أزهر", price: "180", color: "#8e44ad" },
  { id: 2, title: "كورس الشهر الأول - ث2", price: "150", color: "#f1c40f" },
  { id: 3, title: "كورس الترم الأول كامل - ث2", price: "450", color: "#27ae60" },
  { id: 4, title: "كورس المراجعة النهائية - أزهر", price: "200", color: "#e67e22" },
  { id: 5, title: "كورس الفيزياء للصف الثالث", price: "300", color: "#2980b9" },
  { id: 6, title: "كورس الكيمياء الشامل", price: "250", color: "#16a085" },
  { id: 7, title: "كورس الأحياء المكثف", price: "220", color: "#c0392b" },
  { id: 8, title: "كورس الماث الشامل", price: "270", color: "#2c3e50" },
];

export default function Courses() {
  const [index, setIndex] = useState(0);

  // يزود الكورس أو يرجع للبداية لما يوصل للنهاية
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % courses.length);
  };

  // يرجع للخلف أو للنهاية لو في أول كورس
  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  // ✅ تشغيل تلقائي كل 3 ثواني (اختياري)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="courses-slider position-relative py-5 bg-light">
      <h2 className="text-center mb-4 fw-bold">كورسات متاحة</h2>

      <div className="slider-wrapper">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${index * 260}px)`,
          }}
        >
          {courses.map((course) => (
            <div key={course.id} className="course-card shadow-sm">
              <div
                className="course-img"
                style={{ backgroundColor: course.color }}
              ></div>
              <div className="course-body text-center p-3">
                <h5 className="fw-bold">{course.title}</h5>
                <p className="text-danger fw-bold fs-6">
                  {course.price} جنيه
                </p>
                <button className="btn btn-outline-danger w-100 mb-2">
                  الدخول للكورس
                </button>
                <button className="btn btn-danger w-100">
                  الإشتراك في الكورس!
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* الأسهم */}
      <button
        className="btn btn-danger slider-btn left"
        onClick={handlePrev}
      >
        ❮
      </button>
      <button
        className="btn btn-danger slider-btn right"
        onClick={handleNext}
      >
        ❯
      </button>

      {/* النِّقَاط */}
      <div className="dots text-center mt-4">
        {courses.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
