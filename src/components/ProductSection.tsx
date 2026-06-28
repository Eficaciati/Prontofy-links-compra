import { Bot, ClipboardPenLine, LayoutDashboard, Stethoscope } from "lucide-react";

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
    <section className="relative overflow-hidden bg-[#0b2339] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050709_0%,#071522_12%,#0b2339_28%,#0b2339_78%,#082034_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(25,200,121,0.12),transparent_30%),radial-gradient(circle_at_84%_44%,rgba(30,136,229,0.18),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,#050709_0%,rgba(5,7,9,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(11,35,57,0)_0%,#082034_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(32px,3.8vw,40px)] font-semibold leading-tight text-white">
            O Prontuário Eletrônico que se adapta à sua rotina
          </h2>
          <p className="mx-auto mt-3 max-w-[720px] text-base leading-7 text-white/80 sm:text-lg">
            Personalize templates, organize sua operação e conte com IA no WhatsApp.
          </p>
        </div>

        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 lg:mx-auto lg:max-w-5xl lg:gap-6">
          {productFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="min-h-[260px] flex-[0_0_82vw] snap-center rounded-lg border border-white/10 bg-white/[0.06] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.2)] backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] sm:min-h-[230px] sm:flex-auto sm:p-7 lg:min-h-[210px] lg:p-6"
              >
                <div className="grid h-14 w-14 place-items-center rounded-md border border-emerald-300/20 bg-emerald-300/12 text-emerald-300 lg:h-12 lg:w-12">
                  <Icon className="h-7 w-7 lg:h-6 lg:w-6" />
                </div>
                <h3 className="mt-5 text-[22px] font-semibold leading-tight text-white lg:mt-4 lg:text-xl">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/76 lg:text-sm lg:leading-6">{feature.text}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center lg:mt-14">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary w-[88%] sm:w-auto">
            Quero evoluir meus atendimentos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
