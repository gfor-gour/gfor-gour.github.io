import '../styles/globals.css';

export const metadata = {
  title: "Gour Gupal Talukder Shawon - Portfolio",
  description: "Personal portfolio of Gour Gupal Talukder Shawon, a Software Engineering student.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="">
        {children}
      </body>
    </html>
  );
}