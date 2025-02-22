"use client";

import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/contexts/AuthContext";
import { Edit, Facebook, Github, Instagram, MessageCircleIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function ProfilePage() {
	const { applicant } = useAuthContext();
	if (!applicant) return null;

	// State to toggle Education and Experience sections
	const [showDetails, setShowDetails] = useState(false);

	// State to manage modal visibility
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleToggleDetails = () => {
		setShowDetails((prevState) => !prevState);
	};

	// Open the modal
	const handleEditClick = () => {
		setIsModalOpen(true);
	};

	// Close the modal
	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	// Handle confirmation (this is where you can add the actual logic to edit)
	const handleConfirmEdit = () => {
		// Logic to navigate to edit page or show a form can be added here
		setIsModalOpen(false);
		// Redirect to edit page
		window.location.href = "/profile/edit";
	};

	return (
		<div className="relative h-auto min-h-screen w-screen tracking-wider pb-32 pt-16">
			<div className="relative max-w-3xl h-full mx-auto flex-col space-y-8">
				<div className="relative w-full">
					<div className="relative flex w-full gap-8">
						<div
							className="relative h-56 w-56 rounded-2xl bg-cover bg-center"
							style={{ backgroundImage: `url(${applicant.profileImage})` }}
						></div>
						<div className="relative flex-col space-y-8 w-[calc(100%-16rem)]">
							<div className="relative flex justify-between">
								<div className="relative flex-col space-y-4 pt-2">
									<div className="relative flex-col space-y-2">
										<div className="font-semibold text-3xl text-gray-800">
											{applicant.firstName} {applicant.lastName}
										</div>
										<div className="text-xs text-gray-600">{applicant.location}</div>
									</div>
									<div className="text-base text-gray-700 font-semibold">{applicant.jobTitle}</div>
								</div>
								<Button onClick={handleEditClick} variant="outline">
									Edit <Edit size={16} />
								</Button>
							</div>
							<div className="relative w-full flex">
								<div className="relative w-1/2 flex-col space-y-4">
									<div className="relative text-sm font-semibold text-gray-800">Contacts</div>
									<div className="relative flex-col space-y-2 text-gray-800 font-medium text-xs">
										<div className="relative">
											Phone No:
											<span className="text-black font-semibold hover:underline cursor-pointer">
												{applicant.phoneNumber}
											</span>
										</div>
										<div className="relative">
											Email:
											<span className="text-black font-semibold hover:underline cursor-pointer">
												{applicant.email}
											</span>
										</div>
									</div>
								</div>
								<div className="relative w-1/2 flex flex-col space-y-2">
									<div className="relative text-sm text-gray-700 font-semibold">Links</div>
									<div className="relative flex gap-2 flex-wrap *:h-8 *:w-8 *:rounded *:flex *:items-center *:justify-center *:text-gray-600">
										{Object.entries(applicant.socialLinks).map(([name, link]) => (
											<Link
												key={name}
												href={link.link}
												className="relative scale-100 hover:scale-105 duration-200 hover:text-black cursor-pointer"
											>
												{link.name.toLowerCase() === "facebook" && <Facebook size={18} />}
												{link.name.toLowerCase() === "instagram" && <Instagram size={18} />}
												{link.name.toLowerCase() === "github" && <Github size={18} />}
												{link.name.toLowerCase() === "messenger" && (
													<MessageCircleIcon size={18} />
												)}
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Modal for profile editing */}
				{isModalOpen && (
					<div className="fixed inset-0 bg-black/10 bg-opacity-50 flex justify-center items-center z-50">
						<div className="bg-white rounded-lg p-8 w-80">
							<div className="text-lg font-semibold">Edit Your Profile?</div>
							<div className="mt-4 flex justify-between">
								<Button onClick={handleCloseModal} variant="outline">
									Cancel
								</Button>
								<Button onClick={handleConfirmEdit}>Confirm</Button>
							</div>
						</div>
					</div>
				)}

				{/* Education and Experience Sections */}
				<div className="relative">
					{/* Show/Hide Details Button */}
					<div className="relative flex justify-center">
						<Button size="sm" variant="outline" onClick={handleToggleDetails}>
							{showDetails ? "Hide Details" : "Show Details"}
						</Button>
					</div>
					{/* Education and Experience Sections */}
					{showDetails && (
						<div className="relative flex *:w-1/2">
							{/* Education Section */}
							<div className="relative flex flex-col space-y-2 py-8">
								<div className="relative text-gray-800 font-bold text-base">Education</div>
								<div className="relative space-y-2">
									{applicant.education.map((edu, index) => (
										<div key={index} className="relative flex flex-col space-y-1 text-gray-700">
											<div className="text-sm font-bold text-gray-600">{edu.degree}</div>
											<div className="text-sm text-gray-600">{edu.institution}</div>
											<div className="text-xs text-gray-500">{edu.year}</div>
										</div>
									))}
								</div>
							</div>

							{/* Experience Section */}
							<div className="relative flex flex-col space-y-2 py-8">
								<div className="relative text-gray-800 font-bold text-base">Experience</div>
								<div className="relative space-y-2">
									{applicant.experience.map((exp, index) => (
										<div key={index} className="relative flex flex-col space-y-1 text-gray-700">
											<div className="text-base font-medium">{exp.position}</div>
											<div className="text-sm text-gray-600">{exp.company}</div>
											<div className="text-xs text-gray-500">{exp.duration}</div>
											<div className="text-xs text-gray-500 mt-2">
												<strong>Responsibilities:</strong>
												<ul className="list-disc list-inside">
													{exp.responsibilities.map((responsibility, idx) => (
														<li key={idx}>{responsibility}</li>
													))}
												</ul>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Applied Jobs Section */}
				<div className="relative flex flex-col space-y-8">
					<div className="relative text-gray-800 font-bold text-xl">Applied Jobs</div>
					<div className="relative grid gap-4">
						{applicant.appliedJobs.map((job) => (
							<div key={job.id} className="relative flex w-full">
								<Link href={`dashboard/job/${job.id}`} className="relative w-full">
									<div className="relative p-5 border w-full rounded-md hover:shadow-xl duration-200 cursor-pointer">
										<div className="relative flex justify-between">
											<div className="relative text-base font-medium text-gray-800">
												{job.title}
											</div>
											<div className="relative flex items-center gap-4">
												<div className="relative text-gray-700 text-sm font-bold">
													{job.salary}
												</div>
												<Button variant="destructive">Cancel</Button>
											</div>
										</div>
										<div className="relative text-xs mt-2 text-gray-600 text-end">
											{job.postedDate}
										</div>
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
			</div>
		</div>
	);
}
