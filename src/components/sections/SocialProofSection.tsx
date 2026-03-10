import { AnimatedSection } from "@/components/AnimatedSection";
import { Star } from "lucide-react";
import beforeAfter from "@/assets/before-after-placeholder.jpg";

const cases = [
  { img: beforeAfter, desc: "Implante unitário inferior — resultado em 3 meses" },
  { img: beforeAfter, desc: "Reabilitação superior completa — protocolo sobre implantes" },
];

export const SocialProofSection = () => (
  <AnimatedSection className="py-16 md:py-24">
    <div className="container">
      <h2 className="mb-12 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
        Resultados reais de pacientes reais
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {cases.map(({ img, desc }, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <img src={img} alt={desc} className="h-56 w-full object-cover" loading="lazy" />
            <div className="p-4">
              <p className="font-body text-sm text-muted-foreground">{desc}</p>
              <p className="mt-1 text-xs text-muted-foreground/70 italic">📷 Substituir por caso real</p>
            </div>
          </div>
        ))}
      </div>

      {/* Depoimento destaque */}
      <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
        <div className="mb-3 flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-star text-star" />
          ))}
        </div>
        <blockquote className="font-body text-lg italic text-foreground">
          "Dra. Débora Rigoni é incrível e cuida dos meus dentes desde quando eu tinha 17 anos... Confio de olhos fechados."
        </blockquote>
        <p className="mt-4 font-body text-sm font-semibold text-primary">
          — Natália Gaudio, Atleta da Seleção Brasileira de Ginástica Rítmica
        </p>
      </div>
    </div>
  </AnimatedSection>
);
