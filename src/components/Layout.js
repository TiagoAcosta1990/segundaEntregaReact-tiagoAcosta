import NavbarComponent from "./navbar";

export const Layout = ({ children }) => {
  return (
    <main className="flex flex-col h-screen bg-slate-200">
      <NavbarComponent />
      {children}
    </main>
  );
};