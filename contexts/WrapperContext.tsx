"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import React, { createContext, ReactNode, useContext, useState } from "react";

// Define the shape of the context
interface WrapperContextContextType {
	// Add your context state and methods here
	value?: unknown;
	setValue?: (value: unknown) => void;
}

// Create the context with a default value
const WrapperContextContext = createContext<WrapperContextContextType | undefined>(undefined);

// Create a provider component
export const WrapperContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [value, setValue] = useState<unknown>(null);

	const pathname = usePathname();

	const isHomePage = pathname === "/";

	return (
		<WrapperContextContext.Provider value={{ value, setValue }}>
			{pathname !== "/signin" && pathname !== "/signup" ? <Navbar /> : ""}
			<div className={`${isHomePage ? "" : pathname !== "/signin" && pathname !== "/signup" ? "pt-[15vh]" : ""}`}>
				{children}
			</div>
			<Footer />
		</WrapperContextContext.Provider>
	);
};

// Custom hook to use the context
export const useWrapperContext = () => {
	const context = useContext(WrapperContextContext);
	if (context === undefined) {
		throw new Error("useWrapperContext must be used within a WrapperContextProvider");
	}
	return context;
};
