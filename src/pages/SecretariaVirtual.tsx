import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  CreditCard,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  WalletCards,
  Workflow,
  Zap,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  TrendingDown,
  Coins,
  Users,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Settings2,
  ArrowUpRight,
  Award,
} from "lucide-react";
import ProntofyLogo from "@/components/ProntofyLogo";
import secretariaImage from "@/assets/secretaria_de_ia.png";
import estetoAnimatedVideo from "@/assets/esteto-animado.mp4";
import agendaImage from "@/assets/agenda-ia.png";
import automacoesImage from "@/assets/automacoes.png";
import simplificarImage from "@/assets/simplificar.png";
import antesDepoisImage from "@/assets/antes-depois-2.png";
import antesImage from "@/assets/antes.png";
import depoisImage from "@/assets/depois.png";
import consultorioImage from "@/assets/consultorio.png";

const WHATSAPP_URL = "https://wa.me/message/YO6R73FVJZHTC1";
const CONFIG_URL = "/configuracao-secretaria-ia";

const products = [
  {
    name: "Simple Model",
    eyebrow: "Entrada inteligente",
    idealFor: "Para consultórios que querem começar sem complexidade.",
    description: "Uma secretária virtual no WhatsApp para responder, filtrar pacientes e organizar as primeiras conversas pelo WhatsApp.",
    icon: Bot,
    tone: "border-slate-800 bg-slate-900/40 hover:border-slate-700/60",
    highlights: ["Respostas para dúvidas frequentes", "Triagem inicial de pacientes", "Organização de solicitações básicas"],
    cta: "Começar pelo Simple",
    href: CONFIG_URL,
  },
  {
    name: "HF1",
    eyebrow: "Modelo recomendado",
    idealFor: "Para clínicas que precisam de uma IA mais integrada à rotina.",
    description: "Um modelo robusto de secretária virtual para WhatsApp, com mais contexto, integração à plataforma e resolução inteligente de demandas pelo WhatsApp.",
    icon: Sparkles,
    tone: "border-emerald-500/40 bg-gradient-to-b from-emerald-950/20 to-slate-950/90 shadow-[0_0_40px_-8px_rgba(16,185,129,0.18)]",
    highlights: ["Integração com a plataforma", "Resolução inteligente de problemas", "Manutenção incluída por 2 meses"],
    cta: "Quero conhecer o HF1",
    href: CONFIG_URL,
    featured: true,
  },
  {
    name: "HF2",
    eyebrow: "Premium Enterprise",
    idealFor: "Para operações que querem IA, gestão e automação financeira.",
    description: "A secretária virtual premium no WhatsApp, preparada para fluxos enterprise, gestão financeira e demandas avançadas que chegam pelo WhatsApp.",
    icon: Building2,
    tone: "border-[#D9B85F]/30 bg-gradient-to-b from-[#D9B85F]/10 to-slate-950/90 shadow-[0_0_40px_-8px_rgba(217,184,95,0.12)]",
    highlights: ["Tudo dos modelos anteriores", "Plano enterprise", "Pagamentos de contas e gerenciamento financeiro"],
    cta: "Falar sobre HF2",
    href: WHATSAPP_URL,
    premium: true,
  },
];

const heroStats = [
  { label: "Atendimento Ativo", value: "24/7", desc: "Sem pausas ou feriados" },
  { label: "Tempo de Resposta", value: "< 5s", desc: "Instantâneo para o paciente" },
  { label: "Consultas Salvas", value: "+30%", desc: "Média de aumento na agenda" },
];

const comparison = [
  { feature: "Primeiro atendimento pelo WhatsApp", simple: true, hf1: true, hf2: true },
  { feature: "Integração direta com a agenda da clínica", simple: false, hf1: true, hf2: true },
  { feature: "Manutenção incluída por 2 meses", simple: false, hf1: true, hf2: true },
  { feature: "Plano enterprise customizado", simple: false, hf1: false, hf2: true },
  { feature: "Automação financeira e pagamento de contas", simple: false, hf1: false, hf2: true },
];

const faqs = [
  {
    question: "Como a secretária virtual é ativada no meu WhatsApp?",
    answer: "A ativação é simples. Nós integramos a inteligência artificial ao seu número oficial de WhatsApp de atendimento ou criamos um novo número se preferir. Nossa equipe cuida de toda a parte de infraestrutura e calibração inicial.",
  },
  {
    question: "Ela se integra ao prontuário ou agenda que já uso?",
    answer: "Sim! Nos modelos HF1 e HF2, a IA é totalmente conectada via API à plataforma de agenda e prontuários da Prontofy. Ela consulta disponibilidades em tempo real e insere o agendamento diretamente na sua grade.",
  },
  {
    question: "A IA funciona de madrugada e nos finais de semana?",
    answer: "Com certeza. Esse é um dos maiores benefícios. A secretária virtual opera 24h por dia, 7 dias por semana, respondendo pacientes de imediato durante a noite, finais de semana e feriados nacionais.",
  },
  {
    question: "Posso personalizar a forma como ela fala com os pacientes?",
    answer: "Sim. Criamos um perfil de linguagem exclusivo baseado no tom de voz que você preferir (formal, acolhedor, descontraído), nas regras de preparo de exames, convênios aceitos e particularidades do seu consultório.",
  },
  {
    question: "O que acontece se ela não souber responder alguma dúvida?",
    answer: "Sempre que houver uma pergunta de alta complexidade ou uma solicitação de atendimento humano, a IA cria um card de transição, registra os dados coletados e encaminha para a sua secretária física continuar pelo painel.",
  },
];

