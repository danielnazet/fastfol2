"use client";

import { motion } from "framer-motion";

export default function Footer() {
	return (
		<footer className="bg-[#27AAE1] text-white py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h3 className="text-xl font-semibold mb-4">Fast-Fol</h3>
						<p className="text-[#E8F5FF]">
							Ekologiczne rozwiązania dla Twojej firmy
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						<h3 className="text-xl font-semibold mb-4">Kontakt</h3>
						<a
							href="mailto:kontakt@fast-fol.pl"
							className="text-[#E8F5FF] hover:text-white transition-colors duration-300 block mb-2"
						>
							Email: kontakt@fast-fol.pl
						</a>
						<p className="text-[#E8F5FF]">Tel: +48 511 111 333</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4 }}
					>
						<h3 className="text-xl font-semibold mb-4">Adres</h3>
						<p className="text-[#E8F5FF]">ul. Graniczna 115</p>
						<p className="text-[#E8F5FF]">06-500 Mława</p>
					</motion.div>
				</div>
			</div>
		</footer>
	);
}
