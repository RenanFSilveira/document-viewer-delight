import { AnimatedSection } from "@/components/AnimatedSection";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Search, ClipboardList, Sparkles } from "lucide-react";

// Trocamos o fill="#FFFFFF" por fill="currentColor" para herdar a cor da classe Tailwind
const WhatsAppOutlineIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const steps = [
  { icon: null, isWhatsApp: true, number: "1", title: "Entre em contato", desc: "Mande uma mensagem no WhatsApp. Nossa equipe responde rapidamente." },
  { icon: Search, isWhatsApp: false, number: "2", title: "Avaliação individualizada", desc: "A Dra. Débora analisa seu caso, entende sua necessidade e planeja o melhor tratamento." },
  { icon: ClipboardList, isWhatsApp: false, number: "3", title: "Plano personalizado", desc: "Você recebe um planejamento claro: o que será feito, como, em quanto tempo e com qual investimento." },
  { icon: Sparkles, isWhatsApp: false, number: "4", title: "Realize o implante", desc: "Nossa equipe de especialistas executa a cirurgia com segurança, tecnologia e acompanhamento contínuo." },
];

export const ProcessSection = () => (
  <AnimatedSection className="bg-dark-section py-16 md:py-24">
    <div className="container">
      <h2 className="mb-12 text-center font-display text-3xl font-bold text-dark-section-foreground md:text-4xl">
        Como é o processo? Simples assim:
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {steps.map(({ icon: Icon, isWhatsApp, number, title, desc }) => (
          <div key={number} className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/40 bg-accent/10">
              {/* Adicionamos o text-accent aqui para o ícone herdar a cor correta */}
              {isWhatsApp ? (
                <WhatsAppOutlineIcon className="h-7 w-7 text-accent" />
              ) : (
                Icon && <Icon className="h-7 w-7 text-accent" />
              )}
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