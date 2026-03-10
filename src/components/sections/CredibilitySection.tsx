import { AnimatedSection } from "@/components/AnimatedSection";
import { CheckCircle, Award } from "lucide-react";
import draDebora from "@/assets/topdoctor.jpeg";

const formations = [
  "Cirurgiã-Dentista pela FONF/UFF (2004)",
  "Residência Clínica pela Self Ligating University e New York University",
  "Especialista em Ortodontia e Ortopedia Facial — UNICSUL (2007)",
  "Pós-graduação em Endodontia",
  "Pós-graduação em Restaurações Indiretas",
  "Membro do Grupo Invisalign Doctor",
  "Aperfeiçoamento em Ortodontia pela New York University",
];

const stats = [
  { value: "18", label: "anos de experiência" },
  { value: "+7.000", label: "pacientes" },
  { value: "26", label: "certificações" },
  { value: "10", label: "profissionais na equipe" },
];

export const CredibilitySection = () => (
  <AnimatedSection className="bg-secondary py-16 md:py-24">
    <div className="container">
      <h2 className="mb-12 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
        Quem vai cuidar de você
      </h2>
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-primary/10 blur-2xl" />
            <img
              src={draDebora}
              alt="Dra. Débora Rigoni"
              className="relative z-10 w-64 rounded-2xl md:w-80"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground">Dra. Débora Rigoni</h3>
          <p className="mt-1 font-body text-sm text-muted-foreground">CRO ES-5754</p>
          <ul className="mt-6 space-y-3">
            {formations.map((f) => (
              <li key={f} className="flex items-start gap-2 font-body text-sm text-foreground">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-lg border-2 border-primary/30 bg-primary/5 p-4">
            <div className="flex items-start gap-3">
              <Award className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <p className="font-body text-sm font-medium text-foreground">
                Homenageada pela Assembleia Legislativa do Espírito Santo — Mérito Dentista Capixaba "Dr. Gilton Coutinho Barros"
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map(({ value, label }) => (
          <div key={label} className="rounded-xl bg-background p-6 text-center shadow-sm">
            <div className="font-display text-3xl font-bold text-primary">{value}</div>
            <div className="mt-1 font-body text-sm text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
