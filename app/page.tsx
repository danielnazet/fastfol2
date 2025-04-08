"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const heroImages = [
	{
		src: "/images/hero1.webp",
		alt: "Produkcja worków na śmieci",
	},
	{
		src: "/images/hero2.webp",
		alt: "Recykling tworzyw sztucznych",
	},
	{
		src: "/images/hero3.webp",
		alt: "Ekologiczne rozwiązania",
	},
];

const services = [
	{
		title: "Worki na śmieci",
		description:
			"Szeroki wybór worków różnych rozmiarów i grubości, dostosowanych do Twoich potrzeb.",
		link: "/oferta/worki",
		image: "/images/services/worki.webp",
	},
	{
		title: "Regranulat",
		description:
			"Wysokiej jakości regranulat LLDPE i RLDPE do różnorodnych zastosowań przemysłowych.",
		link: "/oferta/regranulat",
		image: "/images/services/regranulat.webp",
	},
	{
		title: "Skup tworzyw sztucznych",
		description:
			"Profesjonalny skup i recykling tworzyw sztucznych, dbamy o środowisko.",
		link: "/kontakt",
		image: "/images/services/skup.jpg",
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
			<section className="relative h-[85vh]">
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
							<Image
								src={image.src}
								alt={image.alt}
								fill
								className="object-cover"
								priority={true}
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
								className="button-hover inline-block bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/30 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 active:bg-white/40 active:scale-[0.98] border border-white/20 transition-all duration-300"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Zobacz ofertę
							</motion.a>
							<motion.a
								href="/kontakt"
								className="button-hover inline-block bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/30 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 active:bg-white/40 active:scale-[0.98] border border-white/20 transition-all duration-300"
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
			<section className="py-24 relative">
				{/* Background Gradient */}
				<div
					className="fixed inset-0 -z-10"
					style={{
						background:
							"linear-gradient(to bottom right, #0A2A44, #003355)",
					}}
				/>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl font-bold text-center mb-16 text-white"
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
								className="card-hover bg-white/10 backdrop-blur-sm p-8 rounded-2xl cursor-pointer group overflow-hidden border border-white/20 hover:bg-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 active:bg-white/30 active:scale-[0.98] transition-all duration-300"
							>
								<div className="relative h-48 mb-6 rounded-xl overflow-hidden">
									<Image
										src={service.image}
										alt={service.title}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
								</div>
								<h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-white/90">
									{service.title}
								</h3>
								<p className="text-white/90 group-hover:text-white">
									{service.description}
								</p>
								<div className="mt-6 text-white font-semibold flex items-center">
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
			<section className="py-24 relative">
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl font-bold text-center mb-16 text-white"
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
								className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 active:bg-white/30 active:scale-[0.98] transition-all duration-300"
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
								<p className="text-white/90 mb-6 italic">
									&quot;{testimonial.content}&quot;
								</p>
								<div>
									<p className="font-semibold text-white">
										{testimonial.name}
									</p>
									<p className="text-white/90">
										{testimonial.role}
									</p>
									<p className="text-white/90 text-sm">
										{testimonial.company}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* About Section Preview */}
			<section className="relative py-24">
				{/* Background Image */}
				<div className="absolute inset-0">
					<Image
						src="/images/onas.webp"
						alt="O nas"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-black/50"></div>
				</div>

				{/* Content */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center"
					>
						<h2 className="text-4xl font-bold mb-8 text-white">
							O Naszej Firmie
						</h2>
						<p className="text-xl mb-12 max-w-3xl mx-auto text-white">
							Fast-Fol to firma z wieloletnim doświadczeniem w
							branży recyklingu i produkcji worków na śmieci.
							Stawiamy na ekologiczne rozwiązania i najwyższą
							jakość produktów.
						</p>
						<motion.a
							href="/o-firmie"
							className="button-hover inline-block bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/30 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 active:bg-white/40 active:scale-[0.98] border border-white/20 transition-all duration-300"
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
