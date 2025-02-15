"use client";

import Hero from "@/components/Hero";
import JobListings from "@/components/JobListings";

export default function Home() {
	return (
		<div className={`flex flex-col min-h-screen bg-white`}>
			<main className="flex-grow">
				<Hero />
				<JobListings />
			</main>
		</div>
	);
}
