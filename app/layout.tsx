import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Earthy Haven Lover',
  description: 'A sustainable living and eco-friendly lifestyle platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
