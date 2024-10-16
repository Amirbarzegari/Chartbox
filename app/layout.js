import "./globals.css";

export const metadata = {
  title: "Chartbox",
  description: "By Amir Barzegari",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
