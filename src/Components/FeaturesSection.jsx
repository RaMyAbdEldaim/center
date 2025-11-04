import React from "react";
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
    <section className="bg-white font-[Cairo] py-10 text-center">
      <h2 className="text-4xl font-black text-black mb-4 pb-7">ليه تشترك معانا؟</h2>

      <div className="px-5">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-7 justify-items-center"
          dir="rtl"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative bg-[#ff2b00] rounded-xl px-3 pt-20 pb-6 text-white shadow-[0_4px_0_#44d09e] hover:shadow-[0_8px_0_#44d09e] hover:-translate-y-[3px] transition-all duration-300 flex flex-col justify-end items-center text-center h-[170px] w-[95%] sm:w-[90%] lg:w-[85%]"
            >
              <img
                src={dots}
                alt="dots"
                className="absolute top-3 left-4 w-[35px] opacity-80"
              />
              <div className="absolute top-3 right-4 text-2xl font-black">
                {card.id}
              </div>
              <p className="text-xl font-bold leading-snug">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
