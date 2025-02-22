import React from "react";
import { Input } from "./ui/input";

export default function EducationEditForm() {
	return (
		<div className="felx-col space-y-2">
			<div className="relative text-sm font-black text-gray-800">Education</div>
			<div className="space-y-2">
				<Input type="text" placeholder="Degree" className="border p-2 rounded-md w-full" />
				<Input type="text" placeholder="Institution" className="border p-2 rounded-md w-full" />
				<Input type="text" placeholder="Year" className="border p-2 rounded-md w-full" />
			</div>
		</div>
	);
}
