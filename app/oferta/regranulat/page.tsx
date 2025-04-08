"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

type MaterialType = "LLDPE" | "RLDPE";
type QualityGrade = "Standard" | "Premium" | "Ultra Premium";

const materials = [
	{
		id: "lldpe",
		name: "LLDPE",
		description:
			"Liniowy polietylen niskiej gęstości, idealny do produkcji folii i opakowań o wysokiej wytrzymałości.",
		mfi: "0.5 - 3.0 g/10min",
		density: "0.916 - 0.925 g/cm³",
		features: [
			"Wysoka wytrzymałość na rozciąganie",
			"Doskonała elastyczność",
			"Odporność na przebicie",
		],
	},
	{
		id: "rldpe",
		name: "RLDPE",
		description:
			"Regranulat polietylenu niskiej gęstości, ekonomiczne i ekologiczne rozwiązanie do produkcji folii.",
		mfi: "0.2 - 2.0 g/10min",
		density: "0.910 - 0.925 g/cm³",
		features: [
			"Dobra przetwarzalność",
			"Ekonomiczne rozwiązanie",
			"Przyjazny dla środowiska",
		],
	},
];

const colors = [
	{ name: "Naturalny", class: "bg-stone-100", code: "#F5F5F4" },
	{ name: "Czarny", class: "bg-gray-900", code: "#111827" },
	{ name: "Niebieski", class: "bg-blue-500", code: "#3B82F6" },
	{ name: "Zielony", class: "bg-green-500", code: "#22C55E" },
	{ name: "Czerwony", class: "bg-red-500", code: "#EF4444" },
	{ name: "Żółty", class: "bg-yellow-400", code: "#FACC15" },
	{ name: "Szary", class: "bg-gray-400", code: "#9CA3AF" },
	{ name: "Brązowy", class: "bg-amber-800", code: "#92400E" },
];

