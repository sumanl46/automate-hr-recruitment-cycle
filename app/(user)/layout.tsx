import FilterContextProvider from "@/contexts/FilterContext";
import { WrapperContextProvider } from "@/contexts/WrapperContext";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<WrapperContextProvider>
			<FilterContextProvider>{children}</FilterContextProvider>
		</WrapperContextProvider>
	);
}
