import { FormEvent, useState } from "react";
import { Check, CheckCircle2, Eye, EyeOff, Lock, Mail, Phone, X } from "lucide-react";
import ProntofyLogo from "@/components/ProntofyLogo";
import formularioBg from "@/assets/formulario-apresentacao-bg.png";
import { supabase } from "@/lib/supabase";
import { z } from "zod";

const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).*$/;
const ACCOUNT_ORIGIN = "apresentacao_prontuario_eletronico";

const FormSchema = z.object({
  email: z.string().trim().email("Informe um email válido."),
  password: z.string()
    .min(8, "A senha precisa ter no mínimo 8 caracteres.")
    .regex(
      PASSWORD_PATTERN,
      "A senha precisa conter letra maiúscula, letra minúscula, número e caractere especial."
    ),
  phone: z.string().trim().min(1, "Informe seu telefone ou WhatsApp."),
});

const getSupabaseErrorMessage = (error: any) => {
  const message = error?.message || error?.error_description || error?.msg || error?.error;

  if (!message) {
    return "Não foi possível criar a conta agora. Tente novamente em alguns instantes.";
  }

  if (/already registered|already exists|user exists/i.test(message)) {
    return "Este email já está cadastrado. Tente entrar com outra conta.";
  }

  if (/email rate limit exceeded|rate limit/i.test(message)) {
    return "Muitas tentativas de envio. Aguarde alguns minutos e tente novamente.";
  }

  if (/password/i.test(message)) {
    return "A senha não atende aos requisitos do Supabase. Tente uma senha mais forte.";
  }

  return message;
};

const FormularioApresentacao = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRequirements = [
    { label: "8 caracteres", isValid: password.length >= 8 },
    { label: "maiúscula", isValid: /[A-Z]/.test(password) },
    { label: "minúscula", isValid: /[a-z]/.test(password) },
    { label: "número", isValid: /\d/.test(password) },
    { label: "caractere especial", isValid: /[^A-Za-z\d]/.test(password) },
  ];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitted(false);
    setSubmitError("");
    setIsSubmitting(true);

    const formData = new FormData(form);
    const payload = {
      email: String(formData.get("email") ?? "").trim(),
      password: String(formData.get("password") ?? ""),
      phone: String(formData.get("phone") ?? "").trim(),
    };

    const validationResult = FormSchema.safeParse(payload);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      const firstError = Object.values(fieldErrors).flat()[0];
      setSubmitError(firstError || "A validação falhou.");
      setIsSubmitting(false);
      return;
    }

    try {
      const { data, error: signUpError } = await supabase.functions.invoke("register-clinic-admin", {
        body: {
          email: payload.email,
          password: payload.password,
          phone: payload.phone,
        },
      });

      if (signUpError) {
        throw signUpError;
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      form.reset();
      setPassword("");
      setSubmitted(true);
    } catch (error: any) {
      let errMsg = "Não foi possível criar a conta agora. Tente novamente em alguns instantes.";
      if (error && typeof error.context?.json === "function") {
        try {
          const body = await error.context.json();
          if (body?.error) {
            errMsg = body.error;
          }
        } catch (_) {
          if (error.message) errMsg = error.message;
        }
      } else if (error?.message) {
        errMsg = error.message;
      }
      setSubmitError(getSupabaseErrorMessage({ message: errMsg }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050709] px-5 py-10 text-white sm:px-8">
      <img src={formularioBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/18" />

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl items-center justify-center">
        <div className="w-full max-w-xl">
          <div className="mb-6 flex justify-center">
            <ProntofyLogo />
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.96] p-6 text-[#17191f] shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur sm:p-8">
            {submitted ? (
              <div className="py-8 text-center">
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-6 shadow-[0_18px_48px_rgba(28,200,138,0.16)]">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-500/12 text-[#1CC88A]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h1 className="mt-5 text-2xl font-semibold leading-tight text-slate-700 sm:text-3xl">Cadastro quase concluído</h1>
                  <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-slate-600 sm:text-base">
                    Enviamos um email de confirmação. Abra sua caixa de entrada e confirme o email para concluir seu cadastro.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center">
                  <h1 className="text-2xl font-semibold leading-tight text-slate-700 sm:text-3xl">Criar conta</h1>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <label className="block">
                    <span className="text-sm font-semibold text-slate-600">Email</span>
                    <span className="mt-2 flex items-center gap-3 rounded-md border border-slate-300 bg-white px-4 py-3 focus-within:border-[#1CC88A]">
                      <Mail className="h-5 w-5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="seuemail@clinica.com"
                        className="w-full bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400"
                      />
                    </span>
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-600">Senha</span>
                    <span className="mt-2 flex items-center gap-3 rounded-md border border-slate-300 bg-white px-4 py-3 focus-within:border-[#1CC88A]">
                      <Lock className="h-5 w-5 text-slate-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        required
                        minLength={8}
                        pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).*"
                        title="Use no mínimo 8 caracteres, com letra maiúscula, minúscula, número e caractere especial."
                        placeholder="Senha segura"
                        value={password}
                        onInvalid={(event) => {
                          const message = event.currentTarget.validity.valueMissing
                            ? "Preencha este campo."
                            : "Use no mínimo 8 caracteres, com letra maiúscula, minúscula, número e caractere especial.";

                          event.currentTarget.setCustomValidity(message);
                        }}
                        onChange={(event) => {
                          const value = event.target.value;
                          const message =
                            value && !PASSWORD_PATTERN.test(value)
                              ? "Use no mínimo 8 caracteres, com letra maiúscula, minúscula, número e caractere especial."
                              : "";

                          event.currentTarget.setCustomValidity(message);
                          setPassword(value);
                        }}
                        className="w-full bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400"
                      />
                      <button
                        type="button"
                        aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                        className="text-slate-400 transition hover:text-slate-700"
                        onClick={() => setShowPassword((current) => !current)}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </span>
                    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs font-semibold">
                      {passwordRequirements.map((requirement) => {
                        const Icon = requirement.isValid ? Check : X;

                        return (
                          <span key={requirement.label} className={`inline-flex items-center gap-1 ${requirement.isValid ? "text-emerald-600" : "text-red-600"}`}>
                            <Icon className="h-3.5 w-3.5" />
                            {requirement.label}
                          </span>
                        );
                      })}
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-600">Número de telefone</span>
                    <span className="mt-2 flex items-center gap-3 rounded-md border border-slate-300 bg-white px-4 py-3 focus-within:border-[#1CC88A]">
                      <Phone className="h-5 w-5 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="(00) 00000-0000"
                        className="w-full bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400"
                      />
                    </span>
                  </label>

                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70">
                    {isSubmitting ? "Criando conta..." : "Criar conta"}
                  </button>

                  {submitError && (
                    <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm font-semibold text-red-700">
                      {submitError}
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FormularioApresentacao;
