import { ReactNode } from "react";
import Footer from "../components/Footer";
import HeaderBanner from "../components/HeaderBanner";
import Navigation from "../components/Navigation";

interface Props {
  children: ReactNode;
}
export default function MainLayout({ children }: Props) {
  return (
    <>
      <HeaderBanner />
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
