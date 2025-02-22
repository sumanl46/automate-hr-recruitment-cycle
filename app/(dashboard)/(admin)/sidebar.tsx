"use client";

import { Command, Component, Package } from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

// Menu items.
const items = [
	{
		title: "Dashboard",
		url: "/dashboard",
		icon: Package,
	},
	{
		title: "All Jobs",
		url: "/dashboard/all-jobs",
		icon: Component,
	},
	{
		title: "Applications",
		url: "/dashboard/applications",
		icon: Command,
	},
];

export function AppSidebar() {
	const route = usePathname();

	const sameRoute = (path: string) => route === path;

	return (
		<Sidebar collapsible="icon" variant="inset">
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" className="px-0 hover:bg-transparent" asChild>
							<div className="flex items-center">
								<div className="flex aspect-square size-10 items-center justify-center font-black rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
									<span>T</span>
								</div>
								<div className="flex flex-col gap-1 leading-none">
									<span className="">{"TechAhead"}</span>
									<span className="text-secondary-foreground opacity-60 text-xs">HR Recruiment</span>
								</div>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										size={"lg"}
										asChild
										className={`py-2 px-4 ${
											sameRoute(item.url)
												? "bg-primary text-primary-foreground hover:text-primary-foreground hover:bg-primary/90"
												: "bg-transparent"
										}`}
									>
										<Link href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
