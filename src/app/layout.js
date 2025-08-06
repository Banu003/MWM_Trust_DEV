import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/Footer'; // optional

export const metadata = {
  title: 'MWM Trust',
  description: 'Helping lives through legal aid and support',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
