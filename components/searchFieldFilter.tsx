"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search, X } from "lucide-react";
import { Button } from "./ui/button";

interface SearchFieldFilterProps {
	searchTerm: string;
	setSearchTerm: (value: string) => void;
}

export default function SearchFieldFilter({ setSearchTerm }: SearchFieldFilterProps) {
	const [isJobFocused, setIsJobFocused] = useState(false);
	const [isLocationFocused, setIsLocationFocused] = useState(false);

	return (
		<div className="relative flex">
			<div className="relative flex w-full *:w-1/2 gap-4">
				<div className="relative">
					<div className="relative flex items-center h-10 rounded-md">
						<div className="flex items-center justify-center text-gray-600 w-16">
							<Search size={22} />
						</div>
						<input
							type="text"
							placeholder="Job title or skill"
							className="w-full outline-none h-full px-2 text-sm"
							onFocus={() => setIsJobFocused(true)}
							onBlur={() => setTimeout(() => setIsJobFocused(false), 200)} // Delayed blur to allow clicks
						/>
						<div className="flex items-center justify-center h-10 w-10 text-gray-600">
							{isJobFocused ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
						</div>
					</div>
					{isJobFocused && (
						<div className="absolute z-40 bg-white border h-40 w-full rounded-md top-12 left-0 shadow-md">
							{/* Dropdown content */}
						</div>
					)}
				</div>
				<div className="relative">
					<div className="relative flex items-center h-10 rounded-md">
						<div className="flex items-center justify-center text-gray-600 w-16">
							<Search size={22} />
						</div>
						<div className="relative text-xs px-2 py-1 border border-gray-200 rounded-md flex items-center gap-2">
							Python <X size={10} />
						</div>
						<input
							type="text"
							placeholder="Country or timezone"
							className="w-full outline-none h-full px-2 text-sm"
							onFocus={() => setIsLocationFocused(true)}
							onBlur={() => setTimeout(() => setIsLocationFocused(false), 200)}
						/>
						<div className="flex items-center justify-center w-10 text-gray-600">
							{isLocationFocused ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
						</div>
					</div>
					{isLocationFocused && (
						<div className="absolute z-40 bg-white border h-40 w-full rounded-md top-12 left-0 shadow-md">
							{/* Dropdown content */}
						</div>
					)}
				</div>
			</div>

			<div className="relative flex w-56 *:w-1/2 *:flex *:justify-center *:items-center">
				<button className="relative text-gray-600" onClick={() => setSearchTerm("")}>
					Clear
				</button>
				<Button className="bg-violet-700">Search</Button>
			</div>
		</div>
	);
}
