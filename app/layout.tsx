import { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import * as React from "react";

import { WrapperContextProvider } from "@/contexts/WrapperContext";
import "@/styles/globals.css";

const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: process.env.APP_NAME + " - Automate HR Recruitment Cycle",
	description: "Streamline your recruitment process with HRCycle",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={interTight.className}>
				<WrapperContextProvider>{children}</WrapperContextProvider>
			</body>
		</html>
	);
}
