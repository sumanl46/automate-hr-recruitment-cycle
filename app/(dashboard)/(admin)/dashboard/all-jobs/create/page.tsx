"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	jobType: z.enum(["internal", "external", "both"], {
		required_error: "Please select a job type.",
	}),
	jobTitle: z.string().min(2, {
		message: "Job title must be at least 2 characters.",
	}),
	description: z.string().min(10, {
		message: "Job description must be at least 10 characters.",
	}),
	salary: z.string().min(1, {
		message: "Please enter a salary.",
	}),
	location: z.string().min(2, {
		message: "Location must be at least 2 characters.",
	}),
	screeningQuestions: z.array(z.string()).min(1, {
		message: "Please add at least one screening question.",
	}),
});

export default function CreateJobPostForm() {
	const [screeningQuestions, setScreeningQuestions] = useState<string[]>([]);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			jobType: undefined,
			jobTitle: "",
			description: "",
			salary: "",
			location: "",
			screeningQuestions: [],
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	const addScreeningQuestion = () => {
		setScreeningQuestions([...screeningQuestions, ""]);
	};

	const updateScreeningQuestion = (index: number, value: string) => {
		const updatedQuestions = [...screeningQuestions];
		updatedQuestions[index] = value;
		setScreeningQuestions(updatedQuestions);
		form.setValue("screeningQuestions", updatedQuestions);
	};

	return (
		<Card className="w-full max-w-2xl mx-auto my-16">
			<CardHeader>
				<CardTitle>Create/Edit Job Post</CardTitle>
				<CardDescription>Enter the details for the job posting.</CardDescription>
			</CardHeader>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="jobType">Job Type</Label>
						<Select
							onValueChange={(value) =>
								form.setValue("jobType", value as "internal" | "external" | "both")
							}
						>
							<SelectTrigger>
								<SelectValue placeholder="Select job type" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="internal">Internal</SelectItem>
								<SelectItem value="external">External</SelectItem>
								<SelectItem value="both">Both</SelectItem>
							</SelectContent>
						</Select>
						{form.formState.errors.jobType && (
							<p className="text-sm text-red-500">{form.formState.errors.jobType.message}</p>
						)}
					</div>

					<div className="space-y-2">
						<Label htmlFor="jobTitle">Job Title</Label>
						<Input id="jobTitle" {...form.register("jobTitle")} />
						{form.formState.errors.jobTitle && (
							<p className="text-sm text-red-500">{form.formState.errors.jobTitle.message}</p>
						)}
					</div>

					<div className="space-y-2">
						<Label htmlFor="description">Description</Label>
						<Textarea id="description" {...form.register("description")} />
						{form.formState.errors.description && (
							<p className="text-sm text-red-500">{form.formState.errors.description.message}</p>
						)}
					</div>

					<div className="space-y-2">
						<Label htmlFor="salary">Salary</Label>
						<Input id="salary" {...form.register("salary")} />
						{form.formState.errors.salary && (
							<p className="text-sm text-red-500">{form.formState.errors.salary.message}</p>
						)}
					</div>

					<div className="space-y-2">
						<Label htmlFor="location">Location</Label>
						<Input id="location" {...form.register("location")} />
						{form.formState.errors.location && (
							<p className="text-sm text-red-500">{form.formState.errors.location.message}</p>
						)}
					</div>

					<div className="space-y-2">
						<Label>Screening Questions</Label>
						{screeningQuestions.map((question, index) => (
							<Input
								key={index}
								value={question}
								onChange={(e) => updateScreeningQuestion(index, e.target.value)}
								placeholder={`Question ${index + 1}`}
							/>
						))}
						<Button type="button" variant="outline" onClick={addScreeningQuestion}>
							Add Screening Question
						</Button>
						{form.formState.errors.screeningQuestions && (
							<p className="text-sm text-red-500">{form.formState.errors.screeningQuestions.message}</p>
						)}
					</div>
				</CardContent>
				<CardFooter>
					<Button type="submit" className="w-full">
						Submit Job Post
					</Button>
				</CardFooter>
			</form>
		</Card>
	);
}
