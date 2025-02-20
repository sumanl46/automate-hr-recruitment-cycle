import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { ChevronDown, ChevronUp } from "lucide-react";

const jobExperienceLevel = ["Entry-level", "Mid-level", "Senior", "Manager", "Director", "Executive"];

export default function ExperienceFilter() {
	const [isOpen, setIsOpen] = useState(false); // Track if the dropdown is open
	const dropdownRef = useRef<HTMLDivElement>(null); // Specify type for dropdown
	const buttonRef = useRef<HTMLDivElement>(null); // Specify type for button

	// Close dropdown if clicked outside
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			// Add type for event
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target as Node) && // Typecast event target as Node
				buttonRef.current &&
				!buttonRef.current.contains(e.target as Node) // Typecast event target as Node
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div className="relative group">
			{/* Button to toggle the dropdown */}
			<div
				ref={buttonRef}
				className="relative select-none cursor-pointer flex items-center font-medium text-sm gap-4 border rounded-md text-gray-700 border-gray-300 h-11 px-6"
				onClick={() => setIsOpen((prev) => !prev)} // Toggle dropdown visibility
				aria-expanded={isOpen} // Indicate whether dropdown is expanded
				aria-controls="experience-dropdown" // Associate button with dropdown
			>
				Experience Level
				{!isOpen ? <ChevronDown size={19} /> : <ChevronUp size={19} />}
			</div>

			{/* Dropdown menu */}
			{isOpen && (
				<div
					ref={dropdownRef}
					id="experience-dropdown" // Add id for proper association
					className="absolute top-14 left-0 h-auto w-72 z-40 shadow-xl rounded-md border bg-white"
					aria-labelledby="experience-button" // Link dropdown to button
				>
					<div className="relative flex items-center justify-between border-b px-4 py-2">
						<div className="relative w-1/2 h-full flex items-center">Experience</div>
						<div className="relative h-full flex">
							<Button>Diselect all</Button>
						</div>
					</div>
					<div className="relative flex-col space-y-5 py-4 px-4">
						{jobExperienceLevel.map((level, index) => (
							<div key={index} className="flex items-center space-x-4">
								<Checkbox
									id={level}
									className="h-5 w-5 cursor-pointer data-[state=checked]:bg-violet-500 data-[state=checked]:border-none border-gray-300 data-[state=checked]:text-white"
								/>
								<label
									htmlFor={level}
									className="text-sm font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800"
								>
									{level}
								</label>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
