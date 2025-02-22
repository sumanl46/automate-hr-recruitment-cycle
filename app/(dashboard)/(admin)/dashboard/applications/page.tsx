import { applicants } from "@/components/jobList";
import React from "react";

export default function Applications() {
	return (
		<div className="p-4 w-full tracking-wider py-16">
			<div className="text-lg font-semibold mb-8">Applicants ({applicants.length})</div>
			<div className="flex-col space-y-4 w-full">
				{applicants.map((applicant) => (
					<div
						key={applicant.id}
						className="border p-4 rounded-md cursor-pointer shadow-sm hover:shadow-lg shadow-gray-300 transition duration-200"
					>
						<div className="text-xl font-semibold">{applicant.name}</div>
						<div className="text-sm text-gray-600">{applicant.email}</div>
						<div className="mt-2">
							<span className="font-medium">Skills: </span>
							<span>{applicant.skills.join(", ")}</span>
						</div>
						<div className="mt-2">
							<span className="font-medium">Experience: </span>
							<span>{applicant.experience}</span>
						</div>
						<div className="mt-2">
							<span className="font-medium">Status: </span>
							<span
								className={`font-semibold ${
									applicant.status === "Hired"
										? "text-green-500"
										: applicant.status === "Interviewing"
										? "text-yellow-500"
										: applicant.status === "Applied"
										? "text-blue-500"
										: "text-red-500"
								}`}
							>
								{applicant.status}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
