"use client";

import * as React from "react";
import { AppSidebar } from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<React.Fragment>
			<AppSidebar />
			{children}
		</React.Fragment>
	);
}
