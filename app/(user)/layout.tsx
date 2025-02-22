import AuthContextProvider from "@/contexts/AuthContext";
import FilterContextProvider from "@/contexts/FilterContext";
import { WrapperContextProvider } from "@/contexts/WrapperContext";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<AuthContextProvider>
			<FilterContextProvider>
				<WrapperContextProvider>{children}</WrapperContextProvider>
			</FilterContextProvider>
		</AuthContextProvider>
	);
}
