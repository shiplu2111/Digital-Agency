import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export async function generateMetadata() {
  // SEO DATA FETCH
  return {
    title: "Home",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ToastContainer />
        <Header /> {children} <Footer />
      </body>
    </html>
  );
}
