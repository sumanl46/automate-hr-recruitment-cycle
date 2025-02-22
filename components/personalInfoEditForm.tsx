import React from "react";
import { Input } from "./ui/input";

export default function PersonalInfoEditForm() {
	return (
		<div className="flex-col space-y-2">
			<div className="relative text-sm font-black text-gray-800">Personal Information</div>
			<Input type="text" placeholder="Full Name" className="border p-2 rounded-md w-full" />
			<Input type="text" placeholder="Location" className="border p-2 rounded-md w-full" />
			<Input type="text" placeholder="Job Title" className="border p-2 rounded-md w-full" />
		</div>
	);
}
