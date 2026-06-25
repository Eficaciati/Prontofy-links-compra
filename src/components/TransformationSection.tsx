import antesDepoisImage from "@/assets/antes-depois.png";

const TransformationSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#050709] px-4 py-10 text-white sm:px-8 sm:py-12 lg:px-10 lg:py-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/12 bg-black shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
        <img
          src={antesDepoisImage}
          alt="Comparativo visual antes e depois da gestao Prontofy"
          className="h-[620px] w-full object-cover object-[57%_50%] sm:h-[640px] sm:object-center lg:h-[620px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,9,0.78)_0%,rgba(5,7,9,0.48)_46%,rgba(5,7,9,0.08)_100%)] sm:bg-[linear-gradient(90deg,rgba(5,7,9,0.76)_0%,rgba(5,7,9,0.44)_42%,rgba(5,7,9,0.1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,9,0.2)_0%,rgba(5,7,9,0.02)_42%,rgba(5,7,9,0.72)_100%)] sm:bg-[linear-gradient(180deg,rgba(5,7,9,0.08)_0%,rgba(5,7,9,0.02)_48%,rgba(5,7,9,0.58)_100%)]" />

        <div className="absolute inset-0 z-10 flex flex-col justify-between px-4 py-6 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="lead-enter max-w-[315px] sm:max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-white/12 bg-white/7 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-emerald-300 backdrop-blur sm:px-4 sm:text-sm sm:tracking-[0.18em]">
            Transformacao na gestao
          </p>
          <h2 className="max-w-3xl text-[2rem] font-extrabold leading-[1] text-white drop-shadow-[0_14px_36px_rgba(0,0,0,0.68)] sm:text-[clamp(34px,4vw,58px)]">
            Saia da rotina reativa para uma clinica mais previsivel.
          </h2>
          <p className="mt-4 max-w-[285px] text-sm font-medium leading-6 text-white/74 drop-shadow-[0_8px_22px_rgba(0,0,0,0.72)] sm:mt-6 sm:max-w-2xl sm:text-lg sm:font-normal sm:leading-8 sm:text-white/70">
            A Prontofy ajuda sua equipe a trocar controles soltos por uma operacao centralizada, clara e pronta para crescer.
          </p>
          </div>

          <div className="lead-enter lead-enter-delay-2 grid grid-cols-2 items-end gap-4 pb-7 sm:pb-10 lg:pb-12">
            <div className="max-w-[280px]">
              <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/60 sm:text-xs">Antes</p>
              <h3 className="mt-1 text-lg font-extrabold leading-tight text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.82)] sm:mt-2 sm:text-2xl">
                Dados espalhados
              </h3>
            </div>
            <div className="max-w-[280px] justify-self-end text-right">
              <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-emerald-300 sm:text-xs">Depois</p>
              <h3 className="mt-1 text-lg font-extrabold leading-tight text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.82)] sm:mt-2 sm:text-2xl">
                Gestao visivel
              </h3>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
