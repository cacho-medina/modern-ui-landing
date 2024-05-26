import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Modern UI Landing",
    description: "Made by Koi Digital Studio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="shortcut icon"
                    href="koi-logo.ico"
                    type="image/x-icon"
                />
            </head>
            <body className={inter.className}>
                <header className="text-center">
                    <h2>HEADER</h2>
                </header>
                {children}
                <footer className="text-center">
                    <small>
                        Design by{" "}
                        <a href="https://koiwebstudio.com">
                            Koi digital studio
                        </a>
                    </small>
                </footer>
            </body>
        </html>
    );
}
