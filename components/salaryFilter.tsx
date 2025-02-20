import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import CustomSlider from "./customSlider";

const currency = [
	{ currency: "Qatari Riyal", symbol: "QAR", maxSalary: 20000 },
	{ currency: "Saudi Riyal", symbol: "SAR", maxSalary: 22000 },
	{ currency: "UAE Dirham", symbol: "AED", maxSalary: 25000 },
	{ currency: "Omani Rial", symbol: "OMR", maxSalary: 15000 },
	{ currency: "Kuwaiti Dinar", symbol: "KWD", maxSalary: 30000 },
	{ currency: "Bahraini Dinar", symbol: "BHD", maxSalary: 18000 },
	{ currency: "Malaysian Ringgit", symbol: "MYR", maxSalary: 10000 },
	{ currency: "South Korean Won", symbol: "KRW", maxSalary: 10000000 },
	{ currency: "Japanese Yen", symbol: "¥", maxSalary: 1200000 },
	{ currency: "Australian Dollar", symbol: "A$", maxSalary: 25000 },
	{ currency: "Euro", symbol: "€", maxSalary: 30000 },
	{ currency: "Polish Złoty", symbol: "PLN", maxSalary: 18000 },
	{ currency: "US Dollar", symbol: "$", maxSalary: 30000 },
	{ currency: "Canadian Dollar", symbol: "C$", maxSalary: 25000 },
];

export default function SalaryFilter() {
	const [selectedCurrency, setSelectedCurrency] = useState(currency[0]);
	const [maxSalary, setMaxSalary] = useState(selectedCurrency.maxSalary);
	const [isOpen, setIsOpen] = useState(false); // Track if the dropdown is open
	const dropdownRef = useRef<HTMLDivElement>(null); // Reference to the dropdown container
	const buttonRef = useRef<HTMLDivElement>(null); // Reference to the button

	// Close dropdown if clicked outside
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			// Typing the event as MouseEvent
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
		<div className="relative">
			<div
				ref={buttonRef}
				className="relative select-none cursor-pointer flex items-center font-medium text-sm gap-4 border rounded-md text-gray-700 border-gray-300 h-11 px-6"
				onClick={() => setIsOpen((prev) => !prev)} // Toggle dropdown visibility
			>
				Salary range
				{!isOpen ? <ChevronDown size={19} /> : <ChevronUp size={19} />}
			</div>

			{/* Dropdown menu */}
			{isOpen && (
				<div
					ref={dropdownRef}
					className="absolute top-14 left-0 h-auto w-72 z-40 shadow-xl rounded-md border bg-white"
				>
					<div className="relative flex items-center justify-between border-b px-4 py-2">
						<div className="relative w-1/2 h-full flex items-center">Salary range</div>
						<div className="relative h-full flex">
							<Button>Reset</Button>
						</div>
					</div>
					<div className="relative flex-col space-y-5 py-4 px-4">
						<Select
							onValueChange={(value) => {
								setSelectedCurrency(currency.find((c) => c.symbol === value)!);
							}}
						>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select Currency" />
							</SelectTrigger>
							<SelectContent className="max-h-72 tracking-wide text-gray-800">
								<SelectGroup>
									<SelectLabel>Currency</SelectLabel>
									{currency.map((value, index) => (
										<SelectItem key={index} value={value.symbol} className="cursor-pointer">
											{value.currency} ({value.symbol})
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className="relative pt-4 pb-6 px-4">
						<div className="relative flex justify-between items-center font-medium text-gray-600 text-sm">
							<div className="relative">{selectedCurrency.symbol} 0</div>
							<div className="relative">
								{selectedCurrency.symbol} {Math.round(maxSalary)}
							</div>
						</div>
						<div className="relative mt-3 h-10 flex items-center px-2">
							<CustomSlider
								selectedCurrency={selectedCurrency}
								setMaxSalary={setMaxSalary}
								maxSalary={maxSalary}
							/>
						</div>
						<div className="flex items-center space-x-4 mt-2">
							<Checkbox
								id={"includeWithOutSalary"}
								defaultChecked
								className="h-5 w-5 cursor-pointer data-[state=checked]:bg-violet-500 data-[state=checked]:border-none border-gray-300 data-[state=checked]:text-white"
							/>
							<label
								htmlFor={"includeWithOutSalary"}
								className="text-sm font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800"
							>
								Include WithOut Salary
							</label>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