const chatScenarios = {
  agendamento: [
    { sender: "user", text: "Olá! Gostaria de agendar uma consulta com o Dr. Carlos para dermatologia." },
    { sender: "bot", text: "Olá! Sou a Assistente Virtual do Dr. Carlos. Claro! Você já se consultou com ele antes ou é a sua primeira consulta?" },
    { sender: "user", text: "Sou paciente nova." },
    { sender: "bot", text: "Seja muito bem-vinda! Tenho horários disponíveis nesta terça às 14:00 ou na quinta às 10:30. Qual fica melhor para você?" },
    { sender: "user", text: "Terça às 14:00 está ótimo." },
    { sender: "bot", text: "Perfeito! Agendamento pré-confirmado para terça-feira às 14:00. Enviei um link SMS/WhatsApp para preencher seus dados de cadastro. Até logo! 🎉" },
  ],
  duvidas: [
    { sender: "user", text: "Oi, tenho exame amanhã na clínica. Precisa ir de jejum?" },
    { sender: "bot", text: "Olá! Qual é o exame ou procedimento que você vai realizar amanhã?" },
    { sender: "user", text: "Vou fazer ultrassom de abdômen total." },
    { sender: "bot", text: "Entendido! Para o ultrassom de abdômen total, é necessário jejum absoluto de 8 horas. Evite também tomar refrigerantes ou comer alimentos gordurosos na noite anterior. Posso ajudar com mais alguma informação?" },
    { sender: "user", text: "Era só isso, obrigada." },
    { sender: "bot", text: "Por nada! Tenha uma excelente noite e nos vemos amanhã na clínica. 😊" },
  ],
  triagem: [
    { sender: "user", text: "Estou com muita dor de garganta e febre alta desde cedo." },
    { sender: "bot", text: "Sinto muito que esteja passando por isso. Além da febre e dor de garganta, você está sentindo alguma falta de ar ou dor no peito?" },
    { sender: "user", text: "Não, só a garganta muito inflamada e dor no corpo." },
    { sender: "bot", text: "Compreendo. Como não há sinais de emergência imediata, o ideal é passar por avaliação médica. Temos consulta por Telemedicina disponível hoje mesmo às 15:30. Gostaria que eu fizesse a sua reserva?" },
    { sender: "user", text: "Sim, por favor! Pode marcar." },
    { sender: "bot", text: "Excelente! Agendado para hoje às 15:30. Aqui está o link da sua sala virtual de atendimento: prontofy.com.br/tele/sala-841. Melhoras!" },
  ],
};

const CheckMark = ({ active }: { active: boolean }) => (
  <span className={`mx-auto grid h-6 w-6 place-items-center rounded-full sm:h-7 sm:w-7 ${active ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-800 text-slate-600"}`}>
    {active ? <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <span className="h-1.5 w-1.5 rounded-full bg-current" />}
  </span>
);

