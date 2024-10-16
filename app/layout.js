import "./globals.css";

export const metadata = {
  title: "Chartbox",
  description: "By Amir Barzegari",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground flex h-screen w-screen items-center justify-center">
        {children}
      </body>
    </html>
  );
}
