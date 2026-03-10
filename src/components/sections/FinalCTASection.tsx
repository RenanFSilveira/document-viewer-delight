import { AnimatedSection } from "@/components/AnimatedSection";
import { WhatsAppCTA, WhatsAppIcon } from "@/components/WhatsAppCTA";

export const FinalCTASection = () => (
  <AnimatedSection className="bg-dark-section py-20 md:py-28">
    <div className="container text-center">
      <h2 className="font-display text-3xl font-bold text-dark-section-foreground md:text-5xl">
        Pronto para recuperar seu sorriso?
      </h2>
      <p className="mx-auto mt-4 max-w-md font-body text-lg text-dark-section-foreground/80">
        Dê o primeiro passo. Nossa equipe está pronta para te atender em Vila Velha/ES.
      </p>

      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-whatsapp/20">
          <WhatsAppIcon className="h-10 w-10" />
        </div>
        <WhatsAppCTA label="Falar com a clínica agora" size="lg" />
        <p className="font-body text-sm text-dark-section-foreground/60">
          Resposta rápida • Sem compromisso • Atendimento em Vila Velha/ES
        </p>
      </div>
    </div>
  </AnimatedSection>
);
