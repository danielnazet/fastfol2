import './globals.css';
import type { Metadata } from 'next';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Fast-Fol | Recycling i Produkcja Worków',
  description: 'Profesjonalna produkcja worków na śmieci i regranulatu. Ekologiczne rozwiązania dla Twojego biznesu.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}