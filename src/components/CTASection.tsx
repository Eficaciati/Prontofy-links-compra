import { Bot, CalendarCheck, Headphones, MessageCircle, ShieldCheck, Stethoscope } from "lucide-react";

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
    <section className="relative overflow-hidden bg-[#0b2339] px-5 py-[88px] text-center text-white sm:px-8 lg:px-10 lg:py-[104px]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#082034_0%,#0b2339_18%,#0b2339_64%,#071725_100%)]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(8,32,52,0.95)_0%,rgba(11,35,57,0)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(25,200,121,0.13),transparent_34%),radial-gradient(circle_at_50%_74%,rgba(30,136,229,0.14),transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl">
        <h2 className="mx-auto max-w-3xl text-[clamp(30px,3.4vw,38px)] font-semibold leading-tight text-white">
          Pronto para simplificar a rotina da sua clínica?
        </h2>
        <p className="mx-auto mt-3.5 max-w-[680px] text-base leading-7 text-white/80 sm:text-lg">
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
                className="flex min-h-[140px] flex-[0_0_140px] snap-center flex-col items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] p-5 text-white/92 backdrop-blur transition duration-300 hover:scale-[1.04] hover:border-emerald-300/28 hover:bg-white/[0.085] sm:flex-auto"
                role="img"
              >
                <span className="grid h-12 w-12 place-items-center rounded-md bg-emerald-300/12 text-emerald-300">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="mt-4 text-sm font-bold leading-tight text-white">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
