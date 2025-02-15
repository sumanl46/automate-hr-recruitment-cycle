"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
			<motion.nav
				className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
					isScrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-sm"
				}`}
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16 items-center">
						<div className="flex-shrink-0 flex items-center">
							<Link href="/" className="text-2xl font-bold text-indigo-600">
								HRCycle
							</Link>
						</div>
						<div className="hidden md:flex items-center space-x-4">
							<Link href="/about" className="text-gray-500 hover:text-gray-900">
								About
							</Link>
							<Link href="/contact" className="text-gray-500 hover:text-gray-900">
								Contact
							</Link>

							<div className={`flex items-center gap-4`}>
								<div className="flex items-center space-x-4">
									<Link href="/signin">
										<Button variant="ghost" className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50">
											Sign In
										</Button>
									</Link>
									<Link href="/signup">
										<Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Sign Up</Button>
									</Link>
								</div>

								<div className={`w-px h-7 ${isScrolled ? "bg-gray-200" : "bg-gray-400"}`}></div>

								<Link href="/post-job">
									<Button
										className={`text-indigo-600 hover:text-indigo-800 ${
											isScrolled ? "bg-gray-100 hover:bg-indigo-50" : "bg-white hover:bg-white"
										} font-normal shadow-none`}
									>
										<Plus />
										<span>Post a Job</span>
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</motion.nav>
		</div>
	);
}
