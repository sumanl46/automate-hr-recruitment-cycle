import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Input } from "./ui/input";
import { useAuthContext } from "@/contexts/AuthContext";

export default function SkillsEditForm() {
	const { applicant } = useAuthContext();

	const [skills, setSkills] = useState<string[]>([]);
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);
	const [searchQuery, setSearchQuery] = useState<string>("");

	// List of available skills (replace this with your actual skill list)
	const availableSkills = ["JavaScript", "React", "Node.js", "TypeScript", "CSS", "HTML", "Python", "Java", "SQL"];

	useEffect(() => {
		if (applicant) {
			setSkills(applicant.skills || []);
		}
	}, [applicant]);

	const handleInputFocus = () => {
		setIsDropdownVisible(true);
	};

	const handleDropdownToggle = () => {
		setIsDropdownVisible((prevState) => !prevState);
	};

	const handleInputBlur = () => {
		// Delay hiding the dropdown to ensure the click on the dropdown toggle doesn't trigger blur immediately
		setTimeout(() => setIsDropdownVisible(false), 100);
	};

	const handleAddSkill = (skill: string) => {
		setSkills((prevSkills) => [...prevSkills, skill]);
		setIsDropdownVisible(false);
		setSearchQuery(""); // Clear search input after adding a skill
	};

	// Filter the skills based on the search query
	const filteredSkills = availableSkills.filter((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()));

	return (
		<div className="flex-col space-y-2">
			<div className="relative text-sm font-semibold text-gray-800">Skills</div>
			<div className="relative">
				<div className="relative flex flex-wrap gap-2">
					{skills.map((skill, index) => (
						<Button key={index} variant="outline" size="sm">
							{skill}
							<X size={8} />
						</Button>
					))}
				</div>
				<div className="relative mt-3">
					<div className="relative flex border items-center rounded-md">
						<Input
							type="text"
							placeholder="Add Skill"
							className="border-none outline-none focus:outline-none"
							onFocus={handleInputFocus}
							onBlur={handleInputBlur}
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
						<div
							className="w-10 flex justify-center items-center cursor-pointer"
							onClick={handleDropdownToggle}
						>
							{!isDropdownVisible ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
						</div>
					</div>
					{/* Dropdown */}
					{isDropdownVisible && (
						<div className="absolute top-12 border z-40 bg-white shadow-xl max-h-56 rounded-xl w-full overflow-y-auto">
							{filteredSkills.map((skill, index) => (
								<div
									key={index}
									className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-sm"
									onClick={() => handleAddSkill(skill)}
								>
									{skill}
								</div>
							))}
							{filteredSkills.length === 0 && (
								<div className="py-2 px-4 text-sm text-gray-500">No skills found</div>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
