"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the context
interface AllJobsContextContextType {
	// Add your context state and methods here
	value?: unknown;
	setValue?: (value: unknown) => void;
}

// Create the context with a default value
const AllJobsContextContext = createContext<AllJobsContextContextType | undefined>(undefined);

// Create a provider component
export const AllJobsContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [value, setValue] = useState<unknown>(null);

	return <AllJobsContextContext.Provider value={{ value, setValue }}>{children}</AllJobsContextContext.Provider>;
};

// Custom hook to use the context
export const useAllJobsContext = () => {
	const context = useContext(AllJobsContextContext);
	if (context === undefined) {
		throw new Error("useAllJobsContext must be used within a AllJobsContextProvider");
	}
	return context;
};
