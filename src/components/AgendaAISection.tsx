import agendaIa from "@/assets/agenda-ia.png";

const AgendaAISection = () => {
  return (
    <section className="relative overflow-hidden bg-[#082034] px-0 py-0 text-white">
      <div className="relative min-h-[620px] overflow-hidden bg-black sm:min-h-[680px] lg:min-h-[760px]">
        <img
          src={agendaIa}
          alt="Demonstração do prontuário eletrônico Prontofy com IA"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,12,20,0.84)_0%,rgba(4,12,20,0.48)_42%,rgba(4,12,20,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,20,0.14)_0%,rgba(4,12,20,0.08)_45%,rgba(4,12,20,0.78)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,#082034_0%,rgba(8,32,52,0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(5,7,9,0)_0%,#050709_100%)]" />

        <div className="relative z-10 mx-auto min-h-[620px] max-w-7xl px-5 py-12 sm:min-h-[680px] sm:px-8 sm:py-16 lg:min-h-[760px] lg:px-10 lg:py-20">
          <div className="absolute left-5 top-10 max-w-[300px] sm:static sm:max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 sm:text-sm">IA no atendimento</p>
            <h2 className="mt-4 text-[clamp(36px,4.4vw,64px)] font-extrabold leading-[0.98] text-white drop-shadow-[0_14px_40px_rgba(0,0,0,0.55)] sm:mt-4">
              Agenda, prontuário e WhatsApp trabalhando juntos.
            </h2>
          </div>

          <div className="absolute bottom-12 right-5 max-w-[310px] text-right sm:static sm:mt-5 sm:max-w-xl sm:text-left">
            <p className="text-sm leading-6 text-white/76 drop-shadow-[0_10px_26px_rgba(0,0,0,0.58)] sm:text-lg sm:leading-8">
              A equipe visualiza a rotina, acompanha consultas e usa IA para reduzir tarefas repetitivas no dia a dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaAISection;
