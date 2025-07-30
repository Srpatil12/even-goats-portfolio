import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function EvenGoatsPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-black to-gray-900">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Even GOATS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl max-w-xl mb-6"
        >
          Futuristic content creation & social media solutions that help brands grow and engage audiences globally.
        </motion.p>
        <Button className="rounded-2xl text-lg px-6 py-3">Work With Us</Button>
      </section>

      {/* Services Section */}
      <section className="p-12 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-950">
        {["Content Creation", "Video Production", "Social Media Strategy"].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Card className="bg-gray-800 rounded-2xl shadow-xl hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{service}</h3>
                <p className="text-gray-300 text-sm">
                  High-quality, creative solutions tailored for modern brands to stand out in a competitive digital world.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Portfolio Section */}
      <section className="p-12 bg-gradient-to-b from-gray-900 to-black text-center">
        <h2 className="text-4xl font-bold mb-8">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg bg-gray-800"
            >
              <div className="h-48 bg-gray-700 flex items-center justify-center text-xl">
                Project {item}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-12 bg-gray-950 text-center">
        <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-gray-300 mb-6">
          We create futuristic content strategies that drive growth. Connect with us today.
        </p>
        <Button className="rounded-2xl text-lg px-6 py-3">Contact Us</Button>
      </section>

      <footer className="p-6 text-center text-gray-400 bg-black">
        © {new Date().getFullYear()} Even GOATS. All Rights Reserved.
      </footer>
    </div>
  );
}
