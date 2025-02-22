"use client";

import { createContext, useContext, ReactNode, useState } from "react";

// Define the shape of the applicant data
interface SocialLink {
	name: string;
	link: string;
}

export interface Applicant {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	location: string;
	profileImage: string;
	jobTitle: string;
	socialLinks: SocialLink[] | [];
	isAuthenticated: boolean;
	education: Array<{ degree: string; institution: string; year: string }> | [];
	experience:
		| Array<{
				position: string;
				company: string;
				duration: string;
				responsibilities: string[];
		  }>
		| [];
	skills: string[] | [];
	appliedJobs:
		| Array<{
				id: number;
				title: string;
				company: string;
				category: string;
				location: string;
				logo: string;
				description: string;
				salary: string;
				employmentType: string;
				requirements: string[];
				postedDate: string;
				applyLink: string;
				postedBy: string;
		  }>
		| [];
}

const AuthContext = createContext<{
	applicant: Applicant | null;
	setApplicant: React.Dispatch<React.SetStateAction<Applicant | null>>;
	updateApplicant: (field: keyof Applicant, value: unknown) => void;
} | null>(null);

interface AuthContextProviderProps {
	children: ReactNode;
}

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
	const [applicant, setApplicant] = useState<Applicant | null>({
		id: "123",
		firstName: "Sujan",
		lastName: "Limbu",
		email: "sujan.limbu@example.com",
		phoneNumber: "+9779815061114",
		location: "Nepal, Kathmandu, Imadol - 3",
		profileImage: "https://i.pinimg.com/1200x/28/25/dd/2825dd72aead620ca31d61b57568b91e.jpg",
		jobTitle: "Junior Software Developer",
		socialLinks: [
			{ name: "Facebook", link: "https://facebook.com/sujan.limbu" },
			{ name: "Instagram", link: "https://instagram.com/sujan.limbu" },
			{ name: "GitHub", link: "https://github.com/sujanlimbu" },
			{ name: "Messenger", link: "https://m.me/sujan.limbu" },
		],
		isAuthenticated: true,
		education: [
			{
				degree: "Bachelor in Computer Science",
				institution: "Tribhuvan University",
				year: "2023 - Present",
			},
			{
				degree: "High School (+2) in Science",
				institution: "Kathmandu Model College",
				year: "2021 - 2023",
			},
		],
		experience: [
			{
				position: "Frontend Developer Intern",
				company: "TechNepal",
				duration: "6 months",
				responsibilities: [
					"Developed and maintained UI components using React.",
					"Worked on responsive web design.",
					"Collaborated with backend developers to integrate APIs.",
				],
			},
		],
		skills: [
			"JavaScript",
			"React",
			"Next.js",
			"Node.js",
			"Express",
			"MongoDB",
			"Tailwind CSS",
			"Git & GitHub",
			"RESTful APIs",
		],
		appliedJobs: [
			{
				id: 1,
				title: "Software Engineer",
				company: "TechCorp",
				category: "Technology",
				location: "San Francisco, CA",
				logo: "/placeholder.svg",
				description:
					"Develop and maintain web applications, collaborate with cross-functional teams, and optimize system performance.",
				salary: "$100,000 - $120,000",
				employmentType: "Full-time",
				requirements: [
					"Proficiency in JavaScript, React, and Node.js",
					"Experience with RESTful APIs",
					"Strong problem-solving skills",
				],
				postedDate: "2025-02-15",
				applyLink: "https://techcorp.com/careers/software-engineer",
				postedBy: "Anatomy",
			},
		],
	});

	// Function to update specific applicant field dynamically
	const updateApplicant = (field: keyof Applicant, value: unknown) => {
		if (applicant) {
			setApplicant((prev) => ({ ...prev, [field]: value }));
		}
	};

	return <AuthContext.Provider value={{ applicant, setApplicant, updateApplicant }}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuthContext must be used within an AuthContextProvider");
	}
	return context;
};
