import { useState, useEffect } from "react";
import logo from "@/assets/logo-innovaodonto.png";
import { WhatsAppIcon } from "@/components/WhatsAppCTA";

const WA_LINK = "https://wa.me/5527999393331?text=Ol%C3%A1%2C%20vi%20a%20p%C3%A1gina%20sobre%20implantes%20e%20tenho%20interesse%20em%20entender%20mais.";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Adiciona a função de disparo aqui também
  const trackWhatsAppClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "lead_whatsapp",
      button_id: "btn-whatsapp-navbar"
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <img src={logo} alt="InnovaOdonto" className="h-16 w-auto" />
        <a
          id="btn-whatsapp-navbar"
          onClick={trackWhatsAppClick}
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground transition hover:brightness-110"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
};
