import NavbarComponent from "./navbar";
import Footer from "./Footer";
import FooterInferior from "./FooterInferior";

export const Layout = ({ children }) => {
  return (
    <main className="flex flex-col h-screen bg-slate-200">
      <NavbarComponent />
      {children}
      <Footer />
      <FooterInferior />
    </main>
  );
};