import { Bot, ClipboardPenLine, LayoutDashboard, Stethoscope } from "lucide-react";
import prontuarioEletro from "@/assets/prontuario-eletro.png";

const WHATSAPP_LINK = "https://wa.me/message/YO6R73FVJZHTC1";

const productFeatures = [
  {
    icon: ClipboardPenLine,
    title: "Crie seu próprio prontuário",
    text: "Arraste campos, salve modelos e padronize atendimentos em minutos.",
  },
  {
    icon: LayoutDashboard,
    title: "Gestão clínica centralizada",
    text: "Agenda, prontuário, indicadores e atendimentos conectados para sua equipe decidir com mais clareza.",
  },
  {
    icon: Stethoscope,
    title: "Atendimento ambulatorial sem fricção",
    text: "Histórico, exame físico, receitas e pedidos de exame em um layout limpo para consultas rápidas.",
  },
  {
    icon: Bot,
    title: "IA integrada ao WhatsApp",
    text: "Responda dúvidas, confirme consultas e gere evoluções por voz ou texto com apoio da IA.",
  },
];

const ProductSection = () => {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#050709] text-white sm:min-h-[800px] lg:min-h-[860px]">
      <img
        src={prontuarioEletro}
        alt="Prontuário eletrônico Prontofy em múltiplos dispositivos"
        className="absolute inset-0 h-full w-full scale-[1.05] object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,9,0.88)_0%,rgba(5,7,9,0.58)_42%,rgba(5,7,9,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,9,0.38)_0%,rgba(5,7,9,0.06)_46%,rgba(5,7,9,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_44%,rgba(28,200,138,0.16),transparent_28%),radial-gradient(circle_at_42%_58%,rgba(30,136,229,0.16),transparent_36%)]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,#050709_0%,rgba(5,7,9,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(5,7,9,0)_0%,#050709_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl flex-col justify-between px-5 py-16 sm:min-h-[800px] sm:px-8 sm:py-20 lg:min-h-[860px] lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 sm:text-sm">Prontuário eletrônico</p>
          <h2 className="mt-4 text-[clamp(38px,5vw,68px)] font-extrabold leading-[0.98] text-white drop-shadow-[0_16px_44px_rgba(0,0,0,0.64)]">
            O Prontuário Eletrônico que se adapta à sua rotina
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/76 drop-shadow-[0_10px_26px_rgba(0,0,0,0.62)] sm:text-lg sm:leading-8">
            Personalize templates, organize sua operação e conte com IA no WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 lg:max-w-5xl lg:gap-x-10">
          {productFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <Icon className="h-11 w-11 text-white drop-shadow-[0_8px_22px_rgba(0,0,0,0.8)] sm:h-12 sm:w-12" strokeWidth={1.65} />
                <h3 className="mt-4 text-base font-extrabold leading-tight text-white drop-shadow-[0_8px_22px_rgba(0,0,0,0.8)] sm:text-lg">
                  {feature.title}
                </h3>
                <p className="mt-2 max-w-[220px] text-sm leading-6 text-white/70 drop-shadow-[0_8px_22px_rgba(0,0,0,0.72)]">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center sm:justify-start">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary w-[88%] sm:w-auto">
            Quero evoluir meus atendimentos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
