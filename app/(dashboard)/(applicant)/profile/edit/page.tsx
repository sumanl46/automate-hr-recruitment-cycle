"use client";
import ContactEditForm from "@/components/contactEditForm";
import EducationEditForm from "@/components/educationEditForm";
import ExperienceEditForm from "@/components/experienceEditForm";
import PersonalInfoEditForm from "@/components/personalInfoEditForm";
import SkillsEditForm from "@/components/skillsEditForm";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import React from "react";

export default function EditProfilePage() {
	return (
		<div className="relative h-auto w-screen tracking-wider pb-32 pt-16">
			<div className="relative max-w-3xl h-full mx-auto">
				<div className="relative mt-16 w-full">
					<div className="relative flex w-full gap-8">
						<div className="relative h-56 w-56 flex items-center group justify-center rounded-2xl bg-[url(https://i.pinimg.com/1200x/28/25/dd/2825dd72aead620ca31d61b57568b91e.jpg)] bg-cover bg-center">
							<div className="h-10 w-10 bg-white cursor-pointer rounded-xl hidden group-hover:flex items-center justify-center">
								<Edit size={16} />
							</div>
						</div>
						<div className="relative flex-col space-y-8 w-[calc(100%-16rem)]">
							<div className="relative flex justify-between">
								<div className="relative flex-col space-y-4 pt-2">
									<div className="relative flex-col space-y-2">
										<div className="font-black text-3xl text-gray-800">Edit Profile</div>
									</div>
								</div>
							</div>
							<div className="relative w-full flex flex-col space-y-4">
								<PersonalInfoEditForm />

								<ContactEditForm />

								<EducationEditForm />

								<ExperienceEditForm />

								<SkillsEditForm />

								<div className="relative flex justify-end">
									<Button>
										Save Changes <Edit size={16} />
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
