import type { Metadata } from "next";
import PostJobForm from "@/components/PostJobForm";

export const metadata: Metadata = {
	title: "Post a Job | HRCycle",
	description: "Post a new job listing on HRCycle",
};

export default function PostJobPage() {
	return (
		<div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			<h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">Post a New Job</h1>
			<PostJobForm />
		</div>
	);
}
