"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const timeline = [
	{
		year: "2002",
		title: "Początki Fast-Fol",
		description:
			"Założenie firmy rodzinnej z misją produkcji ekologicznych worków na śmieci.",
	},
	{
		year: "2008",
		title: "Rozwój technologii",
		description:
			"Wprowadzenie innowacyjnych rozwiązań w procesie recyklingu tworzyw sztucznych.",
	},
	{
		year: "2015",
		title: "Drugi oddział",
		description: "Otwarcie drugiego zakładu produkcyjnego w Mławie.",
	},
	{
		year: "2018",
		title: "Certyfikacja jakości",
		description:
			"Uzyskanie prestiżowych certyfikatów potwierdzających najwyższą jakość produkcji.",
	},
	{
		year: "2023",
		title: "Lider ekologii",
		description:
			"Osiągnięcie pozycji lidera w produkcji ekologicznych opakowań z recyklingu.",
	},
];

const ecoInitiatives = [
	{
		title: "Zamknięty obieg surowców",
		description:
			"Wykorzystujemy zaawansowane technologie recyklingu, aby maksymalnie wykorzystać każdy kilogram tworzywa.",
		icon: (
			<path
				d="M4 4V9H4.58152M19.4185 9H20V4M4.58152 9C4.81845 7.33122 5.61793 5.76881 6.84503 4.54171C8.07213 3.31461 9.63454 2.51513 11.3033 2.2782M4.58152 9H9M19.4185 9C19.1816 7.33122 18.3821 5.76881 17.155 4.54171C15.9279 3.31461 14.3655 2.51513 12.6967 2.2782M19.4185 9H15M11.3033 2.2782C11.8656 2.19571 12.4321 2.19571 12.9944 2.2782M11.3033 2.2782H12.6967"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
	{
		title: "Redukcja śladu węglowego",
		description:
			"Inwestujemy w energooszczędne technologie i wykorzystujemy odnawialne źródła energii.",
		icon: (
			<path
				d="M12 3V21M12 3L8 7M12 3L16 7M12 21L8 17M12 21L16 17"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
	{
		title: "Edukacja ekologiczna",
		description:
			"Prowadzimy programy edukacyjne na temat recyklingu i odpowiedzialnego gospodarowania odpadami.",
		icon: (
			<path
				d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
];

const certificates = [
	{
		name: "BRC Certificate",
		description:
			"Certyfikat potwierdzający najwyższe standardy bezpieczeństwa i jakości w produkcji.",
		icon: (
			<path
				d="M9 12L11 14L15 10M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
	{
		name: "Recyclass Cert",
		description:
			"Certyfikat potwierdzający zgodność z europejskimi standardami recyklingu.",
		icon: (
			<path
				d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M21 12C21 7.02944 16.9706 3 12 3M21 12H12M12 3V12M12 12L17 7"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
	{
		name: "Blue Angel Cert",
		description:
			"Niemiecki certyfikat ekologiczny potwierdzający przyjazność dla środowiska.",
		icon: (
			<path
				d="M7 21L12 17L17 21V3H7V21Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
];

export default function AboutUs() {
	return (
		<div className="relative min-h-screen">
			{/* Background Image */}
			<div
				className="fixed inset-0 -z-10"
				style={{
					backgroundImage:
						'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/images/o-firmie-bg.webp")',
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			/>

			<div className="relative pt-24 pb-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Main Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-center mb-16"
					>
						<h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
							O Firmie Fast-Fol
						</h1>
						<p className="text-lg text-white max-w-4xl mx-auto">
							Firma Fast-Fol już od 2002 r. realizuje swoją misję,
							jaką jest produkcja najwyższej jakości ekologicznych
							worków na śmieci. Zgodnie z zapotrzebowaniem klienta
							wytwarzamy także regranulat LDPE, który również
							dystrybuujemy.
						</p>
					</motion.div>

					{/* Company Values */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="relative overflow-hidden rounded-2xl mb-16"
					>
						{/* Gradient Background */}
						<div className="absolute inset-0 bg-gradient-to-r from-[#27AAE1]/10 to-[#8BC53F]/10"></div>

						{/* Content */}
						<div className="relative p-8 md:p-12">
							<div className="max-w-3xl mx-auto">
								<h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
									Nasza Misja
								</h2>
								<div className="space-y-6">
									<p className="text-lg text-white/90 leading-relaxed">
										Jako firma rodzinna stoimy murem za
										rozwojem technologii naszych wyrobów i
										zdobywamy w tym kierunku niezbędne
										doświadczenie. Chcemy nie tylko utrzymać
										najwyższy standard naszych produktów,
										chcemy również iść w stronę
										zrównoważonego rozwoju.
									</p>
									<p className="text-lg text-white/90 leading-relaxed">
										Dlatego produkujemy nasze wyroby głównie
										w oparciu o surowce odtwarzalne,
										pozyskiwane z odpadów z tworzyw
										sztucznych. Jako rodzinna firma działamy
										na zasadach wspólnego dobra, wszyscy
										bierzemy osobistą odpowiedzialność za
										to, co robimy i daje nam to ogromną
										satysfakcję.
									</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Timeline */}
					<div className="mb-16">
						<h2 className="text-3xl font-bold mb-12 text-center text-white">
							Historia Fast-Fol
						</h2>
						<div className="space-y-8">
							{timeline.map((event, index) => (
								<motion.div
									key={event.year}
									initial={{
										opacity: 0,
										x: index % 2 === 0 ? -50 : 50,
									}}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="flex items-center gap-8"
								>
									<div
										className={`w-32 text-right ${
											index % 2 === 0
												? "order-1"
												: "order-3"
										}`}
									>
										<span className="text-2xl font-bold text-white">
											{event.year}
										</span>
									</div>
									<div className="order-2 w-4 h-4 rounded-full bg-white relative">
										<div className="absolute w-1 h-full bg-white/30 left-1/2 transform -translate-x-1/2 -z-10"></div>
									</div>
									<div
										className={`flex-1 ${
											index % 2 === 0
												? "order-3"
												: "order-1 text-right"
										}`}
									>
										<h3 className="text-xl font-semibold text-white mb-2">
											{event.title}
										</h3>
										<p className="text-white">
											{event.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Eco Initiatives */}
					<div className="mb-16">
						<h2 className="text-3xl font-bold mb-12 text-center text-white">
							Inicjatywy Ekologiczne
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{ecoInitiatives.map((initiative, index) => (
								<motion.div
									key={initiative.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="bg-[#E8F5FF] p-6 rounded-xl"
								>
									<div className="w-12 h-12 mb-4 text-[#27AAE1]">
										<svg
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											{initiative.icon}
										</svg>
									</div>
									<h3 className="text-xl font-semibold mb-4 text-[#27AAE1]">
										{initiative.title}
									</h3>
									<p className="text-[#27AAE1]">
										{initiative.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>

					{/* Certificates */}
					<div>
						<h2 className="text-3xl font-bold mb-12 text-center text-white">
							Nasze Certyfikaty
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{certificates.map((cert, index) => (
								<motion.div
									key={cert.name}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="bg-[#E8F5FF] p-6 rounded-xl text-center"
								>
									<div className="w-16 h-16 mx-auto mb-6 text-[#27AAE1]">
										<svg
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											{cert.icon}
										</svg>
									</div>
									<h3 className="text-xl font-semibold mb-4 text-[#27AAE1]">
										{cert.name}
									</h3>
									<p className="text-[#27AAE1]">
										{cert.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
