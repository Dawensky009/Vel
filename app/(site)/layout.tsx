import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealController from "@/components/RevealController";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a className="skip" href="#main">
        Aller au contenu
      </a>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
      <RevealController />
    </>
  );
}
