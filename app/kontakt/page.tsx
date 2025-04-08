"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		company: "",
		title: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

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
						Kontakt
					</motion.h1>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
						>
							<h2 className="text-2xl font-semibold mb-6 text-white">
								Napisz do nas
							</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-white/90"
									>
										Imię i nazwisko
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="mt-1 block w-full rounded-md bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-white/40"
									/>
								</div>
								<div>
									<label
										htmlFor="company"
										className="block text-sm font-medium text-white/90"
									>
										Firma
									</label>
									<input
										type="text"
										id="company"
										name="company"
										value={formData.company}
										onChange={handleChange}
										className="mt-1 block w-full rounded-md bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-white/40"
									/>
								</div>
								<div>
									<label
										htmlFor="title"
										className="block text-sm font-medium text-white/90"
									>
										Tytuł
									</label>
									<input
										type="text"
										id="title"
										name="title"
										value={formData.title}
										onChange={handleChange}
										required
										className="mt-1 block w-full rounded-md bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-white/40"
									/>
								</div>
								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-white/90"
									>
										Wiadomość
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={4}
										className="mt-1 block w-full rounded-md bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-white/40"
									/>
								</div>
								<button
									type="submit"
									className="w-full bg-[#27AAE1] text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#27AAE1] transition-all duration-300"
								>
									Wyślij wiadomość
								</button>
							</form>
						</motion.div>

						{/* Contact Information */}
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="space-y-8"
						>
							<div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
								<h2 className="text-2xl font-semibold mb-6 text-white">
									Dane kontaktowe
								</h2>
								<div className="space-y-4">
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0 w-6 h-6 text-white mt-1">
											<svg
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M3 7L12 13L21 7"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</div>
										<div>
											<p className="font-medium text-white">
												Email:
											</p>
											<a
												href="mailto:kontakt@fast-fol.pl"
												className="text-white/90 hover:text-white"
											>
												kontakt@fast-fol.pl
											</a>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0 w-6 h-6 text-white mt-1">
											<svg
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</div>
										<div>
											<p className="font-medium text-white">
												Telefon:
											</p>
											<a
												href="tel:+48123456789"
												className="text-white/90 hover:text-white"
											>
												+48 123 456 789
											</a>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0 w-6 h-6 text-white mt-1">
											<svg
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</div>
										<div>
											<p className="font-medium text-white">
												Adres:
											</p>
											<p className="text-white/90">
												ul. Przykładowa 123
												<br />
												00-000 Miasto
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Map */}
							<div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
								<h2 className="text-2xl font-semibold mb-6 text-white">
									Lokalizacja
								</h2>
								<div className="aspect-w-16 aspect-h-9">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.3054667754307!2d21.017229776676095!3d52.23235065968892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw!5e0!3m2!1sen!2spl!4v1692586354774!5m2!1sen!2spl"
										className="w-full h-full rounded-xl"
										style={{ border: 0 }}
										allowFullScreen
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
									></iframe>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
