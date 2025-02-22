import React from "react";
import { Input } from "./ui/input";

export default function ContactEditForm() {
	return (
		<div className="flex-col space-y-2">
			<div className="relative text-sm font-semibold text-gray-800">Contact Details</div>
			<Input type="text" placeholder="Phone Number" className="border p-2 rounded-md w-full" />
			<Input type="email" placeholder="Email Address" className="border p-2 rounded-md w-full" />
		</div>
	);
}
