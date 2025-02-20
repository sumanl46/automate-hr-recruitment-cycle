import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, Users, Briefcase } from "lucide-react";
import Link from "next/link";

export default function Hero() {
	return (
		<div className="relative bg-gradient-to-b from-indigo-600 to-indigo-800 text-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
				<div className="text-center">
					<motion.h1
						className="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<span className="block">Revolutionize Your</span>
						<span className="block text-indigo-200">Recruitment Process</span>
					</motion.h1>
					<motion.p
						className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto text-indigo-100"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						Automate your HR recruitment cycle and find the perfect candidates faster than ever before.
					</motion.p>

					<motion.div
						className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<Link href="/#explore-jobs">
							<Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
								<Search className="w-5 h-5 mr-2" />
								Find Jobs
							</Button>
						</Link>

						<Link href="/post-job">
							<Button size="lg" className="bg-indigo-500 text-white hover:bg-indigo-400">
								<Briefcase className="w-5 h-5 mr-2" />
								Post a Job
							</Button>
						</Link>
					</motion.div>
					<motion.div
						className="mt-16 flex justify-center items-center space-x-8 text-indigo-200"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}
					>
						<div className="flex items-center">
							<Users className="w-6 h-6 mr-2" />
							<span>10,000+ Candidates</span>
						</div>
						<div className="flex items-center">
							<Briefcase className="w-6 h-6 mr-2" />
							<span>5,000+ Jobs Posted</span>
						</div>
					</motion.div>
				</div>
			</div>
			<div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent"></div>
		</div>
	);
}
