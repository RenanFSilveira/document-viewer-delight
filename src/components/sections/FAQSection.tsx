import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Tenho medo de sentir dor durante a cirurgia",
    a: "A cirurgia de implante é realizada por nossos especialistas com anestesia local e é muito menos desconfortável do que a maioria das pessoas imagina. Nossa equipe prioriza o conforto do paciente em todos os momentos. O pós-operatório costuma ser tranquilo, com orientações claras para cada etapa.",
  },
  {
    q: "Será que meu caso tem solução? Já me disseram que não tenho osso suficiente",
    a: "Cada caso é único. A avaliação da Dra. Débora é feita de forma detalhada, justamente para entender as condições reais do seu caso — não para dar uma resposta genérica. Muitos pacientes que chegaram com \"casos difíceis\" encontraram solução aqui.",
  },
  {
    q: "O implante é muito caro. Não sei se consigo pagar",
    a: "O implante é um investimento permanente — diferente de próteses que precisam ser trocadas com frequência. Durante a avaliação, você recebe um orçamento personalizado com opções de parcelamento. O custo de não tratar, a longo prazo, costuma ser bem maior.",
  },
  {
    q: "Já fui a outro dentista e não gostei da experiência",
    a: "Entendemos. Por isso o atendimento aqui é diferente: individual, sem pressa, com explicações claras em cada etapa. Você vai conhecer a Dra. Débora e entender o plano antes de tomar qualquer decisão.",
  },
  {
    q: "Quanto tempo leva o tratamento completo?",
    a: "Depende do caso, mas a Dra. Débora apresentará um cronograma realista e transparente na avaliação. O importante é fazer certo — e com 18 anos de experiência, o processo é eficiente e seguro.",
  },
];

export const FAQSection = () => (
  <AnimatedSection className="py-16 md:py-24">
    <div className="container max-w-3xl">
      <h2 className="mb-10 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
        Suas dúvidas, respondidas com honestidade
      </h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map(({ q, a }, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border bg-card px-6 shadow-sm">
            <AccordionTrigger className="font-body text-left font-medium text-foreground hover:no-underline">
              {q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-muted-foreground">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </AnimatedSection>
);
