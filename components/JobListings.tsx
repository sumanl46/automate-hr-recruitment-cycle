"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import { jobListings } from "./jobList";
import ExperienceFilter from "./experienceFilter";
import SalaryFilter from "./salaryFilter";
import CompaniesFilter from "./companiesFilter";
import JobTypeFilter from "./jobTypeFilter";
import EmployeeBenefitsFilter from "./employeeBenifitsFilter";
import MarketsFilter from "./marktets";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { ListFilter } from "lucide-react";
import SearchFieldFilter from "./searchFieldFilter";

export default function JobListings() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<div
			id="explore-jobs"
			className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 -mt-24 relative z-20 tracking-wide"
		>
			<motion.h2
				className="text-3xl font-bold mb-8 text-gray-800"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Open Positions
			</motion.h2>

			{/* Search Bar */}
			<div className="relative border border-gray-100 rounded-md shadow-xl shadow-gray-100">
				<motion.div
					className="mb-3 px-5 pt-5"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<SearchFieldFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				</motion.div>

				<motion.div className="relative flex gap-4 flex-wrap px-5 border-t border-gray-100 py-5">
					<ExperienceFilter />
					<SalaryFilter />
					<CompaniesFilter />
					<JobTypeFilter />
					<EmployeeBenefitsFilter />
					<MarketsFilter />
				</motion.div>
			</div>
			{/* Job Listings */}
			<div className="relative flex gap-5 mt-10">
				<div className="grid gap-6 w-2/3">
					<div className="relative h-10 w-full flex justify-between">
						<div className="rleative text-sm text-gray-800">
							jobs{" "}
							<span className="px-2 text-xs font-medium py-1 border rounded-md">
								{jobListings.length}
							</span>
						</div>
						<div className="relative">
							<Select>
								<SelectTrigger className="w-[220px] h-10 cursor-pointer">
									<ListFilter className="text-gray-500" />
									<SelectValue placeholder="Select Result Type" />
								</SelectTrigger>
								<SelectContent className="relative shadow-xl">
									<SelectGroup>
										<SelectLabel className="relative px-5">Filter by</SelectLabel>
										<SelectItem
											className="relative font-medium text-gray-700 cursor-pointer py-2 px-5"
											value="mostRelevant"
										>
											Most Relevant
										</SelectItem>
										<SelectItem
											className="relative font-medium text-gray-700 cursor-pointer py-2 px-5"
											value="mostRecent"
										>
											Most Recent
										</SelectItem>
										<SelectItem
											className="relative font-medium text-gray-700 cursor-pointer py-2 px-5"
											value="salaryHighLow"
										>
											Salary (High-Low)
										</SelectItem>
										<SelectItem
											className="relative font-medium text-gray-700 cursor-pointer py-2 px-5"
											value="salaryLowHigh"
										>
											Salary (Low-High)
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
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
									className="bg-white border border-gray-300 shadow rounded-lg p-6 transition-shadow hover:shadow-lg"
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
