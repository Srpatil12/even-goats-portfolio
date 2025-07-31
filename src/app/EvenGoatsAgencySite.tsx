"use client";
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Head from "next/head";

export default function EvenGoatsAgencySite() {
  return (
    <>
      <Head>
        <title>Even GOATS | Futuristic Content & Digital Marketing</title>
        <meta
          name="description"
          content="Even GOATS is a content creation and digital marketing agency delivering high-impact videos, social strategies, and branding for businesses."
        />
        <meta property="og:title" content="Even GOATS | Futuristic Content & Digital Marketing" />
        <meta property="og:description" content="High-impact content creation, video production, and social media strategy to grow your brand." />
        <meta property="og:image" content="https://evengoats.com/og-image.jpg" />
        <meta property="og:url" content="https://evengoats.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="bg-black text-white font-sans">
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black to-gray-900">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold mb-6"
          >
            Even GOATS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl max-w-2xl mb-8"
          >
            We craft powerful content, videos, and digital strategies that help brands stand out and dominate online.
          </motion.p>
          <a
            href="#contact"
            className="bg-blue-600 px-8 py-4 text-lg rounded-xl hover:bg-blue-700 transition"
          >
            Work With Us
          </a>
        </section>

        {/* Services Section */}
        <section className="py-20 px-10 bg-gray-950 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[{
              title: "Content Creation",
              desc: "High-quality, engaging content tailored for your brand.",
            },{
              title: "Video Production",
              desc: "Professional video shoots and editing for impactful storytelling.",
            },{
              title: "Social Media Strategy",
              desc: "Creative campaigns that grow audiences and drive results.",
            }].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-gray-800 rounded-xl p-8 shadow-xl hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 px-10 bg-gradient-to-b from-gray-900 to-black text-center">
          <h2 className="text-4xl font-bold mb-12">Our Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((p) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg h-56 flex items-center justify-center text-xl"
              >
                Project {p}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-10 bg-gray-950 text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((t) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: t * 0.2 }}
                className="bg-gray-800 rounded-xl p-6 shadow-xl"
              >
                <p className="text-gray-300 mb-4">
                  &quot;Even GOATS completely transformed our online presence. Highly recommend!&quot;
                </p>
                <h4 className="font-bold">Client {t}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-10 bg-black text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-gray-300 mb-6">
            Ready to create amazing content and grow your brand?
          </p>
          <a
            href="mailto:hello@evengoats.com"
            className="bg-blue-600 px-8 py-4 text-lg rounded-xl hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </section>

        <footer className="py-6 text-center text-gray-400 bg-black">
          © {new Date().getFullYear()} Even GOATS. All Rights Reserved.
        </footer>
      </div>
    </>
  );
}