import { Bot, CalendarCheck, Headphones, MessageCircle, ShieldCheck, Stethoscope } from "lucide-react";
import simplificarImage from "@/assets/simplificar.png";

const trustBadges = [
  { icon: CalendarCheck, title: "Agenda organizada", label: "Agenda organizada" },
  { icon: Stethoscope, title: "Prontuário mais simples", label: "Prontuário simples" },
  { icon: MessageCircle, title: "WhatsApp integrado", label: "WhatsApp integrado" },
  { icon: Bot, title: "IA apoiando a equipe", label: "IA para a rotina" },
  { icon: Headphones, title: "Suporte na implantação", label: "Implantação guiada" },
  { icon: ShieldCheck, title: "Dados protegidos", label: "Dados protegidos" },
];

const CTASection = () => {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#050709] px-5 py-[88px] text-center text-white sm:px-8 lg:min-h-[820px] lg:px-10 lg:py-[104px]">
      <img
        src={simplificarImage}
        alt="Rotina de clínica simplificada com Prontofy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,9,0.72)_0%,rgba(5,7,9,0.34)_42%,rgba(5,7,9,0.84)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(28,200,138,0.18),transparent_34%),radial-gradient(circle_at_50%_78%,rgba(30,136,229,0.18),transparent_40%)]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,#050709_0%,rgba(5,7,9,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(5,7,9,0)_0%,#050709_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[584px] max-w-7xl flex-col justify-center lg:min-h-[612px]">
        <h2 className="mx-auto max-w-3xl text-[clamp(34px,4vw,54px)] font-extrabold leading-tight text-white drop-shadow-[0_16px_42px_rgba(0,0,0,0.58)]">
          Pronto para simplificar a rotina da sua clínica?
        </h2>
        <p className="mx-auto mt-4 max-w-[680px] text-base leading-7 text-white/80 drop-shadow-[0_10px_28px_rgba(0,0,0,0.58)] sm:text-lg">
          Agende uma apresentação e veja como agenda, prontuário, WhatsApp e IA podem trabalhar juntos no atendimento.
        </p>

        <div className="mt-10 flex justify-center">
          <a href="/formulario" aria-label="Agendar demonstração" className="btn-primary w-[88vw] sm:w-auto sm:px-12">
            Agendar minha apresentação
          </a>
        </div>

        <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 sm:grid sm:snap-none sm:grid-cols-3 sm:gap-9 sm:overflow-visible sm:pb-0 lg:grid-cols-6">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;

            return (
              <div
                key={badge.title}
                title={badge.title}
                aria-label={badge.title}
                className="flex min-h-[128px] flex-[0_0_140px] snap-center flex-col items-center justify-center text-white/94 transition duration-300 hover:-translate-y-1 sm:flex-auto"
                role="img"
              >
                <span className="grid h-12 w-12 place-items-center text-white drop-shadow-[0_8px_22px_rgba(0,0,0,0.78)]">
                  <Icon className="h-8 w-8" strokeWidth={1.7} />
                </span>
                <span className="mt-4 text-sm font-bold leading-tight text-white drop-shadow-[0_8px_22px_rgba(0,0,0,0.78)]">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
