"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import { jobListings } from "./jobList";

const jobCategories = ["All", "Technology", "Marketing", "Sales", "Customer Service", "Finance", "Human Resources"];

export default function JobListings() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-24 relative z-20">
			<motion.h2
				className="text-3xl font-bold mb-8 text-gray-800"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Open Positions
			</motion.h2>

			{/* Top Navbar for Categories */}
			<motion.div
				className="flex flex-wrap gap-4 mb-6"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				{jobCategories.map((category) => (
					<button
						key={category}
						onClick={() => setSelectedCategory(category)}
						className={`px-4 py-2 rounded-md transition-colors cursor-pointer border ${
							selectedCategory === category
								? "bg-indigo-600 text-white border-indigo-600"
								: "text-gray-600 hover:bg-gray-100 border-gray-300"
						}`}
					>
						{category}
					</button>
				))}
			</motion.div>

			{/* Search Bar */}
			<motion.div
				className="mb-6"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				<Input
					className="max-w-md"
					id="searchJobsInputField"
					placeholder="Search jobs..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</motion.div>

			{/* Job Listings */}
			<div className="relative flex gap-5">
				<div className="grid gap-6 w-2/3">
					{jobListings
						.filter(
							(job) =>
								(selectedCategory === "All" || job.category === selectedCategory) &&
								(job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
									job.company.toLowerCase().includes(searchTerm.toLowerCase()))
						)
						.map((job, index) => (
							<Link key={job.id} href={`/jobs/${job.id}`} className="block">
								<motion.div
									className="bg-white border border-gray-300 shadow-sm rounded-lg p-6 transition-shadow hover:shadow-lg"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.1 * index }}
								>
									<div className="relative flex justify-between">
										<Badge variant="secondary" className="mb-2">
											{job.category}
										</Badge>
										<div className="relative text-sm text-gray-600">{job.postedDate}</div>
									</div>
									<div className="text-xl font-semibold text-gray-700">{job.title}</div>
									<div className="text-indigo-500 text-sm font-medium">{job.company}</div>
									<div className="text-sm text-gray-500 mb-4 mt-2">{job.location}</div>
								</motion.div>
							</Link>
						))}
				</div>
				<div className="relative w-1/3">
					<div className="relative h-auto border p-5 rounded-xl w-full">
						<div className="relative text-xl text-gray-800 font-bold">Related Searches</div>
						<div className="relative flex-col space-y-3 text-gray-700 mt-4 text-sm font-medium">
							<div className="relative">Communication Skills</div>
							<div className="relative">Data Analysis</div>
							<div className="relative">Problem Solving</div>
							<div className="relative">Excel</div>
							<div className="relative">Organizational Skills</div>
							<div className="relative">Analytics</div>
							<div className="relative">SQL</div>
							<div className="relative">Presentation Skills</div>
							<div className="relative">Market Research</div>
							<div className="relative">Reporting</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
