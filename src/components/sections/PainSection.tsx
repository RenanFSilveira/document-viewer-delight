import { AnimatedSection } from "@/components/AnimatedSection";
import { Frown, Camera, AlertTriangle, ArrowDown, RefreshCw } from "lucide-react";

const pains = [
  { icon: Frown, text: "Dificuldade para mastigar alimentos que você gostava" },
  { icon: Camera, text: "Vergonha de sorrir em fotos, reuniões ou encontros" },
  { icon: AlertTriangle, text: "Insegurança por sentir que o espaço vai piorar com o tempo" },
  { icon: ArrowDown, text: "Medo de que outros dentes se movam ou enfraqueçam" },
  { icon: RefreshCw, text: 'Sensação de que "já tentei antes e não funcionou"' },
];

export const PainSection = () => (
  <AnimatedSection className="bg-secondary py-16 md:py-24">
    <div className="container max-w-3xl text-center">
      <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
        Perder um dente vai muito além do que parece...
      </h2>
      <div className="mt-10 space-y-5 text-left">
        {pains.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-4 rounded-lg bg-background p-4 shadow-sm">
            <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="font-body text-foreground">{text}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 font-body text-lg text-muted-foreground">
        A boa notícia: existe uma solução definitiva, segura e com resultado previsível.{" "}
        <span className="font-semibold text-primary">E você não precisa conviver com isso por mais tempo.</span>
      </p>
    </div>
  </AnimatedSection>
);
