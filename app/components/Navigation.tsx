"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-[#27AAE1] text-white fixed w-full z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className="flex items-center"
					>
						<a
							href="/"
							className="font-bold text-2xl tracking-tight"
						>
							Fast-Fol
						</a>
					</motion.div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-6">
							{["Home", "Oferta", "O Firmie", "Kontakt"].map(
								(item, index) => (
									<motion.a
										key={item}
										href={
											item === "Home"
												? "/"
												: `/${item
														.toLowerCase()
														.replace(" ", "-")}`
										}
										className="px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1B7EB3] transition-all duration-300"
										initial={{ opacity: 0, y: -20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										{item}
									</motion.a>
								)
							)}
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#1B7EB3] focus:outline-none"
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className={`h-6 w-6 ${
									isOpen ? "hidden" : "block"
								}`}
								stroke="currentColor"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							<svg
								className={`h-6 w-6 ${
									isOpen ? "block" : "hidden"
								}`}
								stroke="currentColor"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				<motion.div
					className={`md:hidden ${isOpen ? "block" : "hidden"}`}
					initial="closed"
					animate={isOpen ? "open" : "closed"}
					variants={{
						open: { opacity: 1, height: "auto" },
						closed: { opacity: 0, height: 0 },
					}}
					transition={{ duration: 0.2 }}
				>
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{["Home", "Oferta", "O Firmie", "Kontakt"].map(
							(item) => (
								<a
									key={item}
									href={
										item === "Home"
											? "/"
											: `/${item
													.toLowerCase()
													.replace(" ", "-")}`
									}
									className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1B7EB3] transition-all duration-300"
									onClick={() => setIsOpen(false)}
								>
									{item}
								</a>
							)
						)}
					</div>
				</motion.div>
			</div>
		</nav>
	);
}
