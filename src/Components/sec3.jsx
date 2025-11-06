import React from "react";
import { motion } from "framer-motion";
import photo from "../assets/photo1.png";
import pattern from "../assets/1016.jpg";

const cards = [
  {
    id: 1,
    pattern: pattern,
    alt: "The Legend in Chemistry - Gray Mode",
  },
  {
    id: 2,
    pattern: pattern,
    alt: "The Legend in Chemistry - Green Mode",
  },
  {
    id: 3,
    pattern: pattern,
    alt: "The Legend in Chemistry Holding a Book",
  },
];

const CustomCard = ({ pattern, alt }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative w-[30%] h-[400px] rounded-2xl shadow-2xl overflow-visible cursor-pointer group bg-gray-200"
    >
      {/* خلفية النمط */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-300 rounded-2xl"
        style={{ backgroundImage: `url(${pattern})` }}
      ></div>

      {/* تراكب نصي */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-center py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl">
        <p className="text-base font-semibold">{alt}</p>
      </div>

      {/* الصورة خارج الكارت */}
      <motion.img
        src={photo}
        alt="The Legend"
        className="absolute left-1/2 -translate-x-1/2 -top-28 w-64 object-cover drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-top-32"
      />
    </motion.div>
  );
};

const CardsSection = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-gray-100 overflow-visible">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        The Legend in Chemistry
      </h2>

      <div className="flex justify-around items-start gap-5 px-10 flex-wrap">
        {cards.map((card) => (
          <CustomCard
            key={card.id}
            pattern={card.pattern}
            alt={card.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
