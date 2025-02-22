import React, { useState, useEffect, useRef } from "react";
import { Checkbox } from "./ui/checkbox";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

// Employee benefits list
const employeeBenefits = [
	{ name: "Health Insurance" },
	{ name: "Retirement Plan" },
	{ name: "Paid Time Off" },
	{ name: "Stock Options" },
	{ name: "Parental Leave" },
	{ name: "Life Insurance" },
	{ name: "Disability Insurance" },
	{ name: "Gym Membership" },
	{ name: "Education Assistance" },
	{ name: "Employee Discounts" },
];

export default function EmployeeBenefitsFilter() {
	const [isOpen, setIsOpen] = useState(false); // Track if the dropdown is open
	const [searchQuery, setSearchQuery] = useState(""); // State to store search query
	const [selectedBenefits, setSelectedBenefits] = useState<string[]>([]); // Track selected benefits
	const dropdownRef = useRef<HTMLDivElement>(null); // Specify type for dropdown
	const buttonRef = useRef<HTMLDivElement>(null); // Specify type for button
	const scrollRef = useRef<HTMLDivElement>(null); // Ref for the scrollable container

	// Close dropdown if clicked outside
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target as Node) &&
				buttonRef.current &&
				!buttonRef.current.contains(e.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	// Reset scroll position to top when search query changes
	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = 0;
		}
	}, [searchQuery]);

	const handleSelectBenefit = (benefitName: string) => {
		if (selectedBenefits.includes(benefitName)) {
			// Remove benefit from selected list (deselect)
			setSelectedBenefits((prev) => prev.filter((name) => name !== benefitName));
		} else {
			// Add benefit to selected list (select)
			setSelectedBenefits((prev) => [...prev, benefitName]);
		}
	};

	const handleClearSelection = () => {
		setSelectedBenefits([]); // Clear all selected benefits
	};

	const filteredBenefits = employeeBenefits.filter((benefit) =>
		benefit.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className="relative group">
			{/* Button to toggle the dropdown */}
			<div
				ref={buttonRef}
				className="relative select-none cursor-pointer flex items-center font-medium text-sm gap-4 border rounded-md text-gray-700 border-gray-300 h-11 px-6"
				onClick={() => setIsOpen((prev) => !prev)} // Toggle dropdown visibility
				aria-expanded={isOpen} // Indicate whether dropdown is expanded
				aria-controls="benefits-dropdown" // Associate button with dropdown
			>
				Employee Benefits
				{!isOpen ? <ChevronDown size={19} /> : <ChevronUp size={19} />}
			</div>

			{/* Dropdown menu */}
			{isOpen && (
				<div
					ref={dropdownRef}
					id="benefits-dropdown"
					className="absolute top-14 left-0 h-auto w-72 z-40 shadow-xl overflow-hidden rounded-md border bg-white"
					aria-labelledby="benefits-button"
				>
					<div className="relative border-b">
						<div className="relative flex items-center justify-between px-4 py-2">
							<div className="relative w-1/2 h-full flex items-center text-xs font-black text-gray-600">Benefits</div>
							{/* Clear button */}
							<div
								className="relative h-full flex font-black text-gray-800 text-sm cursor-pointer"
								onClick={handleClearSelection} // Handle clear selection
							>
								Clear
							</div>
						</div>
						<div className="relative px-4 py-3">
							<div className="relative border rounded-md h-10 flex">
								<div className="relative h-full w-12 flex items-center justify-center text-gray-700">
									<Search size={19} />
								</div>
								<div className="relative h-full w-full">
									<input
										type="text"
										className="relative h-full w-full outline-none text-sm font-medium"
										placeholder="Search benefits"
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)} // Handle search query change
									/>
								</div>
							</div>
						</div>
					</div>
					<div ref={scrollRef} className="relative h-72 w-full overflow-y-auto p-2">
						{/* Render selected benefits above filtered benefits */}
						<div className="relative">
							{selectedBenefits.map((benefitName, index) => (
								<div
									key={index}
									className="flex items-center space-x-4 hover:bg-gray-100 rounded-md px-4 py-2 cursor-pointer"
									onClick={() => handleSelectBenefit(benefitName)} // Deselect benefit when clicked
								>
									<Checkbox
										id={benefitName}
										className="h-5 w-5 cursor-pointer data-[state=checked]:bg-violet-500 data-[state=checked]:border-none border-gray-300 data-[state=checked]:text-white"
										checked={selectedBenefits.includes(benefitName)} // Check if selected
										onChange={() => handleSelectBenefit(benefitName)} // Handle benefit selection
									/>
									<label
										htmlFor={benefitName}
										className="text-sm font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800"
									>
										{benefitName} {/* Display benefit name */}
									</label>
								</div>
							))}
						</div>

						{/* List of filtered benefits */}
						<div className="relative">
							{filteredBenefits.length > 0 ? (
								filteredBenefits
									.filter((benefit) => !selectedBenefits.includes(benefit.name)) // Exclude selected benefits
									.map((benefit, index) => (
										<div
											key={index}
											className="flex items-center space-x-4 hover:bg-gray-100 rounded-md px-4 py-2 cursor-pointer"
											onClick={() => handleSelectBenefit(benefit.name)} // Select benefit when clicked
										>
											<Checkbox
												id={benefit.name}
												className="h-5 w-5 cursor-pointer data-[state=checked]:bg-violet-500 data-[state=checked]:border-none border-gray-300 data-[state=checked]:text-white"
												checked={selectedBenefits.includes(benefit.name)} // Check if selected
												onChange={() => handleSelectBenefit(benefit.name)} // Handle benefit selection
											/>
											<label
												htmlFor={benefit.name}
												className="text-sm font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800"
											>
												{benefit.name} {/* Display benefit name */}
											</label>
										</div>
									))
							) : (
								<div className="relative px-4 py-2 text-sm text-gray-500">No benefits found</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
