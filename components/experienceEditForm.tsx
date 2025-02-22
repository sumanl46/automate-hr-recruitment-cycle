import React from "react";
import { Input } from "./ui/input";

export default function ExperienceEditForm() {
	return (
		<div className="flex-col space-y-2">
			<div className="relative text-sm font-black text-gray-800">Experience</div>
			<div className="space-y-2">
				<Input type="text" placeholder="Position" className="border p-2 rounded-md w-full" />
				<Input type="text" placeholder="Company" className="border p-2 rounded-md w-full" />
				<Input type="text" placeholder="Duration" className="border p-2 rounded-md w-full" />
			</div>
		</div>
	);
}
