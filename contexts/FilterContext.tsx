"use client";
import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

// Define the type for the context value
interface FilterContextType {
	selectedJobTitle: string | null;
	setSelectedJobTitle: Dispatch<SetStateAction<string | null>>;
	selectedCountryTimeZone: string | null;
	setSelectedCountryTimeZone: Dispatch<SetStateAction<string | null>>;
}

const filterContext = createContext<FilterContextType | null>(null);

interface FilterContextProviderProps {
	children: ReactNode;
}

export default function FilterContextProvider({ children }: FilterContextProviderProps) {
	// Define state for selected job title and selected country timezone
	const [selectedJobTitle, setSelectedJobTitle] = useState<string | null>(null);
	const [selectedCountryTimeZone, setSelectedCountryTimeZone] = useState<string | null>(null);

	return (
		<filterContext.Provider
			value={{
				selectedJobTitle,
				setSelectedJobTitle,
				selectedCountryTimeZone,
				setSelectedCountryTimeZone,
			}}
		>
			{children}
		</filterContext.Provider>
	);
}

export const useFilterContext = (): FilterContextType | null => useContext(filterContext);
