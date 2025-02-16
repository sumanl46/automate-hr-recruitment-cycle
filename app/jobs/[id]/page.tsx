import type { Metadata } from "next";
import { jobListings } from "@/data/jobListings";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Job Details | HRCycle",
	description: "View job details on HRCycle",
};

export default function JobDetailsPage({ params }: { params: { id: string } }) {
	const job = jobListings.find((job) => job.id.toString() === params.id);

	if (!job) {
		notFound();
	}

	return (
		<div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			<div className="lg:flex lg:items-center lg:justify-between">
				<div className="flex-1 min-w-0">
					<h2 className="text-3xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate">{job.title}</h2>
					<div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
						<div className="mt-2 flex items-center text-sm text-gray-500">
							<Image
								src={job.logo || "/placeholder.svg"}
								alt={`${job.company} logo`}
								width={24}
								height={24}
								className="rounded-full mr-2"
							/>
							{job.company}
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
							{job.location}
						</div>
					</div>
				</div>
				<div className="mt-5 flex lg:mt-0 lg:ml-4">
					<Link href={`/jobs/${job.id}/apply`}>
						<Button>Apply Now</Button>
					</Link>
				</div>
			</div>
			<div className="mt-8 border-t border-gray-200 pt-8">
				<h3 className="text-lg font-medium text-gray-900">Job Description</h3>
				<div className="mt-4 prose prose-indigo text-gray-500">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</p>
					<ul>
						<li>
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat.
						</li>
						<li>
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur.
						</li>
						<li>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum.
						</li>
					</ul>
				</div>
			</div>
			<div className="mt-8 border-t border-gray-200 pt-8">
				<h3 className="text-lg font-medium text-gray-900">Requirements</h3>
				<div className="mt-4 prose prose-indigo text-gray-500">
					<ul>
						<li>Bachelor&apos;s degree in related field</li>
						<li>3+ years of experience in similar role</li>
						<li>Strong communication and interpersonal skills</li>
						<li>Proficiency in relevant software and tools</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
