import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'marataya | software engineer portfolio',
  description: 'Full-Stack Web Developer Portfolio - Explore my projects and skills',
  keywords: 'web developer, portfolio, react, node.js, frontend, backend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
