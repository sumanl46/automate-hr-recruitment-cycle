import React, { useState, useEffect, useRef } from "react";
import { Checkbox } from "./ui/checkbox";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { markets } from "./jobList";

export default function MarketsFilter() {
	const [isOpen, setIsOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedMarkets, setSelectedMarkets] = useState<string[]>([]);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLDivElement>(null);
	const scrollRef = useRef<HTMLDivElement>(null);

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

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = 0;
		}
	}, [searchQuery]);

	const handleSelectMarket = (marketName: string) => {
		if (selectedMarkets.includes(marketName)) {
			setSelectedMarkets((prev) => prev.filter((name) => name !== marketName));
		} else {
			setSelectedMarkets((prev) => [...prev, marketName]);
		}
	};

	const handleClearSelection = () => {
		setSelectedMarkets([]);
	};

	const filteredMarkets = markets.filter((market) => market.name.toLowerCase().includes(searchQuery.toLowerCase()));

	return (
		<div className="relative group">
			<div
				ref={buttonRef}
				className="relative select-none cursor-pointer flex items-center font-medium text-sm gap-4 border rounded-md text-gray-700 border-gray-300 h-11 px-6"
				onClick={() => setIsOpen((prev) => !prev)}
				aria-expanded={isOpen}
				aria-controls="markets-dropdown"
			>
				Markets
				{!isOpen ? <ChevronDown size={19} /> : <ChevronUp size={19} />}
			</div>

			{isOpen && (
				<div
					ref={dropdownRef}
					id="markets-dropdown"
					className="absolute top-14 left-0 h-auto w-72 z-40 shadow-xl overflow-hidden rounded-md border bg-white"
					aria-labelledby="markets-button"
				>
					<div className="relative border-b">
						<div className="relative flex items-center justify-between px-4 py-2">
							<div className="relative w-1/2 h-full flex items-center text-xs font-black text-gray-600">Markets</div>

							<div
								className="relative h-full flex font-black text-gray-800 text-sm cursor-pointer"
								onClick={handleClearSelection}
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
										onChange={(e) => setSearchQuery(e.target.value)}
									/>
								</div>
							</div>
						</div>
					</div>
					<div ref={scrollRef} className="relative h-72 w-full overflow-y-auto p-2">
						<div className="relative">
							{selectedMarkets.map((marketName, index) => (
								<div
									key={index}
									className="flex items-center space-x-4 hover:bg-gray-100 rounded-md px-4 py-2 cursor-pointer"
									onClick={() => handleSelectMarket(marketName)}
								>
									<Checkbox
										id={marketName}
										className="h-5 w-5 cursor-pointer data-[state=checked]:bg-violet-500 data-[state=checked]:border-none border-gray-300 data-[state=checked]:text-white"
										checked={selectedMarkets.includes(marketName)}
										onChange={() => handleSelectMarket(marketName)}
									/>
									<label
										htmlFor={marketName}
										className="text-sm font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800"
									>
										{marketName}
									</label>
								</div>
							))}
						</div>

						<div className="relative">
							{filteredMarkets.length > 0 ? (
								filteredMarkets
									.filter((market) => !selectedMarkets.includes(market.name))
									.map((market, index) => (
										<div
											key={index}
											className="flex items-center space-x-4 hover:bg-gray-100 rounded-md px-4 py-2 cursor-pointer"
											onClick={() => handleSelectMarket(market.name)}
										>
											<Checkbox
												id={market.name}
												className="h-5 w-5 cursor-pointer data-[state=checked]:bg-violet-500 data-[state=checked]:border-none border-gray-300 data-[state=checked]:text-white"
												checked={selectedMarkets.includes(market.name)}
												onChange={() => handleSelectMarket(market.name)}
											/>
											<label
												htmlFor={market.name}
												className="text-sm font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800"
											>
												{market.name}
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
