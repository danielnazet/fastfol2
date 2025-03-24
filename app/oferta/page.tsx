'use client';

import { motion } from 'framer-motion';

export default function Oferta() {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nasza Oferta
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Worki na śmieci */}
          <motion.div
            className="bg-emerald-50 rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8">
              <div className="aspect-w-16 aspect-h-9 mb-8">
                <svg className="w-full h-full text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M3 7H21M16 7L15.2459 4.73772C15.0917 4.27534 14.6517 3.97818 14.1574 4L9.84264 4C9.34829 3.97818 8.90834 4.27534 8.75412 4.73772L8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-emerald-700">Worki na śmieci</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-emerald-700">
                  <span className="mr-2">✓</span> Różne rozmiary (35L - 240L)
                </li>
                <li className="flex items-center text-emerald-700">
                  <span className="mr-2">✓</span> Szeroka gama kolorów
                </li>
                <li className="flex items-center text-emerald-700">
                  <span className="mr-2">✓</span> Różne grubości folii
                </li>
                <li className="flex items-center text-emerald-700">
                  <span className="mr-2">✓</span> Możliwość personalizacji
                </li>
              </ul>
              <motion.a
                href="/oferta/worki"
                className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Zobacz katalog
              </motion.a>
            </div>
          </motion.div>

          {/* Regranulat */}
          <motion.div
            className="bg-emerald-50 rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-8">
              <div className="aspect-w-16 aspect-h-9 mb-8">
                <svg className="w-full h-full text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.05493 11H5C6.10457 11 7 11.8954 7 13V14C7 15.1046 7.89543 16 9 16C10.1046 16 11 15.1046 11 14V13C11 11.8954 11.8954 11 13 11C14.1046 11 15 11.8954 15 13V14C15 15.1046 15.8954 16 17 16C18.1046 16 19 15.1046 19 14V13C19 11.8954 19.8954 11 21 11H21.9451M12 4C13.6569 4 15 5.34315 15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 20H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-emerald-700">Regranulat</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-emerald-700">
                  <span className="mr-2">✓</span> LLDPE
                </li>
                <li className="flex items-center text-emerald-700">
                  <span className="mr-2">✓</span> RLDPE
                </li>
                <li className="flex items-center text-emerald-700">
                  <span className="mr-2">✓</span> Wysoka jakość
                </li>
                <li className="flex items-center text-emerald-700">
                  <span className="mr-2">✓</span> Różne kolory
                </li>
              </ul>
              <motion.a
                href="/oferta/regranulat"
                className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Zobacz katalog
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Wszystkie nasze produkty spełniają najwyższe standardy jakości. 
            Skontaktuj się z nami, aby otrzymać szczegółową ofertę dopasowaną do Twoich potrzeb.
          </p>
        </motion.div>
      </div>
    </div>
  );
}