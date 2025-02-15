import Link from "next/link";
import { SiFacebook, SiX, SiInstagram } from "@icons-pack/react-simple-icons";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="col-span-2">
						<Link href="/" className="text-2xl font-bold">
							HRCycle
						</Link>
						<p className="mt-4 text-gray-400">
							Revolutionizing HR recruitment through innovation and technology. Streamline your hiring process and find
							the best talent with HRCycle.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<a href="/about" className="text-gray-400 hover:text-white transition-colors">
									About Us
								</a>
							</li>

							<li>
								<a href="/contact" className="text-gray-400 hover:text-white transition-colors">
									Contact
								</a>
							</li>

							<li>
								<a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
									Privacy Policy
								</a>
							</li>

							<li>
								<a href="/terms" className="text-gray-400 hover:text-white transition-colors">
									Terms of Service
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
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
					<p>&copy; {new Date().getFullYear()} HRCycle. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
