import { Metadata } from "next";
import { Inter } from "next/font/google";
import * as React from "react";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: process.env.APP_NAME + " - Automate HR Recruitment Cycle",
	description: "Streamline your recruitment process with TechAhead",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
