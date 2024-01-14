import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL(
        "abi-portfolio-cdyl1ibi8-abhijith-s-projects.vercel.app"
    ),
    title: "Abhijith Portfolio",
    description: "Developer Portfolio By Abhijith P A",
    keywords: ["Developer", "Portfolio", "Developer Portflio", "Abhijith P A"],
    openGraph: {
        title: "Abhijith P A",
        description: "Software Engineer",
        images: "/OpenGraph.jpg",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
            >
                <StarsCanvas />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
