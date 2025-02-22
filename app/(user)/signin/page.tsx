import SignInForm from "@/components/SignInForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Sign In | TechAhead",
	description: "Sign in to your TechAhead account",
};

export default function SignInPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div className="text-center">
					<div className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</div>
					<div className="mt-2 text-sm text-gray-600">
						Or{" "}
						<Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
							create a new account
						</Link>
					</div>
				</div>
				<SignInForm />
			</div>
		</div>
	);
}
