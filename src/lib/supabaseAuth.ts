type CreateSupabaseAccountPayload = {
  email: string;
  password: string;
  phone: string;
  origin: string;
};

type SupabaseAuthError = {
  error?: string;
  error_description?: string;
  msg?: string;
  message?: string;
};

type SupabaseSignupResponse = {
  user?: {
    id?: string;
    email?: string;
  };
};

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const hasSupabaseConfig = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

const getSupabaseErrorMessage = (error: SupabaseAuthError) => {
  const message = error.error_description || error.msg || error.message || error.error;

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

const createLogInRow = async ({
  email,
  phone,
  origin,
  userId,
}: {
  email: string;
  phone: string;
  origin: string;
  userId?: string;
}) => {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/log-in`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      user_id: userId ?? null,
      email,
      phone,
      origin,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(`Conta criada, mas não foi possível registrar na tabela log-in: ${getSupabaseErrorMessage(data)}`);
  }
};

export const createSupabaseAccount = async ({
  email,
  password,
  phone,
  origin,
}: CreateSupabaseAccountPayload) => {
  if (!hasSupabaseConfig) {
    throw new Error("Supabase não configurado. Preencha VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY.");
  }

  const response = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      data: {
        phone,
        origin,
      },
    }),
  });

  const data: SupabaseSignupResponse & SupabaseAuthError = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(getSupabaseErrorMessage(data));
  }

  try {
    await createLogInRow({
      email,
      phone,
      origin,
      userId: data.user?.id,
    });
  } catch (error) {
    console.warn("Conta criada, mas não foi possível registrar na tabela log-in.", error);
  }

  return data;
};
