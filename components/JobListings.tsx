"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";

const jobCategories = ["All", "Technology", "Marketing", "Sales", "Customer Service", "Finance", "Human Resources"];

const jobListings = [
	{
		id: 1,
		title: "Software Engineer",
		company: "TechCorp",
		category: "Technology",
		location: "San Francisco, CA",
		logo: "/placeholder.svg",
	},
	{
		id: 2,
		title: "Marketing Manager",
		company: "GrowthInc",
		category: "Marketing",
		location: "New York, NY",
		logo: "/placeholder.svg",
	},
	{
		id: 3,
		title: "Sales Representative",
		company: "SalesPro",
		category: "Sales",
		location: "Chicago, IL",
		logo: "/placeholder.svg",
	},
	{
		id: 4,
		title: "Customer Support Specialist",
		company: "HelpDesk",
		category: "Customer Service",
		location: "Remote",
		logo: "/placeholder.svg",
	},
	{
		id: 5,
		title: "Financial Analyst",
		company: "MoneyWise",
		category: "Finance",
		location: "Boston, MA",
		logo: "/placeholder.svg",
	},
	{
		id: 6,
		title: "HR Coordinator",
		company: "PeopleFirst",
		category: "Human Resources",
		location: "Austin, TX",
		logo: "/placeholder.svg",
	},
];

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

			<div className="flex flex-col md:flex-row gap-8">
				{/* Sidebar */}
				<motion.div
					className="w-full md:w-64 flex-shrink-0"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<h3 className="text-lg font-semibold mb-4 text-gray-700">Categories</h3>
					<nav className="space-y-2">
						{jobCategories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
									selectedCategory === category ? "bg-indigo-100 text-indigo-800" : "text-gray-600 hover:bg-gray-100"
								}`}
							>
								{category}
							</button>
						))}
					</nav>
				</motion.div>

				{/* Job Listings */}
				<div className="flex-grow">
					<motion.div
						className="mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<Input
							className="max-w-md scroll-mt-60"
							id="searchJobsInputField"
							placeholder="Search jobs..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</motion.div>
					<div className="grid gap-6 md:grid-cols-2">
						{jobListings
							.filter(
								(job) =>
									(selectedCategory === "All" || job.category === selectedCategory) &&
									(job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
										job.company.toLowerCase().includes(searchTerm.toLowerCase()))
							)
							.map((job, index) => (
								<Link key={job.id} href={`/jobs/${job.id}`} className="block">
									{" "}
									{/* Added key prop here */}
									<motion.div
										key={job.id}
										className="bg-white shadow-md rounded-lg p-6 transition-shadow hover:shadow-lg"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: 0.1 * index }}
									>
										<div className="flex items-center mb-4">
											<div>
												<h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
												<p className="text-indigo-600 font-medium">{job.company}</p>
											</div>
										</div>

										<Badge variant="secondary" className="mb-2">
											{job.category}
										</Badge>
										<p className="text-sm text-gray-500 mb-4">{job.location}</p>
										<Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Apply Now</Button>
									</motion.div>
								</Link>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
