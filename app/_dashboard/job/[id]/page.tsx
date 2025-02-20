"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import Link from "next/link";
import { HRJobListings } from "@/components/jobList"; // Import your HRJobListings

type Job = {
	id: string;
	title: string;
	description: string;
	type: "Internal" | "External" | "Both";
	salary: string;
	location: string;
	screeningQuestions: string[];
};

type Applicant = {
	id: string;
	name: string;
	email: string;
	status: "Pending" | "Selected" | "Rejected";
	resume: string;
	jobId: string;
};

export default function HRDashboard() {
	const params = useParams();
	const jobId = params.id as string; // Extract job ID from the URL

	const [job, setJob] = useState<Job | null>(null);
	const [applicants, setApplicants] = useState<Applicant[]>([]);

	// Fetch job details & applicants (Replace with actual API calls)
	useEffect(() => {
		// Find the job based on the jobId
		const jobData = HRJobListings.find((job) => job.id.toString() === jobId); // Replace with actual list of job data from HRJobListings
		if (jobData) {
			setJob(jobData);
			// Dummy Applicants Data (Replace with API call)
			const applicantsData: Applicant[] = [
				{
					id: "1",
					name: "John Doe",
					email: "john@example.com",
					status: "Pending",
					resume: "/resumes/john_doe.pdf",
					jobId: jobData.id.toString(),
				},
			];

			setApplicants(applicantsData);
		}
	}, [jobId]);

	// Update applicant status
	const updateStatus = (id: string, newStatus: "Pending" | "Selected" | "Rejected") => {
		setApplicants((prev) => prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app)));
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="max-w-6xl mx-auto px-4 py-12 tracking-wider min-h-screen"
		>
			{job ? (
				<>
					<div className="relative flex justify-between">
						<div className="relative text-sm text-gray-600 mb-2 font-medium">Job Detail</div>
						<Link href={`/dashboard/job/${job.id}/edit`}>
							<Button type="button" className="px-5 text-xs flex items-center font-bold">
								<Edit size={18} />
								Edit
							</Button>
						</Link>
					</div>
					<div className="relative flex items-center gap-16 mb-6">
						<div className="text-4xl font-bold text-gray-800">{job.title}</div>
						<div className="text-2xl text-gray-800 mt-2 font-bold">{job.salary}</div>
					</div>
					<div className="mb-10">
						<p className="text-gray-700">{job.description}</p>
						<p className="text-gray-500 mt-2">
							{job.type} | {job.location}
						</p>
					</div>

					{/* Application Management */}
					<h2 className="text-2xl font-semibold mb-4 text-gray-800">Applicants</h2>
					<div className="overflow-x-auto bg-white rounded-lg border">
						<table className="w-full">
							<thead className="border-b">
								<tr className="">
									<th className="pl-8 py-5 text-left">Name</th>
									<th className="pl-8 py-5 text-left">Email</th>
									<th className="pl-8 py-5 text-left">Status</th>
									<th className="pl-8 py-5 text-left">Actions</th>
								</tr>
							</thead>
							<tbody>
								{applicants.length > 0 ? (
									applicants.map((applicant) => (
										<tr key={applicant.id}>
											<td className="pl-8 py-5">{applicant.name}</td>
											<td className="pl-8 py-5">{applicant.email}</td>
											<td className="pl-8 py-5">
												<span
													className={`px-2 py-1 rounded text-sm text-white font-medium ${
														applicant.status === "Selected"
															? "bg-green-500"
															: applicant.status === "Rejected"
															? "bg-red-500"
															: "bg-yellow-500"
													}`}
												>
													{applicant.status}
												</span>
											</td>
											<td className="pl-8 py-5 flex gap-2">
												<a
													href={applicant.resume}
													target="_blank"
													rel="noopener noreferrer"
													className="px-3 py-1 bg-blue-500 text-sm text-white font-medium rounded hover:bg-blue-600"
												>
													Download Resume
												</a>
												<button
													onClick={() => updateStatus(applicant.id, "Selected")}
													className="px-3 py-1 bg-green-500 text-sm text-white font-medium rounded hover:bg-green-600"
												>
													Select
												</button>
												<button
													onClick={() => updateStatus(applicant.id, "Rejected")}
													className="px-3 py-1 bg-red-500 text-sm text-white font-medium rounded hover:bg-red-600"
												>
													Reject
												</button>
											</td>
										</tr>
									))
								) : (
									<tr>
										<td colSpan={4} className="pl-8 py-5 text-center text-gray-500">
											No applicants found.
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</>
			) : (
				<p className="text-center text-gray-500">Job not found</p>
			)}
		</motion.div>
	);
}
