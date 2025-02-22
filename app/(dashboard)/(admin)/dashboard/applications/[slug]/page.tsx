import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { applicants } from "@/components/jobList";

export const metadata: Metadata = {
	title: "Applicant Details | HRCycle",
	description: "View applicant details on HRCycle",
};

export default function ApplicantView({ params }: { params: { slug: string } }) {
	// Find the applicant matching the ID from the URL
	const applicant = applicants.find((applicant) => applicant.id.toString() === params.slug);

	// Handle case if the applicant isn't found
	if (!applicant) {
		notFound();
	}

	return (
		<div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			<div className="lg:flex lg:items-center lg:justify-between">
				<div className="flex-1 min-w-0">
					<h2 className="text-3xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate">
						{applicant.name}
					</h2>
					<div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
						<div className="mt-2 flex items-center text-sm text-gray-500">
							<Image
								src={applicant.logo || "/placeholder.svg"}
								alt={`${applicant.name} logo`}
								width={24}
								height={24}
								className="rounded-full mr-2"
							/>
							{applicant.name}
						</div>
						<div className="mt-2 flex items-center text-sm text-gray-500">
							<svg
								className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
									clipRule="evenodd"
								/>
							</svg>
							{applicant.email}
						</div>
					</div>
				</div>
				<div className="mt-5 flex lg:mt-0 lg:ml-4">
					<Link href={`/applicants/${applicant.id}/contact`}>
						<Button>Contact Applicant</Button>
					</Link>
				</div>
			</div>
			<div className="mt-8 border-t border-gray-200 pt-8">
				<h3 className="text-lg font-medium text-gray-900">Skills</h3>
				<div className="mt-4 prose prose-indigo text-gray-500">
					<ul>
						{applicant.skills.map((skill, index) => (
							<li key={index}>{skill}</li>
						))}
					</ul>
				</div>
			</div>
			<div className="mt-8 border-t border-gray-200 pt-8">
				<h3 className="text-lg font-medium text-gray-900">Experience</h3>
				<div className="mt-4 prose prose-indigo text-gray-500">
					<p>{applicant.experience}</p>
				</div>
			</div>
			<div className="mt-8 border-t border-gray-200 pt-8">
				<h3 className="text-lg font-medium text-gray-900">Application Status</h3>
				<div className="mt-4 prose prose-indigo text-gray-500">
					<p>{applicant.status}</p>
				</div>
			</div>
		</div>
	);
}
