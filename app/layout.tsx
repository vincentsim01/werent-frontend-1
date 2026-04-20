import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Raleway } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddToCartMobile from "@/components/AddToCart_Mobile";

const RalewaySans = Raleway({
	variable: "--font-Raleway-sans",
	subsets: ["latin"],
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "WeRent",
	description: "Best place to rent high-quality dress",
	  icons: {
		icon: "/favicon.PNG",
		shortcut: "/favicon.PNG",
		apple: "/favicon.PNG",
  }
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${RalewaySans.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<div className="sticky top-0 z-999 w-full ||">
					<Header />
					<br/>
				</div>
				{children}
				<div className="hidden lg:block">
					<Footer />
				</div>
				<div className=""></div>
			</body>
		</html>
	);
}
