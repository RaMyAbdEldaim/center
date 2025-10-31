import React from "react";
import "./style/Sec2.css";
import dots from "../assets/dots.svg";

const cards = [
  { id: 1, text: "شرح بسيط ومفهوم" },
  { id: 2, text: "فيديوهات برسومات توضيحية" },
  { id: 3, text: "تمارين تفاعلية على الدروس" },
  { id: 4, text: "مرونة كاملة في المذاكرة" },
  { id: 5, text: "اختبارات مستمرة" },
  { id: 6, text: "محتوى متكامل ومنظم" },
  { id: 7, text: "تحديث مستمر حسب المنهج" },
  { id: 8, text: "مجتمع طلابي ضخم" },
];

export default function WhyJoin() {
  return (
    <section className="why-join py-5 text-center">
      <h2 className="fw-bold mb-5">ليه تشترك معانا؟</h2>
      <div className="m-5">
        <div className="row justify-content-center" dir="rtl">
          {cards.map((card) => (
            <div key={card.id} className="col-12 col-sm-6 col-lg-3 mb-4">
              <div className="why-card position-relative">
                <img src={dots} alt="dots" className="dots position-absolute" />
                <div className="card-number">{card.id}</div>
                <p className="fw-bold mb-0">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}