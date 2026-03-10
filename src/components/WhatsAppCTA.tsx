import whatsappLogo from "@/assets/whatsapp-logo.png";

const WA_LINK = "https://wa.link/1v1dla";

interface WhatsAppCTAProps {
  label: string;
  className?: string;
  size?: "default" | "lg";
}

export const WhatsAppCTA = ({ label, className = "", size = "default" }: WhatsAppCTAProps) => (
  <a
    href={WA_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 rounded-lg bg-whatsapp font-body font-semibold text-whatsapp-foreground transition-all hover:brightness-110 hover:scale-105 shadow-lg ${
      size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-sm"
    } ${className}`}
  >
    <img src={whatsappLogo} alt="WhatsApp" className={size === "lg" ? "h-6 w-6" : "h-5 w-5"} />
    {label}
  </a>
);

export const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <img src={whatsappLogo} alt="WhatsApp" className={className} />
);
