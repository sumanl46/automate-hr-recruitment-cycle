import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "About Us | TechAhead",
	description: "Learn more about TechAhead and our mission to revolutionize HR recruitment",
};

export default function AboutPage() {
	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
						About TechAhead
					</h1>
					<p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
						Revolutionizing HR recruitment through innovation and technology.
					</p>
				</div>
				<div className="mt-16">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{[
							{
								title: "Our Mission",
								description: "To streamline and optimize the recruitment process for businesses of all sizes.",
							},
							{
								title: "Our Vision",
								description: "A world where finding the right talent is effortless and efficient.",
							},
							{
								title: "Our Values",
								description: "Innovation, integrity, and putting people first in everything we do.",
							},
						].map((item, index) => (
							<div key={index} className="bg-gray-50 rounded-lg px-6 py-8 shadow-md">
								<h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
								<p className="mt-2 text-base text-gray-500">{item.description}</p>
							</div>
						))}
					</div>
				</div>
				<div className="mt-16">
					<h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
					<div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
						<div className="relative lg:row-start-1 lg:col-start-2">
							<Image
								className="rounded-lg shadow-lg object-cover object-center"
								src="/placeholder.svg?height=400&width=600"
								alt="Team working together"
								width={600}
								height={400}
							/>
						</div>
						<div className="mt-8 lg:mt-0">
							<div className="text-base max-w-prose mx-auto lg:max-w-none">
								<p className="text-lg text-gray-500">
									Founded in 2023, TechAhead was born from a simple idea: make hiring easier. Our founders, experienced
									HR professionals, saw firsthand the challenges of traditional recruitment methods. They envisioned a
									platform that would leverage technology to streamline the entire process.
								</p>
								<div className="mt-5 prose prose-indigo text-gray-500">
									<p>
										Today, TechAhead is at the forefront of HR technology, offering innovative solutions that help
										companies find, attract, and retain top talent. Our AI-powered platform learns and adapts, ensuring
										that each recruitment cycle is more efficient than the last.
									</p>
									<p>
										We're more than just a software company. We're a partner in your success, committed to transforming
										how you build your team and grow your business.
									</p>
								</div>
							</div>
							<div className="mt-8">
								<Button>Learn More About Our Team</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
