import React, { useState, useEffect, useRef } from "react";
import { Checkbox } from "./ui/checkbox";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const companies = [
	{ name: "Apple" },
	{ name: "Google" },
	{ name: "Microsoft" },
	{ name: "Amazon" },
	{ name: "Tesla" },
	{ name: "Facebook" },
	{ name: "Adobe" },
	{ name: "IBM" },
	{ name: "Intel" },
	{ name: "Oracle" },
];

export default function CompaniesFilter() {
	const [isOpen, setIsOpen] = useState(false); // Track if the dropdown is open
	const [searchQuery, setSearchQuery] = useState(""); // State to store search query
	const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]); // Track selected companies
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

	const handleSelectCompany = (companyName: string) => {
		if (selectedCompanies.includes(companyName)) {
			// Remove company from selected list (deselect)
			setSelectedCompanies((prev) => prev.filter((name) => name !== companyName));
		} else {
			// Add company to selected list (select)
			setSelectedCompanies((prev) => [...prev, companyName]);
		}
	};

	const handleClearSelection = () => {
		setSelectedCompanies([]); // Clear all selected companies
	};

	const filteredCompanies = companies.filter((company) =>
		company.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

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
				Companies Level
				{!isOpen ? <ChevronDown size={19} /> : <ChevronUp size={19} />}
			</div>

			{/* Dropdown menu */}
			{isOpen && (
				<div
					ref={dropdownRef}
					id="companies-dropdown" // Add id for proper association
					className="absolute top-14 left-0 h-auto w-72 z-40 shadow-xl overflow-hidden rounded-md border bg-white"
					aria-labelledby="companies-button" // Link dropdown to button
				>
					<div className="relative border-b">
						<div className="relative flex items-center justify-between px-4 py-2">
							<div className="relative w-1/2 h-full flex items-center text-xs font-bold text-gray-600">
								Companies
							</div>
							{/* Clear button */}
							<div
								className="relative h-full flex font-bold text-gray-800 text-sm cursor-pointer"
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
										placeholder="Company name"
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)} // Handle search query change
									/>
								</div>
							</div>
						</div>
					</div>
					<div
						ref={scrollRef} // Attach the ref to the scroll container
						className="relative h-72 w-full overflow-y-auto p-2"
					>
						{/* Render selected companies above filtered companies */}
						<div className="relative">
							{selectedCompanies.map((companyName, index) => (
								<div
									key={index}
									className="flex items-center space-x-4 hover:bg-gray-100 rounded-md px-4 py-2 cursor-pointer"
									onClick={() => handleSelectCompany(companyName)} // Select company when clicked
								>
									<Checkbox
										id={companyName} // Use companyName as the ID
										className="h-5 w-5 cursor-pointer data-[state=checked]:bg-violet-500 data-[state=checked]:border-none border-gray-300 data-[state=checked]:text-white"
										checked={selectedCompanies.includes(companyName)} // Check if selected
										onChange={() => handleSelectCompany(companyName)} // Handle company selection
									/>
									<label
										htmlFor={companyName} // Use companyName in the label
										className="text-sm font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800"
									>
										{companyName} {/* Display company name */}
									</label>
								</div>
							))}
						</div>

						{/* List of filtered companies */}
						<div className="relative">
							{/* Filter out companies that are already selected */}
							{filteredCompanies.length > 0 ? (
								filteredCompanies
									.filter((company) => !selectedCompanies.includes(company.name)) // Exclude selected companies
									.map((company, index) => (
										<div
											key={index}
											className="flex items-center space-x-4 hover:bg-gray-100 rounded-md px-4 py-2 cursor-pointer"
											onClick={() => handleSelectCompany(company.name)} // Select company when clicked
										>
											<Checkbox
												id={company.name} // Use company.name as the ID
												className="h-5 w-5 cursor-pointer data-[state=checked]:bg-violet-500 data-[state=checked]:border-none border-gray-300 data-[state=checked]:text-white"
												checked={selectedCompanies.includes(company.name)} // Check if selected
												onChange={() => handleSelectCompany(company.name)} // Handle company selection
											/>
											<label
												htmlFor={company.name} // Use company.name in the label
												className="text-sm font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800"
											>
												{company.name} {/* Display company name */}
											</label>
										</div>
									))
							) : (
								<div className="relative px-4 py-2 text-sm text-gray-500">No companies found</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
