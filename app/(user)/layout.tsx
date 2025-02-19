import { WrapperContextProvider } from "@/contexts/WrapperContext";

export default function Layout({ children }: { children: React.ReactNode }) {
	return <WrapperContextProvider>{children}</WrapperContextProvider>;
}
