import React, { useState, useEffect, useRef } from "react";
import { Checkbox } from "./ui/checkbox";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

// Example market list
const markets = [
	{ name: "Stock Market" },
	{ name: "Real Estate Market" },
	{ name: "Commodity Market" },
	{ name: "Cryptocurrency Market" },
	{ name: "Forex Market" },
	{ name: "Bond Market" },
	{ name: "Options Market" },
	{ name: "Futures Market" },
	{ name: "Derivatives Market" },
	{ name: "Emerging Markets" },
];

export default function MarketsFilter() {
	const [isOpen, setIsOpen] = useState(false); // Track if the dropdown is open
	const [searchQuery, setSearchQuery] = useState(""); // State to store search query
	const [selectedMarkets, setSelectedMarkets] = useState<string[]>([]); // Track selected markets
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

	const handleSelectMarket = (marketName: string) => {
		if (selectedMarkets.includes(marketName)) {
			// Remove market from selected list (deselect)
			setSelectedMarkets((prev) => prev.filter((name) => name !== marketName));
		} else {
			// Add market to selected list (select)
			setSelectedMarkets((prev) => [...prev, marketName]);
		}
	};

	const handleClearSelection = () => {
		setSelectedMarkets([]); // Clear all selected markets
	};

	const filteredMarkets = markets.filter((market) => market.name.toLowerCase().includes(searchQuery.toLowerCase()));

	return (
		<div className="relative group">
			{/* Button to toggle the dropdown */}
			<div
				ref={buttonRef}
				className="relative select-none cursor-pointer flex items-center font-medium text-sm gap-4 border rounded-md text-gray-700 border-gray-300 h-11 px-6"
				onClick={() => setIsOpen((prev) => !prev)} // Toggle dropdown visibility
				aria-expanded={isOpen} // Indicate whether dropdown is expanded
				aria-controls="markets-dropdown" // Associate button with dropdown
			>
				Markets
				{!isOpen ? <ChevronDown size={19} /> : <ChevronUp size={19} />}
			</div>

			{/* Dropdown menu */}
			{isOpen && (
				<div
					ref={dropdownRef}
					id="markets-dropdown"
					className="absolute top-14 left-0 h-auto w-72 z-40 shadow-xl overflow-hidden rounded-md border bg-white"
					aria-labelledby="markets-button"
				>
					<div className="relative border-b">
						<div className="relative flex items-center justify-between px-4 py-2">
							<div className="relative w-1/2 h-full flex items-center text-xs font-bold text-gray-600">
								Markets
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
										placeholder="Search markets"
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)} // Handle search query change
									/>
								</div>
							</div>
						</div>
					</div>
					<div ref={scrollRef} className="relative h-72 w-full overflow-y-auto p-2">
						{/* Render selected markets above filtered markets */}
						<div className="relative">
							{selectedMarkets.map((marketName, index) => (
								<div
									key={index}
									className="flex items-center space-x-4 hover:bg-gray-100 rounded-md px-4 py-2 cursor-pointer"
									onClick={() => handleSelectMarket(marketName)} // Deselect market when clicked
								>
									<Checkbox
										id={marketName}
										className="h-5 w-5 cursor-pointer data-[state=checked]:bg-violet-500 data-[state=checked]:border-none border-gray-300 data-[state=checked]:text-white"
										checked={selectedMarkets.includes(marketName)} // Check if selected
										onChange={() => handleSelectMarket(marketName)} // Handle market selection
									/>
									<label
										htmlFor={marketName}
										className="text-sm font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800"
									>
										{marketName} {/* Display market name */}
									</label>
								</div>
							))}
						</div>

						{/* List of filtered markets */}
						<div className="relative">
							{filteredMarkets.length > 0 ? (
								filteredMarkets
									.filter((market) => !selectedMarkets.includes(market.name)) // Exclude selected markets
									.map((market, index) => (
										<div
											key={index}
											className="flex items-center space-x-4 hover:bg-gray-100 rounded-md px-4 py-2 cursor-pointer"
											onClick={() => handleSelectMarket(market.name)} // Select market when clicked
										>
											<Checkbox
												id={market.name}
												className="h-5 w-5 cursor-pointer data-[state=checked]:bg-violet-500 data-[state=checked]:border-none border-gray-300 data-[state=checked]:text-white"
												checked={selectedMarkets.includes(market.name)} // Check if selected
												onChange={() => handleSelectMarket(market.name)} // Handle market selection
											/>
											<label
												htmlFor={market.name}
												className="text-sm font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800"
											>
												{market.name} {/* Display market name */}
											</label>
										</div>
									))
							) : (
								<div className="relative px-4 py-2 text-sm text-gray-500">No markets found</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