const technicalInfo = [
	{
		name: "MFI (Melt Flow Index)",
		description:
			"Wskaźnik szybkości płynięcia określa właściwości reologiczne tworzywa",
		icon: (
			<path
				d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z M12 6V18 M7 9L12 6L17 9"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
	{
		name: "Gęstość",
		description:
			"Określa masę jednostkową materiału, wpływa na właściwości mechaniczne",
		icon: (
			<path
				d="M3 3L21 21M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12ZM21 20L3 4"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
	{
		name: "Czystość",
		description:
			"Stopień oczyszczenia regranulatu z zanieczyszczeń i dodatków",
		icon: (
			<path
				d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z M8 12L11 15L16 10"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
];

const applications = [
	{
		title: "Opakowania",
		description: "Produkcja folii, butelek, pojemników",
		icon: (
			<path
				d="M20 7L19.1327 19.1425C19.0579 20.1891 18.187 21 17.1378 21H8.86224C7.81296 21 6.94208 20.1891 6.86732 19.1425L6 7M4 7H22M17 7L16.2459 4.73772C16.0917 4.27534 15.6517 3.97818 15.1574 4L10.8426 4C10.3483 3.97818 9.90834 4.27534 9.75412 4.73772L9 7"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
	{
		title: "Elementy konstrukcyjne",
		description: "Rury, profile, elementy techniczne",
		icon: (
			<path
				d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z M16 2V6 M8 2V6"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
	{
		title: "Wyroby wtryskowe",
		description: "Detale techniczne, elementy użytkowe",
		icon: (
			<path
				d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z M12 15L17 21 M12 15L7 21 M12 15L12 8"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
];

export default function RegranulatCatalog() {
	const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);
	const [selectedQuality, setSelectedQuality] =
		useState<QualityGrade>("Premium");

	return (
		<div className="relative min-h-screen">
			{/* Background Gradient */}
			<div
				className="fixed inset-0 -z-10"
				style={{
					background:
						"linear-gradient(to bottom right, #0A2A44, #003355)",
				}}
			/>

			<div className="relative pt-24 pb-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h1
						className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Katalog Regranulatów
					</motion.h1>

					{/* Material Types */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
						{materials.map((material, index) => (
							<motion.div
								key={material.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
									selectedMaterial.id === material.id
										? "bg-white/20 backdrop-blur-sm text-white shadow-lg border border-white/20"
										: "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/10"
								}`}
								onClick={() => setSelectedMaterial(material)}
							>
								<h3 className="text-xl font-semibold mb-3">
									{material.name}
								</h3>
								<p className="text-white/90 mb-4">
									{material.description}
								</p>
								<div className="text-white/90 text-sm">
									<p>MFI: {material.mfi}</p>
									<p>Gęstość: {material.density}</p>
								</div>
							</motion.div>
						))}
					</div>

					{/* Selected Material Details */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/20"
					>
						<div className="flex items-center gap-8 mb-8">
							<div className="relative w-32 h-32 rounded-xl overflow-hidden">
								<Image
									src={`/images/regranulat/${selectedMaterial.id}.jpg`}
									alt={selectedMaterial.name}
									fill
									className="object-cover"
									priority
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
							</div>
							<h2 className="text-3xl font-bold text-white">
								{selectedMaterial.name}
							</h2>
						</div>

						{/* Features */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
							{selectedMaterial.features.map((feature, index) => (
								<div
									key={index}
									className="flex items-start space-x-4"
								>
									<div className="flex-shrink-0 w-6 h-6 text-white">
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
									<span className="text-white/90">
										{feature}
									</span>
								</div>
							))}
						</div>

						{/* Quality Grade */}
						<div className="mb-8">
							<h3 className="text-xl font-semibold mb-4 text-white">
								Klasa jakości:
							</h3>
							<div className="flex flex-wrap gap-4">
								{["Standard", "Premium", "Ultra Premium"].map(
									(quality) => (
										<button
											key={quality}
											onClick={() =>
												setSelectedQuality(
													quality as QualityGrade
												)
											}
											className={`px-6 py-2 rounded-full transition-all duration-300 ${
												selectedQuality === quality
													? "bg-white/20 backdrop-blur-sm text-white border border-white/20 hover:bg-white/30 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 active:bg-white/40 active:scale-[0.98]"
													: "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 active:bg-white/30 active:scale-[0.98]"
											}`}
										>
											{quality}
										</button>
									)
								)}
							</div>
						</div>

						{/* Colors */}
						<div className="mb-12">
							<h3 className="text-xl font-semibold mb-4 text-white">
								Dostępne kolory:
							</h3>
							<div className="flex flex-wrap gap-4">
								{colors.map((color) => (
									<div
										key={color.name}
										className="flex flex-col items-center"
									>
										<div
											className={`w-8 h-8 rounded-full ${color.class} cursor-pointer transition-transform hover:scale-110 border border-white/20`}
											title={`${color.name} (${color.code})`}
										/>
										<span className="text-xs mt-1 text-white/90">
											{color.name}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* Technical Information */}
						<div className="mb-12">
							<h3 className="text-xl font-semibold mb-6 text-white">
								Parametry techniczne:
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								{technicalInfo.map((info, index) => (
									<motion.div
										key={info.name}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
									>
										<div className="w-12 h-12 mb-4 text-white">
											<svg
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												{info.icon}
											</svg>
										</div>
										<h4 className="text-lg font-semibold mb-2 text-white">
											{info.name}
										</h4>
										<p className="text-white/90 text-sm">
											{info.description}
										</p>
									</motion.div>
								))}
							</div>
						</div>

						{/* Applications */}
						<div>
							<h3 className="text-xl font-semibold mb-6 text-white">
								Zastosowania:
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								{applications.map((app, index) => (
									<motion.div
										key={app.title}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
									>
										<div className="w-12 h-12 mb-4 text-white">
											<svg
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												{app.icon}
											</svg>
										</div>
										<h4 className="text-lg font-semibold mb-2 text-white">
											{app.title}
										</h4>
										<p className="text-white/90 text-sm">
											{app.description}
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
							className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 active:bg-white/40 active:scale-[0.98] border border-white/20 transition-all duration-300"
						>
							Zapytaj o ofertę
						</a>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
