"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HRJobListings } from "@/components/jobList";

interface Job {
	id: number;
	title: string;
	description: string;
	location: string;
	salary: string;
	employmentType: string;
	requirements: string[];
}

export default function EditJob() {
	const params = useParams();
	const router = useRouter();
	const jobId = Number(params.id); // Assuming jobId comes from URL params

	// State for storing job details
	const [job, setJob] = useState<Job | null>(null);
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		location: "",
		salary: "",
		employmentType: "",
		requirements: "",
	});

	useEffect(() => {
		// Find job from the list
		const jobData = HRJobListings.find((job) => job.id === jobId);

		if (jobData) {
			setJob(jobData);
			setFormData({
				title: jobData.title,
				description: jobData.description,
				location: jobData.location,
				salary: jobData.salary,
				employmentType: jobData.employmentType,
				requirements: jobData.requirements.join(", "),
			});
		}
	}, [jobId]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Updated Job:", formData);
		router.push(`/dashboard/jobs/${jobId}`);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="max-w-4xl mx-auto px-4 py-12"
		>
			<div className="relative flex justify-between">
				<h1 className="text-3xl font-bold mb-6">Edit Job</h1>

				<Button type="button" variant="destructive" className="font-bold" size="lg">
					Cancel Editing
				</Button>
			</div>
			<form onSubmit={handleSubmit} className="space-y-4">
				<Input
					type="text"
					name="title"
					value={formData.title}
					onChange={handleChange}
					placeholder="Job Title"
				/>
				<Textarea
					name="description"
					value={formData.description}
					onChange={handleChange}
					placeholder="Job Description"
					rows={10}
				/>
				<Input
					type="text"
					name="location"
					value={formData.location}
					onChange={handleChange}
					placeholder="Location"
				/>
				<Input type="text" name="salary" value={formData.salary} onChange={handleChange} placeholder="Salary" />
				<Input
					type="text"
					name="employmentType"
					value={formData.employmentType}
					onChange={handleChange}
					placeholder="Employment Type"
				/>
				<Input
					type="text"
					name="requirements"
					value={formData.requirements}
					onChange={handleChange}
					placeholder="Job Requirements (comma separated)"
				/>
				<Button type="submit" size="lg" className="w-full">
					Save
				</Button>
			</form>
		</motion.div>
	);
}
