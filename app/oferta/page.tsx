"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Oferta() {
	return (
		<div className="relative min-h-screen">
			{/* Background Image */}
			<div className="fixed inset-0 -z-10">
				<Image
					src="/images/naszaoferta.webp"
					alt="Oferta Fast-Fol"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/50"></div>
			</div>

			<div className="relative pt-24 pb-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h1
						className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Nasza Oferta
					</motion.h1>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Worki na śmieci */}
						<motion.div
							className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							whileHover={{ y: -10 }}
						>
							<div className="p-8">
								<div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden group-hover:shadow-2xl transition-all duration-300">
									<Image
										src="/images/services/worek.jpg"
										alt="Worki na śmieci"
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-110"
										priority
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
								</div>
								<h2 className="text-3xl font-bold mb-6 text-white text-center group-hover:text-[#27AAE1] transition-colors duration-300">
									Worki na śmieci
								</h2>
								<ul className="space-y-4 mb-8">
									<li className="flex items-center text-white/90 group-hover:text-white transition-colors duration-300">
										<span className="mr-2 text-[#27AAE1]">
											✓
										</span>{" "}
										Różne rozmiary (35L - 240L)
									</li>
									<li className="flex items-center text-white/90 group-hover:text-white transition-colors duration-300">
										<span className="mr-2 text-[#27AAE1]">
											✓
										</span>{" "}
										Szeroka gama kolorów
									</li>
									<li className="flex items-center text-white/90 group-hover:text-white transition-colors duration-300">
										<span className="mr-2 text-[#27AAE1]">
											✓
										</span>{" "}
										Różne grubości folii
									</li>
									<li className="flex items-center text-white/90 group-hover:text-white transition-colors duration-300">
										<span className="mr-2 text-[#27AAE1]">
											✓
										</span>{" "}
										Możliwość personalizacji
									</li>
								</ul>
								<motion.a
									href="/oferta/worki"
									className="inline-block bg-[#27AAE1] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 text-center hover:bg-white hover:text-[#27AAE1]"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									Zobacz katalog
								</motion.a>
							</div>
						</motion.div>

						{/* Regranulat */}
						<motion.div
							className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							whileHover={{ y: -10 }}
						>
							<div className="p-8">
								<div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden group-hover:shadow-2xl transition-all duration-300">
									<Image
										src="/images/services/regranulat.jpg"
										alt="Regranulat"
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-110"
										priority
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
								</div>
								<h2 className="text-3xl font-bold mb-6 text-white text-center group-hover:text-[#27AAE1] transition-colors duration-300">
									Regranulat
								</h2>
								<ul className="space-y-4 mb-8">
									<li className="flex items-center text-white/90 group-hover:text-white transition-colors duration-300">
										<span className="mr-2 text-[#27AAE1]">
											✓
										</span>{" "}
										LLDPE
									</li>
									<li className="flex items-center text-white/90 group-hover:text-white transition-colors duration-300">
										<span className="mr-2 text-[#27AAE1]">
											✓
										</span>{" "}
										RLDPE
									</li>
									<li className="flex items-center text-white/90 group-hover:text-white transition-colors duration-300">
										<span className="mr-2 text-[#27AAE1]">
											✓
										</span>{" "}
										Wysoka jakość
									</li>
									<li className="flex items-center text-white/90 group-hover:text-white transition-colors duration-300">
										<span className="mr-2 text-[#27AAE1]">
											✓
										</span>{" "}
										Różne kolory
									</li>
								</ul>
								<motion.a
									href="/oferta/regranulat"
									className="inline-block bg-[#27AAE1] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-[#27AAE1]"
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
						<p className="text-lg text-white max-w-3xl mx-auto">
							Wszystkie nasze produkty spełniają najwyższe
							standardy jakości. Skontaktuj się z nami, aby
							otrzymać szczegółową ofertę dopasowaną do Twoich
							potrzeb.
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
