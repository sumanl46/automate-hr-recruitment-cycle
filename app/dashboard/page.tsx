"use client";
import { HRJobListings } from "@/components/jobList";
import Link from "next/link";
import React from "react";

export default function HRDashboard() {
	return (
		<div className="max-w-7xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-12 relative tracking-wider">
			<div className="relative text-xl text-center">
				Hi, <span className="font-bold">Anatomy</span>
			</div>
			<div className="relative text-sm text-gray-700 mt-4 text-center">Below are your recently posted Jobs.</div>
			<div className="relative grid md:grid-cols-2 gap-6 mt-16">
				{/* Looping through job listings */}
				{HRJobListings.map((job) => (
					<div key={job.id} className="relative flex w-full col-span-1">
						<Link href={`dashboard/job/${job.id}`} className="relative w-full">
							<div className="relative p-5 border w-full rounded-md hover:shadow-xl duration-200 cursor-pointer">
								<div className="relative flex justify-between">
									<div className="relative text-base font-medium text-gray-800">{job.title}</div>
									<div className="relative text-gray-700 text-sm font-bold">{job.salary}</div>
								</div>
								<div className="relative text-xs mt-2 text-gray-600 text-end">{job.postedDate}</div>
								<div className="relative text-sm mt-2">{job.location}</div>
								<div className="relative flex justify-between mt-4">
									<div className="relative bg-gray-200 px-2 py-1 rounded-md text-xs">
										{job.company}
									</div>
									<div className="relative text-gray-500 text-sm">{job.employmentType}</div>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
