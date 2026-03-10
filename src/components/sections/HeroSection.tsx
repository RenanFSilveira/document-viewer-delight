import { CheckCircle } from "lucide-react";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import draDebora from "@/assets/dra-debora-placeholder.png";
import { motion } from "framer-motion";

const badges = [
  "18 anos de experiência",
  "+7.000 pacientes atendidos",
  "Especialista em Implantodontia",
];

export const HeroSection = () => (
  <section id="hero" className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
    <div className="container">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-[3.4rem] lg:leading-[1.15]">
            Recupere seu dente com implante e volte a{" "}
            <span className="text-primary">sorrir, mastigar e viver</span> sem limitações
          </h1>
          <p className="mt-5 max-w-lg font-body text-lg text-muted-foreground">
            Dra. Débora Rigoni — 18 anos de experiência, especialização em implantodontia e mais de 7.000 pacientes atendidos em Vila Velha/ES
          </p>
          <div className="mt-8">
            <WhatsAppCTA label="Agendar avaliação pelo WhatsApp" size="lg" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary/10 blur-3xl" />
            <img
              src={draDebora}
              alt="Dra. Débora Rigoni — Cirurgiã-Dentista"
              className="relative z-10 w-72 md:w-96 drop-shadow-xl"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      {/* Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 flex flex-wrap justify-center gap-4 md:justify-start md:gap-8"
      >
        {badges.map((badge) => (
          <div key={badge} className="flex items-center gap-2 text-sm font-medium text-primary">
            <CheckCircle className="h-5 w-5 text-whatsapp" />
            {badge}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);
