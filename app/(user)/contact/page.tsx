import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
	title: "Contact Us | TechAhead",
	description: "Get in touch with TechAhead for any inquiries or support",
};

export default function ContactPage() {
	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Get in touch</h2>
						<div className="mt-3">
							<p className="text-lg text-gray-500">
								Have questions about TechAhead? We're here to help. Fill out the form and we'll get back to you as soon
								as possible.
							</p>
						</div>
						<div className="mt-9">
							<div className="flex">
								<div className="flex-shrink-0">
									<MapPin className="h-6 w-6 text-gray-400" aria-hidden="true" />
								</div>
								<div className="ml-3 text-base text-gray-500">
									<p>123 Innovation Street</p>
									<p className="mt-1">San Francisco, CA 94103</p>
								</div>
							</div>
							<div className="mt-6 flex">
								<div className="flex-shrink-0">
									<Phone className="h-6 w-6 text-gray-400" aria-hidden="true" />
								</div>
								<div className="ml-3 text-base text-gray-500">
									<p>+1 (555) 123-4567</p>
								</div>
							</div>
							<div className="mt-6 flex">
								<div className="flex-shrink-0">
									<Mail className="h-6 w-6 text-gray-400" aria-hidden="true" />
								</div>
								<div className="ml-3 text-base text-gray-500">
									<p>support@TechAhead.com</p>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-12 sm:mt-16 md:mt-0">
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
}
