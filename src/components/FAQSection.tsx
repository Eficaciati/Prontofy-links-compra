import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "A Prontofy serve para médicos individuais e clínicas?",
    answer: "Sim. A plataforma atende desde profissionais individuais até clínicas com equipe, agenda compartilhada e necessidade de gestão mais previsível.",
  },
  {
    question: "A apresentação mostra a plataforma funcionando na prática?",
    answer: "Sim. A conversa é focada na rotina da sua clínica, mostrando prontuário, agenda, automações, WhatsApp e recursos de IA aplicados ao seu cenário.",
  },
  {
    question: "Preciso trocar todos os processos de uma vez?",
    answer: "Não. A implantação pode ser feita por etapas, começando pelos fluxos que mais geram retrabalho, como agenda, atendimento, prontuário e comunicação.",
  },
  {
    question: "A equipe recebe suporte para começar a usar?",
    answer: "Sim. A Prontofy acompanha a configuração inicial e orienta sua equipe para usar os principais fluxos com segurança.",
  },
  {
    question: "A IA substitui o atendimento da equipe?",
    answer: "Não. A IA apoia tarefas repetitivas, organização de informações e comunicação, enquanto sua equipe mantém controle sobre o atendimento.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#050709] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050709_0%,#071725_48%,#050709_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(28,200,138,0.13),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(30,136,229,0.14),transparent_34%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Perguntas frequentes</p>
          <h2 className="mt-4 text-[clamp(32px,3.8vw,48px)] font-extrabold leading-tight">
            Tire as principais dúvidas antes da apresentação.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            Um resumo direto para você entender como a Prontofy entra na rotina da clínica e o que esperar do próximo passo.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur transition open:border-emerald-300/28 open:bg-white/[0.075]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-extrabold text-white">
                <span>{faq.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-emerald-300 transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-7 text-white/64">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
