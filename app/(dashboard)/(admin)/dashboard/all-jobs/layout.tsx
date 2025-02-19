import { AllJobsContextProvider } from "./context";

export default function Layout({ children }: { children: React.ReactNode }) {
	return <AllJobsContextProvider>{children}</AllJobsContextProvider>;
}
