import Link from "next/link";
import { SiFacebook, SiX, SiInstagram } from "@icons-pack/react-simple-icons";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="col-span-2">
						<Link href="/" className="text-2xl font-black">
							TechAhead
						</Link>
						<div className="mt-4 text-gray-400 text-sm leading-6 w-4/5 max-w-sm">
							Revolutionizing HR recruitment through innovation and technology. Streamline your hiring process and find
							the best talent with TechAhead.
						</div>
					</div>

					<div>
						<div className="text-lg  mb-4 text-gray-200">Quick Links</div>
						<div className="flex flex-col gap-2 text-gray-400 text-sm *:hover:text-white *:duration-200">
							<a href="/about">About Us</a>

							<a href="/contact">Contact</a>

							<a href="/privacy-policy">Privacy Policy</a>

							<a href="/terms" className="">
								Terms of Service
							</a>
						</div>
					</div>

					<div>
						<h3 className="text-lg mb-4">Connect With Us</h3>
						<div className="flex space-x-4">
							<a href="#" className="text-gray-400 hover:text-white transition-colors">
								<SiFacebook size={24} />
							</a>
							<a href="#" className="text-gray-400 hover:text-white transition-colors">
								<SiX size={24} />
							</a>
							<a href="#" className="text-gray-400 hover:text-white transition-colors">
								<SiInstagram size={24} />
							</a>
						</div>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
					<p>&copy; {new Date().getFullYear()} TechAhead. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
