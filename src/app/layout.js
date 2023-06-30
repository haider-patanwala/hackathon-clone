import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
	title: "Airbnb Clone",
	description: "Built by Haider Patanwala",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