const SecretariaVirtual = () => {
  const [activeScenario, setActiveScenario] = useState<"agendamento" | "duvidas" | "triagem">("agendamento");
  const [chatMessages, setChatMessages] = useState<Array<{ sender: string; text: string }>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const smartphoneRef = useRef<HTMLDivElement>(null);
  const [isSmartphoneVisible, setIsSmartphoneVisible] = useState(false);

  // Sliders ROI
  const [lostCalls, setLostCalls] = useState(40);
  const [consultationValue, setConsultationValue] = useState(300);

  // FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const totalLostRevenue = lostCalls * consultationValue;
  const recoveredRevenue = Math.round(lostCalls * consultationValue * 0.75); // 75% recuperados
  const yearlySavings = recoveredRevenue * 12;

  // Efeito para digitar as mensagens do chat virtual
  useEffect(() => {
    setChatMessages([]);
    setIsTyping(false);
    
    let isCancelled = false;
    const currentScenario = chatScenarios[activeScenario];
    
    const runChatSequence = async () => {
      // Pequeno delay inicial
      await new Promise((resolve) => setTimeout(resolve, 600));
      if (isCancelled) return;

      for (let i = 0; i < currentScenario.length; i++) {
        const msg = currentScenario[i];
        
        if (msg.sender === "bot") {
          setIsTyping(true);
          // Simula digitação da IA
          await new Promise((resolve) => setTimeout(resolve, 1600));
          if (isCancelled) return;
          setIsTyping(false);
        } else {
          // Pequena pausa do usuário pensando
          await new Promise((resolve) => setTimeout(resolve, 1000));
          if (isCancelled) return;
        }
        
        setChatMessages((prev) => [...prev, msg]);
      }
    };

    runChatSequence();
    
    return () => {
      isCancelled = true;
    };
  }, [activeScenario]);

  // Efeito de auto-scroll do chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatMessages, isTyping]);

  useEffect(() => {
    const smartphone = smartphoneRef.current;
    if (!smartphone) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsSmartphoneVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSmartphoneVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.22,
      },
    );

    observer.observe(smartphone);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!elements.length) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.16,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#03060a] text-slate-100 selection:bg-emerald-500/30">
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute top-[20%] right-10 -z-10 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[150px]" />
      <div className="absolute bottom-[30%] left-10 -z-10 h-[700px] w-[700px] rounded-full bg-[#D9B85F]/5 blur-[160px]" />

      {/* HEADER */}
      <header className="border-b border-slate-900 bg-slate-950/40 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-8">
          <ProntofyLogo iconClassName="h-8 w-8 sm:h-10 sm:w-10 text-emerald-400" textClassName="text-xs font-light sm:text-base text-white" />
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="#modelos" className="text-sm font-medium text-slate-400 hover:text-white transition hidden md:block">
              Modelos
            </a>
            <a href="#roi" className="text-sm font-medium text-slate-400 hover:text-white transition hidden md:block">
              Calculadora
            </a>
            <a href="#antes-depois" className="text-sm font-medium text-slate-400 hover:text-white transition hidden md:block">
              Antes & Depois
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-2 text-[11px] font-bold text-slate-200 backdrop-blur transition hover:border-emerald-500/30 hover:bg-slate-900 sm:px-5 sm:text-xs"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pt-16 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <video
            src={estetoAnimatedVideo}
            className="h-full w-full object-cover object-center opacity-70"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#03060a_0%,rgba(3,6,10,0.74)_36%,rgba(3,6,10,0.34)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(3,6,10,0)_0%,#03060a_100%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-12 lg:items-center">
            
            {/* Texto Hero */}
            <div className="space-y-6 lg:col-span-7 lg:space-y-8">
              <h1 className="text-[2.35rem] font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Sua clínica funcionando <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">24h por dia.</span> Sua agenda cheia.
              </h1>
              
              <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-lg">
                Você e o seu time não mereciam perder tempo com agendamentos, não fique para trás e contrate uma secretária virtual de IA.
              </p>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:gap-4 sm:pt-2">
                <a
                  href={CONFIG_URL}
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-[0_20px_50px_rgba(16,185,129,0.25)] transition hover:bg-emerald-400 hover:scale-[1.01] sm:h-14 sm:px-8 sm:text-sm"
                >
                  Configurar minha IA
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </a>
                <a
                  href="#modelos"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/40 px-5 text-xs font-bold uppercase tracking-wider text-slate-200 transition hover:border-slate-700 hover:bg-slate-900/80 sm:h-14 sm:px-8 sm:text-sm"
                >
                  Conhecer Modelos
                </a>
              </div>

              {/* Stats Pills */}
              <div className="grid grid-cols-3 gap-2 border-t border-slate-900 pt-5 sm:gap-4 sm:pt-6">
                {heroStats.map((item) => (
                  <div key={item.label} className="group relative overflow-hidden rounded-xl border border-slate-900 bg-slate-950/60 p-3 transition duration-300 hover:border-slate-800 sm:rounded-2xl sm:p-4">
                    <p className="text-xl font-black text-white sm:text-3xl">{item.value}</p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-wide text-emerald-400 sm:text-xs sm:tracking-wider">{item.label}</p>
                    <p className="mt-0.5 hidden text-[10px] text-slate-500 sm:block">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup de Chat WhatsApp Interativo */}
            <div
              ref={smartphoneRef}
              className={`lg:col-span-5 relative flex justify-center transition-all duration-700 ease-out motion-reduce:transition-none lg:translate-y-0 lg:scale-100 lg:opacity-100 ${
                isSmartphoneVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-12 scale-[0.96] opacity-0"
              }`}
            >
              
              {/* Círculo luminoso de fundo */}
              <div className="absolute inset-0 -m-4 rounded-[2rem] bg-emerald-500/10 blur-3xl -z-10 sm:-m-8" />

              {/* Corpo do Smartphone */}
              <div className="relative mx-auto flex aspect-[9/18.5] w-full max-w-[300px] flex-col overflow-hidden rounded-[32px] border-[6px] border-slate-850 bg-slate-950 shadow-[0_30px_100px_rgba(0,0,0,0.8)] sm:max-w-[340px] sm:rounded-[40px] sm:border-[8px]">
                
                {/* Notch / Câmera */}
                <div className="absolute top-2 left-1/2 z-35 flex h-3.5 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-slate-900 sm:h-4 sm:w-28">
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-800" />
                </div>

                {/* Status Bar */}
                <div className="h-8 bg-[#1f2c34] flex items-end justify-between px-6 pb-1 text-[10px] text-slate-400 font-medium pt-2 select-none">
                  <span>14:00</span>
                  <div className="flex items-center gap-1.5">
                    <span>5G</span>
                    <div className="h-3 w-5 rounded border border-slate-400 p-[1px] flex items-center">
                      <div className="h-full w-full bg-slate-400 rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* Header do WhatsApp */}
                <div className="flex items-center justify-between border-b border-slate-800 bg-[#1f2c34] px-3 py-2.5 sm:px-4 sm:py-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img src={secretariaImage} alt="Avatar" className="h-9 w-9 rounded-full border border-slate-700 bg-slate-800 object-cover sm:h-10 sm:w-10" />
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-[#1f2c34]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">Dra. Amanda (Clínica)</p>
                      <p className="text-[10px] text-emerald-400 font-semibold leading-none">Assistente Virtual</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <Users className="h-4 w-4" />
                    <Settings2 className="h-4 w-4" />
                  </div>
                </div>

                {/* Tela de Conversa (Wallpaper WhatsApp) */}
                <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-[#0b141a] bg-opacity-98 p-2.5 sm:p-3" style={{ backgroundImage: "radial-gradient(circle, rgba(16,185,129,0.02) 10%, transparent 80%)" }}>
                  
                  {/* Container das Mensagens */}
                  <div ref={chatContainerRef} className="scrollbar-hidden min-h-0 flex-1 overflow-y-auto space-y-3 pr-1 py-1">
                    <div className="mx-auto text-center my-2">
                      <span className="bg-[#182229] text-[9px] font-bold text-slate-400 px-2 py-1 rounded-md shadow-sm">
                        HOJE
                      </span>
                    </div>

                    {chatMessages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex max-w-[88%] flex-col rounded-2xl p-2 text-[11px] shadow-md animate-lead-enter sm:max-w-[85%] sm:p-2.5 sm:text-xs ${
                          msg.sender === "user"
                            ? "ml-auto bg-[#005c4b] text-white rounded-tr-none"
                            : "mr-auto bg-[#202c33] text-slate-200 rounded-tl-none border border-slate-800/40"
                        }`}
                      >
                        <p className="leading-normal">{msg.text}</p>
                        <span className="text-[8px] text-slate-400 self-end mt-1 font-medium">14:00</span>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="mr-auto bg-[#202c33] text-slate-200 rounded-2xl rounded-tl-none p-3 text-xs shadow-md flex items-center gap-1 border border-slate-800/40">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Input do WhatsApp Mockup */}
                <div className="bg-[#1f2c34] p-2 flex items-center gap-2 border-t border-slate-800/80">
                  <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 flex items-center justify-between text-slate-400">
                    <span className="text-[10px]">Mensagem...</span>
                    <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <button className="h-8 w-8 rounded-full bg-[#00a884] text-white flex items-center justify-center shadow-md">
                    <MessageSquare className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Badges Flutuantes CSS */}
              <div className="absolute -left-12 top-1/4 rounded-2xl border border-slate-800 bg-slate-950/90 p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3 max-w-[190px]">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500">AGENDA ATUALIZADA</p>
                  <p className="text-xs font-extrabold text-white leading-tight">Consulta agendada no prontuário</p>
                </div>
              </div>

              <div className="absolute -right-12 bottom-1/4 rounded-2xl border border-slate-800 bg-slate-950/90 p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3 max-w-[190px]">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-400 animate-pulse">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-emerald-400">INTEGRAÇÃO HF1</p>
                  <p className="text-xs font-extrabold text-white leading-tight">Agendamento ativo por WhatsApp</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO POR QUE TER UMA SECRETÁRIA VIRTUAL */}
      <section className="reveal-on-scroll relative min-h-[520px] overflow-hidden border-t border-slate-900 bg-slate-950 sm:min-h-[620px]" data-reveal>
        <img
          src={antesDepoisImage}
          alt="Atendimento médico antes e depois da secretária virtual"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#03060a_0%,rgba(3,6,10,0.84)_44%,rgba(3,6,10,0.34)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(3,6,10,0)_0%,#03060a_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-14 sm:min-h-[620px] sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Por que ter uma secretária virtual?</p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Atendimento melhor desde o primeiro paciente.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-lg">
              Ideal para médicos que estão começando ou querem transformar mensagens perdidas em uma rotina mais organizada.
            </p>
            <a
              href={CONFIG_URL}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-[0_20px_50px_rgba(16,185,129,0.2)] transition hover:bg-emerald-400 sm:w-auto sm:px-6"
            >
              Configurar minha secretária
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO RECURSOS VISUAIS ( alternating grid ) */}
      <section className="relative space-y-14 py-14 sm:space-y-36 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Headline Seção */}
          <div className="reveal-on-scroll mx-auto mb-10 max-w-3xl space-y-4 text-center sm:mb-20" data-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Era da IA</p>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
              Não seja um médico da idade média e entre na era da IA
            </h2>
            <p className="text-sm text-slate-400 sm:text-base">
              Menos tarefas repetitivas. Mais pacientes bem atendidos.
            </p>
          </div>

          {/* Feature 1: Agendamento */}
          <div className="reveal-on-scroll reveal-from-left relative grid min-h-[380px] overflow-hidden rounded-2xl border border-emerald-500/15 bg-slate-950 p-5 shadow-2xl sm:min-h-[520px] sm:rounded-3xl sm:p-8 lg:grid-cols-12 lg:items-center lg:p-10" data-reveal>
            <img src={agendaImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#03060a_0%,rgba(3,6,10,0.88)_42%,rgba(3,6,10,0.22)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(3,6,10,0)_0%,#03060a_100%)]" />
            <div className="relative z-10 space-y-6 lg:col-span-6">
              <span className="inline-flex h-12 w-12 place-items-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Calendar className="mx-auto h-6 w-6" />
              </span>
              <h3 className="text-xl font-bold text-white sm:text-3xl">
                Agenda sem confusão.
              </h3>
              <ul className="space-y-3">
                {[
                  "Horários organizados em tempo real",
                  "Menos mensagens perdidas",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                    <CheckCircle2 className="h-[18px] w-[18px] text-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl transition group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-2xl transition duration-300 group-hover:border-slate-700/60">
                <img src={agendaImage} alt="Agenda Integrada IA" className="w-full rounded-xl object-cover aspect-[4/3]" />
              </div>
            </div>
          </div>

          {/* Feature 2: Automações de Fluxo (Imagem Esquerda) */}
          <div className="reveal-on-scroll reveal-from-right reveal-delay-1 relative grid min-h-[380px] overflow-hidden rounded-2xl border border-emerald-500/15 bg-slate-950 p-5 shadow-2xl sm:min-h-[520px] sm:rounded-3xl sm:p-8 lg:grid-cols-12 lg:items-center lg:p-10" data-reveal>
            <img src={automacoesImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-[linear-gradient(270deg,#03060a_0%,rgba(3,6,10,0.88)_42%,rgba(3,6,10,0.22)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(3,6,10,0)_0%,#03060a_100%)]" />
            <div className="relative z-10 space-y-6 lg:col-span-6 lg:col-start-7">
              <span className="inline-flex h-12 w-12 place-items-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Workflow className="mx-auto h-6 w-6" />
              </span>
              <h3 className="text-xl font-bold text-white sm:text-3xl">
                Triagem inteligente.
              </h3>
              <ul className="space-y-3">
                {[
                  "Perguntas certas antes da consulta",
                  "Paciente no fluxo correto",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                    <CheckCircle2 className="h-[18px] w-[18px] text-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-2xl blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-2xl transition duration-300 group-hover:border-slate-700/60">
                <img src={automacoesImage} alt="Automações Inteligentes" className="w-full rounded-xl object-cover aspect-[4/3]" />
              </div>
            </div>
          </div>

          {/* Feature 3: Atendimento 24/7 */}
          <div className="reveal-on-scroll reveal-from-left reveal-delay-2 relative grid min-h-[380px] overflow-hidden rounded-2xl border border-emerald-500/15 bg-slate-950 p-5 shadow-2xl sm:min-h-[520px] sm:rounded-3xl sm:p-8 lg:grid-cols-12 lg:items-center lg:p-10" data-reveal>
            <img src={simplificarImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#03060a_0%,rgba(3,6,10,0.88)_42%,rgba(3,6,10,0.22)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(3,6,10,0)_0%,#03060a_100%)]" />
            <div className="relative z-10 space-y-6 lg:col-span-6">
              <span className="inline-flex h-12 w-12 place-items-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="mx-auto h-6 w-6" />
              </span>
              <h3 className="text-xl font-bold text-white sm:text-3xl">
                Atendimento 24 horas.
              </h3>
              <ul className="space-y-3">
                {[
                  "Respostas mesmo fora do horário",
                  "Equipe livre do repetitivo",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                    <CheckCircle2 className="h-[18px] w-[18px] text-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 to-amber-500/10 rounded-2xl blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-2xl transition duration-300 group-hover:border-slate-700/60">
                <img src={simplificarImage} alt="Facilidade de Gestão" className="w-full rounded-xl object-cover aspect-[4/3]" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CALCULADORA DE ROI */}
      <section id="roi" className="reveal-on-scroll relative border-t border-slate-900 bg-slate-950/30 py-14 sm:py-28" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Esquerda: Sliders e Informações */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D9B85F]/20 bg-[#D9B85F]/5 px-4 py-1 text-xs font-semibold text-[#D9B85F]">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>Simulador de Retorno Financeiro</span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                Quantas consultas você está perdendo hoje?
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Estudos mostram que até 40% das tentativas de contato fora do horário comercial são perdidas. Ajuste os sliders para estimar a receita que a Secretária de IA pode recuperar para seu consultório.
              </p>

              {/* Controles Sliders */}
              <div className="space-y-6 pt-4">
                
                {/* Slider 1: Consultas Perdidas */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span>Leads/Consultas perdidas por mês</span>
                    <span className="text-emerald-400 text-base font-black">{lostCalls}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    step="5"
                    value={lostCalls}
                    onChange={(e) => setLostCalls(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-600 font-bold">
                    <span>10 CONSULTAS</span>
                    <span>150 CONSULTAS</span>
                  </div>
                </div>

                {/* Slider 2: Valor da Consulta */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span>Valor médio da sua consulta</span>
                    <span className="text-emerald-400 text-base font-black">R$ {consultationValue}</span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="800"
                    step="50"
                    value={consultationValue}
                    onChange={(e) => setConsultationValue(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-600 font-bold">
                    <span>R$ 150</span>
                    <span>R$ 800</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Direita: Placa de Resultados de ROI */}
            <div className="reveal-on-scroll reveal-delay-1 lg:col-span-6 relative" data-reveal>
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-[#D9B85F]/10 rounded-3xl blur-2xl" />
              
              <div className="relative flex h-full flex-col justify-between gap-6 rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-2xl sm:gap-8 sm:rounded-3xl sm:p-8">
                <div>
                  <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-900 pb-3 flex items-center gap-2">
                    <Coins className="h-5 w-5 text-emerald-400" />
                    Impacto Financeiro Estimado
                  </h3>

                  <div className="space-y-6">
                    
                    {/* Receita Perdida */}
                    <div className="flex flex-col gap-2 rounded-xl border border-slate-900 bg-slate-900/30 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Perda Estimada Atual</p>
                        <p className="text-[11px] text-red-400 font-medium">Contatos não convertidos por mês</p>
                      </div>
                      <p className="text-lg font-bold text-red-400/90 sm:text-xl">
                        - R$ {totalLostRevenue.toLocaleString("pt-BR")}
                      </p>
                    </div>

                    {/* Receita Recuperável */}
                    <div className="flex flex-col gap-2 rounded-xl border border-emerald-500/15 bg-emerald-500/5 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Recuperado com a IA (75%)</p>
                        <p className="text-[11px] text-slate-400 font-medium">Novos pacientes agendados</p>
                      </div>
                      <p className="text-lg font-black text-emerald-400 sm:text-xl">
                        + R$ {recoveredRevenue.toLocaleString("pt-BR")} <span className="text-[10px] font-bold">/mês</span>
                      </p>
                    </div>

                  </div>
                </div>

                {/* Banner de Economia Anual */}
                <div className="bg-gradient-to-br from-[#D9B85F]/20 to-slate-900 p-5 rounded-2xl border border-[#D9B85F]/30 text-center space-y-1 shadow-lg">
                  <p className="text-xs font-bold text-[#D9B85F] uppercase tracking-[0.15em]">Retorno Adicional no Primeiro Ano</p>
                  <p className="text-3xl font-black text-[#D9B85F] tracking-tight">
                    R$ {yearlySavings.toLocaleString("pt-BR")}
                  </p>
                  <p className="text-[10px] text-slate-400">Calculado sobre a taxa média de conversão da Prontofy</p>
                </div>

                <a
                  href={WHATSAPP_URL}
                  className="w-full py-4 bg-emerald-500 text-slate-950 rounded-xl font-bold text-xs uppercase tracking-widest text-center shadow-lg transition hover:bg-emerald-400"
                >
                  Começar a Recuperar Faturamento
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SEÇÃO ANTES VS DEPOIS */}
      <section id="antes-depois" className="relative py-14 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="reveal-on-scroll mx-auto mb-10 max-w-3xl space-y-4 text-center sm:mb-16" data-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">A Grande Transformação</p>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
              Do operacional pesado para uma rotina inteligente.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Compare as duas realidades de atendimento no consultório médico.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Antes */}
            <div className="reveal-on-scroll group relative space-y-5 overflow-hidden rounded-2xl border border-slate-900 bg-slate-950 p-5 transition-all duration-300 hover:border-red-500/20 sm:space-y-6 sm:rounded-3xl sm:p-6" data-reveal>
              <div className="absolute top-0 right-0 bg-red-500/10 px-4 py-1.5 rounded-bl-2xl text-[10px] font-black uppercase text-red-400 border-l border-b border-red-500/20 tracking-wider">
                Sem Prontofy IA
              </div>
              <h3 className="text-xl font-bold text-red-400 flex items-center gap-2">
                <TrendingDown className="h-5 w-5" />
                Cenário Crítico e Gargalos
              </h3>
              
              <div className="overflow-hidden rounded-xl border border-slate-900 bg-slate-900/30 aspect-[16/10] relative">
                <img src={antesImage} alt="Antes da IA" className="w-full h-full object-cover grayscale opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>

              <ul className="space-y-3">
                {[
                  "Pacientes desistem ao esperar horas por respostas simples",
                  "Telefone ocupado e dezenas de mensagens acumuladas no WhatsApp",
                  "Sem suporte à noite, finais de semana ou feriados",
                  "Recepcionistas sobrecarregadas com agendamentos repetitivos",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-xs font-bold text-slate-400 leading-normal">
                    <span className="text-red-400 shrink-0 font-extrabold">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Depois */}
            <div className="reveal-on-scroll reveal-delay-1 group relative space-y-5 overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-950 p-5 shadow-[0_0_50px_-15px_rgba(16,185,129,0.15)] transition-all duration-300 hover:border-emerald-500/40 sm:space-y-6 sm:rounded-3xl sm:p-6" data-reveal>
              <div className="absolute top-0 right-0 bg-emerald-500/10 px-4 py-1.5 rounded-bl-2xl text-[10px] font-black uppercase text-emerald-400 border-l border-b border-emerald-500/20 tracking-wider">
                Com Prontofy IA
              </div>
              <h3 className="text-xl font-bold text-emerald-400 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                A Rotina dos Sonhos
              </h3>
              
              <div className="overflow-hidden rounded-xl border border-emerald-500/10 bg-slate-900/30 aspect-[16/10] relative">
                <img src={depoisImage} alt="Depois da IA" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>

              <ul className="space-y-3">
                {[
                  "Atendimento em menos de 5 segundos, 24 horas por dia",
                  "Agendamento automático integrado ao prontuário eletrônico",
                  "Resolução inteligente de dúvidas sobre localização e exames",
                  "Time humano focado no atendimento presencial de qualidade",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-xs font-bold text-slate-200 leading-normal">
                    <span className="text-emerald-400 shrink-0 font-extrabold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* SEÇÃO MODELOS */}
      <section id="modelos" className="relative border-t border-slate-900 bg-slate-950/20 px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal-on-scroll mb-10 grid gap-6 sm:mb-16 lg:grid-cols-12 lg:items-end" data-reveal>
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Escolha Seu Modelo</p>
              <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-5xl">
                Três modelos de secretária. Um caminho para automatizar.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                O Simple resolve o começo da jornada. O HF1 traz a inteligência integrada à agenda médica. O HF2 eleva a operação para um nível de automação financeira e enterprise.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <article
                  key={product.name}
                  className={`reveal-on-scroll relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border p-5 backdrop-blur-xl transition duration-300 hover:scale-[1.01] sm:gap-8 sm:rounded-3xl sm:p-6 ${product.tone}`}
                  data-reveal
                >
                    <div className="space-y-5 sm:space-y-6">
                    <div className="flex justify-between items-start">
                      <span className={`grid h-12 w-12 place-items-center rounded-2xl border ${
                        product.featured 
                          ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                          : product.premium 
                          ? "bg-[#D9B85F]/10 border-[#D9B85F]/20 text-[#D9B85F]" 
                          : "bg-slate-950 border-slate-800 text-slate-400"
                      }`}>
                        <Icon className="h-6 w-6" />
                      </span>
                      {product.featured && (
                        <span className="rounded-full bg-emerald-500 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-[#04110b]">
                          RECOMENDADO
                        </span>
                      )}
                      {product.premium && (
                        <span className="rounded-full bg-[#D9B85F] px-3 py-1 text-[9px] font-black uppercase tracking-wider text-[#120f08]">
                          ENTERPRISE
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <p className={`text-[10px] font-bold uppercase tracking-widest ${
                        product.featured 
                          ? "text-emerald-400" 
                          : product.premium 
                          ? "text-[#D9B85F]" 
                          : "text-slate-500"
                      }`}>
                        {product.eyebrow}
                      </p>
                      <h3 className="text-2xl font-black text-white sm:text-3xl">{product.name}</h3>
                      <p className="text-xs font-bold text-slate-300">{product.idealFor}</p>
                    </div>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed min-h-[70px]">
                      {product.description}
                    </p>

                    <div className="border-t border-slate-900/60 pt-6">
                      <ul className="space-y-3">
                        {product.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3 text-xs font-semibold text-slate-300 leading-normal">
                            <Check className={`mt-0.5 h-[18px] w-[18px] shrink-0 ${
                              product.featured 
                                ? "text-emerald-400" 
                                : product.premium 
                                ? "text-[#D9B85F]" 
                                : "text-slate-500"
                            }`} />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={product.href}
                    className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                      product.featured
                        ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                        : product.premium
                        ? "bg-[#D9B85F] text-[#120f08] hover:bg-[#ebd28b]"
                        : "border border-slate-800 bg-slate-900/40 text-slate-200 hover:border-slate-700 hover:bg-slate-900/80"
                    }`}
                  >
                    {product.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARATIVO RÁPIDO */}
      <section className="reveal-on-scroll border-t border-slate-900 bg-slate-950/40 px-4 py-14 sm:px-6 sm:py-20 lg:px-8" data-reveal>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9B85F]">Comparativo Rápido</p>
              <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-4xl">
                Compare as funcionalidades de cada modelo.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Temos soluções flexíveis criadas sob medida para o tamanho atual do seu consultório ou clínica médica.
              </p>
            </div>

            <div className="reveal-on-scroll reveal-delay-1 overflow-hidden rounded-2xl border border-slate-900 bg-slate-950/60 shadow-xl sm:rounded-3xl lg:col-span-7" data-reveal>
              <div className="grid grid-cols-[1.4fr_0.6fr_0.6fr_0.6fr] border-b border-slate-900 bg-slate-900/20 px-3 py-3 text-[9px] font-black uppercase tracking-wide text-slate-500 sm:grid-cols-[1.5fr_0.7fr_0.7fr_0.7fr] sm:px-6 sm:py-4 sm:text-[10px] sm:tracking-wider">
                <span>Funcionalidade</span>
                <span className="text-center">Simple</span>
                <span className="text-center">HF1</span>
                <span className="text-center">HF2</span>
              </div>
              {comparison.map((row) => (
                <div key={row.feature} className="grid grid-cols-[1.4fr_0.6fr_0.6fr_0.6fr] items-center border-b border-slate-900/60 px-3 py-3 last:border-b-0 hover:bg-slate-900/10 sm:grid-cols-[1.5fr_0.7fr_0.7fr_0.7fr] sm:px-6 sm:py-4">
                  <p className="pr-2 text-[11px] font-semibold leading-normal text-slate-300 sm:pr-3 sm:text-xs">{row.feature}</p>
                  <CheckMark active={row.simple} />
                  <CheckMark active={row.hf1} />
                  <CheckMark active={row.hf2} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO ENTERPRISE HF2 DETALHADO */}
      <section className="reveal-on-scroll relative min-h-[680px] overflow-hidden border-t border-slate-900 bg-slate-950 px-4 sm:px-6 lg:px-8" data-reveal>
        <div className="absolute inset-0">
          <img src={consultorioImage} alt="" className="h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,6,10,0.88)_0%,rgba(3,6,10,0.42)_48%,rgba(3,6,10,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,6,10,0.1)_0%,rgba(3,6,10,0.18)_46%,rgba(3,6,10,0.86)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl flex-col justify-between py-12 sm:py-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D9B85F]/25 bg-[#D9B85F]/10 px-4 py-1 text-xs font-semibold text-[#D9B85F] backdrop-blur">
              <Award className="h-3.5 w-3.5" />
              <span>Modelo HF2 Enterprise</span>
            </div>
            <h2 className="border-l-4 border-[#D9B85F] pl-4 text-3xl font-extrabold leading-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-5xl">
              A secretária para clínicas com demandas complexas de gestão financeira.
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-slate-300">
              Para consultórios grandes e franquias que precisam unir atendimento, controle financeiro e automações em uma operação mais inteligente.
            </p>
          </div>

          <div className="space-y-8">
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {[
                { icon: WalletCards, title: "Gerenciamento financeiro" },
                { icon: CreditCard, title: "Pagamentos de contas" },
                { icon: Zap, title: "Automação integrada" },
                { icon: ShieldCheck, title: "Suporte dedicado" },
              ].map((item) => {
                const Icon = item.icon;

                return (
              <div key={item.title} className="soft-float flex flex-col items-center text-center text-white drop-shadow-[0_8px_22px_rgba(0,0,0,0.65)]">
                    <span className="grid h-14 w-14 place-items-center text-white">
                      <Icon className="h-9 w-9 stroke-[2.1]" />
                    </span>
                    <h3 className="mt-2 max-w-[140px] text-[11px] font-black uppercase leading-tight tracking-wide sm:text-xs">{item.title}</h3>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center">
              <a
                href={WHATSAPP_URL}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#D9B85F] px-5 text-xs font-bold uppercase tracking-wider text-[#120f08] shadow-[0_20px_50px_rgba(217,184,95,0.2)] transition hover:bg-[#ebd28b] sm:h-14 sm:w-auto sm:px-8 sm:text-sm"
              >
                Solicitar proposta enterprise
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO FAQ ( Custom Accordions ) */}
      <section className="relative border-t border-slate-900 bg-slate-950/40 py-14 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="reveal-on-scroll mb-10 space-y-4 text-center sm:mb-16" data-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Dúvidas Frequentes</p>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
              Perguntas Frequentes sobre a IA
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Ainda tem dúvidas sobre como a secretária funciona? Veja as principais perguntas.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={index} className="reveal-on-scroll rounded-2xl border border-slate-900 bg-slate-950/80 overflow-hidden transition-all duration-200" data-reveal>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-4 text-left text-sm font-bold text-white transition select-none hover:bg-slate-900/30 sm:p-5"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-emerald-400 shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-500 shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-900/40 animate-lead-enter">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="reveal-on-scroll relative border-t border-slate-950 px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-28" data-reveal>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(16,185,129,0.12),transparent_60%)] -z-10" />
        
        <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Chega de perder pacientes para a demora de resposta.
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base leading-relaxed">
            Configure sua secretária em poucas horas e comece a ver novos agendamentos caindo diretamente na sua agenda de forma automatizada e profissional.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={CONFIG_URL}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-[0_20px_50px_rgba(16,185,129,0.25)] transition hover:bg-emerald-400 sm:h-14 sm:px-8 sm:text-sm"
            >
              Configurar Minha IA
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/40 px-5 text-xs font-bold uppercase tracking-wider text-slate-200 transition hover:border-slate-700 hover:bg-slate-900/80 sm:h-14 sm:px-8 sm:text-sm"
            >
              Falar com Consultor
              <ArrowUpRight className="h-4 w-4 text-emerald-400" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <ProntofyLogo iconClassName="h-8 w-8 text-emerald-500" textClassName="text-xs font-light text-slate-300" />
          <p className="text-xs text-slate-600 font-bold">
            © {new Date().getFullYear()} Prontofy. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </main>
  );
};

export default SecretariaVirtual;
