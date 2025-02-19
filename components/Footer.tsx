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
						<div className="mt-4 text-gray-400 text-sm leading-6 w-4/5">
							Revolutionizing HR recruitment through innovation and technology. Streamline your hiring
							process and find the best talent with HRCycle.
						</div>
					</div>
					<div>
						<div className="text-lg font-semibold mb-4 text-gray-300">Quick Links</div>
						<div className="flex-col space-y-2">
							<div>
								<Link href="/about">
									<div className="text-gray-300 text-sm hover:font-bold hover:text-white duration-200">
										About Us
									</div>
								</Link>
							</div>
							<div>
								<Link href="/contact">
									<div className="text-gray-300 text-sm hover:font-bold hover:text-white duration-200">
										Contact
									</div>
								</Link>
							</div>

							<div>
								<Link href="/privacy-policy">
									<div className="text-gray-300 text-sm hover:font-bold hover:text-white duration-200">
										Privacy Policy
									</div>
								</Link>
							</div>

							<div>
								<Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
									Terms of Service
								</Link>
							</div>
						</div>
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
