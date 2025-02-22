import type { Metadata } from "next";
import { jobListings } from "@/data/jobListings";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const metadata: Metadata = {
	title: "Job Details | TechAhead",
	description: "View job details on TechAhead",
};

export default function JobDetailsPage({ params }: { params: { id: string } }) {
	const job = jobListings.find((job) => job.id.toString() === params.id);

	if (!job) {
		notFound();
	}

	return (
		<div className="max-w-4xl mx-auto w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			<div className="lg:flex w-full lg:items-center lg:justify-between">
				<div className="flex-1 w-full min-w-0">
					<Link href="/jobs" className="flex items-center text-sm  text-gray-500">
						<div className="relative flex items-center gap-4">
							<ChevronLeft size={20} />
							<div className="relative">Back</div>
						</div>
					</Link>
					<h2 className="text-3xl font-black mt-8 text-gray-900 sm:text-4xl sm:truncate">Apply for {job.title}</h2>
					<div className="mt-2 flex flex-col w-full sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6 pt-4">
						<div className="flex items-center text-sm text-gray-500">
							<Image
								src={job.logo || "/placeholder.svg"}
								alt={`${job.company} logo`}
								width={24}
								height={24}
								className="rounded-full mr-2"
							/>
							{job.company}
						</div>
						<div className="flex items-center text-sm text-gray-500">
							<svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
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
			</div>
			<div className="mt-8 w-full border-t border-gray-200 pt-8">
				<form className="mt-4 w-full text-gray-800">
					<div className="relative w-full flex gap-5">
						<div className="relative w-1/2">
							<Label htmlFor="fullName" className="block text-xs font-black text-gray-500">
								Full name
							</Label>
							<Input type="text" placeholder="First & Last Name" name="fullName" className="mt-2" />
						</div>
						<div className="relative w-1/2">
							<Label htmlFor="email" className="block text-xs font-black text-gray-500">
								Email
							</Label>
							<Input type="email" placeholder="someone@gmail.com" name="email" className="mt-2" />
						</div>
					</div>
					<div className="relative mt-5">
						<Label htmlFor="phone" className="block text-xs font-black text-gray-500">
							Phone Number
						</Label>
						<Input type="tel" placeholder="Phone Number" name="phone" className="mt-2" />
					</div>
					<div className="relative mt-5">
						<Label htmlFor="linkedin" className="block text-xs font-black text-gray-500">
							LinkedIn Profile(optional)
						</Label>
						<Input type="url" placeholder="LinkedIn URL" name="linkedin" className="mt-2" />
					</div>
					<div className="relative mt-5">
						<Label htmlFor="education" className="block text-xs font-black mb-2 text-gray-500">
							Education
						</Label>
						<Select>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Education" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="highschool">High School</SelectItem>
								<SelectItem value="bachelor">Bachelor`s Degree</SelectItem>
								<SelectItem value="master">Master`s Degree</SelectItem>
								<SelectItem value="phd">Ph.D.</SelectItem>
								<SelectItem value="other">Other</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="relative mt-5">
						<Label htmlFor="country" className="block text-xs font-black text-gray-500">
							Country
						</Label>
						<Input type="text" placeholder="Your Country" name="country" className="mt-2" />
					</div>
					<div className="relative mt-5">
						<Label htmlFor="dialog" className="block text-xs font-black text-gray-500">
							Why are you interested?
						</Label>
						<Textarea placeholder="Express yourself" name="dialog" className="mt-2 min-h-32" />
					</div>
					<div className="relative mt-5">
						<Label htmlFor="resume" className="block text-xs font-black text-gray-500">
							Resume File
						</Label>
						<Input name="resume" type="file" className="mt-2 border-dashed h-32 flex p-5" />
					</div>
					<div className="relative mt-5">
						<div className="relative flex justify-between">
							<Label htmlFor="coverLetter" className="block text-xs font-black text-gray-500">
								Cover Letter
							</Label>
							<div className="relative">
								<Button type="button" size="sm" variant="outline" className="mr-2">
									Attach File
								</Button>
							</div>
						</div>
						<Textarea name="coverLetter" placeholder="Express yourself" rows={5} className="mt-2" />
					</div>
					<div className="relative flex items-center justify-end mt-5">
						<Button type="submit" size="lg">
							Submit
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
