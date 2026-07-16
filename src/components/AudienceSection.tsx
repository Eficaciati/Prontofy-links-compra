import { ArrowRight, Bot, CalendarCheck, FileText, MessageCircle, Stethoscope } from "lucide-react";
import consultorioImage from "@/assets/consultorio.png";

const PRESENTATION_FORM_LINK = "/apresentacao/formulario";
const floatingItems = [
  { label: "Prontuário eletrônico", Icon: FileText },
  { label: "Agenda inteligente", Icon: CalendarCheck },
  { label: "Atendimento médico", Icon: Stethoscope },
  { label: "IA para a rotina", Icon: Bot },
  { label: "WhatsApp integrado", Icon: MessageCircle },
];

const AudienceSection = () => (
  <section className="relative min-h-[72vh] overflow-hidden bg-[#050709] text-white sm:min-h-[78vh] lg:min-h-screen">
    <img
      src={consultorioImage}
      alt="Consultório médico organizado com tecnologia Prontofy"
      className="h-full min-h-[72vh] w-full object-cover object-[42%_50%] sm:min-h-[78vh] md:object-[76%_50%] lg:min-h-screen lg:object-center"
    />
    <div className="absolute inset-0 bg-black/54" />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,9,0.18)_0%,rgba(5,7,9,0.24)_44%,rgba(5,7,9,0.78)_100%)]" />

    <div className="absolute left-5 top-8 z-10 max-w-[520px] sm:left-8 sm:top-10 sm:max-w-[580px] lg:left-12 lg:top-14 lg:max-w-[660px] xl:left-16">
      <p className="font-sans text-[clamp(2rem,4vw,4.55rem)] font-bold leading-[1.04] tracking-normal text-white drop-shadow-[0_18px_42px_rgba(0,0,0,0.68)]">
        Para médicos que buscam um nível a mais de sofisticação em seus consultórios
      </p>
    </div>

    <div className="pointer-events-none absolute inset-x-0 bottom-[102px] z-20 flex justify-center px-4 sm:bottom-[118px] lg:bottom-[154px]">
      <div className="grid w-full max-w-[560px] grid-cols-3 items-start gap-x-4 gap-y-4 sm:grid-cols-5 sm:gap-x-5 lg:max-w-[760px] lg:gap-x-8">
        {floatingItems.map(({ label, Icon }) => (
          <div key={label} className="flex min-w-0 flex-col items-center text-center">
            <Icon className="h-8 w-8 text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.88)] sm:h-10 sm:w-10 lg:h-12 lg:w-12" strokeWidth={1.8} />
            <span className="mt-2 max-w-[92px] text-[0.68rem] font-semibold leading-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] sm:max-w-[112px] sm:text-xs lg:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>

    <div className="absolute inset-x-0 bottom-6 z-30 flex justify-center px-5 sm:bottom-8 lg:bottom-14">
      <a
        href={PRESENTATION_FORM_LINK}
        className="inline-flex w-full max-w-[340px] items-center justify-center gap-3 rounded-full bg-[#1CC88A] px-6 py-4 text-center text-sm font-extrabold uppercase tracking-wide text-[#04110b] shadow-[0_18px_52px_rgba(28,200,138,0.34)] hover:bg-[#35df91] sm:w-auto sm:max-w-none"
      >
        Agendar uma apresentação
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  </section>
);

export default AudienceSection;
