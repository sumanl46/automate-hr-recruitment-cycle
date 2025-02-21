"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Search, TrendingUp, X } from "lucide-react";
import { Button } from "./ui/button";
import { countriesAndTimezones, jobsAndSkills } from "./jobList";
import { useFilterContext } from "@/contexts/FilterContext";

export default function SearchFieldFilter() {
	const [jobSearchTerm, setJobSearchTerm] = useState(""); // Separate job search term
	const [locationSearchTerm, setLocationSearchTerm] = useState(""); // Separate location search term
	const [isJobFocused, setIsJobFocused] = useState(false);
	const [isLocationFocused, setIsLocationFocused] = useState(false);

	const { selectedJobTitle, setSelectedJobTitle, selectedCountryTimeZone, setSelectedCountryTimeZone } =
		useFilterContext() || {};

	// Clear the input fields when selected values change
	useEffect(() => {
		if (selectedJobTitle) {
			setJobSearchTerm(""); // Clear the job search term when a job title is selected
		}
	}, [selectedJobTitle]);

	useEffect(() => {
		if (selectedCountryTimeZone) {
			setLocationSearchTerm(""); // Clear the location search term when a country/timezone is selected
		}
	}, [selectedCountryTimeZone]);

	// Filter the jobs and timezones based on the search terms
	const filteredJobs = jobsAndSkills.filter((job) => job.title.toLowerCase().includes(jobSearchTerm.toLowerCase()));
	const filteredTimezones = countriesAndTimezones.filter((timezone) =>
		timezone.country.toLowerCase().includes(locationSearchTerm.toLowerCase())
	);

	return (
		<div className="relative flex">
			<div className="relative flex w-full *:w-1/2 gap-4">
				{/* Job Title or Skill Input */}
				<div className="relative">
					<div className="relative flex items-center h-10 rounded-md">
						<div className="flex items-center justify-center text-gray-600 pr-4">
							<Search size={22} />
						</div>
						{selectedJobTitle && (
							<div className="relative text-xs px-2 py-1 border border-gray-200 rounded-md flex items-center gap-2 inline-flex">
								{selectedJobTitle.title}{" "}
								<X
									size={13}
									onClick={() => {
										setSelectedJobTitle(null); // Clear the selected job title
										setJobSearchTerm(""); // Clear the search term
									}}
								/>
							</div>
						)}
						<div className="relative flex-grow">
							<input
								type="text"
								placeholder="Job title or skill"
								className="w-full outline-none h-full px-2 text-sm"
								value={jobSearchTerm} // Bind to jobSearchTerm
								onChange={(e) => setJobSearchTerm(e.target.value)} // Update jobSearchTerm
								onFocus={() => setIsJobFocused(true)}
								onBlur={() => setTimeout(() => setIsJobFocused(false), 200)}
							/>
						</div>
						<div className="flex items-center justify-center h-10 w-10 text-gray-600">
							{isJobFocused ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
						</div>
					</div>

					{isJobFocused && (
						<div className="absolute z-40 bg-white border max-h-56 w-full rounded-md top-12 left-0 shadow-md overflow-y-auto p-2 flex-col space-y-2">
							{filteredJobs.length > 0 ? (
								filteredJobs.map((job, index) => (
									<div
										key={index}
										onClick={() => {
											setSelectedJobTitle(job);
											setJobSearchTerm(job.title); // Update search term when a job is selected
										}}
										className={`relative h-12 w-full ${
											selectedJobTitle && job === selectedJobTitle
												? "bg-gray-100"
												: "hover:bg-gray-100"
										} px-2 cursor-pointer flex items-center rounded-md justify-between`}
									>
										<div className="relative flex items-center">
											<div className="relative h-full w-12 flex items-center justify-center text-gray-600">
												<TrendingUp size={18} />
											</div>
											<div className="relative text-sm font-medium text-gray-700">
												{job.title}
											</div>
										</div>
									</div>
								))
							) : (
								<div className="text-sm text-gray-500 p-5">No jobs found</div>
							)}
						</div>
					)}
				</div>

				{/* Country or Timezone Input */}
				<div className="relative">
					<div className="relative flex items-center h-10 rounded-md">
						<div className="flex items-center justify-center text-gray-600 pr-4">
							<Search size={22} />
						</div>
						{selectedCountryTimeZone && (
							<div className="relative text-xs px-2 py-1 border border-gray-200 rounded-md flex items-center gap-2 inline-flex">
								{selectedCountryTimeZone.country}{" "}
								<X
									size={13}
									onClick={() => {
										setSelectedCountryTimeZone(null); // Clear the selected country/timezone
										setLocationSearchTerm(""); // Clear the search term
									}}
								/>
							</div>
						)}
						<div className="relative flex-grow">
							<input
								type="text"
								placeholder="Country or timezone"
								className="w-full outline-none h-full px-2 text-sm"
								value={locationSearchTerm} // Bind to locationSearchTerm
								onChange={(e) => setLocationSearchTerm(e.target.value)} // Update locationSearchTerm
								onFocus={() => setIsLocationFocused(true)}
								onBlur={() => setTimeout(() => setIsLocationFocused(false), 200)}
							/>
						</div>
						<div className="flex items-center justify-center w-10 text-gray-600">
							{isLocationFocused ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
						</div>
					</div>

					{isLocationFocused && (
						<div className="absolute z-40 bg-white border max-h-56 w-full rounded-md top-12 left-0 shadow-md overflow-y-auto p-2 flex-col space-y-2">
							{filteredTimezones.length > 0 ? (
								filteredTimezones.map((timezone, index) => (
									<div
										key={index}
										onClick={() => {
											setSelectedCountryTimeZone(timezone);
											setLocationSearchTerm(timezone.country); // Update search term when a timezone is selected
										}}
										className={`relative h-12 w-full ${
											selectedCountryTimeZone && timezone === selectedCountryTimeZone
												? "bg-gray-100"
												: "hover:bg-gray-100"
										} px-2 cursor-pointer flex items-center rounded-md justify-between`}
									>
										<div className="relative flex items-center">
											<div className="relative h-full w-12 flex items-center justify-center text-gray-600">
												{timezone.flag}
											</div>
											<div className="relative text-sm font-medium text-gray-700">
												{timezone.country}
											</div>
										</div>
									</div>
								))
							) : (
								<div className="text-sm text-gray-500 p-5">No timezones found</div>
							)}
						</div>
					)}
				</div>
			</div>

			{/* Clear & Search Buttons */}
			<div className="relative flex w-56 *:w-1/2 *:flex *:justify-center *:items-center">
				<button
					className="relative text-gray-600"
					onClick={() => {
						setJobSearchTerm("");
						setLocationSearchTerm("");
					}}
				>
					Clear
				</button>
				<Button className="bg-violet-700">Search</Button>
			</div>
		</div>
	);
}
