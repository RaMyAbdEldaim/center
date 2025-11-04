import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import img1 from "../assets/im1.png";
import "./style/Courses.css";

const data = [
  { id: 1, text: "شروحات مفاهيمية واضحة", img: img1 },
  { id: 2, text: "فيديوهات تعليمية بالـ Projects", img: img1 },
  { id: 3, text: "تحديات برمجية تفاعلية", img: img1 },
  { id: 4, text: "جدول زمني مرن وذاتي", img: img1 },
  { id: 5, text: "مراجعات مستمرة للكود", img: img1 },
  { id: 6, text: "محتوى متكامل ومنظم", img: img1 },
  { id: 7, text: "منهج محدث باستمرار", img: img1 },
  { id: 8, text: "مجتمع ضخم للمطورين", img: img1 },
];

function Courses() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 900, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-[95%] md:w-4/5 mx-auto mt-24">
      <h2 className="text-center text-4xl font-extrabold text-red-600 mb-14 tracking-wide">
        الكورسات المميزة 🔥
      </h2>

      <Slider {...settings}>
        {data.map((d, index) => (
          <div key={d.id} className="px-3 md:px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white h-[560px] rounded-3xl shadow-xl flex flex-col overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* صورة الكورس */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="h-72 bg-gradient-to-r from-red-500 to-orange-500 flex justify-center items-center"
              >
                <img
                  src={d.img}
                  alt={d.text}
                  className="h-56 w-56 rounded-3xl object-cover shadow-lg border-4 border-white"
                />
              </motion.div>

              {/* المحتوى */}
              <div className="flex flex-col justify-center items-center text-center p-6 gap-6">
                <h3 className="text-2xl font-bold text-gray-800 leading-relaxed">
                  {d.text}
                </h3>

                <div className="flex flex-wrap justify-center gap-4 mt-3">
                  <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md transition-transform hover:scale-105">
                    اشتراك 🔥
                  </button>
                  <button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md transition-transform hover:scale-105">
                    دخول الكورس 🎯
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Courses;
