"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type BagSize = "35L" | "60L" | "120L" | "160L" | "240L";
type BagStrength = "Standardowa" | "Mocna" | "Bardzo mocna";

const bagTypes = [
	{
		id: "standard",
		name: "Worki standardowe",
		description:
			"Klasyczne worki o prostej konstrukcji, idealne do codziennego użytku.",
		features: ["Wytrzymałe szwy", "Równomierna grubość", "Łatwe w użyciu"],
	},
	{
		id: "handles",
		name: "Worki z uszami",
		description:
			"Praktyczne worki z wygodnymi uchwytami ułatwiającymi przenoszenie.",
		features: [
			"Wzmocnione uchwyty",
			"Ergonomiczny design",
			"Zwiększona pojemność",
		],
	},
	{
		id: "drawstring",
		name: "Worki ze ściągaczem",
		description:
			"Worki wyposażone w wygodny ściągacz ułatwiający zamknięcie.",
		features: [
			"Łatwe zamykanie",
			"Zabezpieczenie przed wysypywaniem",
			"Praktyczne w użyciu",
		],
	},
	{
		id: "ribbon",
		name: "Worki z tasiemką",
		description:
			"Eleganckie worki z tasiemką do wiązania, idealne dla wymagających klientów.",
		features: [
			"Estetyczne wykończenie",
			"Pewne zamknięcie",
			"Premium design",
		],
	},
];

const colors = [
	{ name: "Czarny", class: "bg-gray-900" },
	{ name: "Niebieski", class: "bg-blue-500" },
	{ name: "Żółty", class: "bg-yellow-400" },
	{ name: "Zielony", class: "bg-green-500" },
	{ name: "Czerwony", class: "bg-red-500" },
	{ name: "Biały", class: "bg-white border-2" },
	{ name: "Brązowy", class: "bg-amber-800" },
	{ name: "Szary", class: "bg-gray-400" },
];

const features = [
	{
		name: "LDPE z recyklingu",
		description: "Wykonane z przetworzonego polietylenu niskiej gęstości",
		icon: (
			<path
				d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z M12 16L12 8 M9 12L12 9L15 12"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
	{
		name: "Biodegradowalne",
		description: "Przyjazne dla środowiska, ulegają naturalnemu rozkładowi",
		icon: (
			<path
				d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z M8 12L12 16L16 12 M12 16L12 8"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
	{
		name: "Zwiększona wytrzymałość",
		description:
			"Specjalna technologia wzmacniająca odporność na rozerwanie",
		icon: (
			<path
				d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z M12 8L12 16 M8 12L12 15L16 12"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
];

export default function BagCatalog() {
	const [selectedType, setSelectedType] = useState(bagTypes[0]);
	const [selectedSize, setSelectedSize] = useState<BagSize>("120L");
	const [selectedStrength, setSelectedStrength] =
		useState<BagStrength>("Standardowa");

	return (
		<div className="min-h-screen bg-white pt-24 pb-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h1
					className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#27AAE1]"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Katalog Worków
				</motion.h1>

				{/* Bag Types */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
					{bagTypes.map((type, index) => (
						<motion.div
							key={type.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
								selectedType.id === type.id
									? "bg-[#27AAE1] text-white shadow-lg"
									: "bg-[#E8F5FF] text-[#27AAE1] hover:bg-[#D4E9FF]"
							}`}
							onClick={() => setSelectedType(type)}
						>
							<h3 className="text-xl font-semibold mb-3">
								{type.name}
							</h3>
							<p
								className={`text-sm ${
									selectedType.id === type.id
										? "text-white"
										: "text-[#27AAE1]"
								}`}
							>
								{type.description}
							</p>
						</motion.div>
					))}
				</div>

				{/* Selected Type Details */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
					className="bg-white rounded-2xl shadow-lg p-8 mb-16"
				>
					<h2 className="text-3xl font-bold mb-8 text-[#27AAE1]">
						{selectedType.name}
					</h2>

					{/* Features */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
						{selectedType.features.map((feature, index) => (
							<div
								key={index}
								className="flex items-start space-x-4"
							>
								<div className="flex-shrink-0 w-6 h-6 text-[#27AAE1]">
									<svg
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M20 6L9 17L4 12"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<span className="text-gray-600">{feature}</span>
							</div>
						))}
					</div>

					{/* Sizes */}
					<div className="mb-8">
						<h3 className="text-xl font-semibold mb-4 text-[#27AAE1]">
							Wybierz rozmiar:
						</h3>
						<div className="flex flex-wrap gap-4">
							{["35L", "60L", "120L", "160L", "240L"].map(
								(size) => (
									<button
										key={size}
										onClick={() =>
											setSelectedSize(size as BagSize)
										}
										className={`px-6 py-2 rounded-full transition-all duration-300 ${
											selectedSize === size
												? "bg-[#27AAE1] text-white"
												: "bg-[#E8F5FF] text-[#27AAE1] hover:bg-[#D4E9FF]"
										}`}
									>
										{size}
									</button>
								)
							)}
						</div>
					</div>

					{/* Strength */}
					<div className="mb-8">
						<h3 className="text-xl font-semibold mb-4 text-[#27AAE1]">
							Wybierz wytrzymałość:
						</h3>
						<div className="flex flex-wrap gap-4">
							{["Standardowa", "Mocna", "Bardzo mocna"].map(
								(strength) => (
									<button
										key={strength}
										onClick={() =>
											setSelectedStrength(
												strength as BagStrength
											)
										}
										className={`px-6 py-2 rounded-full transition-all duration-300 ${
											selectedStrength === strength
												? "bg-[#27AAE1] text-white"
												: "bg-[#E8F5FF] text-[#27AAE1] hover:bg-[#D4E9FF]"
										}`}
									>
										{strength}
									</button>
								)
							)}
						</div>
					</div>

					{/* Colors */}
					<div className="mb-12">
						<h3 className="text-xl font-semibold mb-4 text-[#27AAE1]">
							Dostępne kolory:
						</h3>
						<div className="flex flex-wrap gap-4">
							{colors.map((color) => (
								<div
									key={color.name}
									className="flex flex-col items-center"
								>
									<div
										className={`w-8 h-8 rounded-full ${color.class} cursor-pointer transition-transform hover:scale-110`}
										title={color.name}
									/>
									<span className="text-xs mt-1 text-gray-600">
										{color.name}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Additional Features */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-[#27AAE1]">
							Dodatkowe cechy:
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{features.map((feature, index) => (
								<motion.div
									key={feature.name}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									className="bg-[#E8F5FF] p-6 rounded-xl"
								>
									<div className="w-12 h-12 mb-4 text-[#27AAE1]">
										<svg
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											{feature.icon}
										</svg>
									</div>
									<h4 className="text-lg font-semibold mb-2 text-[#27AAE1]">
										{feature.name}
									</h4>
									<p className="text-[#27AAE1] text-sm">
										{feature.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="text-center"
				>
					<a
						href="/kontakt"
						className="inline-block bg-[#27AAE1] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1B7EB3] transition-all duration-300"
					>
						Zapytaj o ofertę
					</a>
				</motion.div>
			</div>
		</div>
	);
}
