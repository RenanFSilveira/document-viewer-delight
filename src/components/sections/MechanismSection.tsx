import { AnimatedSection } from "@/components/AnimatedSection";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { User, ShieldCheck, HeartHandshake } from "lucide-react";

const cards = [
  {
    icon: User,
    title: "Avaliação Personalizada",
    description: "Cada paciente tem uma história, uma estrutura óssea e uma necessidade diferente. Aqui, o plano de tratamento é feito exclusivamente para você.",
  },
  {
    icon: ShieldCheck,
    title: "Experiência que gera segurança",
    description: "Com 18 anos de atuação e mais de 7.000 pacientes, a Dra. Débora e sua equipe de cirurgiões de confiança já planejaram e resolveram casos complexos que outros profissionais descartaram.",
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento real",
    description: "Você não some depois da cirurgia. O acompanhamento faz parte do tratamento, garantindo que o resultado seja duradouro.",
  },
];

export const MechanismSection = () => (
  <AnimatedSection className="py-16 md:py-24">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Não é qualquer implante. É um protocolo pensado para o seu caso.
        </h2>
        <p className="mt-4 font-body text-lg text-muted-foreground">
          Na InnovaOdonto, cada tratamento começa por uma avaliação individualizada. Sem pressa, sem padrão de fábrica.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
            <p className="mt-2 font-body text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <WhatsAppCTA label="Quero saber se meu caso tem solução" />
      </div>
    </div>
  </AnimatedSection>
);
