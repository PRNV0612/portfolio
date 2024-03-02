import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";


const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
});

const generalSans = localFont({
    src: "./fonts/GeneralSans-Variable.ttf",
    display: "swap",
    fallback: ["system-ui", "arial"],
    variable: "--font-general-sans",
});

export const metadata: Metadata = {
    title: "Pranav Raj • DevOps Engineer & Cybersecurity Enthusiast",
    description:
        "Pranav Raj is a freelance DevOps Engineer and Cybersecurity Enthusiast.",
    metadataBase: new URL("https://portfolio-wheat-six-95.vercel.app/"),
    openGraph: {
        title: "Pranav Raj • Web Dev, Cybersecurity Enthusiast & ",
        description:
            "Freelance DevOps Engineer, Cybersecurity Enthusiast",
        url: "https://portfolio-wheat-six-95.vercel.app/",
        siteName: "Pranav Raj Portfolio Website",
        images: {
            url: "/opengraph-image.png",
            width: 1920,
            height: 960,
            alt: "Pranav Raj: Cybersecurity Enthusiast",
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body
                className={`${generalSans.variable} ${spaceGrotesk.variable}`}
            >
                <Navigation />
                {children}
                <Analytics />
            </body>
        </html>
    );
}
