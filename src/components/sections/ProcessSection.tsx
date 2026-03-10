import { AnimatedSection } from "@/components/AnimatedSection";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { MessageCircle, Search, ClipboardList, Sparkles } from "lucide-react";

const steps = [
  { icon: MessageCircle, number: "1", title: "Entre em contato", desc: "Mande uma mensagem no WhatsApp. Nossa equipe responde rapidamente." },
  { icon: Search, number: "2", title: "Avaliação individualizada", desc: "A Dra. Débora analisa seu caso, entende sua necessidade e apresenta as melhores opções." },
  { icon: ClipboardList, number: "3", title: "Plano personalizado", desc: "Você recebe um planejamento claro: o que será feito, como, em quanto tempo e com qual investimento." },
  { icon: Sparkles, number: "4", title: "Realize o implante", desc: "Com segurança, tecnologia e o acompanhamento de quem já fez isso mais de 7.000 vezes." },
];

export const ProcessSection = () => (
  <AnimatedSection className="bg-dark-section py-16 md:py-24">
    <div className="container">
      <h2 className="mb-12 text-center font-display text-3xl font-bold text-dark-section-foreground md:text-4xl">
        Como é o processo? Simples assim:
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {steps.map(({ icon: Icon, number, title, desc }) => (
          <div key={number} className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/40 bg-accent/10">
              <Icon className="h-7 w-7 text-accent" />
            </div>
            <div className="mb-2 font-display text-4xl font-bold text-accent/60">{number}</div>
            <h3 className="font-display text-lg font-bold text-dark-section-foreground">{title}</h3>
            <p className="mt-2 font-body text-sm text-dark-section-foreground/70">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <WhatsAppCTA label="Quero dar o primeiro passo" size="lg" />
      </div>
    </div>
  </AnimatedSection>
);
