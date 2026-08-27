import { Outlet } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-av-deep">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
