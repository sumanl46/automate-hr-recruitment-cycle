import SignUpForm from "@/components/SignUpForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sign Up | TechAhead",
	description: "Create a new TechAhead account",
};

export default function SignUpPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div className="text-center">
					<h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create a new account</h2>
					<p className="mt-2 text-sm text-gray-600">
						Or{" "}
						<a href="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
							sign in to your existing account
						</a>
					</p>
				</div>
				<SignUpForm />
			</div>
		</div>
	);
}
