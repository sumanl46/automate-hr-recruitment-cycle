"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Icons } from "@/components/icons";

export default function PostJobForm() {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function onSubmit(event: React.SyntheticEvent) {
		event.preventDefault();
		setIsLoading(true);

		// Simulating form submission
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}

	return (
		<form onSubmit={onSubmit} className="space-y-6">
			<div className="space-y-2">
				<div className="relative mb-2 text-gray-700 font-medium">
					<Label htmlFor="title">Job Title</Label>
				</div>
				<Input id="title" placeholder="Your jobs Title" required />
			</div>
			<div className="space-y-2">
				<div className="relative mb-2 text-gray-700 font-medium">
					<Label htmlFor="company">Company Name ( optional )</Label>
				</div>
				<Input id="company" placeholder="Your Company name" required />
			</div>
			<div className="space-y-2">
				<div className="relative mb-2 text-gray-700 font-medium">
					<Label htmlFor="location">Location</Label>
				</div>
				<Input id="location" placeholder="Company/office Location" required />
			</div>
			<div className="relative flex gap-5">
				<div className="space-y-2 w-1/2">
					<div className="relative mb-2 text-gray-700 font-medium">
						<Label htmlFor="interviewDate">Interview Date</Label>
					</div>
					<Input type="date" id="interviewDate" placeholder="" required />
				</div>
				<div className="space-y-2 w-1/2">
					<div className="relative mb-2 text-gray-700 font-medium">
						<Label htmlFor="interviewDate">Interview Time</Label>
					</div>
					<Input type="time" id="interviewDate" placeholder="" required />
				</div>
			</div>
			<div className="space-y-2">
				<div className="relative mb-2 text-gray-700 font-medium">
					<Label htmlFor="job-category">Job Category</Label>
				</div>
				<Select>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="job-category" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="technology">Technology</SelectItem>
						<SelectItem value="marketing">Marketing</SelectItem>
						<SelectItem value="sales">Sales</SelectItem>
						<SelectItem value="customer-service">Customer Service</SelectItem>
						<SelectItem value="finance">Finance</SelectItem>
						<SelectItem value="human-resources">Human Resources</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="space-y-2">
				<div className="relative mb-2 text-gray-700 font-medium">
					<Label htmlFor="description">Job Description</Label>
				</div>
				<Textarea id="description" placeholder="Description about The job." required rows={5} />
			</div>
			<div className="space-y-2">
				<div className="relative mb-2 text-gray-700 font-medium">
					<Label htmlFor="requirements">Requirements</Label>
				</div>
				<Textarea id="requirements" placeholder="What the requirements for the employee?" required rows={3} />
			</div>
			<div className="space-y-2">
				<div className="relative mb-2 text-gray-700 font-medium">
					<Label htmlFor="salary">Salary Range</Label>
				</div>
				<Input id="salary" placeholder="e.g. $50,000 - $70,000" />
			</div>
			<Button type="submit" disabled={isLoading}>
				{isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
				Post Job
			</Button>
		</form>
	);
}
