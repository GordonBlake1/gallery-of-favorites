import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import RandomBackground from "@/components/RandomBackground/RandomBackground";

const Layout = ({ children }) => {
  return (
    <div>
      <RandomBackground />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
