"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heroImages = [
	{
		src: "/images/hero1.jpg",
		alt: "Produkcja worków na śmieci",
	},
	{
		src: "/images/hero2.jpg",
		alt: "Recykling tworzyw sztucznych",
	},
	{
		src: "/images/hero3.jpg",
		alt: "Ekologiczne rozwiązania",
	},
];

const services = [
	{
		title: "Worki na śmieci",
		description:
			"Szeroki wybór worków różnych rozmiarów i grubości, dostosowanych do Twoich potrzeb.",
		link: "/oferta/worki",
		icon: (
			<path
				d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M3 7H21M16 7L15.2459 4.73772C15.0917 4.27534 14.6517 3.97818 14.1574 4L9.84264 4C9.34829 3.97818 8.90834 4.27534 8.75412 4.73772L8 7"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
	{
		title: "Regranulat",
		description:
			"Wysokiej jakości regranulat LLDPE i RLDPE do różnorodnych zastosowań przemysłowych.",
		link: "/oferta/regranulat",
		icon: (
			<path
				d="M14 11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11M3 6L6 7M6 7L3 16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16L18 7M6 7H18M18 7L21 6M9 3H15"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
	{
		title: "Skup tworzyw sztucznych",
		description:
			"Profesjonalny skup i recykling tworzyw sztucznych, dbamy o środowisko.",
		link: "/oferta",
		icon: (
			<path
				d="M9 17H15M9 17V7H15V17M9 17H6M15 17H18M12 7V17M12 7H16.5L18 8.5V17M12 7H7.5L6 8.5V17"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
];

const testimonials = [
	{
		name: "Jan Kowalski",
		company: "EkoSort Sp. z o.o.",
		content:
			"Współpraca z Fast-Fol to czysta przyjemność. Profesjonalne podejście i najwyższa jakość produktów.",
		role: "Dyrektor Operacyjny",
	},
	{
		name: "Anna Nowak",
		company: "Clean City",
		content:
			"Worki do segregacji od Fast-Fol spełniają wszystkie nasze wymagania. Polecam!",
		role: "Kierownik ds. Zakupów",
	},
	{
		name: "Piotr Wiśniewski",
		company: "GreenTech Solutions",
		content:
			"Świetna firma z profesjonalnym podejściem do klienta. Terminowe dostawy i konkurencyjne ceny.",
		role: "Właściciel",
	},
];

export default function Home() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) =>
				prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
			);
		}, 5000); // Zmiana zdjęcia co 5 sekund

		return () => clearInterval(interval);
	}, []);

	return (
		<main>
			{/* Hero Section */}
			<section className="relative h-screen">
				{/* Background Images */}
				<div className="absolute inset-0 overflow-hidden">
					{heroImages.map((image, index) => (
						<motion.div
							key={index}
							className="absolute inset-0"
							initial={{ opacity: 0 }}
							animate={{
								opacity: currentImageIndex === index ? 1 : 0,
								scale: currentImageIndex === index ? 1 : 1.1,
							}}
							transition={{ duration: 1 }}
						>
							<img
								src={image.src}
								alt={image.alt}
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50"></div>
						</motion.div>
					))}
				</div>

				{/* Content */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center text-white"
				>
					<div>
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.8 }}
							className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
						>
							Ekologiczne Rozwiązania
							<br />
							dla Twojego Biznesu
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.8 }}
							className="text-xl md:text-2xl mb-12"
						>
							Profesjonalna produkcja worków na śmieci i
							regranulatu
						</motion.p>
						<div className="space-x-4">
							<motion.a
								href="/oferta"
								className="button-hover inline-block bg-white text-[#27AAE1] px-10 py-4 rounded-full text-lg font-semibold"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Zobacz ofertę
							</motion.a>
							<motion.a
								href="/kontakt"
								className="button-hover inline-block bg-[#8BC53F] text-white px-10 py-4 rounded-full text-lg font-semibold"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Skontaktuj się
							</motion.a>
						</div>
					</div>
				</motion.div>

				{/* Image Indicators */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
					{heroImages.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentImageIndex(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								currentImageIndex === index
									? "bg-white w-8"
									: "bg-white/50"
							}`}
						/>
					))}
				</div>
			</section>

			{/* Services Section */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl font-bold text-center mb-16 text-[#27AAE1]"
					>
						Nasze Usługi
					</motion.h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						{services.map((service, index) => (
							<motion.a
								key={service.title}
								href={service.link}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className="card-hover bg-[#E8F5FF] p-8 rounded-2xl cursor-pointer group"
							>
								<div className="w-16 h-16 mb-6 text-[#27AAE1] group-hover:text-[#1B7EB3] transition-colors">
									<svg
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										{service.icon}
									</svg>
								</div>
								<h3 className="text-2xl font-semibold mb-4 text-[#27AAE1] group-hover:text-[#1B7EB3]">
									{service.title}
								</h3>
								<p className="text-[#27AAE1] group-hover:text-[#1B7EB3]">
									{service.description}
								</p>
								<div className="mt-6 text-[#27AAE1] group-hover:text-[#1B7EB3] font-semibold flex items-center">
									Zobacz więcej
									<svg
										className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M5 12H19M19 12L12 5M19 12L12 19"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</motion.a>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-24 bg-[#E8F5FF]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl font-bold text-center mb-16 text-[#27AAE1]"
					>
						Opinie Naszych Klientów
					</motion.h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={testimonial.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className="bg-white p-8 rounded-2xl shadow-lg"
							>
								<div className="mb-6">
									{[...Array(5)].map((_, i) => (
										<span
											key={i}
											className="text-yellow-400"
										>
											★
										</span>
									))}
								</div>
								<p className="text-[#27AAE1] mb-6 italic">
									&quot;{testimonial.content}&quot;
								</p>
								<div>
									<p className="font-semibold text-[#27AAE1]">
										{testimonial.name}
									</p>
									<p className="text-[#27AAE1]">
										{testimonial.role}
									</p>
									<p className="text-[#27AAE1] text-sm">
										{testimonial.company}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* About Section Preview */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center"
					>
						<h2 className="text-4xl font-bold mb-8 text-[#27aae1]">
							O Naszej Firmie
						</h2>
						<p className="text-xl mb-12 max-w-3xl mx-auto text-[#27aae1]">
							Fast-Fol to firma z wieloletnim doświadczeniem w
							branży recyklingu i produkcji worków na śmieci.
							Stawiamy na ekologiczne rozwiązania i najwyższą
							jakość produktów.
						</p>
						<motion.a
							href="/o-firmie"
							className="button-hover inline-block bg-[#27AAE1] text-white px-10 py-4 rounded-full text-lg font-semibold"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Dowiedz się więcej
						</motion.a>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
