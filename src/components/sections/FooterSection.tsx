import { Phone, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/LogoFinal.png";
import { WhatsAppIcon } from "@/components/WhatsAppCTA";

const WA_LINK = "https://wa.me/5527999393331?text=Ol%C3%A1%2C%20vi%20a%20p%C3%A1gina%20sobre%20implantes%20e%20tenho%20interesse%20em%20entender%20mais.";
const INSTA_LINK = "https://www.instagram.com/dradeborarigoni/";

export const FooterSection = () => (
  <footer className="border-t border-border bg-secondary py-12">
    <div className="container">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <img src={logo} alt="InnovaOdonto" className="mb-3 h-10 w-auto" />
          <p className="font-body text-sm text-muted-foreground">
            CRO ES-5754 | Dra. Débora Rigoni
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-2 text-sm text-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span className="font-body">
              Rua Maranhão, 575 — Centro Empresarial Praia da Costa, Torre Sul, Sala 705 — Praia da Costa, Vila Velha/ES
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Phone className="h-4 w-4 text-primary" />
            {/* Texto do telefone atualizado */}
            <span className="font-body">(27) 99939-3331</span>
          </div>
        </div>
        <div className="flex gap-4 md:justify-end">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground transition hover:brightness-110" aria-label="WhatsApp">
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          {/* Link do Instagram atualizado */}
          <a href={INSTA_LINK} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:brightness-110" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center">
        <p className="font-body text-xs text-muted-foreground">
          © InnovaOdonto — Todos os direitos reservados
        </p>
      </div>
    </div>
  </footer>
);