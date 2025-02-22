"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import AuthContextProvider from "@/contexts/AuthContext";
import FilterContextProvider from "@/contexts/FilterContext";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<AuthContextProvider>
			<FilterContextProvider>
				<SidebarProvider>{children}</SidebarProvider>
			</FilterContextProvider>
		</AuthContextProvider>
	);
}
