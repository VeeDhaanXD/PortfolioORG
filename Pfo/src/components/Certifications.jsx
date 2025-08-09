import React from "react";
import { motion } from "framer-motion";
import WD from "../assets/WD.jpg";
import GB from "../assets/GB.jpg";

const certifications = [
  {
    img: WD,
    title: "Full Stack Dev",
    issuedBy: "Udemy",
    date: "DEC 2024",
  },
  {
    img: GB,
    title: "2D Game Dev",
    issuedBy: "White Hat Jr",
    date: "DEC 2020",
  },
];

export default function Certifications() {
  return (
    <section className="bg-black py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-cyan-400"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 150,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0px 0px 25px rgba(0,255,255,0.5)",
              }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-cyan-500"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-cyan-300">{cert.title}</h3>
                <p className="text-gray-400 mt-1">
                  Issued by: <span className="text-cyan-200">{cert.issuedBy}</span>
                </p>
                <p className="text-gray-500 text-sm mt-1">Date: {cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
