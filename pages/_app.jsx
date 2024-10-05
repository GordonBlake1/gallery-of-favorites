import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import RandomBackground from "@/components/RandomBackground/RandomBackground";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <RandomBackground />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
